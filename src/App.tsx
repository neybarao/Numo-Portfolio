import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const Logo = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <div className="flex items-center h-10 md:h-12">
    {isDarkMode ? (
      <svg width="100%" height="100%" viewBox="0 0 389 155" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-full">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M100.949 32.0176C112.621 32.0176 122.082 41.4793 122.082 53.1508C122.082 62.499 116.013 70.4287 107.6 73.2157C105.689 73.8491 104.201 75.5208 104.2 77.5346C104.2 79.5483 105.688 81.2208 107.6 81.8542C116.013 84.6411 122.082 92.5717 122.082 101.92C122.082 113.591 112.621 123.053 100.949 123.053C89.2776 123.053 79.8159 113.591 79.8159 101.92C79.8159 92.5717 85.8852 84.6411 94.2982 81.8542C96.21 81.2208 97.6979 79.5483 97.6979 77.5346C97.6977 75.5835 96.3019 73.9539 94.4768 73.2784L94.299 73.2157C87.9772 71.1217 82.9786 66.1234 80.8843 59.8018C80.2509 57.8896 78.5788 56.4021 76.5646 56.4021C74.5506 56.4021 72.8785 57.8896 72.245 59.8018C69.4578 68.2149 61.5279 74.2841 52.1801 74.2841C40.5086 74.2841 31.0469 64.8224 31.0469 53.1508C31.0469 41.4793 40.5086 32.0176 52.1801 32.0176C61.5279 32.0176 69.4578 38.0867 72.245 46.4999C72.8785 48.412 74.5506 49.8996 76.5646 49.8996C78.5159 49.8996 80.1465 48.5033 80.8224 46.6777L80.8843 46.4999C83.6714 38.0867 91.6014 32.0176 100.949 32.0176ZM100.949 88.9148C93.7667 88.9148 87.9441 94.7374 87.9441 101.92C87.9441 109.102 93.7667 114.925 100.949 114.925C108.132 114.925 113.954 109.102 113.954 101.92C113.954 94.7374 108.132 88.9148 100.949 88.9148ZM52.1801 40.1458C44.9976 40.1458 39.175 45.9683 39.175 53.1508C39.175 60.3333 44.9976 66.1559 52.1801 66.1559C59.3626 66.1559 65.1852 60.3333 65.1852 53.1508C65.1852 45.9683 59.3626 40.1458 52.1801 40.1458ZM100.995 40.1458C93.8127 40.1458 87.9901 45.9683 87.9901 53.1508C87.9901 60.3333 93.8127 66.1559 100.995 66.1559C108.178 66.1557 114 60.3332 114 53.1508C114 45.9685 108.178 40.146 100.995 40.1458Z" fill="#F0F0F0"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M52.1801 80.7871C63.8517 80.7871 73.3134 90.2488 73.3134 101.92C73.3134 113.592 63.8517 123.054 52.1801 123.054C40.5086 123.054 31.0469 113.592 31.0469 101.92C31.0469 90.2488 40.5086 80.7871 52.1801 80.7871Z" fill="#FF6E25"/>
        <path d="M208.565 79.8659C208.565 83.5625 209.489 86.4101 211.337 88.4083C213.185 90.3565 215.708 91.3305 218.905 91.3306C222.102 91.3306 224.626 90.3566 226.474 88.4083C228.372 86.4101 229.321 83.5625 229.321 79.8659V56.8608H237.864V98.1494H229.321V93.2786C227.972 94.977 226.199 96.326 224.001 97.3251C221.853 98.2743 219.555 98.7487 217.107 98.7488C213.86 98.7488 210.937 98.0746 208.34 96.7258C205.792 95.377 203.769 93.3788 202.27 90.7313C200.821 88.0836 200.097 84.8862 200.097 81.1395V56.8608H208.565V79.8659Z" fill="#F0F0F0"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M337.007 56.2791C348.678 56.2791 358.14 65.7408 358.14 77.4123C358.14 89.0839 348.678 98.5456 337.007 98.5456C325.335 98.5456 315.873 89.0839 315.873 77.4123C315.873 65.7408 325.335 56.2791 337.007 56.2791ZM337.007 64.4072C329.824 64.4072 324.002 70.2295 324.002 77.4123C324.002 84.5951 329.824 90.4174 337.007 90.4174C344.189 90.4174 350.012 84.5951 350.012 77.4123C350.012 70.2295 344.189 64.4072 337.007 64.4072Z" fill="#F0F0F0"/>
        <path d="M177.594 56.1865C180.841 56.1865 183.739 56.8608 186.287 58.2095C188.884 59.5583 190.907 61.557 192.356 64.2046C193.805 66.8522 194.53 70.0492 194.53 73.7957V98.1494H186.062V75.07C186.062 71.3733 185.138 68.5508 183.289 66.6026C181.441 64.6044 178.918 63.6047 175.721 63.6047C172.524 63.6047 169.976 64.6043 168.078 66.6026C166.23 68.5508 165.305 71.3733 165.305 75.07V98.1494H156.763V56.8608H165.305V61.5817C166.704 59.8832 168.477 58.5593 170.625 57.6102C172.823 56.661 175.146 56.1865 177.594 56.1865Z" fill="#F0F0F0"/>
        <path d="M293.542 56.1865C296.789 56.1865 299.687 56.8607 302.235 58.2095C304.832 59.5583 306.855 61.557 308.304 64.2046C309.803 66.8522 310.552 70.0492 310.552 73.7957V98.1494H302.085V75.07C302.085 71.3734 301.161 68.5508 299.312 66.6026C297.464 64.6043 294.941 63.6047 291.744 63.6047C288.546 63.6047 285.999 64.6044 284.1 66.6026C282.252 68.5508 281.328 71.3733 281.328 75.07V98.1494H272.86V75.07C272.86 71.3733 271.936 68.5508 270.088 66.6026C268.239 64.6044 265.717 63.6047 262.52 63.6047C259.322 63.6047 256.775 64.6043 254.877 66.6026C253.028 68.5508 252.104 71.3733 252.104 75.07V98.1494H243.561V56.8608H252.104V61.5817C253.502 59.8832 255.276 58.5593 257.424 57.6102C259.572 56.661 261.87 56.1866 264.318 56.1865C267.615 56.1865 270.562 56.8858 273.16 58.2845C275.758 59.6833 277.756 61.7069 279.155 64.3546C280.403 61.8568 282.352 59.8832 285 58.4345C287.647 56.9358 290.495 56.1865 293.542 56.1865Z" fill="#F0F0F0"/>
      </svg>
    ) : (
      <svg width="100%" height="100%" viewBox="0 0 389 155" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-full">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M100.949 32.0176C112.621 32.0176 122.082 41.4793 122.082 53.1508C122.082 62.499 116.013 70.4287 107.6 73.2157C105.689 73.8491 104.201 75.5208 104.2 77.5346C104.2 79.5483 105.688 81.2208 107.6 81.8542C116.013 84.6411 122.082 92.5717 122.082 101.92C122.082 113.591 112.621 123.053 100.949 123.053C89.2776 123.053 79.8159 113.591 79.8159 101.92C79.8159 92.5717 85.8852 84.6411 94.2982 81.8542C96.21 81.2208 97.6979 79.5483 97.6979 77.5346C97.6977 75.5835 96.3019 73.9539 94.4768 73.2784L94.299 73.2157C87.9772 71.1217 82.9786 66.1234 80.8843 59.8018C80.2509 57.8896 78.5788 56.4021 76.5646 56.4021C74.5506 56.4021 72.8785 57.8896 72.245 59.8018C69.4578 68.2149 61.5279 74.2841 52.1801 74.2841C40.5086 74.2841 31.0469 64.8224 31.0469 53.1508C31.0469 41.4793 40.5086 32.0176 52.1801 32.0176C61.5279 32.0176 69.4578 38.0867 72.245 46.4999C72.8785 48.412 74.5506 49.8996 76.5646 49.8996C78.5159 49.8996 80.1465 48.5033 80.8224 46.6777L80.8843 46.4999C83.6714 38.0867 91.6014 32.0176 100.949 32.0176ZM100.949 88.9148C93.7667 88.9148 87.9441 94.7374 87.9441 101.92C87.9441 109.102 93.7667 114.925 100.949 114.925C108.132 114.925 113.954 109.102 113.954 101.92C113.954 94.7374 108.132 88.9148 100.949 88.9148ZM52.1801 40.1458C44.9976 40.1458 39.175 45.9683 39.175 53.1508C39.175 60.3333 44.9976 66.1559 52.1801 66.1559C59.3626 66.1559 65.1852 60.3333 65.1852 53.1508C65.1852 45.9683 59.3626 40.1458 52.1801 40.1458ZM100.995 40.1458C93.8127 40.1458 87.9901 45.9683 87.9901 53.1508C87.9901 60.3333 93.8127 66.1559 100.995 66.1559C108.178 66.1557 114 60.3332 114 53.1508C114 45.9685 108.178 40.146 100.995 40.1458Z" fill="#0D0D0D"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M52.1801 80.7871C63.8517 80.7871 73.3134 90.2488 73.3134 101.92C73.3134 113.592 63.8517 123.054 52.1801 123.054C40.5086 123.054 31.0469 113.592 31.0469 101.92C31.0469 90.2488 40.5086 80.7871 52.1801 80.7871Z" fill="#FF6E25"/>
        <path d="M208.565 79.8659C208.565 83.5625 209.489 86.4101 211.337 88.4083C213.185 90.3565 215.708 91.3305 218.905 91.3306C222.102 91.3306 224.626 90.3566 226.474 88.4083C228.372 86.4101 229.321 83.5625 229.321 79.8659V56.8608H237.864V98.1494H229.321V93.2786C227.972 94.977 226.199 96.326 224.001 97.3251C221.853 98.2743 219.555 98.7487 217.107 98.7488C213.86 98.7488 210.937 98.0746 208.34 96.7258C205.792 95.377 203.769 93.3788 202.27 90.7313C200.821 88.0836 200.097 84.8862 200.097 81.1395V56.8608H208.565V79.8659Z" fill="#0D0D0D"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M337.007 56.2791C348.678 56.2791 358.14 65.7408 358.14 77.4123C358.14 89.0839 348.678 98.5456 337.007 98.5456C325.335 98.5456 315.873 89.0839 315.873 77.4123C315.873 65.7408 325.335 56.2791 337.007 56.2791ZM337.007 64.4072C329.824 64.4072 324.002 70.2295 324.002 77.4123C324.002 84.5951 329.824 90.4174 337.007 90.4174C344.189 90.4174 350.012 84.5951 350.012 77.4123C350.012 70.2295 344.189 64.4072 337.007 64.4072Z" fill="#0D0D0D"/>
        <path d="M177.594 56.1865C180.841 56.1865 183.739 56.8608 186.287 58.2095C188.884 59.5583 190.907 61.557 192.356 64.2046C193.805 66.8522 194.53 70.0492 194.53 73.7957V98.1494H186.062V75.07C186.062 71.3733 185.138 68.5508 183.289 66.6026C181.441 64.6044 178.918 63.6047 175.721 63.6047C172.524 63.6047 169.976 64.6043 168.078 66.6026C166.23 68.5508 165.305 71.3733 165.305 75.07V98.1494H156.763V56.8608H165.305V61.5817C166.704 59.8832 168.477 58.5593 170.625 57.6102C172.823 56.661 175.146 56.1865 177.594 56.1865Z" fill="#0D0D0D"/>
        <path d="M293.542 56.1865C296.789 56.1865 299.687 56.8607 302.235 58.2095C304.832 59.5583 306.855 61.557 308.304 64.2046C309.803 66.8522 310.552 70.0492 310.552 73.7957V98.1494H302.085V75.07C302.085 71.3734 301.161 68.5508 299.312 66.6026C297.464 64.6043 294.941 63.6047 291.744 63.6047C288.546 63.6047 285.999 64.6044 284.1 66.6026C282.252 68.5508 281.328 71.3733 281.328 75.07V98.1494H272.86V75.07C272.86 71.3733 271.936 68.5508 270.088 66.6026C268.239 64.6044 265.717 63.6047 262.52 63.6047C259.322 63.6047 256.775 64.6043 254.877 66.6026C253.028 68.5508 252.104 71.3733 252.104 75.07V98.1494H243.561V56.8608H252.104V61.5817C253.502 59.8832 255.276 58.5593 257.424 57.6102C259.572 56.661 261.87 56.1866 264.318 56.1865C267.615 56.1865 270.562 56.8858 273.16 58.2845C275.758 59.6833 277.756 61.7069 279.155 64.3546C280.403 61.8568 282.352 59.8832 285 58.4345C287.647 56.9358 290.495 56.1865 293.542 56.1865Z" fill="#0D0D0D"/>
      </svg>
    )}
  </div>
);

const ProjectCard = ({ title, category, image, index, onClick }: { title: string, category: string, image: string, index: number, onClick: () => void, key?: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="group cursor-pointer mb-24 md:mb-32"
    onClick={onClick}
  >
    <div className="relative overflow-hidden aspect-[16/9] mb-6">
      <motion.img 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        src={image} 
        alt={title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="flex justify-between items-end">
      <div>
        <p className="text-xs uppercase tracking-widest opacity-50 mb-2">{category}</p>
        <h3 className="text-3xl md:text-4xl font-medium leading-none">{title}</h3>
      </div>
      <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
        <ArrowUpRight size={20} />
      </div>
    </div>
  </motion.div>
);

const CaseStudyView = ({ project, onBack, isDarkMode }: { project: any, onBack: () => void, isDarkMode: boolean, key?: any }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen pt-32 pb-24 px-6 md:px-12"
  >
    <button 
      onClick={onBack}
      className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-accent transition-all mb-12"
    >
      <ArrowUpRight className="rotate-180" size={16} />
      Back to Work
    </button>

    <div className="max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">{project.category}</p>
        <h1 className="text-6xl md:text-[8vw] font-medium tracking-tighter leading-none mb-8">{project.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-ink/10 pt-8 mt-12">
          <div>
            <h4 className="text-xs uppercase tracking-widest opacity-50 mb-2">Role</h4>
            <p className="text-sm">Lead UX/UI Design</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest opacity-50 mb-2">Timeline</h4>
            <p className="text-sm">4 Months</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest opacity-50 mb-2">Client</h4>
            <p className="text-sm">Global Tech Corp</p>
          </div>
        </div>
      </div>

      <div className="aspect-[21/9] overflow-hidden mb-24">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
        <div className="md:col-span-4">
          <h2 className="text-2xl font-medium mb-6">The Challenge</h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-xl opacity-70 leading-relaxed">
            The primary objective was to redefine how users interact with complex data sets in real-time. The existing platform suffered from high cognitive load and a fragmented user journey that hindered productivity.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
        <div className="md:col-span-4">
          <h2 className="text-2xl font-medium mb-6">The Solution</h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-xl opacity-70 leading-relaxed mb-8">
            We implemented a modular design system that prioritizes information hierarchy. By introducing a "Focus Mode" and intelligent data filtering, we reduced the time-to-action by 40%.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1000" className="w-full aspect-square object-cover grayscale" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000" className="w-full aspect-square object-cover grayscale" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>

      <div className="bg-ink text-bg p-12 md:p-24 rounded-3xl mb-32">
        <h2 className="text-3xl md:text-5xl font-medium mb-12">Key Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="text-6xl font-medium text-accent">40%</span>
            <p className="opacity-70 mt-4 uppercase tracking-widest text-xs">Efficiency Increase</p>
          </div>
          <div>
            <span className="text-6xl font-medium text-accent">2.5x</span>
            <p className="opacity-70 mt-4 uppercase tracking-widest text-xs">User Retention</p>
          </div>
          <div>
            <span className="text-6xl font-medium text-accent">98%</span>
            <p className="opacity-70 mt-4 uppercase tracking-widest text-xs">Satisfaction Rate</p>
          </div>
        </div>
      </div>

      <div className="text-center py-24 border-t border-ink/10">
        <p className="opacity-50 mb-8 uppercase tracking-widest text-xs">Next Project</p>
        <h3 className="text-4xl md:text-6xl font-medium hover:text-accent cursor-pointer transition-colors">Lumina Mobile</h3>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'case-study'>('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const projects = [
    {
      title: "Aether Platform",
      category: "UX / UI Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Lumina Mobile",
      category: "Product Strategy",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Kinetix Brand",
      category: "Visual Identity",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Zenith Dashboard",
      category: "Interface Design",
      image: "https://images.unsplash.com/photo-1581291518062-c9a7941a3f34?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setCurrentView('case-study');
  };

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => setCurrentView('home')}>
          <Logo isDarkMode={isDarkMode} />
        </div>
        <div className="flex items-center gap-8 md:gap-12">
          <div className="hidden md:flex gap-12 text-sm font-medium uppercase tracking-widest">
            <button onClick={() => setCurrentView('home')} className="hover:text-accent transition-colors">Work</button>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 hover:text-accent transition-colors"
            aria-label="Toggle dark mode"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isDarkMode ? "dark" : "light"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 bg-ink z-40 flex flex-col items-center justify-center gap-8 text-white md:hidden"
      >
        <button onClick={() => { setCurrentView('home'); setIsMenuOpen(false); }} className="text-4xl font-medium">Work</button>
        <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-4xl font-medium">About</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-4xl font-medium">Contact</a>
      </motion.div>

      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <main>
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-medium tracking-tighter mb-12 text-ink">
              Crafting <span className="text-accent">digital</span><br />
              experiences that<br />
              matter.
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-24">
              <p className="max-w-md text-lg md:text-xl text-ink/70 leading-relaxed">
                Numo is a specialized design studio focused on high-end UX/UI solutions for forward-thinking companies.
              </p>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="hidden md:block"
              >
                <div className="w-px h-24 bg-ink/20" />
              </motion.div>
            </div>
          </motion.div>
        </section>

              {/* Portfolio Section */}
              <section id="work" className="px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  {projects.map((project, index) => (
                    <ProjectCard 
                      key={index} 
                      title={project.title}
                      category={project.category}
                      image={project.image}
                      index={index} 
                      onClick={() => handleProjectClick(project)}
                    />
                  ))}
                </div>
              </section>

        {/* About Section */}
        <section id="about" className="px-6 md:px-12 py-32 bg-ink text-bg transition-colors duration-500">
          <div className="max-w-4xl">
            <h2 className="text-xs uppercase tracking-[0.3em] opacity-50 mb-12">Our Philosophy</h2>
            <p className="text-4xl md:text-6xl font-medium leading-tight mb-16">
              We believe in the power of <span className="italic text-accent">simplicity</span>. By removing the unnecessary, we reveal the essential.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h4 className="text-accent mb-4 font-medium">UX Research</h4>
                <p className="opacity-70 text-sm leading-relaxed">Deep diving into user behavior to build foundations that last.</p>
              </div>
              <div>
                <h4 className="text-accent mb-4 font-medium">UI Design</h4>
                <p className="opacity-70 text-sm leading-relaxed">Creating interfaces that are as intuitive as they are beautiful.</p>
              </div>
              <div>
                <h4 className="text-accent mb-4 font-medium">Strategy</h4>
                <p className="opacity-70 text-sm leading-relaxed">Aligning business goals with user needs for maximum impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 md:px-12 py-48 flex flex-col items-center text-center">
          <h2 className="text-6xl md:text-[10vw] font-medium tracking-tighter mb-12">
            Let's build<br />together.
          </h2>
                <a 
                  href="mailto:hello@designwithnumo.com" 
                  className="text-2xl md:text-4xl font-medium border-b-2 border-accent pb-2 hover:text-accent transition-colors"
                >
                  hello@designwithnumo.com
                </a>
              </section>
            </main>
          </motion.div>
        ) : (
          <CaseStudyView 
            key="case-study"
            project={selectedProject} 
            onBack={() => setCurrentView('home')}
            isDarkMode={isDarkMode}
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-50 text-xs uppercase tracking-widest">
        <p>© Numo Digital Design</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-accent transition-colors">Instagram</a>
          <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
        </div>
        <p>Based in Brazil</p>
      </footer>
    </div>
  );
}
