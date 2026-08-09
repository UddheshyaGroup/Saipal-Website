# 🏫 Saipal Academy & College Web Portal & Admin CMS

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![NodeJS](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-4.19-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)

A modern, full-stack educational web application and Content Management System (CMS) designed for **Saipal Academy (School)** and **Saipal College**. The platform features dynamic dual-division portal switching, division-isolated CMS administration, real-time notice tickers, interactive academic mini-games, an AI FAQ chatbot, photo gallery management, and responsive modern UI components.

---

## 🌟 Key Features

### 🏛️ 1. Dual-Division Web Portals
- **Split Gateway (`/`)**: High-impact split-screen landing page allowing visitors to choose between **Saipal School** and **Saipal College**.
- **Saipal School Division (`/school`)**:
  - Pre-Primary to SEE Grade 10 curriculum overview.
  - School Faculty & Mentors directory.
  - School Facilities, Taekwondo/Robotics Clubs, & Co-Curricular activities.
  - School Merit & Talent Scholarship Information.
  - Online School Admission Inquiry form.
- **Saipal College Division (`/college`)**:
  - Cambridge A-Levels & NEB +2 (+2 Science, Management, & Humanities) programs.
  - College Lecturers & Department directory.
  - Dynamic College Home Testimonial carousel & Community reviews.
  - Dynamic Blog & News articles with detail view (`/college/blog`).
  - Online College Admission & Financial Aid Inquiry forms.

### 🛡️ 2. Division-Isolated Admin CMS Panel (`/admin`)
- **Portal Selector**: Admins select between **School Admin** and **College Admin** management views.
- **Strict Division Isolation**: Data for Faculty, Programs, Scholarships, Notices, Gallery Albums, and Testimonials are tagged and filtered by division (`school` vs. `college`) to prevent data cross-contamination.
- **Fixed Viewport Admin Layout**:
  - Fixed sidebar with pinned Header and pinned User Profile / Logout footer.
  - Independently scrolling middle navigation items when content exceeds screen height.
  - Independently scrolling main dashboard workspace area.
- **Comprehensive CRUD Modules**:
  - 📢 **Notices & News Tickers**: Publish announcement banners and scrolling notice board items with custom tag colors.
  - 📝 **Blog & News Manager**: Create, edit, and publish division-tagged news articles.
  - 👨‍🏫 **Faculty Directory**: Manage teacher profiles, qualifications, experience, and department assignments.
  - 🎓 **Academic Programs**: Edit Cambridge A-Levels, NEB +2 streams, and School Grade Levels.
  - 🏆 **Scholarships & Aid**: Manage tuition waivers and eligibility criteria (School Division).
  - 🖼️ **Photo Gallery Manager**: Create albums, upload photos, and manage photo collections.
  - 💬 **Testimonials Manager**: Manage student/parent reviews and alumni stories.
  - 🤖 **AI Chatbot FAQ Manager**: Manage question-and-answer pairs for the interactive virtual assistant.

### 🎮 3. Academic Gamification & Interactive Features
- **Academic Mini-Games (`/academicgame`)**:
  - 🧠 **Quiz Game**: Interactive quiz covering science, general knowledge, and logic.
  - 🧭 **Decision-Making Scenario Game**: Scenario-based learning game for student decision-making.
- **Virtual Assistant FAQ Chatbot**: Floating chatbot widget available site-wide with real-time question matching based on administrative FAQ configuration.

---

## 🏗️ Tech Stack

### **Frontend (`/client`)**
- **Core Framework**: React 19, React Router v7, Vite 7
- **Styling & UI**: Tailwind CSS 3.4, PostCSS, Lucide React Icons, React Icons
- **Animations**: Framer Motion 12
- **Form Handling & Validation**: Zod, EmailJS / Brevo SMTP API

### **Backend (`/server`)**
- **Runtime & Server**: Node.js (>=18.0.0), Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens), BcryptJS password hashing
- **File & Media Storage**: Multer, Cloudinary API (`multer-storage-cloudinary`)
- **Security & Utilities**: CORS, Dotenv

---

## 📁 Repository Structure

```
Saipal-Website/
├── client/                     # Frontend Vite + React application
│   ├── public/                 # Static assets, logos, and gallery images
│   ├── src/
│   │   ├── components/         # Reusable layout, navigation, cards, & games
│   │   │   ├── chatbot/        # Virtual Assistant FAQ Chatbot component
│   │   │   ├── Games/          # Quiz and Decision-making game components
│   │   │   ├── layout/         # Header, Footer, Navbar, & Topbar
│   │   │   └── Programs/       # A-Levels, NEB, and School curriculum sections
│   │   ├── data/               # Seed datasets and fallback data
│   │   ├── hooks/              # Custom React hooks (page titles, etc.)
│   │   ├── pages/              # School, College, Admin, and Shared pages
│   │   │   └── admin/          # Admin layout, Login, and CRUD Manager modules
│   │   ├── router/             # App Router configuration & Protected Routes
│   │   ├── services/           # CMS Service (LocalStorage / API bus) & Auth Service
│   │   ├── App.jsx             # Root App component
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Global Tailwind CSS directives
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Backend Express REST API
│   ├── config/                 # Database & Cloudinary configuration
│   ├── controllers/            # Auth, CMS, FAQ, & Email controllers
│   ├── middleware/             # Auth JWT verification & upload middleware
│   ├── models/                 # Mongoose schema models (User, Notice, Blog, etc.)
│   ├── routes/                 # Express API routes (/api/auth, /api/cms, etc.)
│   ├── server.js               # Entry Express server listener
│   └── package.json
│
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**
- **MongoDB** (Local instance or MongoDB Atlas URI)

---

### 📥 1. Installation

Clone the repository and install dependencies for both `client` and `server`:

```bash
# Clone the repository
git clone https://github.com/your-username/saipal-website.git
cd saipal-website

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

---

### ⚙️ 2. Environment Setup

#### **Frontend (`/client/.env`)**
Create a `.env` file inside the `client/` directory:

```env
VITE_API_URL=http://localhost:5000/api
VITE_BREVO_API_KEY=your_brevo_api_key_here
VITE_BREVO_FROM=mail@saipal.edu.np
```

#### **Backend (`/server/.env`)**
Create a `.env` file inside the `server/` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/saipal_db
JWT_SECRET=your_jwt_secret_key_here
CLIENT_URL=http://localhost:5173

# Cloudinary Storage Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

### 💻 3. Running the Development Servers

#### **Start Backend Server**
```bash
cd server
npm run dev
```
*The backend API will run on `http://localhost:5000`.*

#### **Start Frontend Client**
```bash
cd client
npm run dev
```
*The React frontend app will run on `http://localhost:5173`.*

---

## 🔐 Admin CMS Access & Portal Routing

| Route | Description |
|---|---|
| `/` | Gateway Split Screen (Select School or College) |
| `/school` | Saipal School Home & Information Portal |
| `/college` | Saipal College Home & Information Portal |
| `/admin/login` | Administrator Authentication Page |
| `/admin` | Admin Portal Dashboard & CMS Managers |

> **Note**: To test division isolation in the Admin panel:
> 1. Log in to `/admin/login`.
> 2. Select **College Admin Portal** or **School Admin Portal**.
> 3. Content added in **School Admin** automatically syncs to `/school/*` routes, while content added in **College Admin** syncs to `/college/*` routes.

---

## 📦 Build & Production

To build the client application for production deployment:

```bash
cd client
npm run build
```

To preview the built production bundle locally:
```bash
npm run preview
```

---

## 📄 License

This project is created for **Saipal Academy & College**. All rights reserved.
