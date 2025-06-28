# 🚀 User Management System - Next.js + FastAPI

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![FastAPI](https://img.shields.io/badge/FastAPI-0.104.1-green?style=for-the-badge&logo=fastapi)

**A modern, responsive user management system built with Next.js frontend and FastAPI backend**

[![Demo](https://img.shields.io/badge/Live_Demo-View_Project-blue?style=for-the-badge&logo=vercel)](http://localhost:3000)
[![Backend](https://img.shields.io/badge/API_Docs-FastAPI-green?style=for-the-badge&logo=swagger)](http://localhost:8000/docs)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎯 Demo & Screenshots](#-demo--screenshots)
- [🏗️ Architecture](#️-architecture)
- [🚀 Getting Started](#-getting-started)
- [🔧 API Documentation](#-api-documentation)
- [🎨 UI Components](#-ui-components)
- [🛠️ Technologies Used](#️-technologies-used)
- [📁 Project Structure](#-project-structure)
- [🔍 Code Examples](#-code-examples)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [🔮 Future Enhancements](#-future-enhancements)
- [📝 License](#-license)

---

## ✨ Features

### 🎨 **Modern UI/UX**

- **Responsive Design**: Beautiful grid layout that adapts to all screen sizes
- **Gradient Backgrounds**: Eye-catching purple-to-blue gradients
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Glass Morphism**: Modern backdrop blur effects and transparency
- **Dark Mode Ready**: Prepared for future dark theme implementation
- **Accessibility**: WCAG compliant with proper ARIA labels

### 👥 **User Management**

- **Create Users**: Floating action button with modal form
- **Read Users**: Display users in attractive card layout
- **Update Users**: In-place editing with popup modal
- **Delete Users**: Soft delete with 10-second undo functionality
- **Password Toggle**: Show/hide password fields for security
- **Bulk Operations**: Ready for future multi-select functionality

### 🔧 **Technical Features**

- **Real-time Updates**: Instant UI updates after CRUD operations
- **Error Handling**: Comprehensive error management and user feedback
- **Loading States**: Smooth loading indicators and transitions
- **Form Validation**: Client-side validation with required fields
- **API Integration**: RESTful API communication with FastAPI backend
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized with Next.js App Router

### 🛡️ **Security & UX**

- **Password Security**: Hidden by default with toggle functionality
- **Undo Functionality**: 10-second countdown before permanent deletion
- **Input Sanitization**: Proper form handling and validation
- **Responsive Modals**: Mobile-friendly popup interfaces
- **Error Boundaries**: Graceful error handling

---

## 🎯 Demo & Screenshots

<div align="center">

### 🖥️ Desktop View

![Desktop Demo](https://via.placeholder.com/800x400/667eea/ffffff?text=Desktop+User+Management+Interface)

### 📱 Mobile View

![Mobile Demo](https://via.placeholder.com/400x600/764ba2/ffffff?text=Mobile+Responsive+Design)

### 🎨 UI Components

![UI Components](https://via.placeholder.com/600x300/4ecdc4/ffffff?text=Modern+UI+Components)

</div>

---

## 🏗️ Architecture

```
fetch-fastapi/
├── 📁 app/
│   ├── 📁 components/
│   │   ├── 🎯 CreateUserButton.tsx    # User creation modal
│   │   ├── 🗑️ DeleteUser.tsx          # Soft delete with undo
│   │   └── 📁 users/
│   │       └── 📄 page.tsx            # Main user management interface
│   ├── 📁 lib/
│   │   └── 🔧 api.ts                  # API utility functions
│   ├── 🎨 layout.tsx                  # Root layout with fonts
│   ├── 🏠 page.tsx                    # Home page
│   └── 🎨 globals.css                 # Global styles
├── 📁 public/                         # Static assets
├── ⚙️ tailwind.config.ts              # Tailwind configuration
├── 📦 package.json                    # Dependencies
└── 📖 README.md                       # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **FastAPI Backend** running on `http://localhost:8000`

### Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd fetch-fastapi
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_NAME=User Management System
```

---

## 🔧 API Documentation

### Base URL

```
http://localhost:8000
```

### Endpoints

| Method   | Endpoint      | Description       | Request Body              | Response            |
| -------- | ------------- | ----------------- | ------------------------- | ------------------- |
| `GET`    | `/users`      | Fetch all users   | -                         | `User[]`            |
| `POST`   | `/users`      | Create new user   | `{name, email, password}` | `User[]`            |
| `PUT`    | `/users/{id}` | Update user by ID | `{name, email, password}` | `User`              |
| `DELETE` | `/users/{id}` | Delete user by ID | -                         | `{message: string}` |

### Data Models

#### User Interface

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
```

#### API Response Example

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "password": "hashed_password"
}
```

### Error Handling

```typescript
// API Error Response
{
  "detail": "Error message description"
}
```

---

## 🎨 UI Components

### User Cards

- **Hover Effects**: Scale and shadow animations
- **Password Toggle**: Show/hide functionality with eye icon
- **Action Buttons**: Update and delete with color coding
- **Responsive Layout**: Adapts from 1 to 3 columns
- **Loading States**: Skeleton loading for better UX

### Create User Modal

- **Floating Action Button**: Fixed position with purple theme
- **Glass Morphism**: Backdrop blur and transparency
- **Form Validation**: Required field validation with real-time feedback
- **Loading States**: Button state management during submission

### Update User Modal

- **Full-screen Overlay**: Backdrop blur background
- **Pre-filled Forms**: Auto-populate with current data
- **Real-time Updates**: Instant UI refresh after save
- **Form Validation**: Client-side validation with error messages

### Delete Confirmation

- **Soft Delete**: 10-second countdown timer
- **Undo Functionality**: Restore deleted user with visual feedback
- **Visual Feedback**: Toast notification with countdown
- **Animation**: Smooth fade in/out transitions

---

## 🛠️ Technologies Used

### Frontend Stack

| Technology       | Version | Purpose                                |
| ---------------- | ------- | -------------------------------------- |
| **Next.js**      | 15.3.3  | React framework with App Router        |
| **React**        | 19.0.0  | UI library                             |
| **TypeScript**   | 5.0     | Type safety and development experience |
| **Tailwind CSS** | 4.0     | Utility-first CSS framework            |
| **Geist Font**   | Latest  | Modern typography                      |

### Backend Integration

| Technology      | Purpose                       |
| --------------- | ----------------------------- |
| **FastAPI**     | Python web framework          |
| **RESTful API** | Standard HTTP methods         |
| **JSON**        | Data exchange format          |
| **CORS**        | Cross-origin resource sharing |

### Development Tools

| Tool           | Purpose                         |
| -------------- | ------------------------------- |
| **Turbopack**  | Fast bundler for development    |
| **ESLint**     | Code linting and formatting     |
| **PostCSS**    | CSS processing and optimization |
| **TypeScript** | Static type checking            |

---

## 📁 Project Structure

### Detailed File Breakdown

```
fetch-fastapi/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 components/               # Reusable UI components
│   │   ├── 🎯 CreateUserButton.tsx  # User creation modal component
│   │   ├── 🗑️ DeleteUser.tsx        # Soft delete component
│   │   └── 📁 users/                # User-specific components
│   │       └── 📄 page.tsx          # Main user management page
│   ├── 📁 lib/                      # Utility functions
│   │   └── 🔧 api.ts                # API communication utilities
│   ├── 🎨 layout.tsx                # Root layout component
│   ├── 🏠 page.tsx                  # Home page component
│   ├── 🎨 globals.css               # Global CSS styles
│   └── 📱 favicon.ico               # App icon
├── 📁 public/                       # Static assets
│   ├── 🖼️ next.svg                  # Next.js logo
│   ├── 🖼️ vercel.svg                # Vercel logo
│   └── 🖼️ globe.svg                 # Globe icon
├── ⚙️ tailwind.config.ts            # Tailwind CSS configuration
├── ⚙️ next.config.ts                # Next.js configuration
├── ⚙️ tsconfig.json                 # TypeScript configuration
├── ⚙️ postcss.config.mjs            # PostCSS configuration
├── 📦 package.json                  # Project dependencies
├── 📦 package-lock.json             # Dependency lock file
└── 📖 README.md                     # Project documentation
```

---

## 🔍 Code Examples

### User Interface Component

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:8000/users");
      const data = await res.json();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };
}
```

### API Integration

```typescript
// Create user
const handleCreateUser = async (newUser: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await fetch("http://localhost:8000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
  return res.json();
};

// Update user
const handleUpdateUser = async (id: number, userData: Partial<User>) => {
  const res = await fetch(`http://localhost:8000/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};
```

### Styling with Tailwind CSS

```tsx
<div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-200 py-12 px-4 sm:px-6 lg:px-8">
  <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
    📋 User Directory
  </h1>

  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {users.map((user) => (
      <li
        key={user.id}
        className="bg-white border border-gray-300 rounded-xl shadow-lg p-6 transition hover:shadow-2xl hover:scale-[1.01]"
      >
        {/* User card content */}
      </li>
    ))}
  </ul>
</div>
```

---

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect Repository**

   - Push your code to GitHub
   - Connect repository to Vercel

2. **Configure Environment Variables**

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

3. **Deploy**
   - Vercel will automatically build and deploy
   - Get a production URL instantly

### Other Deployment Options

#### Netlify

```bash
npm run build
# Deploy the 'out' directory
```


### Environment Variables

| Variable               | Description      | Default                  |
| ---------------------- | ---------------- | ------------------------ |
| `NEXT_PUBLIC_API_URL`  | Backend API URL  | `http://localhost:8000`  |
| `NEXT_PUBLIC_APP_NAME` | Application name | `User Management System` |

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### Development Setup

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Style Guidelines

- Use TypeScript for all new code
- Follow ESLint configuration
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

### Pull Request Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed
```

---

## 🔮 Future Enhancements

### 🚀 **Planned Features**

- [ ] **Authentication System**: JWT-based login/logout with refresh tokens
- [ ] **User Roles & Permissions**: Admin, moderator, and regular user roles
- [ ] **Advanced Search & Filter**: Real-time search with multiple filters
- [ ] **Bulk Operations**: Select multiple users for batch actions
- [ ] **Data Export**: Export user data to CSV, JSON, or Excel
- [ ] **Real-time Updates**: WebSocket integration for live updates
- [ ] **Dark Mode**: Toggle between light and dark themes
- [ ] **Pagination**: Handle large user datasets efficiently
- [ ] **Image Upload**: User profile picture functionality

### 🎨 **UI/UX Improvements**

- [ ] **Skeleton Loading**: Better loading states for all components
- [ ] **Toast Notifications**: Improved notification system
- [ ] **Keyboard Shortcuts**: Power user keyboard navigation
- [ ] **Drag & Drop**: Reorder users with drag and drop
- [ ] **Infinite Scroll**: Load more users as you scroll
- [ ] **Mobile App**: React Native or PWA version

### 🔧 **Technical Enhancements**

- [ ] **Caching**: Redis integration for better performance
- [ ] **Rate Limiting**: API rate limiting for security
- [ ] **Logging**: Comprehensive logging system
- [ ] **Monitoring**: Application performance monitoring
- [ ] **Testing**: Unit, integration, and E2E tests
- [ ] **CI/CD**: Automated testing and deployment

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### License Summary

- ✅ **Commercial Use**: Allowed
- ✅ **Modification**: Allowed
- ✅ **Distribution**: Allowed
- ✅ **Private Use**: Allowed
- ❌ **Liability**: Not provided
- ❌ **Warranty**: Not provided

---

## 🐛 Known Issues & Solutions

### Common Issues

| Issue                   | Solution                                            |
| ----------------------- | --------------------------------------------------- |
| **Backend not running** | Start FastAPI server on `http://localhost:8000`     |
| **CORS errors**         | Ensure backend has CORS middleware configured       |
| **TypeScript errors**   | Run `npm install` to ensure all types are installed |
| **Build failures**      | Clear `.next` folder and run `npm run build`        |

### Performance Tips

- Use React.memo for expensive components
- Implement proper loading states
- Optimize images and assets
- Enable gzip compression

---

<div align="center" style="margin-top: 50px; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); border-radius: 25px; color: white; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">

## 👨‍💻 **Developer**

<div style="font-size: 3rem; font-weight: bold; margin: 25px 0; text-shadow: 3px 3px 6px rgba(0,0,0,0.3);">
  <span style="background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: gradient 3s ease infinite;">ARAhmadDeveloper</span>
</div>

<div style="font-size: 1.2rem; opacity: 0.95; margin-bottom: 25px; font-weight: 500;">
  🚀 Full Stack Developer | 🎨 UI/UX Specialist | ⚡ Next.js Expert
</div>

<div style="font-size: 1rem; opacity: 0.8; margin-bottom: 30px; max-width: 600px; margin-left: auto; margin-right: auto;">
  Passionate about creating beautiful, functional, and scalable web applications. 
  Specializing in modern JavaScript frameworks, responsive design, and user experience optimization.
</div>

<div style="display: flex; justify-content: center; gap: 25px; margin-top: 30px; flex-wrap: wrap;">
  <a href="https://github.com/ARAhmadDeveloper" style="color: white; text-decoration: none; padding: 12px 24px; border: 2px solid white; border-radius: 30px; transition: all 0.3s ease; font-weight: 500; display: flex; align-items: center; gap: 8px;">
    🐙 GitHub
  </a>
  <a href="https://linkedin.com/in/arahmaddeveloper" style="color: white; text-decoration: none; padding: 12px 24px; border: 2px solid white; border-radius: 30px; transition: all 0.3s ease; font-weight: 500; display: flex; align-items: center; gap: 8px;">
    💼 LinkedIn
  </a>
  <a href="mailto:arahmaddeveloper@gmail.com" style="color: white; text-decoration: none; padding: 12px 24px; border: 2px solid white; border-radius: 30px; transition: all 0.3s ease; font-weight: 500; display: flex; align-items: center; gap: 8px;">
    📧 Email
  </a>
  <a href="https://twitter.com/arahmaddeveloper" style="color: white; text-decoration: none; padding: 12px 24px; border: 2px solid white; border-radius: 30px; transition: all 0.3s ease; font-weight: 500; display: flex; align-items: center; gap: 8px;">
    🐦 Twitter
  </a>
</div>

<div style="margin-top: 30px; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 15px; backdrop-blur: 10px;">
  <div style="font-size: 1.1rem; font-weight: 600; margin-bottom: 15px;">🛠️ Tech Stack</div>
  <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
    <span style="background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px; font-size: 0.9rem;">React</span>
    <span style="background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px; font-size: 0.9rem;">Next.js</span>
    <span style="background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px; font-size: 0.9rem;">TypeScript</span>
    <span style="background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px; font-size: 0.9rem;">Tailwind CSS</span>
    <span style="background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px; font-size: 0.9rem;">FastAPI</span>
    <span style="background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px; font-size: 0.9rem;">Python</span>
  </div>
</div>

</div>

---

<div align="center" style="margin-top: 40px; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; color: white;">

### 🌟 **Support the Project**

<div style="display: flex; justify-content: center; gap: 20px; margin-top: 15px; flex-wrap: wrap;">
  <a href="https://github.com/ARAhmadDeveloper/fetch-fastapi" style="color: white; text-decoration: none; padding: 10px 20px; border: 2px solid white; border-radius: 25px; transition: all 0.3s ease; font-weight: 500;">
    ⭐ Star Repository
  </a>
  <a href="https://github.com/ARAhmadDeveloper/fetch-fastapi/fork" style="color: white; text-decoration: none; padding: 10px 20px; border: 2px solid white; border-radius: 25px; transition: all 0.3s ease; font-weight: 500;">
    🔀 Fork Project
  </a>
  <a href="https://github.com/ARAhmadDeveloper/fetch-fastapi/issues" style="color: white; text-decoration: none; padding: 10px 20px; border: 2px solid white; border-radius: 25px; transition: all 0.3s ease; font-weight: 500;">
    🐛 Report Issues
  </a>
</div>

</div>

---

<div align="center" style="margin-top: 30px; font-size: 0.9rem; color: #666;">

⭐ **Star this repository if you found it helpful!** ⭐

**Made with ❤️ by ARAhmadDeveloper**

</div>
