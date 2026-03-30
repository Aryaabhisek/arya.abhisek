# 🚀 Running Portfolio on VS Code - Complete Guide

## Prerequisites to Install

### 1. Install VS Code
- Download from: https://code.visualstudio.com/
- Install and open VS Code

### 2. Install Node.js & npm
- Download from: https://nodejs.org/ (LTS version)
- Verify installation:
```bash
node --version
npm --version
```

### 3. Install Yarn (Package Manager)
```bash
npm install -g yarn
```

### 4. Install Python
- Download from: https://www.python.org/downloads/ (Python 3.8+)
- During installation: ✅ Check "Add Python to PATH"
- Verify:
```bash
python --version
pip --version
```

### 5. Install MongoDB
**Option A: Local MongoDB**
- Download: https://www.mongodb.com/try/download/community
- Install MongoDB Community Edition
- Start MongoDB service

**Option B: MongoDB Atlas (Cloud - Recommended)**
- Create free account: https://www.mongodb.com/cloud/atlas
- Create cluster (free tier)
- Get connection string

### 6. Install Git
- Download: https://git-scm.com/downloads
- Verify: `git --version`

---

## 📥 Step-by-Step Setup in VS Code

### Step 1: Clone Your Repository

```bash
# Open terminal (Ctrl+` or View > Terminal)
# Navigate to where you want the project
cd Desktop  # or any folder you prefer

# Clone your repository
git clone https://github.com/Aryaabhisek/arya.abhisek.git

# Open in VS Code
cd arya.abhisek
code .
```

**Or directly in VS Code:**
1. Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)
2. Type "Git: Clone"
3. Paste: `https://github.com/Aryaabhisek/arya.abhisek.git`
4. Choose folder location
5. Open the cloned repository

---

### Step 2: Install VS Code Extensions (Recommended)

Open Extensions (Ctrl+Shift+X) and install:
- **ES7+ React/Redux/React-Native snippets** - React development
- **Python** - Python support
- **Prettier** - Code formatter
- **ESLint** - JavaScript linting
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **MongoDB for VS Code** - MongoDB integration

---

### Step 3: Setup Frontend

```bash
# Open terminal in VS Code (Ctrl+`)
# Navigate to frontend folder
cd frontend

# Install dependencies (this will take 2-3 minutes)
yarn install

# Create environment file
# For Windows (PowerShell):
New-Item -Path .env -ItemType File -Force
Add-Content -Path .env -Value "REACT_APP_BACKEND_URL=http://localhost:8001"

# For Mac/Linux:
echo "REACT_APP_BACKEND_URL=http://localhost:8001" > .env
```

**Or manually create `.env` file:**
1. In VS Code, right-click on `frontend` folder
2. Click "New File"
3. Name it `.env`
4. Add this line:
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

---

### Step 4: Setup Backend

```bash
# Open NEW terminal (Click + button in terminal)
# Navigate to backend folder
cd backend

# Create virtual environment (optional but recommended)
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate

# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create environment file
# For Windows (PowerShell):
New-Item -Path .env -ItemType File -Force
Add-Content -Path .env -Value "MONGO_URL=mongodb://localhost:27017/"
Add-Content -Path .env -Value "DB_NAME=portfolio_db"

# For Mac/Linux:
echo "MONGO_URL=mongodb://localhost:27017/" > .env
echo "DB_NAME=portfolio_db" >> .env
```

**Or manually create `backend/.env` file:**
```env
MONGO_URL=mongodb://localhost:27017/
DB_NAME=portfolio_db
```

**If using MongoDB Atlas (Cloud):**
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=portfolio_db
```

---

### Step 5: Start MongoDB

**Local MongoDB:**
```bash
# Windows: 
# MongoDB runs as service automatically after installation

# Mac:
brew services start mongodb-community

# Linux:
sudo systemctl start mongodb
```

**MongoDB Atlas:**
- No need to start anything, it's cloud-based
- Just use the connection string in .env

---

### Step 6: Run the Application

**You need 2 terminals in VS Code:**

**Terminal 1 - Backend:**
```bash
cd backend

# Activate virtual environment if you created one
# Windows: venv\Scripts\activate
# Mac/Linux: source venv/bin/activate

# Start backend server
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

You should see:
```
INFO:     Uvicorn running on http://0.0.0.0:8001
INFO:     Application startup complete.
```

**Terminal 2 - Frontend:**
```bash
cd frontend

# Start React development server
yarn start
```

You should see:
```
Compiled successfully!
Local:            http://localhost:3000
```

---

### Step 7: View Your Portfolio

1. **Frontend:** Open browser and go to `http://localhost:3000`
2. **Backend API:** Test at `http://localhost:8001/api/`
3. **API Docs:** Visit `http://localhost:8001/docs` (FastAPI auto-generated docs)

---

## 🎯 Quick Commands Summary

### Frontend Commands
```bash
cd frontend
yarn install          # Install dependencies
yarn start           # Start dev server (http://localhost:3000)
yarn build           # Build for production
```

### Backend Commands
```bash
cd backend
pip install -r requirements.txt                    # Install dependencies
uvicorn server:app --reload --port 8001            # Start server
python -m pytest                                   # Run tests (if any)
```

---

## 🔧 Troubleshooting

### Issue: "Port 3000 already in use"
```bash
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### Issue: "Port 8001 already in use"
```bash
# Windows:
netstat -ano | findstr :8001
taskkill /PID <PID_NUMBER> /F

# Mac/Linux:
lsof -ti:8001 | xargs kill -9
```

### Issue: "Module not found"
```bash
# Frontend:
cd frontend
rm -rf node_modules
yarn install

# Backend:
cd backend
pip install -r requirements.txt --force-reinstall
```

### Issue: "MongoDB connection failed"
- Check if MongoDB is running
- Verify MONGO_URL in backend/.env
- For Atlas: Check IP whitelist (allow 0.0.0.0/0 for development)

### Issue: "yarn: command not found"
```bash
npm install -g yarn
```

---

## 📂 VS Code Workspace Setup

Create `.vscode/settings.json` in project root:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "python.defaultInterpreterPath": "./backend/venv/bin/python",
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": false,
  "python.linting.flake8Enabled": true,
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "HTML"
  },
  "files.exclude": {
    "**/__pycache__": true,
    "**/*.pyc": true,
    "**/node_modules": true
  }
}
```

---

## 🎨 Development Workflow in VS Code

1. **Split Terminal:** Click split button to run frontend & backend side-by-side
2. **Split Editor:** Drag files to see frontend and backend code together
3. **Quick File Open:** Press `Ctrl+P` and type filename
4. **Search Across Files:** Press `Ctrl+Shift+F`
5. **Git Integration:** Use Source Control panel (Ctrl+Shift+G)

---

## 📝 Useful Keyboard Shortcuts

- `Ctrl+` ` - Toggle terminal
- `Ctrl+B` - Toggle sidebar
- `Ctrl+P` - Quick open file
- `Ctrl+Shift+P` - Command palette
- `Alt+Up/Down` - Move line up/down
- `Ctrl+D` - Select next occurrence
- `Ctrl+/` - Toggle comment
- `F5` - Start debugging

---

## 🚀 Next Steps After Setup

1. ✅ Both servers running
2. ✅ Portfolio opens in browser
3. ⏳ Currently using mock data
4. ⏳ Need to implement full backend (I can help with this!)
5. ⏳ Connect frontend to backend APIs

---

## 📧 Need Help?

If you face any issues:
1. Check the terminal for error messages
2. Verify all prerequisites are installed
3. Check MongoDB connection
4. Ensure all .env files are configured correctly

---

**Your portfolio should now be running on VS Code! 🎉**
