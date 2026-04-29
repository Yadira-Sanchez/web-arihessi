import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section, footer');
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ... (mantenemos tu lógica de useEffect e isOpen igual)

    const navLinks = [
        { name: 'Sobre Mí', href: '#about', id: 'about' },
        { name: 'Horario', href: '#schedule', id: 'schedule' },
        { name: 'Contenido', href: '#lore', id: 'lore' },
        { name: 'Galería', href: '#travels', id: 'travels' },
        { name: 'Comunidad', href: '#community', id: 'community' },
        { name: 'Tienda', href: '#shop', id: 'shop' },
        { name: 'Contacto', href: '#footer', id: 'footer' },
    ];

    // ... (Toda tu lógica de useEffect e isOpen se mantiene igual)

    return (
        <nav className="fixed top-0 w-full z-[100] bg-white/80 dark:bg-slate-950/80 light:bg-white/80 backdrop-blur-lg border-b border-slate-200 dark:border-white/10 light:border-slate-200 px-4 sm:px-6 lg:px-12 py-4 transition-colors duration-500">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* LOGO CON HOVER EFFECT */}
                <motion.a
                    href="#home"
                    onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 sm:gap-3 group cursor-pointer z-[110] pr-4 sm:pr-6"
                >
                    <motion.div
                        className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-ari-rose to-ari-lavender border border-ari-rose/30 overflow-hidden shrink-0 flex items-center justify-center"
                        whileHover={{ rotate: 10 }}
                    >
                        <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div className="text-lg sm:text-xl font-black tracking-tighter text-slate-900 dark:text-white light:text-slate-900 uppercase italic leading-none flex">
                        ARI<span className="text-ari-rose ml-1">HESSI</span>
                    </motion.div>
                </motion.a>

                {/* LINKS DESKTOP CON ANIMACIÓN DE SUBRAYADO */}
                <div className="hidden lg:flex gap-8">
                    {navLinks.map((link, idx) => (
                        <motion.a
                            key={link.id}
                            href={link.href}
                            onClick={(e) => {
                                if (link.isExternal) {
                                    e.preventDefault();
                                    window.location.hash = link.href.substring(1);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                            whileHover={{ y: -2 }}
                            className="relative text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 light:text-slate-600 transition-colors duration-300 hover:text-ari-rose dark:hover:text-ari-rose"
                        >
                            {link.name}
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="navbar-underline"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ari-rose to-ari-lavender"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </motion.a>
                    ))}
                </div>

                {/* BOTÓN THEME SWITCHER + LIVE + HAMBURGUESA */}
                <div className="flex items-center gap-3 z-[110]">
                    <ThemeSwitcher />
                    <a href="https://twitch.tv/arihessi" target="_blank" rel="noopener noreferrer"
                        className="hidden sm:flex bg-ari-rose text-white px-5 py-2.5 rounded-full text-[10px] font-black tracking-widest shadow-lg items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                        LIVE NOW
                    </a>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white dark:text-white light:text-slate-900 p-2 relative w-10 h-10 flex items-center justify-center"
                    >
                        {/* Icono de hamburguesa con animación */}
                        <div className="w-6 flex flex-col gap-1.5">
                            <span className={`block h-0.5 bg-white dark:bg-white light:bg-slate-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block h-0.5 bg-white dark:bg-white light:bg-slate-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 bg-white dark:bg-white light:bg-slate-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* MENÚ MÓVIL CON ANIMACIONES */}
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { opacity: 1, pointerEvents: "auto" },
                    closed: { opacity: 0, pointerEvents: "none" }
                }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 h-screen w-full bg-white dark:bg-slate-950 light:bg-white flex flex-col items-center justify-center z-[99]"
            >
                <motion.div
                    className="flex flex-col items-center gap-6 px-4"
                    variants={{
                        open: {
                            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
                        },
                        closed: {
                            transition: { staggerChildren: 0.05, staggerDirection: -1 }
                        }
                    }}
                >
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.id}
                            href={link.href}
                            onClick={(e) => {
                                if (link.isExternal) {
                                    e.preventDefault();
                                    window.location.hash = link.href.substring(1);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                                setIsOpen(false);
                            }}
                            variants={{
                                open: { opacity: 1, y: 0 },
                                closed: { opacity: 0, y: 20 }
                            }}
                            className={`text-2xl font-black uppercase tracking-wider text-slate-900 dark:text-white light:text-slate-900 transition-colors ${activeSection === link.id ? 'text-ari-rose' : ''}`}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.a
                        href="https://twitch.tv/arihessi"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={{
                            open: { opacity: 1, y: 0 },
                            closed: { opacity: 0, y: 20 }
                        }}
                        className="mt-6 bg-gradient-to-r from-ari-rose to-ari-lavender text-white px-10 py-4 rounded-full font-black tracking-wider text-sm shadow-xl shadow-ari-rose/20"
                    >
                        TWITCH LIVE
                    </motion.a>
                </motion.div>
            </motion.div>
        </nav>
    );
};
