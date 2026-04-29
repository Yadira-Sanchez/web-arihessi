import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Games } from './components/Games';
import { Content } from './components/Content';
import { Schedule } from './components/Schedule';
import { Travels } from './components/Travels';
import { Community } from './components/Community';
import { Shop } from './components/Shop';
import { Footer } from './components/Footer';
import { ThemeShowcase } from './pages/ThemeShowcase';
import { ThemeDynamicsPage } from './pages/ThemeDynamicsPage';
import { FloatingThemeToggle } from './components/FloatingThemeToggle';
import { Hero } from './components/Hero';
import { useEffect } from 'react';

function App() {
  // Inicializar el tema al cargar la app
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(savedTheme);
  }, []);

  // Detectar si estamos en la página de showcase o tema dinámico
  const isShowcase = window.location.pathname === '/theme-showcase' || window.location.hash === '#theme-showcase';
  const isThemeDynamics = window.location.pathname === '/theme-dynamics' || window.location.hash === '#theme-dynamics';
  
  if (isThemeDynamics) {
    return <ThemeDynamicsPage />;
  }

  if (isShowcase) {
    return (
      <>
        <Navbar />
        <ThemeShowcase />
      </>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-100 selection:bg-ari-rose/30 transition-colors duration-500">
      <Navbar />
      <FloatingThemeToggle />

      {/* HERO REDISEÑADO */}
      <Hero />

      {/* RESTO DE SECCIONES */}
      <div className="space-y-0">
        <About />
        <Games />
        <Schedule />
        <Content />
        <Travels />
        <Community />
        <Shop />
        <Footer />
      </div>
    </main>
  );
}

export default App;
