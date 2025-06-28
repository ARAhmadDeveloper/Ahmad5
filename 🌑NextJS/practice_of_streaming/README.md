# 🚀 Next.js Streaming Practice - Team Roster Showcase

A modern, responsive web application demonstrating Next.js 15 streaming capabilities with React 19, featuring a beautiful team roster display with progressive loading and smooth animations.

![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🚀 Next.js 15 Streaming**: Real-time progressive loading with Suspense boundaries
- **🎨 Modern UI/UX**: Beautiful gradient backgrounds with glassmorphism effects
- **⚡ Performance Optimized**: Turbopack for lightning-fast development
- **📱 Responsive Design**: Mobile-first approach with responsive grid layouts
- **🔄 Loading States**: Elegant skeleton loading with smooth animations
- **🎯 TypeScript**: Full type safety throughout the application
- **🌈 Tailwind CSS 4**: Latest styling with custom animations
- **📊 Real Data**: Fetches user data from JSONPlaceholder API

## 🎯 Demo

Experience the streaming magic! Each user card loads progressively with individual loading states, creating a smooth and engaging user experience.

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)
- **Development**: Turbopack for enhanced performance
- **API**: JSONPlaceholder for demo data

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd practice_of_streaming
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
practice_of_streaming/
├── app/
│   ├── users/
│   │   ├── UserCard.tsx          # Individual user card component
│   │   ├── UserCardSkeleton.tsx  # Loading skeleton for user cards
│   │   ├── userspage.tsx         # Main users page with streaming
│   │   └── loading.tsx           # Page-level loading component
│   ├── globals.css               # Global styles with Tailwind
│   ├── layout.tsx                # Root layout with fonts
│   └── page.tsx                  # Home page
├── public/                       # Static assets
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Key Components

### UserCard Component

- **Streaming Simulation**: Random loading delays to demonstrate streaming
- **Interactive Elements**: Hover effects and smooth transitions
- **Contact Links**: Direct email and website links

### UserCardSkeleton

- **Pulse Animation**: Elegant loading state with Tailwind animations
- **Responsive Design**: Adapts to different screen sizes
- **Glassmorphism**: Modern backdrop blur effects

### UsersPage

- **Suspense Boundaries**: Individual card streaming with fallbacks
- **Grid Layout**: Responsive grid system (1-4 columns based on screen size)
- **API Integration**: Fetches data from JSONPlaceholder

## 🎭 Animations & Effects

- **Fade-in Animations**: Staggered card appearances
- **Hover Transforms**: Scale effects on card hover
- **Gradient Backgrounds**: Dynamic slate color schemes
- **Glassmorphism**: Backdrop blur with transparency
- **Smooth Transitions**: 300ms ease-out transitions

## 🔧 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🌟 Performance Features

- **Streaming SSR**: Progressive loading with React Suspense
- **Turbopack**: Faster development builds
- **Optimized Fonts**: Google Fonts with proper loading
- **No Caching**: Demo mode with fresh data on each load
- **Responsive Images**: Optimized for all devices

## 🎯 Learning Objectives

This project demonstrates:

- Next.js 15 streaming capabilities
- React Suspense boundaries
- Progressive loading patterns
- Modern CSS with Tailwind 4
- TypeScript best practices
- Responsive design principles

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the demo API
- [Vercel](https://vercel.com/) for the deployment platform

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ and ☕ by [Your Name]
