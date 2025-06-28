# ✨ Animated Border with Star & Falling Leaves Effect

A stunning Next.js project featuring an interactive animated border with a magical star that transforms into falling leaves on hover. Built with modern CSS animations and React.

![Project Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

## 🌟 Features

### ✨ Interactive Animations

- **Rotating Gradient Border**: Continuous conic gradient animation with vibrant colors
- **Animated Star**: Shiny star that moves around the border with glowing effects
- **Hover Effects**: Star destruction animation triggers falling leaves
- **Falling Leaves**: 6 unique leaves with different colors, timing, and rotation patterns

### 🎨 Visual Effects

- **Gradient Colors**: Pink, blue, cyan, yellow color scheme
- **Glow Effects**: Star with radial gradient and Gaussian blur
- **Color Transitions**: Leaves change hue and brightness while falling
- **Smooth Animations**: CSS keyframes with easing functions

### 🛠 Technical Highlights

- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **CSS-in-JS**: Styled-jsx for component-scoped styles
- **Responsive Design**: Mobile-friendly animations

## 🚀 Live Demo

Experience the magic: [Live Demo Link]

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/animated-border-project.git
   cd animated-border-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 How It Works

### Star Animation

The star follows a complex path around the border using CSS keyframes:

```css
@keyframes dot-move {
  0% {
    top: 0;
    left: 0;
  }
  25% {
    top: 0;
    left: calc(100% - 0.625rem);
  }
  50% {
    top: calc(100% - 0.625rem);
    left: calc(100% - 0.625rem);
  }
  75% {
    top: calc(100% - 0.625rem);
    left: 0;
  }
  100% {
    top: 0;
    left: 0;
  }
}
```

### Border Animation

The gradient border rotates continuously:

```css
@keyframes border-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

### Falling Leaves

Each leaf has unique properties:

- **Different start delays** (0.5s to 2s)
- **Varied fall durations** (3s to 3.8s)
- **Unique rotation patterns** (clockwise/counter-clockwise)
- **Color animations** with hue rotation

## 🎨 Customization

### Changing Colors

Modify the gradient colors in the border:

```jsx
bg-[conic-gradient(from_0deg_at_50%_50%,#ff00cc_0%,#3333ff_25%,#00ffcc_50%,#ffcc00_75%,#ff00cc_100%)]
```

### Adjusting Animation Speed

Change animation durations in the CSS:

```css
.animate-border-spin {
  animation: border-spin 3s linear infinite; /* Adjust 3s */
}
```

### Adding More Leaves

Duplicate leaf elements with different classes:

```jsx
<div className="absolute top-0 left-[X] w-[Y] h-[Y] group-hover:animate-leaf-fall-[N] opacity-0 group-hover:opacity-100">
```

## 📁 Project Structure

```
animated-border-project/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main component with animations
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md               # This file
```

## 🛠 Built With

- **[Next.js](https://nextjs.org/)** - React framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Styled-jsx](https://github.com/vercel/styled-jsx)** - CSS-in-JS
- **[SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)** - Vector graphics

## 🎭 Animation Breakdown

### 1. Border Animation

- **Type**: Conic gradient rotation
- **Duration**: 3 seconds
- **Easing**: Linear
- **Colors**: Pink → Blue → Cyan → Yellow → Pink

### 2. Star Movement

- **Type**: Path following
- **Duration**: 5 seconds
- **Pattern**: Square path around border
- **Effects**: Glow, shine, highlight

### 3. Star Destruction

- **Trigger**: Hover
- **Duration**: 2 seconds
- **Effects**: Scale, rotate, fade out

### 4. Falling Leaves

- **Count**: 6 leaves
- **Colors**: Green variations (#4ade80 to #14532d)
- **Effects**: Rotation, color change, staggered timing

## 🚀 Performance

- **Optimized CSS**: Efficient keyframe animations
- **Hardware Acceleration**: Transform-based animations
- **Minimal JavaScript**: Pure CSS animations
- **Responsive**: Works on all screen sizes

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **CSS Animations**: Inspired by modern web design trends
- **SVG Graphics**: Custom star and leaf shapes
- **Color Theory**: Carefully selected gradient combinations
- **User Experience**: Smooth hover interactions

## 📞 Contact

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Email**: your.email@example.com
- **Project Link**: [https://github.com/yourusername/animated-border-project](https://github.com/yourusername/animated-border-project)

---

<div align="center">

⭐ **Star this repository if you found it helpful!** ⭐

</div>
