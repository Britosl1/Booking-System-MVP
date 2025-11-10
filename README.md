# Booking System

A modern Next.js booking system built with TypeScript, Tailwind CSS, Redux, React Query, and React Hook Form + Zod.

## 🚀 Live Demo

**Deployed Application:** [https://booking-system-mvp-lucas-brito.vercel.app/](https://booking-system-mvp-lucas-brito.vercel.app/)

## ⏱️ Development Time

**Total Time Invested:** 4 hours

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **React Query (TanStack Query)** - Server state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**

## 🏃 Running the Application Locally

Follow these steps to run the application on your local machine:

1. **Clone the repository:**

```bash
git clone git@github.com:Britosl1/Booking-System-MVP.git
cd booking-system
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

4. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000) to view the application.


## 🤖 AI Tools Used

### Tool: Cursor (AI-powered code editor)

**Usage Areas:**
- Layout design and component structure
- Mock data generation
- Small code adjustments and refactoring


## 🚀 Features to Implement with More Time

### High Priority
1. **User Authentication & Authorization**
   - User login/registration system
   - Role-based access control (customers, staff, admin)
   - Session management

2. **Backend Integration**
   - Replace mock data with real API endpoints
   - Database integration (PostgreSQL/MongoDB)
   - Proper error handling and validation


## 📁 Project Structure

```
booking-system/
├── api/                    # API client and queries
│   ├── queries/           # React Query hooks
│   └── service.ts         # API service functions
├── app/                   # Next.js App Router pages
│   ├── [center]/         # Dynamic center pages
│   └── api/              # API routes
├── components/           # React components
│   ├── BookingForm/
│   ├── CenterCard/
│   └── ...
├── hooks/               # Custom React hooks
├── interfaces/          # TypeScript interfaces
├── lib/                # Redux store and utilities
│   └── slices/        # Redux slices
└── public/            # Static assets
```
