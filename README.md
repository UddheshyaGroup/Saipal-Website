# 🎓 Saipal Academy — Official Website & CMS

A full-featured, dual-division school and college website with an integrated Content Management System (CMS) built with React + Vite.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
  - [Public Website](#public-website)
  - [Admin CMS](#admin-cms)
  - [Saipal AI Chatbot](#saipal-ai-chatbot)
- [Pages & Routes](#pages--routes)
- [Admin Panel](#admin-panel)
- [Services & Data Layer](#services--data-layer)
- [Getting Started](#getting-started)
- [Admin Credentials](#admin-credentials)
- [Design System](#design-system)

---

## Overview

Saipal Academy is a **dual-division** educational institution offering:
- **School Division** — Pre-Primary through Grade 10 (SEE)
- **College Division** — Cambridge A-Levels & NEB +2 (Science, Management, Humanities)

The website features a **split-screen Gateway** landing page that directs visitors to either the School or College section. A fully custom-built **Admin CMS** allows staff to manage all website content independently per division — with complete data isolation between School and College.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI Framework |
| **Vite** | Build tool & Dev server |
| **React Router v6** | Client-side routing |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **Lucide React** | Icon library |
| **React Icons** | Additional icons (Font Awesome) |
| **localStorage** | CMS data persistence (browser-based) |
| **Canvas API** | Client-side image compression for gallery uploads |

---

## Project Structure

```
src/
├── components/
│   ├── admin/              # ProtectedRoute guard
│   ├── chatbot/            # Saipal AI chatbot (FaqChatbot, TypingIndicator)
│   ├── Games/              # QuizGame, DecisionMakingGame
│   ├── layout/             # Navbar, Footer, ScrollToTop
│   └── Programs/           # Program card components
│
├── data/
│   ├── blogData.js         # Seed blog posts
│   ├── initialCmsData.js   # All CMS seed data (division-isolated)
│   ├── initialFaqData.js   # FAQ + chatbot seed data
│   └── schoolData.js       # School-specific seed data
│
├── hooks/
│   └── usePageTitle.js     # Dynamic browser tab title hook
│
├── pages/
│   ├── admin/
│   │   ├── AdminLogin.jsx        # CMS login page
│   │   ├── AdminLayout.jsx       # Sidebar layout + nav
│   │   ├── AdminFaqManager.jsx   # AI Chatbot FAQ editor
│   │   ├── PortalSelector.jsx    # School/College portal chooser
│   │   └── modules/
│   │       ├── DashboardOverview.jsx
│   │       ├── BlogManager.jsx
│   │       ├── FacultyManager.jsx
│   │       ├── GalleryManager.jsx
│   │       ├── NoticesManager.jsx
│   │       ├── ProgramsManager.jsx
│   │       └── ScholarshipsManager.jsx
│   │
│   ├── GatewayHome.jsx           # Split-screen entry page
│   ├── SchoolHome.jsx            # School landing page
│   ├── SchoolAbout.jsx
│   ├── SchoolPrograms.jsx
│   ├── SchoolAdmissions.jsx
│   ├── SchoolFaculty.jsx
│   ├── SchoolActivities.jsx
│   ├── SchoolScholarships.jsx
│   ├── SchoolInquiryForm.jsx
│   ├── Home.jsx                  # College landing page
│   ├── About.jsx
│   ├── Programs.jsx
│   ├── Admissions.jsx
│   ├── Scholarships.jsx
│   ├── Faculty.jsx
│   ├── Gallery.jsx               # CMS-connected photo gallery
│   ├── Blog.jsx
│   ├── BlogDetail.jsx
│   ├── Contact.jsx
│   ├── InquiryForm.jsx
│   └── Game.jsx                  # Academic games hub
│
├── router/
│   └── AppRouter.jsx             # All route definitions + layout logic
│
└── services/
    ├── authService.js            # Admin login/logout/session
    ├── cmsService.js             # All CMS CRUD operations
    └── faqService.js             # FAQ/chatbot data service
```

---

## Features

### Public Website

#### 🏠 Gateway Page (`/`)
- Split-screen animated entrance — left side for School, right side for College
- School text left-aligned, College text right-aligned
- Clicking either side navigates to the respective division

#### 🏫 School Division (`/school/*`)
- **Home** — Hero, Notices ticker, Stats, Programs overview, Faculty spotlight, Testimonials
- **About** — School history, mission, vision
- **Programs** — K-10 curriculum levels with detail modals
- **Admissions** — Admission process, requirements, inquiry form
- **Faculty** — CMS-driven faculty directory with photos, subjects, qualifications
- **Activities** — Clubs, events, extracurricular activities
- **Scholarships** — Merit-based scholarship listings
- **Gallery** — CMS-managed photo albums (Admin-editable)
- **Blog** — School news and articles
- **Contact** — Map, phone, email, contact form
- **Enquiry Form** — Student inquiry submission

#### 🎓 College Division (`/college/*`)
- **Home** — Hero, Notices ticker, Programs overview, Faculty, Testimonials
- **About** — College history and vision
- **Programs** — A-Levels & NEB +2 streams with details
- **Admissions** — College admission process
- **Scholarships** — College scholarship listings
- **Faculty** — College-specific faculty directory
- **Gallery** — CMS-managed photo albums (Admin-editable)
- **Blog** — College news and articles
- **Contact** — Contact details and form
- **Enquiry Form** — Student inquiry form

#### 🎮 Academic Games (`/academicgame`)
- **Quiz Game** — Subject-based multiple choice quizzes
- **Decision Making Game** — Interactive scenario-based learning

#### 🔔 Real-time Notices Ticker
- Scrolling ticker on homepage showing active notices
- Division-isolated (School ticker ≠ College ticker)
- Fully manageable via Admin Panel

---

### Admin CMS

Access at `/admin/login` — fully password-protected.

#### 🔐 Authentication
- Email/password login (no pre-filled credentials)
- JWT-style session via `authService` + localStorage
- Protected routes redirect unauthenticated users

#### 🏛️ Portal Selector
- After login, admin chooses between **School Admin** or **College Admin**
- Completely isolated — each portal only manages its own division

#### 📊 Dashboard Overview
- Live stats: active notices, blogs, faculty count, FAQs
- Quick-navigation cards to any module
- Reset to seed data button

#### 📢 Notices & Tickers Manager
- Create, edit, delete notices and ticker scrolling texts
- Toggle active/inactive per notice
- **Division isolated**: School notices never appear in College and vice versa

#### 📝 Blog & News Manager
- Full blog CRUD with title, excerpt, content, author, date, tags, cover image
- Division-scoped blog posts

#### 👨‍🏫 Faculty Manager
- Add/edit/delete faculty members with name, photo, subjects, qualifications, bio
- Proper CRUD: editing updates existing records (no duplicates)
- Division isolation enforced

#### 📚 Programs Manager
- Manage academic programs/levels per division
- School: K-10 SEE levels | College: A-Levels & NEB +2 streams

#### 🏆 Scholarships Manager
- Add/edit/delete scholarship entries per division

#### 🖼️ Gallery Manager
- **Album management**: Create, rename, delete photo albums
- **Photo upload**: 
  - 📁 **From Device** — local file picker (JPG, PNG, WEBP, multi-select)
  - 🔗 **From URL** — paste any public image URL
  - Canvas-based **image compression** (resized to max 1200px, JPEG 72%) to stay within localStorage limits
- Set any photo as album cover
- Delete individual photos
- Division-isolated: School gallery ≠ College gallery
- Changes reflected live on `/school/gallery` and `/college/gallery`

#### 🏢 Facilities & Clubs Manager
- Manage campus facilities and student clubs

#### 💬 Testimonials Manager
- Manage parent/student testimonials per division

#### 🤖 AI Chatbot FAQ Manager
- Add/edit/delete FAQ entries for the Saipal AI chatbot
- Manage categories (General, School, College, Admissions, etc.)
- Configure chatbot name, welcome message, typing delay, avatar

#### ⚙️ Site Settings Manager
- Update contact info: address, phone, email
- Update social media links: Facebook, Instagram, YouTube
- Update operational hours for School and College shifts
- All settings reflect live in the Footer component

---

### Saipal AI Chatbot

- Floating bottom-left widget on all School and College pages
- **Hidden on the Gateway page** (`/`)
- Responsive button label: **"AI"** on mobile, **"Saipal AI"** on desktop
- Minimalistic, professional UI:
  - Light blue (`#00AEEF`) trigger pill button with pulsing white dot
  - Flat header with online status indicator
  - Category filter tabs (General, School, College, Admissions, etc.)
  - Click-to-select FAQ questions — no free-text input
  - Bot message bubbles with related question chips
  - Typing animation while "thinking"
  - Reset conversation button

---

## Pages & Routes

| Route | Page | Division |
|---|---|---|
| `/` | Gateway (split-screen) | Both |
| `/school` | School Home | School |
| `/school/about` | About School | School |
| `/school/programs` | School Programs | School |
| `/school/admissions` | School Admissions | School |
| `/school/faculty` | School Faculty | School |
| `/school/activities` | School Activities | School |
| `/school/scholarships` | School Scholarships | School |
| `/school/gallery` | School Gallery | School |
| `/school/blog` | School Blog | School |
| `/school/contact` | School Contact | School |
| `/school/enquiry` | School Enquiry Form | School |
| `/college` | College Home | College |
| `/college/about` | About College | College |
| `/college/programs` | College Programs | College |
| `/college/admissions` | College Admissions | College |
| `/college/scholarships` | College Scholarships | College |
| `/college/faculty` | College Faculty | College |
| `/college/gallery` | College Gallery | College |
| `/college/blog` | College Blog | College |
| `/college/contact` | College Contact | College |
| `/college/enquiry` | College Enquiry Form | College |
| `/academicgame` | Games Hub | Shared |
| `/academicgame/quiz` | Quiz Game | Shared |
| `/academicgame/decision` | Decision Game | Shared |
| `/admin/login` | CMS Login | Admin |
| `/admin/*` | Admin Panel (protected) | Admin |

---

## Admin Panel

### Accessing the Admin Panel

1. Go to `/admin/login`
2. Enter your credentials manually
3. After login, select **School** or **College** portal
4. Use the sidebar to navigate between modules

### Browser Tab Titles (Dynamic)
Every page and admin module updates the browser tab automatically:
- `CMS Admin Login`
- `Select Admin Portal | Saipal CMS`
- `School Admin — Faculty Directory`
- `College Admin — Gallery Manager`
- etc.

### Data Isolation Rule
> ⚠️ **Critical**: The School Admin Panel only reads/writes School data. The College Admin Panel only reads/writes College data. They never share or cross-contaminate content.

---

## Services & Data Layer

### `authService.js`
Handles admin authentication with localStorage session persistence.
- `login(email, password)` — validates credentials
- `logout()` — clears session
- `getCurrentUser()` — returns active session
- `isAuthenticated()` — checks session validity

### `cmsService.js`
Central CMS data service using localStorage with a reactive `CmsEventBus`.
- All methods accept a `division` parameter (`'school'` | `'college'`)
- **Notices**: `getNotices`, `saveNotice`, `deleteNotice`
- **Tickers**: `getTickers`, `saveTicker`, `deleteTicker`
- **Blogs**: `getBlogPosts`, `saveBlogPost`, `deleteBlogPost`
- **Faculty**: `getFaculty`, `saveFacultyMember`, `deleteFacultyMember`
- **Programs**: `getPrograms`, `saveProgram`, `deleteProgram`
- **Scholarships**: `getScholarships`, `saveScholarship`, `deleteScholarship`
- **Gallery**: `getGalleryAlbums`, `saveGalleryAlbum`, `addPhotoToAlbum`, `removePhotoFromAlbum`, `deleteGalleryAlbum`
- **Settings**: `getSiteSettings`, `updateSiteSettings`
- `resetAllCmsData()` — resets all data to seed

### `faqService.js`
Manages chatbot FAQ data independently from the main CMS.
- `getFaqs`, `saveFaq`, `deleteFaq`
- `getCategories`, `saveCategory`, `deleteCategory`
- `getSettings`, `updateSettings`

### `usePageTitle.js` (Hook)
Auto-updates `document.title` on every route change based on a path→title map. Admin panel titles update on module/division change via a `useEffect` in `AdminLayout`.

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Saipal-Website

# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

### First-time Setup (LocalStorage Seed)
On first load, the CMS auto-populates localStorage with seed data including:
- Sample notices, tickers, blog posts
- Faculty members for both School and College
- Programs, scholarships, facilities
- Gallery albums (Sports Day → School, HM Practical → College)
- AI chatbot FAQs and categories

To reset all data to defaults, use the **"Restore Initial Seed Data"** button in the Admin Dashboard.

---

## Admin Credentials

```
Email:    admin@saipal.edu.np
Password: adminpassword
```

> ⚠️ Change these credentials before deploying to production.

---

## Design System

### Colors
| Token | Value | Usage |
|---|---|---|
| Primary | `#2E3192` | Dark navy blue — headers, buttons, School accent |
| Accent | `#00AEEF` | Cyan/sky blue — College accent, highlights, chatbot |
| White | `#FFFFFF` | Backgrounds, text on dark |

### Typography
- **Font**: Inter (via system/Tailwind)
- Headings: `font-extrabold` / `font-black`
- Body: `text-sm` / `text-xs`

### Key UI Patterns
- **Glassmorphism**: `backdrop-blur` + `bg-white/10` on hero sections
- **Gradient banners**: `from-[#2E3192] to-[#00AEEF]`
- **Rounded cards**: `rounded-2xl` / `rounded-3xl`
- **Micro-animations**: Framer Motion `whileHover`, `whileTap`, `AnimatePresence`
- **Responsive**: Mobile-first, Tailwind `sm:` / `md:` / `lg:` breakpoints

### Navbar — Top Info Bar
- Shows email + phone + location on desktop
- **Mobile**: email hidden — only phone + location shown

### Footer
- 4-column layout: Brand & Social | Academic Divisions | Contact Details | Academic Hours
- Background: `bg-primary` (deep navy)
- All content (contact, hours, social links) pulled live from CMS Site Settings
- Logo displayed transparently (no white background)

---

## License

This project is proprietary software developed for **Saipal Academy**, Dhumbarahi, Kathmandu, Nepal.  
© 2026 Saipal Academy. All rights reserved.
