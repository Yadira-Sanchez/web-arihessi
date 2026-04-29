import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Tilt3D } from './effects/Tilt3D';

const destinations = [
    {
        name: 'Japón',
        info: 'Luces y tradición',
        images: ['/travels/japon1.jpg', '/travels/japon2.jpg', '/travels/japon3.jpg'],
        color: 'from-rose-500/40'
    },
    {
        name: 'Canadá',
        info: 'Naturaleza pura',
        images: ['/travels/canada1.jpg', '/travels/canada2.jpg', '/travels/canada3.jpg'],
        color: 'from-blue-500/40'
    },
    {
        name: 'Londres',
        info: 'Niebla y cultura',
        images: ['/travels/londres1.jpg', '/travels/londres2.jpg' , '/travels/londres3.jpg'],
        color: 'from-slate-500/40'
    },
    {
        name: 'París',
        info: 'La ciudad luz',
        images: ['/travels/paris1.jpg', '/travels/paris2.jpg', '/travels/paris3.jpg'],
        color: 'from-orange-500/40'
    },
    {
        name: 'Madrid',
        info: 'Energía latina',
        images: ['/travels/madrid1.jpg', '/travels/madrid2.jpg', '/travels/madrid3.jpg'],
        color: 'from-yellow-500/40'
    },
];

const TravelCard = ({ dest, index }) => {
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % dest.images.length);
        }, 4000 + (index * 200));
        return () => clearInterval(timer);
    }, [dest.images.length, index]);

    return (
        <Tilt3D className="group">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden border-2 border-slate-200/20 dark:border-white/20 light:border-slate-300/30 bg-slate-950 dark:bg-slate-950 light:bg-slate-50 shadow-2xl dark:shadow-2xl dark:shadow-ari-rose/10 light:shadow-lg transition-all"
            >
                {/* GALERÍA DE IMÁGENES */}
                <div className="absolute inset-0 z-0">
                    {dest.images.map((img, i) => (
                        <motion.img
                            key={i}
                            src={img}
                            alt={`${dest.name} ${i}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: currentImg === i ? 0.8 : 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                            onError={(e) => { e.target.src = "https://via.placeholder.com/400x600?text=✈️"; }}
                        />
                    ))}

                    {/* GRADIENTE CON EFECTO GLOW */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/90 dark:from-slate-950/90 light:from-white/95 via-slate-950/50 dark:via-slate-950/50 light:via-white/30 to-transparent z-10`}></div>

                    {/* Overlay de color temático con glow */}
                    <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${dest.color} opacity-20 z-10 group-hover:opacity-40 transition-opacity duration-300`}
                    />

                    {/* Borde animado con gradiente */}
                    <motion.div
                        className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-ari-rose via-ari-lavender to-ari-mint bg-clip-border pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ 
                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                </div>

                {/* CONTENIDO TEXTO */}
                <div className="relative z-20 p-6 md:p-8 h-full flex flex-col justify-end">
                    <motion.div 
                        className="mb-4"
                        whileHover={{ y: -5 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-black text-white dark:text-white light:text-slate-900 italic tracking-tight uppercase drop-shadow-lg">
                            {dest.name}
                        </h3>
                        <p className="text-xs uppercase tracking-widest font-black bg-gradient-to-r from-ari-rose to-ari-lavender bg-clip-text text-transparent mt-1">
                            {dest.info}
                        </p>
                    </motion.div>

                    {/* BOTÓN CON EFECTO GLOW */}
                    <motion.a
                        href="https://instagram.com/arihessi_"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(244, 114, 182, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 md:py-4 bg-gradient-to-r from-ari-rose to-ari-lavender text-white rounded-xl text-xs md:text-sm font-black uppercase tracking-widest hover:shadow-xl transition-all flex items-center justify-center gap-2 group/btn"
                    >
                        Ver Álbum
                        <motion.span className="group-hover/btn:translate-x-1 transition-transform">→</motion.span>
                    </motion.a>
                </div>
            </motion.div>
        </Tilt3D>
    );
};

export const Travels = () => {
    return (
        <section id="travels" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-white dark:bg-slate-950 light:bg-white transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-ari-rose font-black text-xs tracking-[0.4em] uppercase mb-3 block"
                        >
                            Bitácora Global
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white light:text-slate-900 italic tracking-tighter uppercase leading-none">
                            MIS <motion.span 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-ari-rose to-ari-lavender bg-clip-text text-transparent"
                            >
                                AVENTURAS
                            </motion.span>
                        </h2>
                    </div>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 dark:text-slate-400 light:text-slate-600 font-medium italic max-w-xs md:text-right text-sm md:text-base"
                    >
                        Capturando la esencia de cada ciudad, un disparo a la vez.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                    {destinations.map((dest, index) => (
                        <TravelCard key={dest.name} dest={dest} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
