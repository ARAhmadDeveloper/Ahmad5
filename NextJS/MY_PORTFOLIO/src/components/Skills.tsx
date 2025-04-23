
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ResumeBtn from './ui/ResumeBtn';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.skill-item');
      elements.forEach(element => {
        observer.observe(element);
      });
    }
    
    return () => {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll('.skill-item');
        elements.forEach(element => {
          observer.unobserve(element);
        });
      }
    };
  }, []);

  const skillsData: Skill[] = [
    { name: 'React.js', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', icon: '▲', color: 'from-slate-700 to-slate-900' },
    { name: 'Tailwind CSS', icon: '🌊', color: 'from-sky-400 to-sky-600' },
    { name: 'TypeScript', icon: '🔤', color: 'from-blue-500 to-blue-700' },
    { name: 'JavaScript', icon: '🟡', color: 'from-yellow-400 to-yellow-600' },
    { name: 'HTML5', icon: '🔠', color: 'from-orange-500 to-orange-700' },
    { name: 'CSS3', icon: '🎨', color: 'from-blue-500 to-blue-700' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-emerald-600' },
    { name: 'Mongoose', icon: '🦦', color: 'from-amber-600 to-red-600' },
    { name: 'Redux', icon: '🔄', color: 'from-indigo-400 to-purple-600' },
    { name: 'React-Native', icon: '📱', color: 'from-blue-400 to-indigo-500' },
    { name: 'REST APIs', icon: '🔌', color: 'from-gray-600 to-gray-800' },
    { name: 'Express.js', icon: '🚂', color: 'from-gray-400 to-gray-600' },
    { name: 'Git/GitHub', icon: '🐙', color: 'from-purple-500 to-purple-700' },
    { name: 'Figma', icon: '🎨', color: 'from-pink-500 to-pink-700' },
    { name: 'Postman', icon: '📬', color: 'from-orange-500 to-orange-700' },
    { name: 'Firebase', icon: '🔥', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Vercel', icon: '🚀', color: 'from-blue-500 to-blue-700' },
    { name: 'Netlify', icon: '🌐', color: 'from-green-500 to-green-700' },
    // { name: 'Heroku', icon: '🏰', color: 'from-purple-500 to-purple-700' },
    // { name: 'Socket.io', icon: '🔌', color: 'from-gray-600 to-gray-800' },
    // { name: 'GraphQL', icon: '📈', color: 'from-pink-500 to-pink-700' },
    // { name: 'WebSockets', icon: '🌐', color: 'from-blue-400 to-blue-600' },
    { name: 'Sass/SCSS', icon: '🧵', color: 'from-pink-400 to-pink-600' },
    { name: 'Bootstrap', icon: '🧰', color: 'from-purple-400 to-purple-600' },
    { name: 'Material UI', icon: '📦', color: 'from-blue-500 to-blue-700' },
    { name: 'Chakra UI', icon: '💎', color: 'from-teal-400 to-teal-600' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-background/70">
      <div className="section-container" ref={containerRef}>
        <div className="text-center mb-16 stagger-animation">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            MY EXPERTISE
          </span>
          <h2 className="heading-lg mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in modern web technologies focusing on the MERN stack and beyond.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              variants={itemVariants}
            >
              <div className="glass h-full rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/5">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${skill.color}`}>
                  <span className="text-2xl">{skill.icon}</span>
                </div>
                <h3 className="font-medium text-center">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-20">
          <div className="glass rounded-xl p-8 max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl shadow-primary/5">
            <h3 className="heading-md mb-6 text-center text-gradient">MERN Stack Expertise</h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center animate-float">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍃</span>
                </div>
                <h4 className="font-semibold">MongoDB</h4>
              </div>
              <div className="text-center animate-float" style={{ animationDelay: "0.2s" }}>
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🚂</span>
                </div>
                <h4 className="font-semibold">Express</h4>
              </div>
              <div className="text-center animate-float" style={{ animationDelay: "0.4s" }}>
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">⚛️</span>
                </div>
                <h4 className="font-semibold">React</h4>
              </div>
              <div className="text-center animate-float" style={{ animationDelay: "0.6s" }}>
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🟢</span>
                </div>
                <h4 className="font-semibold">Node.js</h4>
              </div>
              <div className="text-center animate-float" style={{ animationDelay: "0.8s" }}>
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🔤</span>
                </div>
                <h4 className="font-semibold">TypeScript</h4>
                </div>
              <div className="text-center animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🟡</span>
                </div>
                <h4 className="font-semibold">JavaScript</h4>
                </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Building full-stack applications using the MERN (MongoDB, Express, React, Node.js) stack, 
                creating responsive, scalable, and modern web experiences.
              </p>
<ResumeBtn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
