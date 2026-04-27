import { motion } from 'framer-motion';

export const About = () => {
    const ferrets = [
        { name: 'Neeko', desc: 'El guardián del caos', img: '/ferrets/neeko.jpg', color: 'border-ari-rose/30' },
        { name: 'Haku', desc: 'La reina del drama', img: '/ferrets/haku.jpg', color: 'border-ari-lavender/30' },
        { name: 'Nunu', desc: 'Explorador de sombras', img: '/ferrets/nunu.jpg', color: 'border-ari-mint/30' },
    ];

    return (
        <section id="about" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 relative overflow-hidden bg-dark-bg dark:bg-dark-bg light:bg-ari-offwhite transition-colors duration-300">
            {/* Decoración de fondo sutil */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-ari-rose/5 dark:bg-ari-rose/5 light:bg-ari-rose/10 blur-[100px] rounded-full -z-10"></div>

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

                    {/* BLOQUE DE TEXTO: TU HISTORIA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 md:space-y-8"
                    >
                        <div>
                            <span className="text-ari-rose font-black text-xs tracking-[0.4em] uppercase mb-2 block">
                                Detrás del monitor
                            </span>
                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black italic text-white dark:text-white light:text-slate-900 tracking-tighter leading-none uppercase">
                                Entre el <span className="text-ari-lavender dark:text-ari-lavender light:text-ari-rose underline decoration-ari-lavender/20 dark:decoration-ari-lavender/20 light:decoration-ari-rose/20 underline-offset-8">Terror</span> <br />
                                y la calma.
                            </h2>
                        </div>

                        <div className="space-y-4 text-slate-400 dark:text-slate-400 light:text-slate-600 text-base md:text-lg font-medium leading-relaxed">
                            <p>
                                Soy <span className="text-white dark:text-white light:text-slate-900 font-bold italic text-lg md:text-2xl tracking-tighter">Arihessi.</span> Una mezcla de adrenalina en el mapa y calma absoluta fuera de él.
                            </p>
                            <p>
                                Mi día a día se resume en <span className="text-ari-rose dark:text-ari-rose light:text-ari-rose font-bold">sobrevivir a las pruebas más intensas</span> frente a la pantalla y dedicar mi tiempo real a lo que verdaderamente importa: <span className="text-ari-mint dark:text-ari-mint light:text-ari-rose font-bold">cambiar la vida de los que no tienen voz.</span>
                            </p>
                            <p>
                                Desde el corazón de México, he construido este espacio para quienes buscan refugio del caos, disfrutan de una buena partida y creen que <span className="text-white dark:text-white light:text-slate-900 border-b border-ari-rose/30 dark:border-ari-rose/30 light:border-ari-rose/50">un plato de comida para un perrito de la calle</span> puede cambiar el mundo.
                            </p>
                            <p className="text-ari-lavender dark:text-ari-lavender light:text-ari-rose italic">
                                "Si no me encuentras gritando en un mapa de terror, probablemente esté alimentando a un peludito o jugando con mis hurones."
                            </p>
                            
                        </div>

                        {/* Stats Rápidas */}
                        <div className="flex gap-6 md:gap-8 pt-4">
                            <div>
                                <div className="text-2xl md:text-3xl font-black text-white dark:text-white light:text-slate-900 italic">MX</div>
                                <div className="text-[9px] md:text-[10px] font-bold text-slate-600 dark:text-slate-600 light:text-slate-500 uppercase tracking-widest">Base de Ops</div>
                            </div>
                            <div className="w-px h-10 md:h-12 bg-white/10 dark:bg-white/10 light:bg-slate-300/20"></div>
                            <div>
                                <div className="text-2xl md:text-3xl font-black text-white dark:text-white light:text-slate-900 italic">∞</div>
                                <div className="text-[9px] md:text-[10px] font-bold text-slate-600 dark:text-slate-600 light:text-slate-500 uppercase tracking-widest">Gritos en DBD</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* BLOQUE DE LOS HURONES */}
                    <div className="grid grid-cols-1 gap-4 md:gap-6">
                        <h3 className="text-xs md:text-sm font-black text-slate-500 dark:text-slate-500 light:text-slate-600 uppercase tracking-[0.3em] mb-2 text-center lg:text-left">
                            Mi equipo de soporte (Ferrets)
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 md:gap-4">
                            {ferrets.map((ferret, index) => (
                                <motion.div
                                    key={ferret.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    className={`group flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-[2.5rem] bg-dark-card dark:bg-dark-card light:bg-slate-100/50 border ${ferret.color} transition-all duration-300`}
                                >
                                    <div className="w-16 md:w-20 h-16 md:h-20 rounded-2xl overflow-hidden border-2 border-white/5 dark:border-white/5 light:border-slate-300/20 bg-slate-800 dark:bg-slate-800 light:bg-slate-200 shrink-0">
                                        <img
                                            src={ferret.img}
                                            alt={ferret.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                            onError={(e) => e.target.src = "https://via.placeholder.com/200?text=🦦"}
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-lg md:text-xl font-black text-white dark:text-white light:text-slate-900 uppercase tracking-tighter">{ferret.name}</h4>
                                        <p className="text-slate-500 dark:text-slate-500 light:text-slate-600 text-sm font-medium">{ferret.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
