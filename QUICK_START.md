# BudgetControl - Quick Setup Guide

Get your construction budget control system running in 10 minutes!

## Step 1: Create Supabase Project (2 minutes)

1. Go to https://supabase.com and sign up (free)
2. Click "New Project"
3. Fill in project details:
   - Name: "budget-control"
   - Database Password: (save this somewhere safe)
   - Region: Select closest to you
4. Wait for project to initialize
5. Go to "Settings" → "API" and copy:
   - Project URL
   - anon (public) key
   - service_role (secret) key

## Step 2: Create Database (3 minutes)

1. In your Supabase project, go to "SQL Editor"
2. Click "New Query"
3. Copy the entire content of `01_database_schema.sql`
4. Paste into the SQL editor
5. Click "Run"
6. Wait for completion (you'll see green checkmarks)

## Step 3: Setup Project (5 minutes)

```bash
# Navigate to project directory
cd budget-control-app

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local
```

## Step 4: Configure Environment

Edit `.env.local` with your Supabase keys:

```bash
# From Supabase API Settings
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Generate a random secret (use any random string)
NEXTAUTH_SECRET=your-random-secret-here

# For local development
NEXTAUTH_URL=http://localhost:3000
```

## Step 5: Run Application

```bash
npm run dev
```

Open http://localhost:3000 in your browser

## Test the Application

### Login Credentials
- Email: `demo@example.com`
- Password: `demo123456`

Or create a new account by clicking "Registrarse"

## 🎉 You're Ready!

Your budget control system is now running!

### Next Steps:

1. **Create a Project**
   - Click "Nuevo Proyecto"
   - Fill in project details
   - Set budget amount

2. **Import Budget**
   - Go to Presupuesto
   - Click "📥 Importar Presupuesto"
   - Use the provided Excel template

3. **Record Purchases**
   - Go to Compras
   - Click "Nueva Compra"
   - Fill in purchase details

4. **View Dashboard**
   - Check real-time budget status
   - See spending by category
   - Get budget alerts

## 📚 Additional Resources

- **Implementation Guide**: See `09_IMPLEMENTATION_GUIDE.md`
- **Architecture**: See `11_ARCHITECTURE_AND_EXTENSIONS.md`
- **Database Schema**: See `01_database_schema.sql`

## 🆘 Common Issues

### "Module not found" error
```bash
# Install dependencies again
npm install
```

### "Connection refused" or "SUPABASE_URL is missing"
- Check `.env.local` has correct Supabase URL and keys
- Make sure you copied from "Settings" → "API"

### Database tables not found
- Verify you ran the entire `01_database_schema.sql` script
- Check for error messages in Supabase SQL Editor

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

## 📞 Need Help?

1. Check the README.md in project root
2. Review IMPLEMENTATION_GUIDE.md for detailed info
3. Check Supabase documentation: https://supabase.com/docs
4. Check Next.js documentation: https://nextjs.org/docs

---

**That's it! Your budget control system is ready to use.** 🎉

The application is fully functional with:
- ✅ User authentication
- ✅ Project management
- ✅ Budget import & tracking
- ✅ Purchase management
- ✅ Dashboard & reports
- ✅ Real-time alerts
- ✅ Audit logging

Start managing your construction budgets efficiently today!
