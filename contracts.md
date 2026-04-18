# API Contracts & Integration Plan

## Overview
This document defines the API contracts between frontend and backend, and outlines the integration strategy.

---

## Mock Data Location
**File:** `/app/frontend/src/data/mock.js`

### What's Currently Mocked:
1. **Projects** - 2 sample projects with hardcoded data
2. **Education** - 2 education entries with hardcoded data  
3. **Contact Form** - Mock function that simulates form submission
4. **Personal Info** - Name, email, bio, social links

---

## Database Collections

### 1. `projects`
```javascript
{
  _id: ObjectId,
  id: String (UUID),
  title: String,
  description: String,
  techStack: Array[String],
  github: String (URL),
  liveDemo: String (URL),
  image: String (URL),
  createdAt: DateTime
}
```

### 2. `education`
```javascript
{
  _id: ObjectId,
  id: String (UUID),
  degree: String,
  institution: String,
  location: String,
  year: String,
  description: String,
  createdAt: DateTime
}
```

### 3. `contact_messages`
```javascript
{
  _id: ObjectId,
  id: String (UUID),
  name: String,
  email: String,
  message: String,
  timestamp: DateTime,
  status: String (new/read)
}
```

---

## API Endpoints

### Projects Endpoints

**GET /api/projects**
- Description: Get all projects
- Response: `{ projects: Array<Project> }`

**POST /api/projects**
- Description: Create new project
- Body: `{ title, description, techStack, github, liveDemo, image }`
- Response: `{ project: Project }`

**PUT /api/projects/{id}**
- Description: Update project
- Body: `{ title?, description?, techStack?, github?, liveDemo?, image? }`
- Response: `{ project: Project }`

**DELETE /api/projects/{id}**
- Description: Delete project
- Response: `{ message: "Project deleted" }`

### Education Endpoints

**GET /api/education**
- Description: Get all education entries
- Response: `{ education: Array<Education> }`

**POST /api/education**
- Description: Create education entry
- Body: `{ degree, institution, location, year, description }`
- Response: `{ education: Education }`

**PUT /api/education/{id}**
- Description: Update education entry
- Body: `{ degree?, institution?, location?, year?, description? }`
- Response: `{ education: Education }`

**DELETE /api/education/{id}**
- Description: Delete education entry
- Response: `{ message: "Education deleted" }`

### Contact Endpoints

**POST /api/contact**
- Description: Submit contact form
- Body: `{ name, email, message }`
- Response: `{ success: true, message: "Message sent successfully!" }`

**GET /api/contact/messages**
- Description: Get all contact messages (for admin)
- Response: `{ messages: Array<ContactMessage> }`

---

## Frontend Integration Changes

### 1. Projects Component (`/app/frontend/src/components/Projects.jsx`)

**Before (Mock):**
```javascript
import { projects } from '../data/mock';
// Use: projects.map(...)
```

**After (API):**
```javascript
const [projects, setProjects] = useState([]);

useEffect(() => {
  const fetchProjects = async () => {
    const response = await axios.get(`${API}/projects`);
    setProjects(response.data.projects);
  };
  fetchProjects();
}, []);
```

### 2. Education Component (`/app/frontend/src/components/Education.jsx`)

**Before (Mock):**
```javascript
import { education } from '../data/mock';
// Use: education.map(...)
```

**After (API):**
```javascript
const [education, setEducation] = useState([]);

useEffect(() => {
  const fetchEducation = async () => {
    const response = await axios.get(`${API}/education`);
    setEducation(response.data.education);
  };
  fetchEducation();
}, []);
```

### 3. Contact Component (`/app/frontend/src/components/Contact.jsx`)

**Before (Mock):**
```javascript
import { contactFormSubmit } from '../data/mock';
const response = await contactFormSubmit(formData);
```

**After (API):**
```javascript
const response = await axios.post(`${API}/contact`, formData);
```

---

## Backend Implementation Steps

1. ✅ Create Pydantic models for validation
2. ✅ Implement CRUD endpoints for projects
3. ✅ Implement CRUD endpoints for education
4. ✅ Implement contact form endpoint
5. ✅ Add error handling
6. ✅ Add CORS configuration (already done)

## Frontend Integration Steps

1. ⏳ Update Projects.jsx to fetch from API
2. ⏳ Update Education.jsx to fetch from API
3. ⏳ Update Contact.jsx to post to API
4. ⏳ Add loading states
5. ⏳ Add error handling
6. ⏳ Keep mock.js for personal info (name, email, bio)

---

## Data Migration

### Initial Data Seeding
On first run, seed the database with sample projects and education from mock.js

**Seed endpoint:** `POST /api/seed` (one-time use)
- Seeds projects from mock data
- Seeds education from mock data
- Returns: `{ message: "Database seeded successfully" }`

---

## Error Handling

### Backend Errors
- 404: Resource not found
- 400: Invalid request data
- 500: Server error

### Frontend Error Handling
- Show toast notifications for errors
- Graceful fallback to empty states
- Loading indicators during API calls

---

## Testing Checklist

- [ ] GET /api/projects returns all projects
- [ ] POST /api/projects creates new project
- [ ] GET /api/education returns all education
- [ ] POST /api/education creates new education entry
- [ ] POST /api/contact saves message to database
- [ ] Frontend displays projects from API
- [ ] Frontend displays education from API
- [ ] Contact form submits successfully
- [ ] Error states work properly
- [ ] Loading states display correctly
