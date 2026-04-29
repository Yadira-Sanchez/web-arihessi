import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export const FloatingThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.classList.contains('dark');
    setIsDark(currentTheme);
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove('light', 'dark');
    const newTheme = isDark ? 'light' : 'dark';
    htmlElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-ari-rose via-ari-lavender to-ari-mint text-white shadow-2xl flex items-center justify-center font-black text-xl transition-all duration-500"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
    >
      <motion.div
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-8 h-8" />
        ) : (
          <Moon className="w-8 h-8" />
        )}
      </motion.div>

      {/* Anillo de brillo */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity
        }}
      />
    </motion.button>
  );
};
