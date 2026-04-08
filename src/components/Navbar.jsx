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

    const navLinks = [
        { name: 'Sobre Mí', href: '#about', id: 'about' },
        { name: 'Horario', href: '#schedule', id: 'schedule' },
        { name: 'Contenido', href: '#lore', id: 'lore' },
        { name: 'Viajes', href: '#travels', id: 'travels' },
        { name: 'Comunidad', href: '#community', id: 'community' },
        { name: 'Tienda', href: '#shop', id: 'shop' },
        { name: 'Contacto', href: '#footer', id: 'footer' },
    ];

    return (
        <nav className="fixed top-0 w-full z-[100] bg-slate-950/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 transition-all shadow-2xl">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* IZQUIERDA: LOGO */}
                <a
                    href="#home"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsOpen(false);
                    }}
                    className="flex items-center gap-3 group cursor-pointer z-[110]"
                >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-ari-rose/30 overflow-hidden group-hover:border-ari-rose transition-all">
                        <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xl font-black tracking-tighter text-white uppercase italic">
                        ARI<span className="text-ari-rose">HESSI</span>
                    </div>
                </a>

                {/* CENTRO: ENLACES (DESKTOP) */}
                <div className="hidden lg:flex gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className={`text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${activeSection === link.id
                                ? 'text-ari-rose scale-110'
                                : 'text-slate-500 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* DERECHA: BOTÓN LIVE + HAMBURGUESA */}
                <div className="flex items-center gap-4 z-[110]">
                    <a
                        href="https://twitch.tv/arihessi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex bg-ari-rose text-white px-5 py-2.5 rounded-full text-[10px] font-black tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all items-center gap-2"
                    >
                        <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                        LIVE NOW
                    </a>

                    {/* Botón Hamburguesa (Solo móvil) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white p-2 focus:outline-none"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* MENÚ MÓVIL (OVERLAY) */}
            <div className={`fixed inset-0 bg-slate-950/98 z-[100] lg:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-2xl font-black uppercase tracking-[0.2em] ${activeSection === link.id ? 'text-ari-rose' : 'text-white'}`}
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href="https://twitch.tv/arihessi"
                    className="mt-4 bg-ari-rose text-white px-8 py-4 rounded-full font-black tracking-widest"
                >
                    TWITCH LIVE
                </a>
            </div>
        </nav>
    );
};