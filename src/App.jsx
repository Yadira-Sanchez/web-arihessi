import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Games } from './components/Games';
import { Content } from './components/Content';
import { Schedule } from './components/Schedule';
import { Travels } from './components/Travels';
import { Community } from './components/Community';
import { Shop } from './components/Shop';
import { Footer } from './components/Footer';


function App() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-ari-rose/30">
      <Navbar />

      {/* --- SECCIÓN HERO (Lo que faltaba) --- */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* ESPACIO PARA TU FOTO: Se coloca detrás del nombre con opacidad suave */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden">
          <img
            src="/fondo.jpeg"
            alt="Arihessi"
            className="h-full md:h-[110%] w-auto object-contain opacity-40 mask-image-gradient"

          />
        </div>
        <div className="space-y-4 relative">
          <span className="text-ari-rose font-black text-xs tracking-[0.5em] uppercase animate-pulse">
            Streamer & Content Creator
          </span>

          <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter italic leading-none transition-all">
            ARI<span className="text-ari-rose drop-shadow-[0_0_30px_rgba(244,114,182,0.3)]">HESSI</span>
          </h1>

          <p className="max-w-lg mx-auto text-slate-400 font-medium text-lg md:text-xl tracking-tight">
            Explorando mundos, rescatando perritos y sobreviviendo al Ente.
            <span className="block mt-2 text-ari-lavender">Bienvenido a mi rincón del caos.</span>
          </p>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <span className="text-2xl">↓</span>
        </div>
      </section>

      {/* --- RESTO DE SECCIONES --- */}
      <div className="space-y-10"> {/* Espaciado elegante entre bloques */}
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