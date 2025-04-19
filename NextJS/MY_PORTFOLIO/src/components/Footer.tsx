const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-display font-bold">
              arahmad <span className="text-primary">.</span>
            </a>
            <p className="mt-4 text-background/80 max-w-md">
              A passionate MERN stack developer focused on creating elegant,
              responsive, and user-friendly applications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/80 text-sm">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/ArAhmadRaza/ahmad5"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full flex items-center justify-center text-background/80 hover:text-background hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/arahmaddeveloper/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full flex items-center justify-center text-background/80 hover:text-background hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/arahmaddeveloper/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full flex items-center justify-center text-background/80 hover:text-background hover:bg-white/10 transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 3.25a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5H17.25a.75.75 0 0 1-.75-.75ZM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/ARAhmaddeveloper/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full flex items-center justify-center text-background/80 hover:text-background hover:bg-white/10 transition-colors"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54v-2.2c0-2.507 1.492-3.89 3.785-3.89 1.098 0 2.238.195 2.238.195v2.463h-1.26c-1.24 0-1.626.776-1.626 1.572v1.86h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
