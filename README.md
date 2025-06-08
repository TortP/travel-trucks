# 🚐 TravelTrucks – Camper Rental Web App

**TravelTrucks** is a responsive React-based web application for renting campers. Users can browse a catalog of available vehicles, view detailed camper pages with reviews, and filter by location, amenities, and more. The project was built using Vite, React, Redux Toolkit, React Router, and Axios.

---

## 📸 Demo

🔗 [Live site on Vercel](https://travel-trucks-kappa-six.vercel.app/)

---

## 🧩 Features

- 🏕 Homepage with banner and CTA
- 🔎 Camper catalog with:
  - Real-time filtering by location, type, and features
  - "Load More" pagination
  - Add to Favorites with localStorage persistence
- 📄 Individual camper detail page with:
  - Photo gallery
  - Characteristics and details
  - User reviews (5-star rating system)
  - Booking form with success notification
- 🌐 Routing: `/`, `/catalog`, `/catalog/:id`
- 💡 State management with Redux Toolkit
- ⚙️ Data fetching with Axios
- 🎨 Styling with CSS Modules

---

## ⚙️ Tech Stack

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Vite](https://vitejs.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js ≥ 16
- Git

### 📦 Clone the repository

```bash
git clone https://github.com/tortp/travel-trucks.git
cd travel-trucks
```

### 📥 Install dependencies

```bash
npm install
```

### ▶️ Start development server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 🔨 Build for production

```bash
npm run build
```

### 🔍 Preview production build

```bash
npm run preview
```

---

## 📁 Project Structure

```
src/
├── api/                # Axios requests
├── assets/             # Images and static files
├── components/         # Reusable UI components
├── features/           # Redux slices
├── pages/              # Page components
├── redux/              # Store configuration
├── routes/             # App routing
├── styles/             # Global styles
├── utils/              # Helpers (e.g., formatPrice)
├── App.jsx             # Root component
├── main.jsx            # Entry point
└── index.css           # Base styles
```

---

## 🧪 Quality

- ✅ Clean and formatted code (Prettier, ESLint)
- ✅ Valid HTML and semantic markup
- ✅ No console errors
- ✅ Functional routing
- ✅ Loading indicators on async requests

---

## 📄 License

This project is for educational/demo purposes. Feel free to fork and build upon it.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss.
