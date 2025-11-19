---
# 🌐 Hero Apps Store

A fully responsive and dynamic web application designed to showcase, explore, and manage apps in a modern App Store–style experience. Users can browse apps, view detailed analytics, install/uninstall apps, and search through a beautifully organized interface — all in real time.

Built with React, TailwindCSS, and Recharts, this platform delivers smooth performance, interactive visualizations, and a clean UI. With localStorage-powered installation tracking, live search, custom charts, and route-level loading animations, the system ensures a seamless and engaging user experience across all devices.

Overall, **Hero Apps Store** is a complete, modern, and efficient solution for browsing, analyzing, and managing apps with speed, simplicity, and an intuitive interface.

---

## ✅ Features

### 🔐 Core Functionalities

* Browse and explore all apps with detailed information.
* Install and manage apps via **localStorage**.
* “My Installation” page to view and uninstall installed apps.
* Disabled “Installed” button for already installed apps.
* Success toasts for install/uninstall actions.

### 🔎 Search & Filter

* Live, case-insensitive search.
* Sort by download count (High → Low, Low → High).
* “No App Found” message for unmatched search results.

### 🏠 Pages Included

* Home Page (Banner, States, Top Apps)
* All Apps Page (Search, Filters, Full App List)
* App Details Page (Install button, Review Chart, Description)
* My Installation Page
* Custom Error Page (404)

### 📊 Interactive UI & Charts

* Review distribution visualization using **Recharts**.
* Smooth page transitions and loading animations.

### 🎨 UI & Design

* Fully responsive layout with Tailwind CSS
* Custom Header & Footer
* Beautiful cards for apps
* Clean and minimal layout following Figma design

---

## 🛠️ Tech Stack Overview

### **Frontend:**

* React.js
* Tailwind CSS
* Recharts
* React Router
* Framer Motion

### **State & Data Handling:**

* LocalStorage
* JSON-based app data (12–20 objects)

### **Deployment:**

* Vercel / Netlify / Cloudflare

---

## 🎨 UI Features

* Modern and elegant interface
* App cards with rating, downloads, and images
* Review chart in App Details
* Install & Installed button states
* Smooth transitions with Framer Motion
* Fully optimized for mobile, tablet, and desktop

---

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Monir312/react-hero-app.git
cd react-hero-app
npm install
```

Run the project:

```bash
npm run dev
```

---
