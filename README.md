This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Ticketing App

A full-stack ticketing application built with Next.js, Node.js, Express, and MongoDB. This application allows users to create, update, and delete tickets, and manage their statuses and priorities.

## Features

- User authentication
- Create, update, and delete tickets
- Track progress and status of tickets
- Responsive design
- Role-based access control (future feature)
- Notification system (future feature)

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, bcrypt
- **Version Control**: Git, GitHub

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Gravqc/Ticketing-App.git
   cd Ticketing-App
   ```

2. Install dependencies for both frontend and backend
   Front-End icons/styling

   - npm install @fortawesome/free-solid-svg-icons
   - npm install @fortawesome/react-fontawesome

   Back-end Db

   - npm install mongodb mongoose

3. Create your .env.local file with connection string to DB.

4. npm run dev
