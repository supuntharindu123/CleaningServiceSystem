# 🧼 Cleaning Service Management System

A web application where users can book cleaning services and manage their bookings. Includes a separate admin panel to oversee and manage service offerings.

## 🚀 Tech Stack

**Frontend**: React, Context API, Tailwind CSS
**Backend**: Node.js, Express.js
**Database**: MongoDB
**Authentication**: JWT + bcrypt

---


## 📂 Folder Structure

```
project-root/
├── client/         # React frontend
│   ├── src/
│   ├── public/
│   └── .gitignore
├── server/         # Node + Express backend
│   ├── models/
│   ├── routes/
│   ├── controller/
│   ├── middlewares/
│   └── .gitignore
├── .env            # Environment variables
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/supuntharindu123/CleaningServiceSystem.git
cd cleaning-service-app
```

### 2. Backend Setup (`/server`)

```bash
cd server
npm install
```

#### Create `.env` file

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

#### Start server

```bash
node nodemon server.js
```

---

### 3. Frontend Setup (`/client`)

```bash
cd client
npm install
npm run dev      # or npm start
```

