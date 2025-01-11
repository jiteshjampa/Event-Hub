# Frontend Repository Link
https://github.com/jiteshjampa/Event-Hub-Frontend
# Video Demo
https://www.loom.com/share/2e8eb0a2d63a4529bb323bb2b7a8a2a1?sid=f2f0a0af-7e7e-48b1-bb9b-481649df4d9a

# Event Management Dashboard - Backend Repository

Welcome to the **Event Management Dashboard Backend**! This backend service provides RESTful APIs for managing events, attendees, tasks, and user authentication.

## **Project Overview**
This backend supports:
- **Event Management:** CRUD operations for events.
- **Attendee Management:** Add, view, and delete attendees.
- **Task Management:** Create tasks, view event-specific tasks, and update task statuses.
- **User Authentication:** Secure registration, login, and logout functionalities.

The backend is built using:
- **Node.js** and **Express** for server-side logic.
- **MongoDB** with Mongoose for database management.
- **JWT** for user authentication.

---

## **Table of Contents**
1. [Installation](#installation)
2. [Folder Structure](#folder-structure)
3. [API Endpoints](#api-endpoints)
4. [Environment Variables](#environment-variables)
5. [Usage Instructions](#usage-instructions)
6. [Development Guidelines](#development-guidelines)

---

## **Installation**

### **1. Clone the Repository:**
```bash
git clone https://github.com/your-repo/event-management-backend.git
cd event-management-backend
```

### **2. Install Dependencies:**
```bash
npm install
```

### **3. Set Up Environment Variables:**
Create a `.env` file in the root directory with the following configuration:

```plaintext
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### **4. Start the Server:**
```bash
npm start
```

The server will be available at `http://localhost:5000`.

---

## **Folder Structure**

```plaintext
.
|-- config/
|   |-- db.js
|-- controllers/
|   |-- authController.js
|   |-- eventController.js
|   |-- attendeeController.js
|   |-- taskController.js
|-- middleware/
|   |-- authMiddleware.js
|-- models/
|   |-- Attendee.js
|   |-- Event.js
|   |-- Task.js
|   |-- User.js
|-- routes/
|   |-- attendeeRoutes.js
|   |-- authRoutes.js
|   |-- eventRoutes.js
|   |-- taskRoutes.js
|-- app.js
|-- server.js
|-- .env
```

---

## **API Endpoints**

### **1. User Authentication Routes:**
- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Log in a user
- `DELETE /api/auth/logout`: Log out a user

### **2. Event Management Routes:**
- `POST /api/events`: Create a new event
- `GET /api/events`: Get all events
- `PUT /api/events/:id`: Update an event
- `DELETE /api/events/:id`: Delete an event

### **3. Attendee Management Routes:**
- `POST /api/attendees`: Add an attendee
- `GET /api/attendees`: Get all attendees
- `DELETE /api/attendees/:id`: Remove an attendee

### **4. Task Management Routes:**
- `POST /api/tasks`: Create a task
- `GET /api/tasks/:eventId`: Get tasks for a specific event
- `PATCH /api/tasks/:id/status`: Update task status

---

## **Environment Variables**

Ensure the following environment variables are configured in the `.env` file:

```plaintext
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## **Usage Instructions**

### **1. Database Connection:**
Ensure MongoDB is running and accessible via the provided `MONGO_URI`.

### **2. Authentication:**
Use the following steps to register and log in users:
- Register a user by sending a `POST` request to `/api/auth/register`.
- Log in a user by sending a `POST` request to `/api/auth/login`.

### **3. Event Management:**
- Add, edit, view, or delete events using respective API endpoints.

### **4. Attendee Management:**
- Manage attendees and assign them to events using respective API endpoints.

### **5. Task Management:**
- Create and track tasks associated with events.

---

## **Development Guidelines**

### **1. Authentication Middleware:**
- Use the `authenticate` middleware to secure API routes.

### **2. Data Validation:**
- Ensure required fields are present and valid for all API operations.

### **3. Error Handling:**
- Return appropriate error messages for failed operations.

### **4. Logging:**
- Implement logging for critical operations and errors.



