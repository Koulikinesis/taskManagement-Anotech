# Anotech Task Manager

A full-stack task management system built with Next.js (App Router), Express.js, TypeScript, Tailwind CSS, and MongoDB.

## What it does

- Secure authentication with register/login and JWT protection
- Task CRUD across real workflows
- Status tracking: To Do, In Progress, Done
- Due dates and optional assignee fields
- Clean responsive UI built with Tailwind
- Separate backend API server using Express and MongoDB

## Tech stack

- Frontend: Next.js 14, React, Tailwind CSS
- Backend: Express.js, TypeScript, JWT
- Database: MongoDB
- Auth: bcrypt password hashing + JWT

## Setup

1. Copy environment values:

```bash
cp .env.example .env
```

2. Install dependencies:

```bash
npm install
```

3. Start development:

```bash
npm run dev
```

4. Open the app:

- Frontend: http://localhost:3000
- Backend API: http://localhost:4000/api

## Environment variables

- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret for JWT signing
- `CLIENT_URL` - Frontend URL for CORS
- `PORT` - Backend port

## Notes

- The frontend stores the JWT token in `localStorage` for session handling.
- The backend enforces authorization on task routes.
- The app is built to handle real data with validation and meaningful task workflows.

## Key decisions

- Chose MongoDB for fast iteration and flexible task schema.
- Used separate Express backend to satisfy backend requirement and keep API concerns distinct.
- Built the UI with Tailwind and lightweight components to keep the experience clean and usable.

## Next improvements

- Add team roles and permissions
- Add better server-side session handling
- Add task comments and activity history
- Deploy backend and frontend to Vercel / Railway
