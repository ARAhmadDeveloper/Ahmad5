import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const ResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; // put it in the public folder
    link.download = "My_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
      heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      heroRef.current.style.transform = `perspective(1000px) rotateY(${
        x * 5
      }deg) rotateX(${y * -5}deg)`;
    };

    const handleMouseLeave = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    };

    const element = heroRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
    }


    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-40"></div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              MERN Stack Developer
            </motion.span>
            <motion.h1
              className="heading-xl mb-6 text-balance"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Crafting <span className="text-gradient">Digital</span>{" "}
              Experiences
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              I'm a full-stack developer specializing in building exceptional
              digital experiences. Currently, I'm focused on building
              accessible, human-centered products.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <a href="#projects" className="button-primary">
                View Projects
              </a>
              <a href="#contact" className="button-secondary">
                Contact Me
              </a>
              <motion.a
                className="button-primary"
                initial={{ opacity: 0, scale: 0.9 }}
                onClick={ResumeDownload}
                style={{cursor: "pointer"}}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            ref={heroRef}
            className="lg:w-1/2 transition-transform duration-300 ease-out"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-75 animate-pulse-subtle"></div>
              <div className="glass rounded-2xl p-8 relative">
                <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute w-32 h-32 bg-primary/20 rounded-full blur-2xl -top-10 -left-10"></div>
                  <div className="absolute w-32 h-32 bg-secondary/20 rounded-full blur-2xl -bottom-10 -right-10"></div>

                  <motion.div
                    className="text-6xl font-bold text-primary relative z-10 animate-float"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: 0.8,
                    }}
                  >
                    <span className="text-gradient">&lt;/&gt;</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
