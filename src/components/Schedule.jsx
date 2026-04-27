import { motion } from 'framer-motion';

export const Schedule = () => {
    const days = [
        { day: 'Lunes', game: 'Dead by Daylight', time: '20:00', status: 'Jugando con suscriptores' },
        { day: 'Martes', game: 'Dead by Daylight', time: '20:00', status: 'Jugando con suscriptores' },
        { day: 'Miércoles', game: 'Variedad', time: 'Flexible', status: 'Según el ánimo ✨' }, // Cambiado a variedad flexible
        { day: 'Jueves', game: 'Dead by Daylight', time: '20:00', status: 'Jugando con suscriptores' },
        { day: 'Viernes', game: 'Dead by Daylight', time: '20:00', status: 'Jugando con suscriptores' },
        { day: 'Sábado', game: 'Off', time: '-', status: 'Descanso' },
        { day: 'Domingo', game: 'Off', time: '-', status: 'Descanso' },
    ];

    return (
        <section id="schedule" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-dark-bg dark:bg-dark-bg light:bg-ari-offwhite transition-colors duration-300">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-4 md:gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white dark:text-white light:text-slate-900 italic tracking-tighter uppercase leading-none">
                            Próximos <span className="text-ari-rose">Directos</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-500 light:text-slate-600 font-medium mt-4 uppercase tracking-[0.2em] text-xs">
                            Horario basado en Ciudad de México (CST)
                        </p>
                    </motion.div>

                    <div className="flex gap-4">
                        <div className="px-4 py-2 bg-ari-rose/10 dark:bg-ari-rose/10 light:bg-ari-rose/20 border border-ari-rose/20 dark:border-ari-rose/20 light:border-ari-rose/30 rounded-xl text-ari-rose text-xs font-bold uppercase">
                            Twitch Partner
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                    {days.map((item, index) => (
                        <motion.div
                            key={item.day}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className={`p-4 md:p-6 rounded-[2rem] border transition-all duration-300 ${item.game === 'Off'
                                ? 'bg-slate-900/20 dark:bg-slate-900/20 light:bg-slate-100/20 border-white/5 dark:border-white/5 light:border-slate-300/10 opacity-50'
                                : 'bg-dark-card dark:bg-dark-card light:bg-white/50 border-white/5 dark:border-white/5 light:border-slate-300/20 hover:border-ari-rose/50 hover:shadow-[0_0_30px_rgba(244,114,182,0.1)]'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-4 md:mb-6">
                                <span className="text-slate-500 dark:text-slate-500 light:text-slate-600 font-black uppercase text-xs tracking-widest">{item.day}</span>
                                {item.game !== 'Off' && (
                                    <span className="w-2 h-2 rounded-full bg-ari-rose animate-ping"></span>
                                )}
                            </div>

                            <h3 className={`text-lg md:text-xl font-bold mb-1 ${item.game === 'Off' ? 'text-slate-600' : 'text-white dark:text-white light:text-slate-900'}`}>
                                {item.game}
                            </h3>

                            <div className="flex items-center gap-2">
                                <span className="text-xl md:text-2xl font-black text-ari-lavender dark:text-ari-lavender light:text-ari-rose">{item.time}</span>
                                <span className="text-[9px] md:text-[10px] font-bold text-slate-500 dark:text-slate-500 light:text-slate-600 uppercase tracking-tighter bg-white/5 dark:bg-white/5 light:bg-slate-900/10 px-2 py-1 rounded-md">
                                    {item.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-12 md:mt-16 text-center text-slate-500 dark:text-slate-500 light:text-slate-600 text-xs md:text-sm font-medium italic max-w-2xl mx-auto"
                >
                    * Los horarios pueden variar según eventos especiales ¡Atentos a Instagram!
                </motion.p>
            </div>
        </section>
    );
};
