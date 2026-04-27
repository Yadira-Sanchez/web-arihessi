import React from 'react';
import { motion } from 'framer-motion';

export const ThemeShowcase = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-100 transition-colors duration-500 pt-20">
      
      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-16 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
              Theme Toggle Demo
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8">
              Cambio suave entre modo claro y oscuro con Tailwind CSS
            </p>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-ari-rose to-ari-lavender rounded-lg font-bold text-white">
              Haz clic en el icono Sol/Luna en el navbar
            </div>
          </motion.div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-slate-100 dark:bg-slate-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">Paleta de Colores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dark Mode Colors */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
            >
              <h3 className="text-2xl font-bold mb-6">Modo Oscuro</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-950 rounded-lg text-white">
                  <span>Fondo: bg-slate-950</span>
                  <div className="w-12 h-12 bg-slate-950 rounded border-2 border-white"></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800 dark:bg-slate-800 rounded-lg dark:text-slate-100 text-slate-950">
                  <span>Texto Principal: text-slate-100</span>
                  <span className="text-slate-100 font-bold">Abc</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800 dark:bg-slate-800 rounded-lg dark:text-slate-400 text-slate-600">
                  <span>Texto Secundario: text-slate-400</span>
                  <span className="text-slate-400 font-bold">Abc</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800 dark:bg-slate-800 rounded-lg">
                  <span>Acento: ari-rose (vibrante)</span>
                  <div className="w-12 h-12 bg-ari-rose rounded-lg shadow-lg shadow-ari-rose/50"></div>
                </div>
              </div>
            </motion.div>

            {/* Light Mode Colors */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
            >
              <h3 className="text-2xl font-bold mb-6">Modo Claro</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-slate-300">
                  <span>Fondo: bg-white</span>
                  <div className="w-12 h-12 bg-white rounded border-4 border-slate-950"></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-100 rounded-lg text-slate-950">
                  <span>Texto Principal: text-slate-950</span>
                  <span className="text-slate-950 font-bold">Abc</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-100 rounded-lg text-slate-600">
                  <span>Texto Secundario: text-slate-600</span>
                  <span className="text-slate-600 font-bold">Abc</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-100 rounded-lg">
                  <span>Acento: ari-rose (profundo)</span>
                  <div className="w-12 h-12 bg-ari-rose rounded-lg shadow-lg"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Typography Examples */}
      <section className="px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">Ejemplos de Tipografía</h2>
          
          <div className="space-y-8">
            {/* Heading Examples */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-600 dark:text-slate-400">Encabezados</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">h1 - Texto Principal</p>
                  <h1 className="text-5xl font-black text-slate-950 dark:text-slate-100">Encabezado Principal</h1>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">h2 - Texto Principal</p>
                  <h2 className="text-4xl font-bold text-slate-950 dark:text-slate-100">Encabezado Secundario</h2>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">p - Texto Principal</p>
                  <p className="text-lg text-slate-950 dark:text-slate-100">Este es un párrafo con texto principal. Debería ser legible en ambos modos.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">p - Texto Secundario</p>
                  <p className="text-base text-slate-600 dark:text-slate-400">Este es un párrafo con texto secundario. Proporciona información complementaria con menor énfasis.</p>
                </div>
              </div>
            </motion.div>

            {/* Button Examples */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-600 dark:text-slate-400">Botones con Transición</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button className="px-6 py-3 bg-ari-rose text-white font-bold rounded-lg hover:shadow-lg hover:shadow-ari-rose/50 transition-all duration-500">
                  Botón Primary
                </button>
                <button className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-950 dark:text-slate-100 font-bold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-500">
                  Botón Secondary
                </button>
                <button className="px-6 py-3 border-2 border-slate-950 dark:border-slate-100 text-slate-950 dark:text-slate-100 font-bold rounded-lg hover:bg-slate-950 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-950 transition-all duration-500">
                  Botón Outline
                </button>
                <button className="px-6 py-3 bg-ari-lavender text-white font-bold rounded-lg hover:shadow-lg hover:shadow-ari-lavender/50 transition-all duration-500">
                  Botón Accent
                </button>
              </div>
            </motion.div>

            {/* Card Examples */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-600 dark:text-slate-400">Tarjetas (Cards)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((card) => (
                  <motion.div
                    key={card}
                    whileHover={{ y: -8 }}
                    className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-500"
                  >
                    <div className="w-12 h-12 bg-ari-rose rounded-lg mb-4"></div>
                    <h4 className="text-lg font-bold text-slate-950 dark:text-slate-100 mb-2">Tarjeta {card}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      Descripción de la tarjeta. Esta tiene transiciones suaves.
                    </p>
                    <a href="#" className="text-ari-rose font-semibold hover:text-ari-lavender transition-colors duration-500">
                      Leer más →
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transition Demo */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-slate-100 dark:bg-slate-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">Demo de Transición</h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-12 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700"
          >
            <p className="text-lg text-slate-950 dark:text-slate-100 mb-6">
              Haz clic en el Theme Toggle en el navbar para ver las transiciones suaves. Todos los colores cambiarán con una duración de 500ms sin parpadeos.
            </p>
            
            <div className="bg-gradient-to-r from-ari-rose/20 to-ari-lavender/20 dark:from-ari-rose/40 dark:to-ari-lavender/40 p-8 rounded-lg border border-ari-rose/30 dark:border-ari-rose/50">
              <p className="text-slate-950 dark:text-slate-100 font-semibold text-center">
                Observa cómo el fondo, texto y bordes cambian suavemente
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accessibility Notice */}
      <section className="px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 rounded-2xl bg-ari-mint/10 dark:bg-ari-mint/20 border-l-4 border-ari-mint"
          >
            <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-100 mb-4">Accesibilidad</h3>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <span className="mr-3 font-bold">✓</span>
                <span>Contraste adecuado entre texto y fondo en ambos modos</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">✓</span>
                <span>Transiciones de 500ms para reducir efectos de parpadeo</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">✓</span>
                <span>Textos secundarios con suficiente contraste (text-slate-400 en dark, text-slate-600 en light)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">✓</span>
                <span>Acentos ari-rose ajustados para legibilidad en ambos modos</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

    </main>
  );
};
