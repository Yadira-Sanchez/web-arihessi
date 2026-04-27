import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(true);

  // Inicializar el tema al montar el componente
  useEffect(() => {
    const htmlElement = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setIsDark(savedTheme === 'dark');
    htmlElement.classList.remove('light', 'dark');
    htmlElement.classList.add(savedTheme);
  }, []);

  // Cambiar el tema
  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const newTheme = isDark ? 'light' : 'dark';
    
    setIsDark(!isDark);
    htmlElement.classList.remove('light', 'dark');
    htmlElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-ari-rose/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ opacity: 0 }}
      />

      {/* Container para los iconos */}
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Icono de Sol */}
        <motion.div
          animate={{ 
            rotate: isDark ? 0 : 180,
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.5 : 1,
          }}
          transition={{ 
            duration: 0.5,
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
          className="absolute"
        >
          <svg
            className="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414zM2.05 6.464l1.414-1.414a1 1 0 00-1.414-1.414L.636 5.05a1 1 0 001.414 1.414zm12.728 0l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414zM2.05 13.536l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414zm12.728 0l1.414-1.414a1 1 0 10-1.414-1.414l-1.414 1.414a1 1 0 001.414 1.414zM10 18a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM3 10a1 1 0 110-2 1 1 0 010 2zm14 0a1 1 0 110-2 1 1 0 010 2z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>

        {/* Icono de Luna */}
        <motion.div
          animate={{ 
            rotate: isDark ? -180 : 0,
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.5,
          }}
          transition={{ 
            duration: 0.5,
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
          className="absolute"
        >
          <svg
            className="w-6 h-6 text-slate-200"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </motion.div>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
        {isDark ? 'Modo claro' : 'Modo oscuro'}
      </div>
    </motion.button>
  );
};
