# ShareBlog

A modern, lightweight, and vibe-packed blogging platform where users can create, share, and explore posts with smooth UI, fast routing, and clean design.

---

## 🚀 Features

* 🔐 **User Authentication** — Login & Logout smoothly
* 🌙 **Dark/Light Theme Toggle**
* 🧭 **React Router & Next.js Routing**
* 🎨 **TailwindCSS + Custom CSS Styling**
* 🍃 **MongoDB Database Integration**
* ⚡ **SweetAlert2 for Alerts & Prompts**
* 📝 **Create / Read / Update / Delete Blog Posts**
* 👤 **User Dashboard**
* 📱 **Responsive UI**

---

## 🛠️ Tech Stack

### **Frontend**

* React
* Next.js
* React Router
* TailwindCSS
* Custom CSS
* JavaScript

### **Backend / Database**

* Node.js
* Express.js
* MongoDB (Mongoose)

### **Utilities**

* SweetAlert2
* Axios / Fetch API

---

## 📦 Installation & Setup

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/your-username/shareblog.git
cd shareblog
```

### **2️⃣ Install Dependencies**

```bash
npm install
```

### **3️⃣ Create Environment Variables**

Create a `.env` file:

```
MONGO_URI=your_mongodb_url
NEXT_PUBLIC_API_URL=http://localhost:5000
JWT_SECRET=your_secret
```

### **4️⃣ Run Development Server**

Frontend:

```bash
npm run dev
```

Backend (if separate):

```bash
npm run server
```

---

## 📂 Folder Structure

```bash
shareblog/
├── components/
├── pages/
├── styles/
├── public/
├── utils/
├── backend/ (optional)
└── README.md
```

---

## ✨ Key Functionalities

### **🔹 Authentication**

* User login
* User logout
* JWT-based auth
* Protected routes

### **🔹 Blog Management**

* Add new blog
* Edit blog
* Delete blog
* See all posts

### **🔹 UI/UX**

* Dark theme support
* Clean and simple layout
* Toast messages using SweetAlert2

---

## 🧪 API Endpoints (If using custom backend)

```
POST /api/auth/login
POST /api/auth/register
GET  /api/blogs
POST /api/blogs
PATCH /api/blogs/:id
DELETE /api/blogs/:id
```

---

## 🛡️ Security

* Password hashed using bcrypt
* JWT secure cookies
* MongoDB injection safe

---

