# 🌟 SuPapp - The Ultimate Super App

**SuPapp** is a full-stack super app built to combine essential digital experiences—like social media, eCommerce, and payments—into a single, seamless platform. It is **actively under development**, with both backend and frontend being expanded continuously.

---

## 🚀 Tech Stack

### 🔧 Backend

- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **Authentication**: JWT with OTP-based email verification
- **Security**: Password & OTP hashing using `bcrypt`
- **Email Services**: Nodemailer for sending OTP and contact messages
- **Middleware**: Centralized error handling and protected routes

### 💻 Frontend

- **React.js**
- **Tailwind CSS**: Fully responsive and theme-supportive (Dark/Light mode)
- **Framer Motion** + **Lottie**: For smooth animations

---

## 📲 Key Features Implemented

### ✅ Authentication

- Register new users with email & OTP
- OTP expires in 5 minutes (hashed + verified)
- Login with hashed password
- Automatic JWT token generation and storage in cookies
- Token verification endpoint

### ✅ Chat

- Real-time-ready chat schema (senderId ↔ receiverId)
- Fetch two-way conversation sorted by time
- Uploads optional media with text
- Basic chat UI with responsive image fallback and mobile back-navigation

### ✅ User Management

- Fetch all users (excluding current user) for chat
- Auto-create shop or profile logic ready for future eCommerce

### ✅ Contact Support

- Contact form sends emails directly to admin (with user’s name, email, and message)

---

## 🔐 API Routes

### Auth

| Method | Endpoint                  | Description                |
| ------ | ------------------------- | -------------------------- |
| POST   | `/SuPaPP/auth/register`   | Register user + send OTP   |
| POST   | `/SuPaPP/auth/login`      | Login and get auth token   |
| POST   | `/SuPaPP/auth/verify-otp` | Verify OTP                 |
| POST   | `/SuPaPP/auth/contact`    | Send contact form to admin |
| GET    | `/SuPaPP/verify-token`    | Verify token (protected)   |

### Users

| Method | Endpoint        | Description                       |
| ------ | --------------- | --------------------------------- |
| GET    | `/SuPaPP/users` | Get all users except current user |

### Chat

| Method | Endpoint                       | Description              |
| ------ | ------------------------------ | ------------------------ |
| POST   | `/SuPaPP/chat/sendMessage/:id` | Send message to receiver |
| GET    | `/SuPaPP/chat/messages/:id`    | Get all messages in chat |

---

## 🌈 UI Features

- Responsive design with **mobile-first layouts**
- Dark and light mode themes
- Fallback message UI when no chat is selected
- Back navigation arrow for small screens
- Integrated design with **Framer Motion** and **Tailwind transitions**

---

## 📬 Contact

**Developer**: Akshaj Rawat  
📧 Email: [akshajr11@gmail.com](mailto:akshajr11@gmail.com)  
🔗 LinkedIn: [Akshaj Rawat](https://linkedin.com/in/akshajrawat)

---

> ✅ More modules like social feed, eCommerce store, product listings, and payment gateway integrations coming soon. Stay tuned!
