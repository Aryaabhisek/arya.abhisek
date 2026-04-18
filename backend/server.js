const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');
const dotenv = require('dotenv');
const path = require('path');

// Load .env file from the current directory
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();

// Middleware
app.use(express.json());
const corsOrigins = process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : '*';
app.use(cors({
  origin: corsOrigins,
  methods: ['*'],
  allowedHeaders: ['*'],
  credentials: true
}));

// MongoDB Connection
const mongoUrl = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;
let db;

const client = new MongoClient(mongoUrl);

async function connectDB() {
  try {
    // Only connect if not already connected
    await client.connect();
    db = client.db(dbName);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}
// Establish connection for serverless/local environment
connectDB();

// API Router
const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

apiRouter.post('/status', async (req, res) => {
  try {
    const { client_name } = req.body;

    if (!client_name) {
      return res.status(400).json({ error: 'client_name is required' });
    }

    const newStatus = {
      id: uuidv4(),
      client_name,
      timestamp: new Date().toISOString()
    };

    // Insert document into MongoDB collection
    // Wait for DB to be initialized if called before connect finishes
    if (!db) {
       db = client.db(dbName);
    }
    await db.collection('status_checks').insertOne({ ...newStatus });

    res.status(200).json(newStatus);
  } catch (error) {
    console.error('Error creating status check:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

apiRouter.get('/status', async (req, res) => {
  try {
    if (!db) {
       db = client.db(dbName);
    }
    const statusChecks = await db.collection('status_checks')
      .find({}, { projection: { _id: 0 } })
      .limit(1000)
      .toArray();

    // Since Python converted string timestamps back to datetime, when returned via JSON they would be standard ISO string format again. 
    // We can just return the data directly as it's already in the expected structure.
    res.status(200).json(statusChecks);
  } catch (error) {
    console.error('Error fetching status checks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Use API router
app.use('/api', apiRouter);

// Export for Vercel Serverless Function, or listen locally
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
