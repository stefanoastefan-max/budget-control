# BudgetControl - Construction Budget Management System

A professional web-based construction budget control and purchase management system built with Next.js, TypeScript, and Supabase.

## 🎯 Features

✅ **Budget Management**
- Import budgets from Excel/PDF files
- Create and manage budget items (partidas)
- Track budget revisions with audit trail
- Multi-currency support (DOP, USD)

✅ **Purchase Tracking**
- Register purchases and invoices
- Automatic AI-powered category suggestion
- Payment status tracking
- File attachment support
- Supplier database

✅ **Smart Classification**
- Rule-based + Similarity-based + Historical matching
- Confidence scoring system
- Custom classification rules
- Automatic learning from corrections

✅ **Dashboard & Analytics**
- Real-time budget summary
- Category-level tracking
- Over-budget alerts
- High-usage warnings (>80%)
- Top supplier insights
- Monthly spending trends

✅ **Security & Access Control**
- Supabase Auth integration
- Role-based access (Admin, PM, Accounting, Viewer)
- Row-level security policies
- Complete audit logging

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account (free tier available)

### 1. Clone/Setup Project

```bash
# Clone the repository
git clone <repository-url>
cd budget-control-app

# Install dependencies
npm install
```

### 2. Supabase Setup

1. Create account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to SQL Editor and run the database schema from `01_database_schema.sql`
4. Copy your Supabase URL and keys

### 3. Environment Configuration

```bash
# Copy environment template
cp .env.local.example .env.local

# Edit .env.local with your Supabase credentials:
# NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
# SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
# NEXTAUTH_SECRET=generate-a-random-secret
# NEXTAUTH_URL=http://localhost:3000
```

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 5. Demo Credentials

- Email: `demo@example.com`
- Password: `demo123456`

## 📁 Project Structure

```
budget-control-app/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── login/
│   ├── signup/
│   └── projects/
│       ├── page.tsx             # Projects list
│       └── [projectId]/
│           ├── page.tsx         # Dashboard
│           ├── budget/          # Budget management
│           ├── purchases/       # Purchases management
│           └── suppliers/       # Suppliers management
├── components/                   # Reusable React components
├── lib/                         # Utility functions and services
│   ├── supabase.ts
│   ├── budget-import.ts
│   └── utils.ts
├── types/                       # TypeScript type definitions
├── styles/                      # CSS files
│   └── globals.css
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── .env.local.example
```

## 🔧 Configuration Files

### package.json
Contains all dependencies and npm scripts:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### .env.local
Environment variables for:
- Supabase connection
- NextAuth configuration
- Application settings

### next.config.js
Next.js configuration for optimization and webpack

### tsconfig.json
TypeScript compiler options

### tailwind.config.js
Tailwind CSS customization

## 📊 Database Schema

### Main Tables
1. **projects** - Project management
2. **budget_items** - Budget line items (partidas)
3. **purchases** - Purchase orders/invoices
4. **suppliers** - Supplier database
5. **purchase_attachments** - File attachments
6. **category_classification_rules** - AI rules
7. **audit_logs** - Activity trail
8. **user_roles** - Role assignments

See `01_database_schema.sql` for complete schema.

## 🔐 Authentication

Uses Supabase Auth with NextAuth.js

**Roles:**
- **Admin**: Full system access
- **Project Manager**: Project and budget operations
- **Accounting**: Purchase and payment tracking
- **Viewer**: Read-only access

## 📱 Key Pages

### Home Page (`/`)
Landing page with feature overview

### Login (`/login`)
User authentication page

### Projects (`/projects`)
List and create projects

### Project Dashboard (`/projects/[id]`)
Real-time budget metrics and alerts

### Budget Management (`/projects/[id]/budget`)
Import and manage budget items

### Purchases (`/projects/[id]/purchases`)
Create and track purchases

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Build for production (catches errors)
npm run build
```

## 📦 Deployment

### Vercel Deployment

```bash
# Login to Vercel
vercel login

# Deploy
vercel deploy

# Set environment variables in Vercel dashboard
```

### Docker Deployment

```bash
# Build Docker image
docker build -t budget-control .

# Run container
docker run -p 3000:3000 budget-control
```

## 🛠️ Development

### Adding a New Feature

1. Create page/component in appropriate directory
2. Add TypeScript types in `types/`
3. Create service methods in `lib/`
4. Add API routes in `app/api/`
5. Update database schema if needed

### Best Practices

- Use TypeScript for type safety
- Follow component naming conventions
- Add error handling and validation
- Log important actions to audit trail
- Test database queries for performance

## 📚 Documentation

- `09_IMPLEMENTATION_GUIDE.md` - Complete setup and feature guide
- `11_ARCHITECTURE_AND_EXTENSIONS.md` - System design and extension guide
- `12_QUICK_REFERENCE.md` - Quick reference and cheat sheet

## 🆘 Troubleshooting

### "Connection refused" error
- Check Supabase URL and keys in `.env.local`
- Verify Supabase project is active

### Budget items not importing
- Verify Excel column headers match expected format
- Check file encoding (UTF-8)
- Ensure file size < 10MB

### Authentication issues
- Clear browser cookies/cache
- Check NEXTAUTH_SECRET is set
- Verify NEXTAUTH_URL matches your domain

## 🤝 Support

For issues or questions:
1. Check the documentation files
2. Review troubleshooting section
3. Check Supabase documentation
4. Check Next.js documentation

## 📄 License

Proprietary - All rights reserved

## 👥 Authors

Construction Budget Control System
Built with Next.js, TypeScript, and Supabase

---

**Version**: 1.0.0
**Status**: Production Ready ✅
**Last Updated**: 2024

For questions or support, refer to the implementation guide and architecture documentation included in the project.
