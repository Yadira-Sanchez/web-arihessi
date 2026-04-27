import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggleButton = () => {
  const [isDark, setIsDark] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ejecutar solo en cliente
    setIsClient(true);
    
    // Detectar tema actual
    const htmlElement = document.documentElement;
    const hasDarkClass = htmlElement.classList.contains('dark');
    setIsDark(hasDarkClass);
  }, []);

  const handleToggle = () => {
    const htmlElement = document.documentElement;
    
    // Limpiar clases previas
    htmlElement.classList.remove('dark', 'light');
    
    // Determinar nuevo tema
    const newIsDark = !isDark;
    const themeClass = newIsDark ? 'dark' : 'light';
    
    // Aplicar nueva clase
    htmlElement.classList.add(themeClass);
    
    // Guardar preferencia
    localStorage.setItem('theme', themeClass);
    
    // Actualizar estado
    setIsDark(newIsDark);
  };

  if (!isClient) return null;

  return (
    <motion.button
      onClick={handleToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-ari-rose to-ari-lavender shadow-lg dark:shadow-2xl dark:shadow-ari-rose/40 flex items-center justify-center text-white font-bold transition-all duration-500 hover:shadow-xl dark:hover:shadow-ari-rose/50"
    >
      {isDark ? (
        <Sun className="w-6 h-6 transition-transform duration-300" />
      ) : (
        <Moon className="w-6 h-6 transition-transform duration-300" />
      )}
    </motion.button>
  );
};
