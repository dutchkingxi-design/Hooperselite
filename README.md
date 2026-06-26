# HoopersElite Academy

Full-stack basketball coaching and booking platform built with Next.js, PostgreSQL, Stripe, and Nodemailer.

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/dutchkingxi-design/hooperselite.git
   cd hooperselite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Copy `.env.local` and fill in your values:
   ```
   DATABASE_URL=postgresql://...
   JWT_SECRET=your_secret_key
   SYSTEM_EMAIL=your_email@gmail.com
   SYSTEM_EMAIL_PASSWORD=app_password
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_...
   NEXT_PUBLIC_URL=http://localhost:3000
   ```

4. **Set up the database**
   ```bash
   npx prisma db push
   ```

5. **Run locally**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`

## Features

- 👤 User authentication (Players & Coaches)
- 📅 Booking system
- 💳 Stripe payments
- 📧 Email notifications
- 📊 Coach profiles
- 💰 Pricing tiers

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Add environment variables in the Vercel dashboard.

## Tech Stack

- Next.js 14 (App Router)
- PostgreSQL (Neon/Supabase)
- Prisma ORM
- Stripe API
- Nodemailer
- Tailwind CSS
- TypeScript
