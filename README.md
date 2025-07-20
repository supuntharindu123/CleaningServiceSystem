# 🧼 Cleaning Service Management System

A web application where users can book cleaning services and manage their bookings. Includes a separate admin panel to oversee and manage service offerings.

## 🚀 Tech Stack

**Frontend**: React, Context API, Tailwind CSS,Axios,React-Router-Dom
**Backend**: Node.js, Express.js,REST Api
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
│   ├── utill/
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

### 2. Backend Setup (`/backend`)

```bash
cd backend
npm install
```

#### Create `.env` file

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

#### Start server

```bash
npx nodemon server.js
```

---

### 3. Frontend Setup (`/frontend`)

```bash
cd frontend
npm install
npm run dev      # or npm start
```

