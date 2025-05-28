"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "../../components/ui/button";
import { cn } from "../lib/utils";

const mainNavLinks = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/functions", label: "Functions" },
  { href: "/contacts", label: "Contacts" },
];

const contactButtonLink = { href: "/contacts", label: "Contact" };

// Links for the mobile menu
const mobileNavLinks = [{ href: "/", label: "Home" }, ...mainNavLinks];

// Helper component for animated text
const AnimatedText = ({ text }: { text: string }) => {
  return (
    <>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block group-hover:animate-spell-letter-wave"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
};

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close mobile menu on route change
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClasses = (href: string) =>
    cn(
      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-secondary",
      pathname === href
        ? "bg-primary text-primary-foreground shadow-md"
        : "text-foreground hover:bg-accent hover:text-accent-foreground hover:shadow-sm"
    );

  const mobileLinkClasses = (href: string) =>
    cn(
      "block px-3 py-3 rounded-md text-base font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background",
      pathname === href
        ? "bg-primary text-primary-foreground"
        : "text-foreground hover:bg-accent hover:text-accent-foreground"
    );

  return (
    <nav className="bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Group: Logo and Brand Name */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-ring rounded-md p-1 group"
            >
              <Rocket size={32} className="text-primary" aria-hidden="true" />
              <span className="font-bold text-xl tracking-tight text-foreground">
                <AnimatedText text="2themoon.ai" />
              </span>
            </Link>
          </div>

          {/* Center Group: Desktop Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-1 bg-secondary p-1 rounded-full border border-border/50 shadow-inner">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(navLinkClasses(link.href), "group")}
                >
                  <AnimatedText text={link.label} />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Group: Desktop Contact Button + Mobile Menu Toggle */}
          <div className="flex-shrink-0 flex items-center">
            {/* Desktop Contact Button (No animation) */}
            <div className="hidden md:block">
              <Button
                asChild
                className="rounded-full px-6 py-2 text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                <Link href={contactButtonLink.href}>
                  <span>{contactButtonLink.label}</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden ml-2">
              <Button
                onClick={toggleMobileMenu}
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-primary hover:bg-transparent focus:ring-primary"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </Button>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Menu Overlay and Content */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-20 z-40 bg-background/80 backdrop-blur-md transition-opacity duration-300 ease-in-out",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleMobileMenu} // Close on overlay click
      />
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-20 z-40 bg-background shadow-xl transition-transform duration-300 ease-in-out",
          isMobileMenuOpen
            ? "transform translate-y-0"
            : "transform -translate-y-full pointer-events-none"
        )}
        style={{ maxHeight: "calc(100vh - 5rem)", overflowY: "auto" }} // 5rem is h-20 for navbar
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 border-t border-border">
          {mobileNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(mobileLinkClasses(link.href), "group")}
              onClick={() => setIsMobileMenuOpen(false)} // Close on link click
            >
              <AnimatedText text={link.label} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
