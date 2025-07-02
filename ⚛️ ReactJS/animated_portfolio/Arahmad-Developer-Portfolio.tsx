// // The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// import React, { useState, useEffect, useRef } from 'react';
// import * as echarts from 'echarts';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// const App: React.FC = () => {
// // Add new animations
// const styles = `
// @keyframes gradient-x {
// 0% { background-position: 0% 50%; }
// 50% { background-position: 100% 50%; }
// 100% { background-position: 0% 50%; }
// }
// @keyframes float {
// 0% { transform: translateY(0px); }
// 50% { transform: translateY(-20px); }
// 100% { transform: translateY(0px); }
// }
// @keyframes float-delay {
// 0% { transform: translateY(-20px); }
// 50% { transform: translateY(0px); }
// 100% { transform: translateY(-20px); }
// }
// @keyframes float-slow {
// 0% { transform: translateY(-10px); }
// 50% { transform: translateY(10px); }
// 100% { transform: translateY(-10px); }
// }
// @keyframes slow-zoom {
// 0% { transform: scale(1); }
// 50% { transform: scale(1.1); }
// 100% { transform: scale(1); }
// }
// @keyframes fadeIn {
// 0% { opacity: 0; }
// 100% { opacity: 1; }
// }
// @keyframes fadeOut {
// 0% { opacity: 1; }
// 100% { opacity: 0; }
// }
// @keyframes typewriter {
// from { width: 0; }
// to { width: 100%; }
// }
// .animate-gradient-x {
// background-size: 200% 200%;
// animation: gradient-x 15s ease infinite;
// }
// .animate-float {
// animation: float 6s ease-in-out infinite;
// }
// .animate-float-delay {
// animation: float-delay 8s ease-in-out infinite;
// }
// .animate-float-slow {
// animation: float-slow 10s ease-in-out infinite;
// }
// .animate-slow-zoom {
// animation: slow-zoom 20s ease-in-out infinite;
// }
// .animate-fadeIn {
// animation: fadeIn 1.5s ease-in-out forwards;
// }
// .animate-fadeOut {
// animation: fadeOut 1.5s ease-in-out forwards;
// }
// .animate-typewriter {
// overflow: hidden;
// white-space: nowrap;
// animation: typewriter 3.5s steps(40) 1s forwards;
// }
// `;
// useEffect(() => {
// // Add styles to head
// const styleSheet = document.createElement("style");
// styleSheet.innerText = styles;
// document.head.appendChild(styleSheet);
// return () => {
// document.head.removeChild(styleSheet);
// };
// }, []);
// const [loading, setLoading] = useState(true);
// const [typedText, setTypedText] = useState('');
// const [loadingProgress, setLoadingProgress] = useState(0);
// const [activeFilter, setActiveFilter] = useState('all');
// const [isMenuOpen, setIsMenuOpen] = useState(false);
// const [showScrollTop, setShowScrollTop] = useState(false);
// const [isScrolled, setIsScrolled] = useState(false);
// const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
// const [textIndex, setTextIndex] = useState(0);
// const skillsChartRef = useRef<HTMLDivElement>(null);
// const cursorRef = useRef<HTMLDivElement>(null);
// const fullName = 'arahmaddeveloper';
// const devTexts = [
// "Building sleek web & mobile experiences",
// "Full-Stack Developer & Digital Craftsman",
// "Clean code, smooth UI, modern tech",
// "From concept to deployment"
// ];
// // Text rotation effect
// useEffect(() => {
// const interval = setInterval(() => {
// setTextIndex((prevIndex) => (prevIndex + 1) % devTexts.length);
// }, 5000);
// return () => clearInterval(interval);
// }, []);
// // Typing effect for loading screen
// useEffect(() => {
// if (loading) {
// let i = 0;
// const typingInterval = setInterval(() => {
// if (i < fullName.length) {
// setTypedText(fullName.substring(0, i + 1));
// i++;
// } else {
// clearInterval(typingInterval);
// }
// }, 150);
// // Simulate loading progress
// const progressInterval = setInterval(() => {
// setLoadingProgress(prev => {
// const newProgress = prev + 1;
// if (newProgress >= 100) {
// clearInterval(progressInterval);
// setTimeout(() => {
// setLoading(false);
// }, 500);
// return 100;
// }
// return newProgress;
// });
// }, 30);
// return () => {
// clearInterval(typingInterval);
// clearInterval(progressInterval);
// };
// }
// }, [loading]);
// // Scroll to top button visibility and navbar background
// useEffect(() => {
// const handleScroll = () => {
// if (window.scrollY > 300) {
// setShowScrollTop(true);
// } else {
// setShowScrollTop(false);
// }
// if (window.scrollY > 50) {
// setIsScrolled(true);
// } else {
// setIsScrolled(false);
// }
// };
// window.addEventListener('scroll', handleScroll);
// return () => window.removeEventListener('scroll', handleScroll);
// }, []);
// // Custom cursor effect
// useEffect(() => {
// const handleMouseMove = (e: MouseEvent) => {
// setCursorPosition({ x: e.clientX, y: e.clientY });
// };
// window.addEventListener('mousemove', handleMouseMove);
// return () => window.removeEventListener('mousemove', handleMouseMove);
// }, []);
// // Initialize skills chart
// useEffect(() => {
// if (!loading && skillsChartRef.current) {
// const chart = echarts.init(skillsChartRef.current);
// const skillsData = [
// {
// name: 'JavaScript',
// value: 90,
// detail: {
// years: 6,
// projects: 45,
// certifications: ['Advanced JS', 'ES6+'],
// description: 'Expert in modern JavaScript development including ES6+ features, async programming, and design patterns.'
// }
// },
// {
// name: 'React',
// value: 95,
// detail: {
// years: 4,
// projects: 38,
// certifications: ['React Advanced', 'Redux'],
// description: 'Specialized in building complex React applications with state management and performance optimization.'
// }
// },
// {
// name: 'Node.js',
// value: 85,
// detail: {
// years: 3,
// projects: 25,
// certifications: ['Node.js Developer'],
// description: 'Experienced in building scalable backend services and RESTful APIs using Node.js.'
// }
// },
// {
// name: 'UI/UX',
// value: 80,
// detail: {
// years: 4,
// projects: 30,
// certifications: ['UI/UX Design'],
// description: 'Skilled in creating user-centered designs and implementing modern UI/UX principles.'
// }
// },
// {
// name: 'CSS/SCSS',
// value: 92,
// detail: {
// years: 6,
// projects: 50,
// certifications: ['Advanced CSS', 'SCSS Master'],
// description: 'Expert in responsive design, animations, and modern CSS frameworks.'
// }
// },
// {
// name: 'TypeScript',
// value: 88,
// detail: {
// years: 3,
// projects: 28,
// certifications: ['TypeScript Pro'],
// description: 'Proficient in TypeScript development with focus on type safety and scalable applications.'
// }
// }
// ];
// const option = {
// animation: false,
// tooltip: {
// trigger: 'item',
// backgroundColor: 'rgba(0, 0, 0, 0.8)',
// borderColor: '#6495ED',
// borderWidth: 2,
// padding: 15,
// textStyle: {
// color: '#fff',
// fontSize: 14
// },
// formatter: (params: any) => {
// const skill = skillsData.find(s => s.name === params.name);
// if (!skill) return '';
// return `
// <div class="font-bold text-blue-400">${skill.name}</div>
// <div class="mt-2">
// <div>Experience: ${skill.detail.years} years</div>
// <div>Projects: ${skill.detail.projects}</div>
// <div>Certifications: ${skill.detail.certifications.join(', ')}</div>
// </div>
// `;
// }
// },
// radar: {
// indicator: skillsData.map(skill => ({ name: skill.name, max: 100 })),
// radius: '65%',
// splitNumber: 4,
// axisName: {
// color: '#333',
// fontSize: 14,
// fontWeight: 500
// },
// splitArea: {
// areaStyle: {
// color: ['rgba(255, 255, 255, 0.8)'],
// shadowColor: 'rgba(0, 0, 0, 0.05)',
// shadowBlur: 10
// }
// },
// axisLine: {
// lineStyle: {
// color: 'rgba(0, 0, 0, 0.1)'
// }
// }
// },
// series: [{
// name: 'Skills',
// type: 'radar',
// data: [{
// value: skillsData.map(skill => skill.value),
// name: 'Skill Level',
// areaStyle: {
// color: 'rgba(100, 149, 237, 0.6)'
// },
// lineStyle: {
// color: 'rgba(100, 149, 237, 0.8)',
// width: 2
// },
// itemStyle: {
// color: '#6495ED'
// }
// }]
// }]
// };
// chart.setOption(option);
// // Handle click events
// chart.on('click', (params: any) => {
// const skill = skillsData.find(s => s.name === params.name);
// if (skill) {
// const detailsElement = document.getElementById('skill-details');
// if (detailsElement) {
// detailsElement.innerHTML = `
// <div class="bg-white p-6 rounded-xl shadow-lg">
// <h3 class="text-xl font-bold text-gray-800 mb-4">${skill.name}</h3>
// <p class="text-gray-600 mb-4">${skill.detail.description}</p>
// <div class="grid grid-cols-3 gap-4">
// <div class="text-center">
// <div class="text-2xl font-bold text-blue-600">${skill.detail.years}</div>
// <div class="text-sm text-gray-500">Years</div>
// </div>
// <div class="text-center">
// <div class="text-2xl font-bold text-blue-600">${skill.detail.projects}</div>
// <div class="text-sm text-gray-500">Projects</div>
// </div>
// <div class="text-center">
// <div class="text-2xl font-bold text-blue-600">${skill.detail.certifications.length}</div>
// <div class="text-sm text-gray-500">Certifications</div>
// </div>
// </div>
// </div>
// `;
// }
// }
// });
// const handleResize = () => {
// chart.resize();
// };
// window.addEventListener('resize', handleResize);
// return () => {
// chart.dispose();
// window.removeEventListener('resize', handleResize);
// };
// }
// }, [loading]);
// const scrollToTop = () => {
// window.scrollTo({
// top: 0,
// behavior: 'smooth'
// });
// };
// const portfolioItems = [
// {
// id: 1,
// title: 'Modern E-commerce Platform',
// category: 'web',
// image: 'https://readdy.ai/api/search-image?query=Sleek%20modern%20e-commerce%20website%20interface%20with%20minimalist%20design%2C%20showing%20product%20grid%20layout%20with%20subtle%20shadows%20and%20clean%20typography%2C%20professional%20web%20application%20UI%20with%20soft%20color%20palette%20and%20elegant%20spacing%2C%20high-quality%20digital%20marketplace%20design&width=600&height=400&seq=1&orientation=landscape',
// description: 'A fully responsive e-commerce platform with advanced filtering and payment integration.'
// },
// {
// id: 2,
// title: 'Finance Dashboard App',
// category: 'app',
// image: 'https://readdy.ai/api/search-image?query=Professional%20finance%20dashboard%20application%20interface%20with%20data%20visualization%20charts%2C%20graphs%20and%20statistics%20panels%2C%20modern%20UI%20design%20with%20clean%20layout%2C%20dark%20mode%20financial%20analytics%20platform%20with%20currency%20and%20stock%20information%20displayed%20in%20elegant%20manner&width=600&height=400&seq=2&orientation=landscape',
// description: 'Interactive dashboard for financial data visualization and analytics.'
// },
// {
// id: 3,
// title: 'Travel Blog Website',
// category: 'web',
// image: 'https://readdy.ai/api/search-image?query=Beautiful%20travel%20blog%20website%20with%20large%20hero%20image%20of%20scenic%20landscape%2C%20clean%20white%20background%20with%20elegant%20typography%2C%20featuring%20travel%20photography%20grid%20layout%2C%20professional%20web%20design%20with%20navigation%20menu%20and%20search%20functionality%2C%20modern%20travel%20content%20platform&width=600&height=400&seq=3&orientation=landscape',
// description: 'Content-focused blog with custom CMS and interactive map features.'
// },
// {
// id: 4,
// title: 'Fitness Tracking Mobile App',
// category: 'app',
// image: 'https://readdy.ai/api/search-image?query=Modern%20fitness%20tracking%20mobile%20application%20interface%20showing%20workout%20progress%20charts%2C%20step%20counter%2C%20and%20health%20metrics%2C%20clean%20UI%20design%20with%20gradient%20blue%20background%2C%20professional%20mobile%20app%20screens%20with%20activity%20tracking%20features%20and%20user%20statistics%20dashboard&width=600&height=400&seq=4&orientation=landscape',
// description: 'Mobile application for tracking workouts and health metrics with social features.'
// },
// {
// id: 5,
// title: 'Corporate Brand Identity',
// category: 'design',
// image: 'https://readdy.ai/api/search-image?query=Professional%20corporate%20brand%20identity%20design%20presentation%20with%20logo%20variations%2C%20color%20palette%20swatches%2C%20typography%20samples%2C%20and%20mockups%20of%20business%20cards%20and%20stationery%2C%20clean%20minimal%20background%20with%20elegant%20spacing%2C%20high-end%20branding%20project%20showcase&width=600&height=400&seq=5&orientation=landscape',
// description: 'Complete brand identity system for a technology consulting firm.'
// },
// {
// id: 6,
// title: 'Smart Home Control System',
// category: 'app',
// image: 'https://readdy.ai/api/search-image?query=Elegant%20smart%20home%20control%20system%20interface%20with%20connected%20device%20management%2C%20temperature%20controls%2C%20lighting%20adjustment%20panels%2C%20security%20camera%20feeds%2C%20modern%20IoT%20application%20design%20with%20dark%20mode%20UI%2C%20professional%20home%20automation%20dashboard%20with%20minimal%20icons%20and%20clean%20typography&width=600&height=400&seq=6&orientation=landscape',
// description: 'IoT application for controlling smart home devices with voice commands.'
// }
// ];
// const filteredItems = activeFilter === 'all'
// ? portfolioItems
// : portfolioItems.filter(item => item.category === activeFilter);
// const testimonials = [
// {
// id: 1,
// name: 'Sarah Johnson',
// role: 'CEO at TechVision',
// content: 'Working with Ahmad was an absolute pleasure. His attention to detail and creative problem-solving skills transformed our website into something truly special.',
// avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20confident%20businesswoman%20with%20short%20blonde%20hair%20and%20friendly%20smile%2C%20neutral%20background%2C%20corporate%20executive%20profile%20photo%20with%20soft%20lighting%2C%20high%20quality%20professional%20photography%20with%20shallow%20depth%20of%20field&width=100&height=100&seq=7&orientation=squarish'
// },
// {
// id: 2,
// name: 'Michael Chen',
// role: 'Product Manager at InnovateCo',
// content: 'Ahmad delivered our mobile application ahead of schedule and exceeded all our expectations. His technical expertise and communication skills made the entire process seamless.',
// avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20an%20Asian%20businessman%20with%20glasses%20and%20neat%20short%20black%20hair%2C%20neutral%20background%2C%20corporate%20executive%20profile%20photo%20with%20soft%20lighting%2C%20high%20quality%20professional%20photography%20with%20shallow%20depth%20of%20field&width=100&height=100&seq=8&orientation=squarish'
// },
// {
// id: 3,
// name: 'Emily Rodriguez',
// role: 'Marketing Director at CreativeHub',
// content: 'The website Ahmad created for us perfectly captures our brand essence. His understanding of UX principles and modern design trends resulted in a significant increase in user engagement.',
// avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20latina%20woman%20with%20long%20dark%20hair%20and%20professional%20attire%2C%20neutral%20background%2C%20corporate%20executive%20profile%20photo%20with%20soft%20lighting%2C%20high%20quality%20professional%20photography%20with%20shallow%20depth%20of%20field&width=100&height=100&seq=9&orientation=squarish'
// }
// ];
// if (loading) {
// return (
// <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
// <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-8">
// {typedText}<span className="animate-pulse">|</span>
// </div>
// <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
// <div
// className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
// style={{ width: `${loadingProgress}%` }}
// ></div>
// </div>
// <div className="mt-4 text-gray-500">
// {loadingProgress}% Loading...
// </div>
// </div>
// );
// }
// return (
// <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
// {/* Custom cursor */}
// <div
// ref={cursorRef}
// className="fixed w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 pointer-events-none mix-blend-multiply z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
// style={{
// left: `${cursorPosition.x}px`,
// top: `${cursorPosition.y}px`,
// transform: `translate(-50%, -50%) scale(${document.querySelectorAll(':hover').length > 0 ? 1.5 : 1})`
// }}
// ></div>
// {/* Header */}
// <header className="relative h-screen flex items-center justify-center overflow-hidden">
// <div className="absolute inset-0 z-0 overflow-hidden">
// <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/95 via-blue-900/90 to-violet-900/95 z-10 animate-gradient-x before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_45%)] before:animate-pulse"></div>
// <img
// src="https://readdy.ai/api/search-image?query=Professional%20web%20developer%20working%20on%20code%2C%20focused%20male%20programmer%20with%20modern%20workspace%20setup%2C%20high-quality%20computer%20setup%20with%20multiple%20screens%20showing%20code%2C%20elegant%20tech%20environment%20with%20soft%20lighting%20and%20professional%20atmosphere&width=1440&height=800&seq=10&orientation=landscape"
// alt="Background"
// className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 animate-slow-zoom"
// />
// <div className="absolute inset-0 z-20">
// <div className="absolute top-0 left-0 w-full h-full">
// <div className="absolute top-[10%] left-[15%] w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
// <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-white/10 rounded-full blur-xl animate-float-delay"></div>
// <div className="absolute bottom-[15%] left-[20%] w-40 h-40 bg-white/10 rounded-full blur-xl animate-float-slow"></div>
// </div>
// </div>
// </div>
// <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent border-b border-white/10'}`}>
// <div className="container mx-auto px-6 py-4">
// <div className="flex items-center justify-between">
// <a href="#" className="text-2xl font-bold text-white">
// <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
// arahmad<span className="text-white">developer</span>
// </span>
// </a>
// <div className="hidden md:flex space-x-8">
// <a href="#about" className="text-white relative group cursor-pointer">
// <span className="relative z-10">About</span>
// <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-[length:200%_100%] animate-gradient-x"></span>
// </a>
// <a href="#portfolio" className="text-white relative group cursor-pointer">
// <span className="relative z-10">Portfolio</span>
// <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-[length:200%_100%] animate-gradient-x"></span>
// </a>
// <a href="#skills" className="text-white relative group cursor-pointer">
// <span className="relative z-10">Skills</span>
// <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-[length:200%_100%] animate-gradient-x"></span>
// </a>
// <a href="#testimonials" className="text-white relative group cursor-pointer">
// <span className="relative z-10">Testimonials</span>
// <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-[length:200%_100%] animate-gradient-x"></span>
// </a>
// <a href="#contact" className="text-white relative group cursor-pointer">
// <span className="relative z-10">Contact</span>
// <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-[length:200%_100%] animate-gradient-x"></span>
// </a>
// </div>
// <div className="flex md:hidden">
// <button
// onClick={() => setIsMenuOpen(!isMenuOpen)}
// className="text-white focus:outline-none cursor-pointer"
// >
// <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
// </button>
// </div>
// </div>
// </div>
// {/* Mobile menu */}
// <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-900/95 backdrop-blur-md`}>
// <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
// <a href="#about" className="text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>About</a>
// <a href="#portfolio" className="text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
// <a href="#skills" className="text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Skills</a>
// <a href="#testimonials" className="text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
// <a href="#contact" className="text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Contact</a>
// </div>
// </div>
// </nav>
// <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between">
// <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
// <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 opacity-0 animate-[fadeInUp_1s_0.3s_forwards]">
// <span className="block animate-fadeIn">Hi, I'm Ahmad Raza</span>
// </h1>
// <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-4 opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
// Full-Stack Developer & Digital Craftsman
// </h2>
// <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed opacity-0 animate-[fadeInUp_1s_0.9s_forwards]">
// Building sleek web & mobile experiences with React, Next.js, and Node.js. From zero to launch, I design, develop, and deploy solutions that just work — clean code, smooth UI, and modern tech all bundled into one.
// </p>
// <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 opacity-0 animate-[fadeInUp_1s_0.9s_forwards]">
// <a
// href="#portfolio"
// className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer"
// >
// View My Work
// </a>
// <a
// href="#contact"
// className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer"
// >
// Get In Touch
// </a>
// </div>
// </div>
// <div className="md:w-1/2 flex justify-center md:justify-end">
// <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
// <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm"></div>
// <img
// src="https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20a%20modern%20developer%20with%20confident%20pose%20and%20friendly%20expression%2C%20minimalist%20clean%20background%2C%20high%20end%20photography%20with%20perfect%20lighting%20and%20composition%2C%20circle%20crop&width=500&height=500&seq=12&orientation=squarish"
// alt="Developer Portrait"
// className="w-full h-full object-cover rounded-full animate-fadeIn"
// />
// </div>
// </div>
// </div>
// <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
// <a href="#about" className="text-white opacity-75 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
// <i className="fas fa-chevron-down text-2xl"></i>
// </a>
// </div>
// </header>
// {/* About Section */}
// <section id="about" className="py-20 bg-gray-50">
// <div className="container mx-auto px-6">
// <div className="flex flex-col md:flex-row items-center gap-12">
// <div className="md:w-1/2 relative">
// <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-70"></div>
// <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-full opacity-70"></div>
// <div className="relative overflow-hidden rounded-2xl shadow-xl">
// <img
// src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20modern%20web%20developer%20working%20on%20computer%20code%2C%20focused%20male%20developer%20with%20stylish%20appearance%20in%20casual%20smart%20attire%2C%20soft%20studio%20lighting%20with%20neutral%20background%2C%20high%20quality%20professional%20photography%20showing%20programming%20expertise&width=600&height=700&seq=11&orientation=portrait"
// alt="Ahmad - Web Developer"
// className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
// />
// </div>
// </div>
// <div className="md:w-1/2">
// <h2 className="text-3xl font-bold mb-6 relative inline-block">
// About Me
// <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></span>
// </h2>
// <p className="text-gray-700 mb-6 leading-relaxed">
// Hello! I'm Ahmad, a passionate web developer with over 6 years of experience creating beautiful, functional, and user-centered digital experiences. Based in San Francisco, I combine technical expertise with creative problem-solving to build websites and applications that deliver results.
// </p>
// <p className="text-gray-700 mb-8 leading-relaxed">
// My approach to development focuses on creating seamless user experiences through clean code, intuitive design, and performance optimization. I'm constantly exploring new technologies and methodologies to enhance my skill set and deliver cutting-edge solutions.
// </p>
// <div className="flex flex-wrap gap-4 mb-8">
// <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">JavaScript</span>
// <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
// <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Node.js</span>
// <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">TypeScript</span>
// <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">UI/UX Design</span>
// </div>
// <div className="flex gap-4">
// <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
// <i className="fab fa-github text-2xl"></i>
// </a>
// <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
// <i className="fab fa-linkedin text-2xl"></i>
// </a>
// <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
// <i className="fab fa-twitter text-2xl"></i>
// </a>
// <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
// <i className="fab fa-dribbble text-2xl"></i>
// </a>
// </div>
// </div>
// </div>
// </div>
// </section>
// {/* Portfolio Section */}
// <section id="portfolio" className="py-20">
// <div className="container mx-auto px-6">
// <h2 className="text-3xl font-bold text-center mb-12 relative inline-block">
// My Portfolio
// <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></span>
// </h2>
// <div className="flex justify-center mb-12">
// <div className="flex flex-wrap gap-4 justify-center">
// <button
// onClick={() => setActiveFilter('all')}
// className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer ${
// activeFilter === 'all'
// ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
// : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// }`}
// >
// All Projects
// </button>
// <button
// onClick={() => setActiveFilter('web')}
// className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer ${
// activeFilter === 'web'
// ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
// : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// }`}
// >
// Web Development
// </button>
// <button
// onClick={() => setActiveFilter('app')}
// className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer ${
// activeFilter === 'app'
// ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
// : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// }`}
// >
// App Development
// </button>
// <button
// onClick={() => setActiveFilter('design')}
// className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer ${
// activeFilter === 'design'
// ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
// : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// }`}
// >
// UI/UX Design
// </button>
// </div>
// </div>
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// {filteredItems.map((item) => (
// <div
// key={item.id}
// className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
// >
// <div className="relative overflow-hidden h-64">
// <img
// src={item.image}
// alt={item.title}
// className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
// />
// <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end justify-center p-6">
// <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
// <a
// href="#"
// className="inline-block px-6 py-2 bg-white text-gray-900 rounded-full font-medium text-sm hover:bg-blue-500 hover:text-white transition-colors duration-300 mx-2 !rounded-button whitespace-nowrap cursor-pointer"
// >
// View Details
// </a>
// <a
// href="#"
// className="inline-block px-6 py-2 bg-transparent border border-white text-white rounded-full font-medium text-sm hover:bg-white hover:text-gray-900 transition-colors duration-300 mx-2 !rounded-button whitespace-nowrap cursor-pointer"
// >
// Live Demo
// </a>
// </div>
// </div>
// </div>
// <div className="p-6">
// <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
// {item.category === 'web' ? 'Web Development' : item.category === 'app' ? 'App Development' : 'UI/UX Design'}
// </span>
// <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>
// <p className="text-gray-600">{item.description}</p>
// </div>
// </div>
// ))}
// </div>
// <div className="text-center mt-12">
// <a
// href="#"
// className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer"
// >
// View All Projects
// </a>
// </div>
// </div>
// </section>
// {/* Skills Section */}
// <section id="skills" className="py-20 bg-gray-50">
// <div className="container mx-auto px-6">
// <h2 className="text-3xl font-bold text-center mb-12 relative inline-block">
// My Skills
// <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></span>
// </h2>
// <div className="flex flex-col lg:flex-row gap-12">
// <div className="lg:w-1/2">
// <div ref={skillsChartRef} className="w-full h-[400px]"></div>
// <div id="skill-details" className="mt-6"></div>
// </div>
// <div className="lg:w-1/2">
// <div className="space-y-6">
// <div>
// <div className="flex justify-between mb-2">
// <span className="text-gray-700 font-medium">Frontend Development</span>
// <span className="text-blue-600 font-medium">95%</span>
// </div>
// <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
// <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" style={{ width: '95%' }}></div>
// </div>
// </div>
// <div>
// <div className="flex justify-between mb-2">
// <span className="text-gray-700 font-medium">Backend Development</span>
// <span className="text-blue-600 font-medium">85%</span>
// </div>
// <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
// <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" style={{ width: '85%' }}></div>
// </div>
// </div>
// <div>
// <div className="flex justify-between mb-2">
// <span className="text-gray-700 font-medium">UI/UX Design</span>
// <span className="text-blue-600 font-medium">80%</span>
// </div>
// <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
// <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" style={{ width: '80%' }}></div>
// </div>
// </div>
// <div>
// <div className="flex justify-between mb-2">
// <span className="text-gray-700 font-medium">Mobile App Development</span>
// <span className="text-blue-600 font-medium">75%</span>
// </div>
// <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
// <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" style={{ width: '75%' }}></div>
// </div>
// </div>
// <div>
// <div className="flex justify-between mb-2">
// <span className="text-gray-700 font-medium">Project Management</span>
// <span className="text-blue-600 font-medium">90%</span>
// </div>
// <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
// <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" style={{ width: '90%' }}></div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </section>
// {/* Testimonials Section */}
// <section id="testimonials" className="py-20 bg-white">
// <div className="container mx-auto px-6">
// <h2 className="text-3xl font-bold text-center mb-12 relative inline-block">
// Client Testimonials
// <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></span>
// </h2>
// <Swiper
// modules={[Pagination, Autoplay]}
// spaceBetween={30}
// slidesPerView={1}
// pagination={{ clickable: true }}
// autoplay={{ delay: 5000 }}
// breakpoints={{
// 640: {
// slidesPerView: 1,
// },
// 768: {
// slidesPerView: 2,
// },
// 1024: {
// slidesPerView: 3,
// },
// }}
// className="testimonial-swiper"
// >
// {testimonials.map((testimonial) => (
// <SwiperSlide key={testimonial.id}>
// <div className="bg-gray-50 p-8 rounded-xl shadow-md h-full flex flex-col">
// <div className="flex items-center mb-6">
// <img
// src={testimonial.avatar}
// alt={testimonial.name}
// className="w-16 h-16 rounded-full object-cover mr-4"
// />
// <div>
// <h4 className="font-bold text-lg">{testimonial.name}</h4>
// <p className="text-gray-600 text-sm">{testimonial.role}</p>
// </div>
// </div>
// <p className="text-gray-700 italic flex-grow">{testimonial.content}</p>
// <div className="mt-6 text-yellow-500">
// <i className="fas fa-star"></i>
// <i className="fas fa-star"></i>
// <i className="fas fa-star"></i>
// <i className="fas fa-star"></i>
// <i className="fas fa-star"></i>
// </div>
// </div>
// </SwiperSlide>
// ))}
// </Swiper>
// </div>
// </section>
// {/* Contact Section */}
// <section id="contact" className="py-20 bg-gray-900 text-white">
// <div className="container mx-auto px-6">
// <h2 className="text-3xl font-bold text-center mb-12 relative inline-block">
// Get In Touch
// <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></span>
// </h2>
// <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// <div>
// <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
// <p className="text-gray-300 mb-8 leading-relaxed">
// Have a project in mind or want to discuss potential collaborations? Feel free to reach out through the form or using the contact details below.
// </p>
// <div className="space-y-6">
// <div className="flex items-start">
// <div className="bg-blue-600/20 p-3 rounded-full mr-4">
// <i className="fas fa-map-marker-alt text-blue-400"></i>
// </div>
// <div>
// <h4 className="font-medium text-lg text-blue-300">Location</h4>
// <p className="text-gray-300">San Francisco, California</p>
// </div>
// </div>
// <div className="flex items-start">
// <div className="bg-blue-600/20 p-3 rounded-full mr-4">
// <i className="fas fa-envelope text-blue-400"></i>
// </div>
// <div>
// <h4 className="font-medium text-lg text-blue-300">Email</h4>
// <p className="text-gray-300">contact@arahmaddeveloper.com</p>
// </div>
// </div>
// <div className="flex items-start">
// <div className="bg-blue-600/20 p-3 rounded-full mr-4">
// <i className="fas fa-phone text-blue-400"></i>
// </div>
// <div>
// <h4 className="font-medium text-lg text-blue-300">Phone</h4>
// <p className="text-gray-300">+1 (555) 123-4567</p>
// </div>
// </div>
// </div>
// <div className="mt-8 flex space-x-4">
// <a href="#" className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
// <i className="fab fa-github"></i>
// </a>
// <a href="#" className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
// <i className="fab fa-linkedin-in"></i>
// </a>
// <a href="#" className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
// <i className="fab fa-twitter"></i>
// </a>
// <a href="#" className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
// <i className="fab fa-dribbble"></i>
// </a>
// </div>
// </div>
// <div>
// <form className="space-y-6">
// <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// <div>
// <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
// <input
// type="text"
// id="name"
// className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-sm"
// placeholder="John Doe"
// />
// </div>
// <div>
// <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
// <input
// type="email"
// id="email"
// className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-sm"
// placeholder="john@example.com"
// />
// </div>
// </div>
// <div>
// <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
// <input
// type="text"
// id="subject"
// className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-sm"
// placeholder="Project Inquiry"
// />
// </div>
// <div>
// <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
// <textarea
// id="message"
// rows={5}
// className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-sm resize-none"
// placeholder="Tell me about your project..."
// ></textarea>
// </div>
// <button
// type="submit"
// className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer"
// >
// Send Message
// </button>
// </form>
// </div>
// </div>
// </div>
// </section>
// {/* Footer */}
// <footer className="bg-gray-950 text-white py-12">
// <div className="container mx-auto px-6">
// <div className="flex flex-col md:flex-row justify-between items-center">
// <div className="mb-8 md:mb-0">
// <a href="#" className="text-2xl font-bold">
// <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
// arahmad<span className="text-white">developer</span>
// </span>
// </a>
// <p className="text-gray-400 mt-2">Crafting digital experiences that inspire.</p>
// </div>
// <div className="flex flex-wrap justify-center gap-8">
// <div>
// <h4 className="font-bold mb-4 text-blue-300">Navigation</h4>
// <ul className="space-y-2">
// <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">About</a></li>
// <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Portfolio</a></li>
// <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Skills</a></li>
// <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Testimonials</a></li>
// <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Contact</a></li>
// </ul>
// </div>
// <div>
// <h4 className="font-bold mb-4 text-blue-300">Services</h4>
// <ul className="space-y-2">
// <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Web Development</a></li>
// <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">App Development</a></li>
// <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">UI/UX Design</a></li>
// <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Consulting</a></li>
// </ul>
// </div>
// <div>
// <h4 className="font-bold mb-4 text-blue-300">Legal</h4>
// <ul className="space-y-2">
// <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Privacy Policy</a></li>
// <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Terms of Service</a></li>
// <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Cookie Policy</a></li>
// </ul>
// </div>
// </div>
// </div>
// <hr className="border-gray-800 my-8" />
// <div className="flex flex-col md:flex-row justify-between items-center">
// <p className="text-gray-500 text-sm mb-4 md:mb-0">
// © {new Date().getFullYear()} arahmaddeveloper. All rights reserved.
// </p>
// <div className="flex space-x-6">
// <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
// <i className="fab fa-github"></i>
// </a>
// <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
// <i className="fab fa-linkedin-in"></i>
// </a>
// <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
// <i className="fab fa-twitter"></i>
// </a>
// <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
// <i className="fab fa-dribbble"></i>
// </a>
// <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
// <i className="fab fa-instagram"></i>
// </a>
// </div>
// </div>
// </div>
// </footer>
// {/* Scroll to top button */}
// <button
// onClick={scrollToTop}
// className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 z-50 !rounded-button whitespace-nowrap cursor-pointer ${
// showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'
// }`}
// >
// <i className="fas fa-arrow-up"></i>
// </button>
// </div>
// );
// };
// export default App