import { motion } from 'framer-motion';

export const Content = () => {
    // Canal 1: Historias de Killers (Terror/Lore)
    const loreVideos = [
        { id: 'mAKB-SEhifg', title: 'El origen del miedo' },
        { id: 'CeuStvu7XO8', title: 'Relatos del Ente' },
        { id: 'Aq10Ob8PfK4', title: 'Killers Lore' }
    ];

    // Canal 2: ASMR & Ferrets (Relajación/Mundo animal)
    const zenVideos = [
        { id: 'D6ar20mulz8', title: 'Momentos de calma' },
        { id: 'DZjHYSt7WpM', title: 'Vida con hurones' },
        { id: 'iK7t8o31Gy4', title: 'ASMR Relax' }
    ];

    return (
        <section id="lore" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
            {/* Luces de fondo sutiles */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-ari-rose/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ari-lavender/5 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* SECCIÓN 1: LORE Y TERROR */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex flex-col">
                            <span className="text-ari-rose font-black text-[10px] tracking-[0.4em] uppercase mb-2">Dark Side</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
                                Historias de <span className="text-ari-rose drop-shadow-[0_0_15px_rgba(244,114,182,0.3)]">Killers</span>
                            </h2>
                            <p className="text-slate-400 mt-4 font-medium max-w-md">
                                Sumérgete en la oscuridad del Ente. Un recorrido por el pasado de los asesinos más letales de DBD.
                            </p>
                        </div>

                        {/* Video Destacado Lore */}
                        <div className="relative group aspect-video rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl shadow-rose-900/10">
                            <img
                                src={`https://img.youtube.com/vi/${loreVideos[0].id}/maxresdefault.jpg`}
                                alt="Main Lore Video"
                                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                            <a
                                href={`https://youtu.be/${loreVideos[0].id}`}
                                target="_blank" rel="noreferrer"
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="w-20 h-20 bg-ari-rose text-white rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">▶</div>
                            </a>
                        </div>

                        {/* Galería pequeña Lore */}
                        <div className="grid grid-cols-2 gap-4">
                            {loreVideos.slice(1).map(video => (
                                <a key={video.id} href={`https://youtu.be/${video.id}`} target="_blank" rel="noreferrer" className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 group">
                                    <img src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all" alt="Lore thumbnail" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white text-xs">▶</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* SECCIÓN 2: ZEN & FERRETS */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="flex flex-col">
                            <span className="text-ari-lavender font-black text-[10px] tracking-[0.4em] uppercase mb-2">Chill Side</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
                                Zona <span className="text-ari-lavender drop-shadow-[0_0_15px_rgba(167,139,250,0.3)]">Zen & Ferrets</span>
                            </h2>
                            <p className="text-slate-400 mt-4 font-medium max-w-md">
                                Tu refugio de paz. Un espacio dedicado a la relajación, sonidos ASMR y la vida junto a Niko, Luna y Koda.
                            </p>
                        </div>

                        {/* Video Destacado Zen */}
                        <div className="relative group aspect-video rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl shadow-purple-900/10">
                            <img
                                src={`https://img.youtube.com/vi/${zenVideos[0].id}/maxresdefault.jpg`}
                                alt="Main Zen Video"
                                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                            <a
                                href={`https://youtu.be/${zenVideos[0].id}`}
                                target="_blank" rel="noreferrer"
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="w-20 h-20 bg-ari-lavender text-white rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">▶</div>
                            </a>
                        </div>

                        {/* Galería pequeña Zen */}
                        <div className="grid grid-cols-2 gap-4">
                            {zenVideos.slice(1).map(video => (
                                <a key={video.id} href={`https://youtu.be/${video.id}`} target="_blank" rel="noreferrer" className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 group">
                                    <img src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all" alt="Zen thumbnail" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white text-xs">▶</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};