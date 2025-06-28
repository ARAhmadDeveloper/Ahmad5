# 🚀 Next.js Dashboard Application

A modern, full-stack dashboard application built with **Next.js 15**, featuring authentication, real-time data visualization, and comprehensive invoice management system.

![Next.js](https://img.shields.io/badge/Next.js-15.4.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue?style=for-the-badge&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-3.4.6-blue?style=for-the-badge&logo=postgresql)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🔐 Authentication & Security
- **NextAuth.js** integration with credential-based authentication
- Secure password hashing with bcrypt
- Protected routes with middleware
- Role-based access control

### 📊 Dashboard Analytics
- Real-time revenue charts and metrics
- Interactive data visualization
- Responsive card layouts with key performance indicators
- Latest invoices overview

### 💼 Invoice Management
- **CRUD operations** for invoices
- Advanced search and filtering capabilities
- Pagination support
- Status tracking (Pending/Paid)
- Customer association

### 👥 Customer Management
- Customer profile management
- Invoice history per customer
- Customer analytics and insights
- Profile image support

### 🎨 Modern UI/UX
- **Tailwind CSS** for responsive design
- **Heroicons** for consistent iconography
- **Framer Motion** for smooth animations
- Mobile-first responsive design
- Dark mode ready components

### 🛠️ Technical Excellence
- **TypeScript** for type safety
- **Server Actions** for form handling
- **PostgreSQL** with optimized queries
- **Zod** for schema validation
- **React Server Components** for performance

## 🏗️ Project Structure

```
nextjs-dashboard/
├── app/
│   ├── dashboard/           # Main dashboard routes
│   │   ├── admin/          # Admin panel
│   │   ├── customer/       # Customer management
│   │   ├── invoices/       # Invoice management
│   │   ├── login/          # Authentication
│   │   └── not-authorized/ # Access control
│   ├── lib/                # Utility functions & data
│   ├── ui/                 # Reusable UI components
│   └── components/         # Global components
├── public/                 # Static assets
├── auth.config.ts          # NextAuth configuration
├── auth.ts                 # Authentication setup
└── middleware.ts           # Route protection
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **PostgreSQL** database
- **pnpm** (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs-dashboard
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file:
   ```env
   POSTGRES_URL="postgresql://username:password@localhost:5432/dashboard_db"
   AUTH_SECRET="your-secret-key-here"
   ```

4. **Database Setup**
   ```bash
   # Start your PostgreSQL server
   # Then seed the database with sample data
   curl http://localhost:3000/seed
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Default Login Credentials
- **Email:** `user@nextmail.com`
- **Password:** `123456`

## 🎯 Key Features Deep Dive

### 📈 Real-time Dashboard
- **Revenue Analytics**: Monthly revenue tracking with interactive charts
- **KPI Cards**: Total invoices, customers, collected, and pending amounts
- **Latest Invoices**: Real-time updates of recent transactions

### 🔍 Advanced Search & Filtering
- **Multi-field Search**: Search across customer names, emails, amounts, and dates
- **Status Filtering**: Filter by invoice status (pending/paid)
- **Pagination**: Efficient data loading with page navigation

### 🛡️ Security Features
- **Route Protection**: Middleware-based authentication
- **Password Security**: Bcrypt hashing for user passwords
- **Session Management**: Secure session handling with NextAuth.js

### 📱 Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Progressive Enhancement**: Works without JavaScript
- **Accessibility**: ARIA labels and semantic HTML

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | Full-stack React framework | 15.4.0 |
| **React** | UI library | Latest |
| **TypeScript** | Type safety | 5.7.3 |
| **PostgreSQL** | Database | 3.4.6 |
| **NextAuth.js** | Authentication | 5.0.0-beta.28 |
| **Tailwind CSS** | Styling | 3.4.17 |
| **Zod** | Schema validation | 3.25.17 |
| **Framer Motion** | Animations | 12.15.0 |
| **Heroicons** | Icons | 2.2.0 |

## 📊 Database Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);
```

### Customers Table
```sql
CREATE TABLE customers (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL
);
```

### Invoices Table
```sql
CREATE TABLE invoices (
  id UUID PRIMARY KEY,
  customer_id UUID REFERENCES customers(id),
  amount INT NOT NULL,
  status VARCHAR(255) CHECK (status IN ('pending', 'paid')),
  date DATE NOT NULL
);
```

## 🎨 UI Components

### Reusable Components
- **Cards**: Dashboard metrics display
- **Tables**: Data presentation with sorting
- **Forms**: Validated input forms with error handling
- **Charts**: Revenue visualization
- **Navigation**: Responsive sidebar navigation

### Design System
- **Color Palette**: Consistent brand colors
- **Typography**: Custom fonts (Lusitana, Roboto)
- **Spacing**: Tailwind-based spacing system
- **Icons**: Heroicons integration

## 🔧 Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server with Turbopack

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
```

### Code Quality
- **ESLint**: Code linting with Next.js configuration
- **TypeScript**: Strict type checking
- **Prettier**: Code formatting (recommended)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Compatible with Next.js
- **Railway**: Easy PostgreSQL integration
- **DigitalOcean**: App Platform support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for the deployment platform
- **Tailwind CSS** for the utility-first CSS framework
- **Heroicons** for the beautiful icon set

---

<div align="center">
  <p>Made with ❤️ using Next.js</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
