# CalendlyDemo


[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth%20%2B%20Billing-6C47FF?logo=clerk)](https://clerk.com/)
[![Sanity](https://img.shields.io/badge/Sanity-CMS-F03E2F?logo=sanity)](https://sanity.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

##  Professional Scheduling Platform 

A full-stack scheduling SaaS application with real-time calendar sync, subscription billing, and a beautiful booking experience.

---

> **What problem does it solve?**
>
> Eliminates the endless "what time works for you?" email chains. Hosts share their booking link, guests pick an available time, and everyone gets a calendar invite with a video call link automatically.

> **Technical Highlights**
>
> - Next.js 16 App Router with React 19
> - Clerk authentication with built-in subscription billing
> - Sanity CMS for real-time data management
> - Google Calendar OAuth2 with automatic token refresh
> - Tiered pricing (Free / Starter / Pro)
> - Payment integrations with Stripe, Pesapal and Mpesa APIs

---

## 📅 What Is This App?

**Think of CalendlyDemo as your personal scheduling assistant** — but one that never sleeps and never double-books you.

Here's how it works:

### For Hosts (You)
1. **Set your availability** — Use a visual calendar to drag and create time blocks when you're free for meetings
2. **Connect your Google Calendar** — CalendlyDemo reads your existing events so it never shows a time when you're already busy
3. **Create meeting types** — Define different kinds of meetings (15-min quick chat, 30-min consultation, 60-min deep dive)
4. **Share your booking link** — Send `yoursite.com/book/your-name` to anyone who wants to meet

### For Guests (People booking with you)
1. Visit your public booking page
2. See only the times you're actually available
3. Pick a slot and enter their name + email
4. Get a Google Calendar invite with a Google Meet link automatically

### Perfect For
- **Freelancers** scheduling client calls
- **Consultants** managing discovery sessions
- **Coaches & Tutors** booking 1-on-1 sessions
- **Developers** learning to build SaaS products

---


## ✨ Features

### For End Users

| Feature | Description |
|---------|-------------|
| 📅 **Smart Availability** | Drag-and-drop calendar to set when you're free for meetings |
| 🔄 **Google Calendar Sync** | Connect multiple Google accounts to prevent double-booking |
| 🎥 **Automatic Google Meet** | Every booking generates a video call link automatically |
| ⏱️ **Flexible Meeting Types** | Create 15, 30, 45, 60, or 90-minute meeting options |
| 🌍 **Timezone Intelligence** | Guests see availability in their local timezone |
| ✅ **Real-time Status** | Track who accepted, declined, or hasn't responded |
| 🔗 **Shareable Booking Pages** | Clean URLs like `/book/your-name/consultation` |

### Technical Features 

| Feature | Description |
|---------|-------------|
| ⚡ **Next.js 16 App Router** | Latest React 19 with Server Components |
| 🔐 **Clerk Auth + Billing** | Authentication and subscription management in one |
| 📊 **Sanity CMS** | Real-time data with embedded Studio at `/studio` |
| 🔑 **OAuth2 Token Refresh** | Automatic handling of expired Google tokens |
| 💰 **Tiered Pricing** | Free, Starter ($X/mo), and Pro ($X/mo) plans |
| 📈 **Admin Dashboard** | Insights and feedback management |
| 🎨 **Shadcn UI** | Beautiful, accessible components |

### Pricing Tiers

| Feature | Free | Starter | Pro |
|---------|------|---------|-----|
| Connected Calendars | 1 | 3 | Unlimited |
| Bookings per Month | 2 | 10 | Unlimited |
| Availability Management | ✅ | ✅ | ✅ |
| Google Calendar Sync | ✅ | ✅ | ✅ |
| Custom Booking Page | ✅ | ✅ | ✅ |

---

##  How It Works

### User Booking Flow

```mermaid
flowchart LR
    A[Guest visits booking page] --> B[Selects available slot]
    B --> C[Enters name and email]
    C --> D[Booking created in Sanity]
    D --> E[Google Calendar event created]
    E --> F[Google Meet link generated]
    F --> G[Both parties get calendar invite]
```

### Google Calendar Sync Architecture

```mermaid
flowchart TD
    A[Host connects Google account] --> B[OAuth2 authorization]
    B --> C[Tokens stored in Sanity]
    C --> D[Fetch busy times from calendars]
    D --> E[Calculate available slots]
    E --> F[Display on booking page]
    
    G[Token expires] --> H[Automatic refresh]
    H --> C
```

### Subscription Tier System

```mermaid
flowchart LR
    subgraph FreeTier[Free]
        F1[1 calendar]
        F2[2 bookings/month]
    end
    
    subgraph StarterTier[Starter]
        S1[3 calendars]
        S2[10 bookings/month]
    end
    
    subgraph ProTier[Pro]
        P1[Unlimited calendars]
        P2[Unlimited bookings]
    end
```

---

## Getting Started

### Prerequisites

Before you begin, make sure you have:

- **Node.js 18.17+** — [Download](https://nodejs.org/)
- **pnpm** — Install with `npm install -g pnpm`
- **Clerk account** — [Sign up](https://go.clerk.com)
- **Sanity account** — [Sign up](https://www.sanity.io)
- **Google Cloud project** — With Calendar API enabled

### Step-by-Step Setup

#### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd CalendlyDemo
```

#### 2. Install Dependencies

```bash
pnpm install
```

#### 3. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Then fill in your values (see [Environment Variables](#-environment-variables) section below).

#### 4. Configure Clerk


#### 5. Configure Sanity


#### 6. Configure Google Calendar API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the **Google Calendar API**
4. Create OAuth 2.0 credentials (Web application)
5. Add authorized redirect URI: `http://localhost:3000/api/calendar/callback`
6. Copy your **Client ID** and **Client Secret**

#### 7. Start the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app!

#### 8. Access Sanity Studio

Visit [http://localhost:3000/studio](http://localhost:3000/studio) to manage your content.

---

## 🔐 Environment Variables

Create a `.env.local` file in your project root with these variables:

```bash
# ===========================================
# CLERK - Authentication & Billing
# ===========================================
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# ===========================================
# SANITY - Content Management
# ===========================================
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-07
SANITY_API_TOKEN=sk...

# ===========================================
# GOOGLE - Calendar API
# ===========================================
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-...
GOOGLE_REDIRECT_URI=http://localhost:3000/api/calendar/callback
```


---

## 🗃️ Database Schema Overview

CalendlyDemo uses Sanity CMS with the following document types:

### User
The main user document linked to Clerk authentication.

| Field | Type | Description |
|-------|------|-------------|
| `clerkId` | string | Unique Clerk user ID |
| `name` | string | User's display name |
| `email` | string | User's email address |
| `slug` | slug | URL-friendly identifier for booking page |
| `availability` | array | Time blocks when user is available |
| `connectedAccounts` | array | Google Calendar OAuth connections |

### MeetingType
Templates for different kinds of meetings.

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | e.g., "Quick Chat", "Consultation" |
| `slug` | slug | URL identifier |
| `duration` | number | 15, 30, 45, 60, or 90 minutes |
| `description` | text | Shown on booking page |
| `host` | reference | Link to User document |
| `isDefault` | boolean | Default meeting type for booking page |

### Booking
Individual scheduled meetings.

| Field | Type | Description |
|-------|------|-------------|
| `host` | reference | The user being booked |
| `meetingType` | reference | Type of meeting booked |
| `guestName` | string | Name of the person booking |
| `guestEmail` | string | Email of the person booking |
| `startTime` | datetime | When the meeting starts |
| `endTime` | datetime | When the meeting ends |
| `googleEventId` | string | ID in Google Calendar |
| `meetLink` | url | Google Meet video link |
| `notes` | text | Additional notes from guest |

### ConnectedAccount (Embedded in User)
OAuth tokens for Google Calendar integration.

| Field | Type | Description |
|-------|------|-------------|
| `accountId` | string | Google user ID |
| `email` | string | Google account email |
| `accessToken` | string | OAuth access token (hidden) |
| `refreshToken` | string | OAuth refresh token (hidden) |
| `expiryDate` | number | Token expiration timestamp |
| `isDefault` | boolean | Use for creating new events |

### Feedback
User-submitted feedback for admins.

| Field | Type | Description |
|-------|------|-------------|
| `user` | reference | Who submitted the feedback |
| `content` | text | Feedback content |
| `createdAt` | datetime | When submitted |
| `archived` | boolean | Hidden from dashboard |

---

## 🚢 Deployment

### Deploy to Vercel

#### Option 1: Vercel CLI

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

#### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Add all environment variables
5. Deploy!

---




### Sanity Issues

**Problem:** CORS errors when fetching from Sanity
```
Solution: Add your domain to CORS origins in Sanity 
project settings (sanity.io/manage).
```

### Development Issues

**Problem:** Port 3000 already in use
```bash
# Find and kill the process
lsof -i :3000
kill -9 <PID>

# Or use a different port
pnpm dev -- -p 3001
```

**Problem:** TypeScript errors after schema changes
```bash
# Regenerate types
pnpm typegen
```

---

## 🏆 Take It Further — Challenge Time!

Ready to level up? Here are some features you can add to make this app even better:

### Beginner Challenges
- [ ] Add a "Copy booking link" button with toast notification
- [ ] Show booking confirmation page after successful booking
- [ ] Add loading states for all async operations

### Intermediate Challenges
- [ ] **Email notifications** — Send confirmation emails using [Resend](https://resend.com/) or [SendGrid](https://sendgrid.com/)
- [ ] **Buffer time** — Add configurable gaps between meetings
- [ ] **Recurring availability** — Set weekly patterns instead of individual slots
- [ ] **Meeting notes** — Allow guests to add context before the call

### Advanced Challenges
- [ ] **Team accounts** — Multiple users sharing a booking page
- [ ] **Stripe integration** — Alternative to Clerk Billing
- [ ] **Waitlist feature** — Let guests join a waitlist for fully booked slots
- [ ] **Calendar embed** — Allow hosts to embed their calendar on external sites
- [ ] **Webhooks** — Notify external services when bookings are created/cancelled
- [ ] **Analytics dashboard** — Track booking trends, popular times, conversion rates

### AI-Powered Features
- [ ] **Smart scheduling** — Suggest optimal meeting times based on patterns
- [ ] **Meeting prep** — Generate agendas based on guest info
- [ ] **Follow-up automation** — Draft follow-up emails after meetings

---


## 📚 Quick Reference

### Useful Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Run production build

# Code Quality
pnpm lint             # Run Biome linter
pnpm format           # Format code with Biome
pnpm typecheck        # Check TypeScript types

# Sanity
pnpm typegen          # Generate TypeScript types from Sanity schema
```

### Key Files & Folders

```
├── app/
│   ├── (app)/              # Protected app routes (dashboard)
│   ├── (admin)/            # Admin dashboard
│   ├── book/[slug]/        # Public booking pages
│   ├── api/calendar/       # Google Calendar OAuth routes
│   ├── studio/             # Embedded Sanity Studio
│   └── pricing/            # Pricing page with Clerk Billing
├── components/
│   ├── booking/            # Booking calendar & forms
│   ├── calendar/           # Availability calendar components
│   └── ui/                 # Shadcn UI components
├── lib/
│   ├── actions/            # Server Actions
│   ├── features.ts         # Pricing tier limits
│   └── google-calendar.ts  # Google Calendar OAuth helpers
├── sanity/
│   ├── schemaTypes/        # Sanity document schemas
│   ├── queries/            # GROQ queries
│   └── lib/                # Sanity client configuration
└── middleware.ts           # Clerk authentication middleware
```

### Important Concepts

| Concept | What It Does | Where It's Used |
|---------|--------------|-----------------|
| **Server Actions** | Server-side functions callable from client | `lib/actions/` |
| **Clerk `auth()`** | Get current user on server | Protected routes, server actions |
| **Sanity App SDK** | Real-time data fetching | Components using `useDocuments` |
| **OAuth2 Flow** | Connect Google accounts | `/api/calendar/connect` → `/api/calendar/callback` |
| **GROQ Queries** | Query Sanity data | `sanity/queries/` |

---


**Happy coding! 🚀**

# scheduling-app
