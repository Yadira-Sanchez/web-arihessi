import { motion } from 'framer-motion';

export const Games = () => {
    const games = [
        {
            name: 'Dead by Daylight',
            image: '/games/dbd.jpg',
            type: 'Main Game',
            tags: ['Survival', 'Horror', 'Lore'],
            icon: '🔪',
            color: 'from-rose-600/60' // Más sólido
        },
        {
            name: 'Terror Psicológico',
            image: '/games/terror.png',
            type: 'Variety',
            tags: ['Indie', 'Atmosphere', 'Screams'],
            icon: '👻',
            color: 'from-ari-lavender/60'
        },
        {
            name: 'Fortnite / Retro',
            type: 'Classic',
            image: '/games/fortnite.png',
            tags: ['Nostalgia', 'Chill', 'Fun'],
            icon: '🕹️',
            color: 'from-blue-600/60'
        },
        {
            name: 'Just Chatting',
            image: '/games/chatting.jpg',
            type: 'Community',
            tags: ['Talk', 'Zenzone', 'ASMR'],
            icon: '🎙️',
            color: 'from-ari-mint/60'
        }
    ];

    return (
        <section id="games" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-slate-950 dark:bg-slate-950 light:bg-white transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-black italic tracking-tighter uppercase mb-4 text-white dark:text-white light:text-slate-900">
                        Mi <span className="text-ari-rose text-shadow-glow">Arsenal</span>
                    </h2>
                    <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium max-w-lg mx-auto text-sm md:text-base">
                        Desde sobrevivir al Ente hasta explorar los rincones más oscuros del gaming independiente.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {games.map((game, index) => (
                        <motion.div
                            key={game.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -12 }}
                            className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-[3.5rem] bg-slate-900 dark:bg-slate-900 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300/20 overflow-hidden group cursor-pointer shadow-2xl dark:shadow-2xl light:shadow-lg transition-all"
                        >
                            {/* --- IMAGEN CON ALTA CLARIDAD --- */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={game.image}
                                    alt={game.name}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                                
                                {/* Gradiente inferior adaptativo */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 dark:from-slate-950 light:from-slate-50 via-slate-950/20 dark:via-slate-950/20 light:via-white/20 to-transparent z-10"></div>
                                
                                {/* Brillo de color lateral sutil */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-40 z-10`}></div>
                            </div>

                            {/* --- CONTENIDO --- */}
                            <div className="relative z-20 p-6 md:p-8 h-full flex flex-col justify-end">
                                <div className="text-3xl md:text-4xl mb-4 drop-shadow-2xl transform group-hover:scale-110 transition-transform origin-left">
                                    {game.icon}
                                </div>
                                
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-ari-rose bg-slate-950/60 dark:bg-slate-950/60 light:bg-white/60 backdrop-blur-md px-2 py-1 rounded w-fit mb-2">
                                    {game.type}
                                </span>
                                
                                <h3 className="text-lg md:text-2xl font-black text-white dark:text-white light:text-slate-900 mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] uppercase italic">
                                    {game.name}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {game.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-slate-950/80 dark:bg-slate-950/80 light:bg-white/80 border border-white/10 dark:border-white/10 light:border-slate-300/20 rounded-full text-[9px] font-bold text-slate-300 dark:text-slate-300 light:text-slate-700 uppercase">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-12 md:mt-16 p-8 md:p-10 rounded-[3rem] bg-white/5 dark:bg-white/5 light:bg-slate-100/50 border border-dashed border-white/10 dark:border-white/10 light:border-slate-300/20 text-center backdrop-blur-sm transition-all"
                >
                    <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium italic text-sm md:text-base">
                        ¿Tienes alguna recomendación de terror o juego indie?
                        <span className="text-ari-lavender dark:text-ari-lavender light:text-ari-rose block md:inline md:ml-2 font-black cursor-pointer hover:text-ari-rose dark:hover:text-ari-rose light:hover:text-ari-lavender transition-colors uppercase tracking-wider underline underline-offset-4">
                            ¡Cuéntamelo en el próximo stream!
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
