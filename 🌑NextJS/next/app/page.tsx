"use client";

import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--background)]">
      <div className="relative w-64 h-64 rounded-md overflow-hidden group">
        {/* Animated gradient border */}
        <div className="absolute inset-0 z-0 rounded-md pointer-events-none border-4 border-transparent bg-[conic-gradient(from_0deg_at_50%_50%,#ff00cc_0%,#3333ff_25%,#00ffcc_50%,#ffcc00_75%,#ff00cc_100%)] animate-border-spin" />
        {/* Content box with padding to show border */}
        <div className="relative z-10 w-full h-full rounded-md bg-[var(--background)] flex items-center justify-center">
          {/* Animated shiny rising star */}
          <div
            className="absolute w-2.5 h-2.5 animate-dot-move group-hover:animate-star-destroy"
            style={{ zIndex: 20 }}
          >
            {/* Star shape using SVG */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block"
            >
              <g filter="url(#glow)">
                <polygon
                  points="10,2 12.09,7.36 18,7.64 13.5,11.47 15.18,17.14 10,13.77 4.82,17.14 6.5,11.47 2,7.64 7.91,7.36"
                  fill="url(#star-gradient)"
                  className="star-shine"
                />
                {/* Add a white highlight for extra shine */}
                <ellipse
                  cx="10"
                  cy="6"
                  rx="1.2"
                  ry="0.5"
                  fill="white"
                  opacity="0.8"
                  className="star-highlight"
                />
              </g>
              <defs>
                <radialGradient id="star-gradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fffbe6" />
                  <stop offset="60%" stopColor="#ffcc00" />
                  <stop offset="100%" stopColor="#ff00cc" />
                </radialGradient>
                <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </div>

          {/* Falling leaves container */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Leaf 1 */}
            <div className="absolute top-0 left-4 w-3 h-3 group-hover:animate-leaf-fall-1 opacity-0 group-hover:opacity-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.5 2 6 4.5 6 8C6 12 9 16 12 22C15 16 18 12 18 8C18 4.5 15.5 2 12 2Z"
                  fill="#4ade80"
                  className="leaf-color-1"
                />
              </svg>
            </div>
            {/* Leaf 2 */}
            <div className="absolute top-0 left-16 w-4 h-4 group-hover:animate-leaf-fall-2 opacity-0 group-hover:opacity-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.5 2 6 4.5 6 8C6 12 9 16 12 22C15 16 18 12 18 8C18 4.5 15.5 2 12 2Z"
                  fill="#22c55e"
                  className="leaf-color-2"
                />
              </svg>
            </div>
            {/* Leaf 3 */}
            <div className="absolute top-0 left-28 w-3.5 h-3.5 group-hover:animate-leaf-fall-3 opacity-0 group-hover:opacity-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.5 2 6 4.5 6 8C6 12 9 16 12 22C15 16 18 12 18 8C18 4.5 15.5 2 12 2Z"
                  fill="#16a34a"
                  className="leaf-color-3"
                />
              </svg>
            </div>
            {/* Leaf 4 */}
            <div className="absolute top-0 left-40 w-3 h-3 group-hover:animate-leaf-fall-4 opacity-0 group-hover:opacity-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.5 2 6 4.5 6 8C6 12 9 16 12 22C15 16 18 12 18 8C18 4.5 15.5 2 12 2Z"
                  fill="#15803d"
                  className="leaf-color-4"
                />
              </svg>
            </div>
            {/* Leaf 5 */}
            <div className="absolute top-0 left-52 w-4 h-4 group-hover:animate-leaf-fall-5 opacity-0 group-hover:opacity-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.5 2 6 4.5 6 8C6 12 9 16 12 22C15 16 18 12 18 8C18 4.5 15.5 2 12 2Z"
                  fill="#166534"
                  className="leaf-color-5"
                />
              </svg>
            </div>
            {/* Leaf 6 */}
            <div className="absolute top-0 left-64 w-3.5 h-3.5 group-hover:animate-leaf-fall-6 opacity-0 group-hover:opacity-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.5 2 6 4.5 6 8C6 12 9 16 12 22C15 16 18 12 18 8C18 4.5 15.5 2 12 2Z"
                  fill="#14532d"
                  className="leaf-color-6"
                />
              </svg>
            </div>
          </div>

          <h1 className="absolute inset-0 p-5 flex items-center justify-center text-xl font-bold text-[var(--foreground)] pointer-events-none">
            Animated Border using CSS
          </h1>
        </div>
      </div>
      <style jsx global>{`
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
        .animate-dot-move {
          animation: dot-move 5s linear infinite;
        }
        @keyframes border-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-border-spin {
          animation: border-spin 3s linear infinite;
        }
        /* Shiny star animation */
        @keyframes star-shine {
          0%,
          100% {
            filter: brightness(1.2) drop-shadow(0 0 4px #fffbe6);
          }
          50% {
            filter: brightness(2.2) drop-shadow(0 0 12px #fffbe6)
              drop-shadow(0 0 8px #ffcc00);
          }
        }
        .star-shine {
          animation: star-shine 1.2s ease-in-out infinite;
        }
        @keyframes highlight-move {
          0%,
          100% {
            opacity: 0.8;
            transform: translateY(0) scaleX(1);
          }
          50% {
            opacity: 1;
            transform: translateY(-2px) scaleX(1.3);
          }
        }
        .star-highlight {
          animation: highlight-move 1.2s ease-in-out infinite;
        }
        /* Star destroy animation on hover */
        @keyframes star-destroy {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(3) rotate(180deg);
            opacity: 0.7;
          }
          100% {
            transform: scale(5) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-star-destroy {
          animation: star-destroy 2s ease-in-out forwards;
        }

        /* Falling leaves animations */
        @keyframes leaf-fall-1 {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(280px) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes leaf-fall-2 {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: translateY(280px) rotate(-360deg);
            opacity: 0;
          }
        }
        @keyframes leaf-fall-3 {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(280px) rotate(720deg);
            opacity: 0;
          }
        }
        @keyframes leaf-fall-4 {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          100% {
            transform: translateY(280px) rotate(-720deg);
            opacity: 0;
          }
        }
        @keyframes leaf-fall-5 {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translateY(280px) rotate(1080deg);
            opacity: 0;
          }
        }
        @keyframes leaf-fall-6 {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          35% {
            opacity: 1;
          }
          100% {
            transform: translateY(280px) rotate(-1080deg);
            opacity: 0;
          }
        }

        .animate-leaf-fall-1 {
          animation: leaf-fall-1 3s ease-in-out forwards;
          animation-delay: 0.5s;
        }
        .animate-leaf-fall-2 {
          animation: leaf-fall-2 3.5s ease-in-out forwards;
          animation-delay: 0.8s;
        }
        .animate-leaf-fall-3 {
          animation: leaf-fall-3 3.2s ease-in-out forwards;
          animation-delay: 1.1s;
        }
        .animate-leaf-fall-4 {
          animation: leaf-fall-4 3.8s ease-in-out forwards;
          animation-delay: 1.4s;
        }
        .animate-leaf-fall-5 {
          animation: leaf-fall-5 3.3s ease-in-out forwards;
          animation-delay: 1.7s;
        }
        .animate-leaf-fall-6 {
          animation: leaf-fall-6 3.6s ease-in-out forwards;
          animation-delay: 2s;
        }

        /* Leaf color animations */
        @keyframes leaf-color-1 {
          0%,
          100% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(30deg) brightness(1.2);
          }
        }
        @keyframes leaf-color-2 {
          0%,
          100% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(-30deg) brightness(1.1);
          }
        }
        @keyframes leaf-color-3 {
          0%,
          100% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(45deg) brightness(1.3);
          }
        }
        @keyframes leaf-color-4 {
          0%,
          100% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(-45deg) brightness(1.1);
          }
        }
        @keyframes leaf-color-5 {
          0%,
          100% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(60deg) brightness(1.2);
          }
        }
        @keyframes leaf-color-6 {
          0%,
          100% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(-60deg) brightness(1.1);
          }
        }

        .leaf-color-1 {
          animation: leaf-color-1 2s ease-in-out infinite;
        }
        .leaf-color-2 {
          animation: leaf-color-2 2.2s ease-in-out infinite;
        }
        .leaf-color-3 {
          animation: leaf-color-3 2.4s ease-in-out infinite;
        }
        .leaf-color-4 {
          animation: leaf-color-4 2.6s ease-in-out infinite;
        }
        .leaf-color-5 {
          animation: leaf-color-5 2.8s ease-in-out infinite;
        }
        .leaf-color-6 {
          animation: leaf-color-6 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
