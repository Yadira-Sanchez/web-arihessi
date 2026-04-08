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
        <section id="schedule" className="py-24 px-6 bg-dark-bg transition-all">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-black text-white italic tracking-tighter uppercase leading-none">
                            Próximos <span className="text-ari-rose">Directos</span>
                        </h2>
                        <p className="text-slate-500 font-medium mt-4 uppercase tracking-[0.2em] text-xs">
                            Horario basado en Ciudad de México (CST)
                        </p>
                    </motion.div>

                    <div className="flex gap-4">
                        <div className="px-4 py-2 bg-ari-rose/10 border border-ari-rose/20 rounded-xl text-ari-rose text-xs font-bold uppercase">
                            Twitch Partner
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {days.map((item, index) => (
                        <motion.div
                            key={item.day}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className={`p-6 rounded-[2rem] border transition-all duration-300 ${item.game === 'Off'
                                ? 'bg-slate-900/20 border-white/5 opacity-50'
                                : 'bg-dark-card border-white/5 hover:border-ari-rose/50 hover:shadow-[0_0_30px_rgba(244,114,182,0.1)]'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-slate-500 font-black uppercase text-xs tracking-widest">{item.day}</span>
                                {item.game !== 'Off' && (
                                    <span className="w-2 h-2 rounded-full bg-ari-rose animate-ping"></span>
                                )}
                            </div>

                            <h3 className={`text-xl font-bold mb-1 ${item.game === 'Off' ? 'text-slate-600' : 'text-white'}`}>
                                {item.game}
                            </h3>

                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-black text-ari-lavender">{item.time}</span>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter bg-white/5 px-2 py-1 rounded-md">
                                    {item.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-12 text-center text-slate-500 text-sm font-medium italic max-w-2xl mx-auto"
                >
                    * Los horarios pueden variar según eventos especiales ¡Atentos a Instagram!
                </motion.p>
            </div>
        </section>
    );
};