# 📚 SuPapp – The Student Super App

**SuPapp** is a full-stack study-focused super app designed to empower students with AI-generated study materials, real-time peer communication, and a platform to share & monetize their own notes. Built with a modern tech stack, SuPapp aims to centralize learning, collaboration, and sharing into one seamless experience.

> 🚧 This project is actively under development.

---

## 🚀 Tech Stack

### 🛠️ Backend
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **Authentication**: JWT, OTP-based email verification, Google Auth
- **Security**: Hashed passwords & OTPs with `bcrypt`
- **Email Services**: Nodemailer for contact forms & OTP delivery
- **Middleware**: Protected routes, error handling

### 💻 Frontend
- **React.js** + **Redux Toolkit**
- **Tailwind CSS**: Fully responsive, mobile-first UI
- **Framer Motion** + **Lottie**: Modern animations and transitions
- **React Router DOM**: Client-side routing

---

## ✨ Core Features

### ✅ Authentication
- Register via email & OTP (expires in 5 minutes)
- Secure login with hashed password
- Google OAuth login support
- JWT-based session tokens (stored in cookies)

### ✅ AI Study Tools (coming soon)
- Generate study notes, summaries, and answers
- Topic-based input using GPT-powered backend
- Responsive UI for focused reading

### ✅ Student Chat System
- Chat one-on-one with other verified users
- Message storing by sender and receiver
- Mobile-friendly chat view with back navigation
- Future support for group chats & file sharing

### ✅ Sell Your Notes
- Students can upload & list their handwritten/typed notes
- Basic seller dashboard in progress
- Multi-role support (seller/student)
- Clean note browsing UI for buyers

### ✅ Contact Support
- Direct contact form to reach the admin via email
- Name, email, and message validation

---

## 🔐 API Endpoints

### 🔑 Auth Routes

| Method | Endpoint                   | Description                          |
|--------|----------------------------|--------------------------------------|
| POST   | `/SuPaPP/auth/register`    | Register a new user + send OTP       |
| POST   | `/SuPaPP/auth/login`       | Login with email + password          |
| POST   | `/SuPaPP/auth/verify-otp`  | Verify OTP to activate account       |
| POST   | `/SuPaPP/auth/google-auth` | Google OAuth Login                   |
| POST   | `/SuPaPP/auth/contact`     | Send a contact form email            |
| GET    | `/SuPaPP/auth/verify-token`| Verify token and return user info    |

### 👥 User Routes

| Method | Endpoint        | Description                         |
|--------|-----------------|-------------------------------------|
| GET    | `/SuPaPP/users` | Get all users (excluding current)   |

### 💬 Chat Routes

| Method | Endpoint                        | Description                      |
|--------|---------------------------------|----------------------------------|
| POST   | `/SuPaPP/chat/sendMessage/:id`  | Send message to another user     |
| GET    | `/SuPaPP/chat/messages/:id`     | Fetch messages in a conversation |

---

## 🎨 UI Features

- Minimalist design with green/white theme (`#0C363C`, `#E2FFC8`)
- Fully responsive layout using **Tailwind CSS**
- Animated sections with **Framer Motion**
- OTP input, register/login UI with validation
- Placeholder illustrations and icons using **Lottie**

---

## 📬 Contact

**Developer**: Akshaj Rawat  
📧 Email: [akshajr11@gmail.com](mailto:akshajr11@gmail.com)  
🔗 LinkedIn: [Akshaj Rawat](https://linkedin.com/in/akshajrawat)

---

> ⚙️ Upcoming: AI question generator, student groups, note ratings, dark mode, dashboard analytics, and more...
