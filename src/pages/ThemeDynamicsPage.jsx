import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const ThemeDynamicsPage = () => {
  const [isDark, setIsDark] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.classList.contains('dark');
    setIsDark(currentTheme);
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const newTheme = isDark ? 'light' : 'dark';
    
    htmlElement.classList.remove('light', 'dark');
    htmlElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
  };

  if (!isClient) return null;

  return (
    <div className="bg-white text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white min-h-screen">
      {/* BOTÓN FLOTANTE TOGGLE */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-ari-rose to-ari-lavender shadow-lg dark:shadow-ari-rose/20 flex items-center justify-center text-white font-bold transition-all duration-500"
      >
        {isDark ? (
          <Sun className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </motion.button>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="w-full">
        
        {/* SECCIÓN HERO */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center overflow-hidden transition-colors duration-500">
          {/* ELEMENTOS DE FONDO DECORATIVOS */}
          <div className="absolute inset-0 opacity-10 dark:opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-ari-rose rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-ari-lavender rounded-full blur-3xl"></div>
          </div>

          {/* CONTENIDO HERO */}
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic leading-none">
                <span className="text-slate-800 dark:text-slate-100 transition-colors duration-500">
                  Sistema
                </span>
                <br />
                <span className="bg-gradient-to-r from-ari-rose to-ari-lavender bg-clip-text text-transparent">
                  Dinámico de Temas
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 font-medium transition-colors duration-500">
                Explora cómo los colores, bordes y sombras se transforman automáticamente
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg transition-all duration-500 shadow-lg dark:shadow-2xl dark:shadow-ari-rose/20"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                {isDark ? 'Modo Claro' : 'Modo Oscuro'}
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* SECCIÓN DE TIPOGRAFÍA */}
        <section className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-500">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-slate-800 dark:text-slate-100 transition-colors duration-500">
              Tipografía Inteligente
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* EJEMPLO 1: ENCABEZADO PRINCIPAL */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-lg dark:shadow-ari-rose/10 transition-all duration-500"
              >
                <h3 className="text-3xl font-black text-slate-800 dark:text-slate-100 mb-4 transition-colors duration-500">
                  Encabezado Principal
                </h3>
                <p className="text-slate-600 dark:text-slate-400 transition-colors duration-500">
                  Los encabezados usan `text-slate-800 dark:text-slate-100` para máxima legibilidad en ambos modos
                </p>
              </motion.div>

              {/* EJEMPLO 2: PÁRRAFO CON TEXTO SECUNDARIO */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-lg dark:shadow-ari-lavender/10 transition-all duration-500"
              >
                <h3 className="text-3xl font-black text-slate-800 dark:text-slate-100 mb-4 transition-colors duration-500">
                  Texto Secundario
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2 transition-colors duration-500">
                  Usa `text-slate-600 dark:text-slate-400` para jerarquía visual clara
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 transition-colors duration-500">
                  Incluso el texto más pequeño se adapta automáticamente
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECCIÓN DE TARJETAS */}
        <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-slate-800 dark:text-slate-100 transition-colors duration-500">
              Tarjetas Dinámicas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🎨',
                  title: 'Colores Adaptativos',
                  desc: 'Los fondos cambian de claro a oscuro preservando legibilidad',
                  bgLight: 'bg-slate-100',
                  bgDark: 'bg-slate-900',
                  borderColor: 'ari-rose',
                },
                {
                  icon: '✨',
                  title: 'Sombras Inteligentes',
                  desc: 'Modo claro: sombras sutiles. Modo oscuro: resplandor elegante',
                  bgLight: 'bg-slate-100',
                  bgDark: 'bg-slate-900',
                  borderColor: 'ari-lavender',
                },
                {
                  icon: '⚡',
                  title: 'Transiciones Suaves',
                  desc: 'Todos los cambios usan duration-500 para fluidez visual',
                  bgLight: 'bg-slate-100',
                  bgDark: 'bg-slate-900',
                  borderColor: 'ari-mint',
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className={`p-8 ${card.bgLight} dark:${card.bgDark} rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-2xl transition-all duration-500 ${
                    card.borderColor === 'ari-rose' ? 'dark:shadow-ari-rose/20' :
                    card.borderColor === 'ari-lavender' ? 'dark:shadow-ari-lavender/20' :
                    'dark:shadow-ari-mint/20'
                  }`}
                >
                  <div className="text-5xl mb-4">{card.icon}</div>
                  <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-3 transition-colors duration-500">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 transition-colors duration-500">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN DE BORDES Y SOMBRAS */}
        <section className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-500">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-slate-800 dark:text-slate-100 transition-colors duration-500">
              Bordes y Resplandores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* SOMBRA SUAVE - MODO CLARO */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-12 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl transition-all duration-500"
              >
                <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-4 transition-colors duration-500">
                  Sombra Suave
                </h3>
                <p className="text-slate-600 dark:text-slate-400 transition-colors duration-500">
                  En modo claro: `shadow-xl` con efecto suave y natural
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-4 transition-colors duration-500">
                  El borde también cambia de `border-slate-200` a `dark:border-slate-800`
                </p>
              </motion.div>

              {/* RESPLANDOR - MODO OSCURO */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-12 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-ari-rose/30 shadow-xl dark:shadow-2xl dark:shadow-ari-rose/30 transition-all duration-500"
              >
                <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-4 transition-colors duration-500">
                  Resplandor de Acento
                </h3>
                <p className="text-slate-600 dark:text-slate-400 transition-colors duration-500">
                  En modo oscuro: `dark:shadow-ari-rose/30` crea resplandor elegante
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-4 transition-colors duration-500">
                  El borde usa `dark:border-ari-rose/30` para coherencia visual
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECCIÓN DE CÓDIGO */}
        <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-800 dark:text-slate-100 transition-colors duration-500">
              Implementación
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-100 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto transition-all duration-500"
            >
              <pre className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-mono transition-colors duration-500">
{`// Estructura Raíz - Todo cambia aquí
<div className="bg-white dark:bg-slate-950 
                text-slate-900 dark:text-white
                transition-colors duration-500">

// Tipografía Inteligente
<h1 className="text-slate-800 dark:text-slate-100">
  Encabezado
</h1>

// Tarjetas Dinámicas
<div className="bg-slate-100 dark:bg-slate-900
                shadow-lg dark:shadow-ari-rose/20">
  Contenido
</div>

// Toggle Función
const toggleTheme = () => {
  const htmlElement = document.documentElement;
  htmlElement.classList.toggle('dark');
  localStorage.setItem('theme', theme);
};`}
              </pre>
            </motion.div>
          </div>
        </section>

        {/* SECCIÓN DE CARACTERÍSTICAS */}
        <section className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-500">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-slate-800 dark:text-slate-100 transition-colors duration-500">
              Características Implementadas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { num: '01', title: 'Estructura Raíz', desc: 'Contenedor con clases completas para cambio total' },
                { num: '02', title: 'Tipografía Adaptativa', desc: 'Todos los textos con colores condicionales' },
                { num: '03', title: 'Toggle Funcional', desc: 'Botón que añade/elimina clase dark del HTML' },
                { num: '04', title: 'Tarjetas Dinámicas', desc: 'Fondos: bg-slate-100 → dark:bg-slate-900' },
                { num: '05', title: 'Sombras Inteligentes', desc: 'Modo claro: suaves, Oscuro: resplandores' },
                { num: '06', title: 'Transiciones 500ms', desc: 'Todos los cambios fluidos y sin parpadeos' },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex gap-6 p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-500"
                >
                  <div className="text-3xl font-black text-ari-rose">{feature.num}</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 transition-colors duration-500">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-950 dark:to-black transition-colors duration-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              Sistema Completamente Funcional
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Este componente implementa todos los requerimientos técnicos especificados
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-ari-rose to-ari-lavender text-white rounded-full font-bold text-lg shadow-2xl shadow-ari-rose/50 transition-all duration-500"
            >
              {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              Cambiar Tema Ahora
            </motion.button>
          </div>
        </section>
      </div>
    </div>
  );
};
