# 🐾 StraySafe – Real-Time Animal Rescue Platform

> Connecting citizens with nearby animal welfare organizations through an automated, location-aware rescue management system.

![Stack](https://img.shields.io/badge/stack-MERN-green.svg)
![Auth](https://img.shields.io/badge/auth-JWT-orange.svg)

---

## 📌 Overview

Thousands of injured stray animals go unnoticed or receive delayed assistance because citizens often don't know which organization to contact or how to communicate accurate location details.

**StraySafe** bridges this gap by allowing users to report distressed animals with geo-tagged locations and images. The platform automatically identifies and notifies the nearest NGO, enabling faster rescue operations with real-time status tracking.

---

## 🌟 Features

### 👤 User Authentication
- Secure registration and login
- JWT-based authentication and authorization
- Protected routes and session management

### 📍 Animal Reporting
- Report injured or distressed stray animals
- Geo-tag rescue locations using latitude and longitude
- Upload images for visual context
- Add descriptions and relevant details

### 🏥 Automated NGO Assignment
- Identifies the nearest NGO based on reported location
- Sends rescue requests directly to the assigned organization
- Eliminates manual searching and contact delays

### 📊 Real-Time Rescue Tracking
Track rescue progress through the full lifecycle:

| Status | Description |
|--------|-------------|
| 🟡 Reported | Case submitted by user |
| 🔵 Assigned | Nearest NGO identified and notified |
| 🟠 In Progress | NGO has accepted the rescue |
| 🟢 Rescued | Animal has been rescued |
| ✅ Closed | Case completed and archived |

### 📂 Case Management
- Centralized dashboard for all rescue requests
- View active and completed rescue cases
- Access full historical rescue records

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, React Router, Axios, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcrypt |
| APIs | Geolocation API, RESTful APIs, Image Upload |

---

## 🏗️ System Workflow

```
User Login
    ↓
Report Animal (image + description)
    ↓
Geo-tag Location
    ↓
Backend Identifies Nearest NGO
    ↓
Rescue Request Auto-Assigned
    ↓
NGO Receives & Processes Request
    ↓
User Tracks Status in Real Time
    ↓
Case Marked as Completed
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v16+)
- MongoDB
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/straysafe.git
cd straysafe
```

### 2. Install Dependencies

**Frontend:**
```bash
cd client
npm install
```

**Backend:**
```bash
cd server
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `server/` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### 4. Run the Application

**Backend:**
```bash
npm run server
```

**Frontend:**
```bash
npm start
```

The app will be available at `http://localhost:3000`.

---

## 📸 Screenshots

> Add screenshots of the following views:
- Login / Registration Page
- Report Animal Form
- Geo-Tagged Location View
- Rescue Tracking Dashboard
- NGO Management Panel

---

## 💡 Future Enhancements

- [ ] Live map visualization of rescue requests
- [ ] Push notifications and SMS alerts
- [ ] NGO performance analytics dashboard
- [ ] AI-powered injury severity classification
- [ ] Volunteer network integration
- [ ] Mobile application (React Native)
- [ ] Multi-language accessibility

---

## 📚 Learning Outcomes

This project provided hands-on experience with:

- Full-Stack Web Development (MERN)
- React Component Architecture
- REST API Design & Implementation
- JWT Authentication & Authorization
- MongoDB Data Modeling
- Geolocation-Based Applications
- File Upload Management
- Real-World Problem Solving

---

## 🤝 Contributing

Contributions, suggestions, and feature requests are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

<p align="center">Made with ❤️ to help stray animals get the care they deserve.</p>
