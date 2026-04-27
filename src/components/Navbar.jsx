import { useState, useEffect } from 'react';

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
        { name: 'Galería', href: '#travels', id: 'travels' }, // Cambiado Viajes por Galería
        { name: 'Comunidad', href: '#community', id: 'community' },
        { name: 'Tienda', href: '#shop', id: 'shop' },
        { name: 'Contacto', href: '#footer', id: 'footer' },
    ];

    // ... (Toda tu lógica de useEffect e isOpen se mantiene igual)

    return (
        <nav className="fixed top-0 w-full z-[100] bg-transparent backdrop-blur-md border-b border-white/5 px-6 py-4 transition-all">F
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* LOGO: pr-6 para asegurar que la 'I' inclinada no se corte */}
                <a href="#home" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }}
                    className="flex items-center gap-3 group cursor-pointer z-[110] pr-6"
                >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-ari-rose/30 overflow-hidden shrink-0">
                        <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xl font-black tracking-tighter text-white uppercase italic leading-none flex">
                        ARI<span className="text-ari-rose ml-1">HESSI</span>
                    </div>
                </a>

                {/* LINKS DESKTOP */}
                <div className="hidden lg:flex gap-6">
                    {navLinks.map((link) => (
                        <a key={link.id} href={link.href}
                            className={`text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${activeSection === link.id ? 'text-ari-rose scale-110' : 'text-slate-500 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* BOTÓN LIVE + HAMBURGUESA */}
                <div className="flex items-center gap-4 z-[110]">
                    <a href="https://twitch.tv/arihessi" target="_blank" rel="noopener noreferrer"
                        className="hidden sm:flex bg-ari-rose text-white px-5 py-2.5 rounded-full text-[10px] font-black tracking-widest shadow-lg items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                        LIVE NOW
                    </a>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white p-2 relative w-10 h-10 flex items-center justify-center"
                    >
                        {/* Icono de hamburguesa con animación */}
                        <div className="w-6 flex flex-col gap-1.5">
                            <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* MENÚ MÓVIL: Ajustado a fixed inset-0 con flex-col centrado */}
            <div className={`fixed inset-0 h-screen w-full bg-slate-950 flex flex-col items-center justify-center transition-all duration-500 ease-in-out z-[100] ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                }`}>
                <div className="flex flex-col items-center gap-6">
                    {navLinks.map((link) => (
                        <a key={link.id} href={link.href} onClick={() => setIsOpen(false)}
                            className={`text-2xl font-black uppercase tracking-[0.2em] transition-all ${activeSection === link.id ? 'text-ari-rose' : 'text-white active:text-ari-rose'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="https://twitch.tv/arihessi" className="mt-6 bg-ari-rose text-white px-10 py-4 rounded-full font-black tracking-widest text-sm shadow-xl shadow-ari-rose/20">
                        TWITCH LIVE
                    </a>
                </div>
            </div>
        </nav>
    );
};