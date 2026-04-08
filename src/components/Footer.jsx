export const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white py-20 px-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Bio Breve */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-black tracking-tighter mb-4 italic">
                            ARI<span className="text-ari-rose">HESSI</span>
                        </h2>
                        <p className="text-slate-400 font-medium leading-relaxed max-w-sm">
                            Explorando el lado oscuro del gaming, compartiendo momentos Zen y
                            llevando un poco de amor a los perritos de Guerrero. 🐾
                        </p>
                        <div className="mt-6 flex gap-4">
                            {/* Un pequeño detalle: indicador de estado */}
                            <div className="flex items-center gap-2 px-3 py-1 bg-ari-rose/10 rounded-full border border-ari-rose/20">
                                <span className="w-2 h-2 bg-ari-rose rounded-full animate-pulse"></span>
                                <span className="text-[10px] font-bold text-ari-rose uppercase tracking-widest">Acapulco, MX</span>
                            </div>
                        </div>
                    </div>

                    {/* Redes Sociales Reales */}
                    <div>
                        <h4 className="font-bold mb-6 text-ari-rose uppercase text-xs tracking-widest">Sígueme</h4>
                        <div className="flex flex-col gap-3 text-sm font-semibold text-slate-400">
                            <a href="https://instagram.com/arihessi_" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
                            <a href="https://tiktok.com/@arihessi_" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">TikTok</a>
                            <a href="https://www.youtube.com/@arihessiASMR" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">YouTube</a>
                            <a href="https://discord.gg/sq6pjJz" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Discord</a>
                            <a href="https://www.threads.net/@arihessi_" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Threads</a>
                            <a href="https://facebook.com/arihessi" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a>
                            <a href="https://twitter.com/arihessi" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
                        </div>
                    </div>

                    {/* Contacto / Business */}
                    <div>
                        <h4 className="font-bold mb-6 text-ari-lavender uppercase text-xs tracking-widest">Contacto</h4>
                        <p className="text-sm text-slate-400 font-medium leading-relaxed">
                            Para colaboraciones y business:<br />
                            <span className="text-white font-bold select-all">arihessi@movdi.mx</span>
                        </p>
                        <div className="mt-8">
                            <h4 className="font-bold mb-4 text-slate-500 uppercase text-[10px] tracking-widest">Zona Horaria</h4>
                            <p className="text-xs text-slate-500 font-bold">GMT-6 (CDMX)</p>
                        </div>
                    </div>
                </div>

                {/* Copyright Final */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
                    <span>© 2026 Arihessi • Todos los derechos reservados</span>
                    <span className="text-slate-800">Designed for the Entity's Realm</span>
                </div>
            </div>

            <footer id="footer" className="...">  </footer>
        </footer>
    );
};