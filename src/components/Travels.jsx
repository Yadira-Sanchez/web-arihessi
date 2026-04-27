import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -15 }}
            className="group relative h-[400px] md:h-[450px] lg:h-[500px] rounded-[3.5rem] overflow-hidden border border-white/10 dark:border-white/10 light:border-slate-300/20 bg-slate-950 dark:bg-slate-950 light:bg-slate-100 shadow-2xl dark:shadow-2xl light:shadow-lg transition-all"
        >
            {/* GALERÍA DE IMÁGENES */}
            <div className="absolute inset-0 z-0">
                {dest.images.map((img, i) => (
                    <motion.img
                        key={i}
                        src={img}
                        alt={`${dest.name} ${i}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentImg === i ? 0.9 : 0 }} // SUBIMOS LA OPACIDAD A 0.9 (Más claro)
                        transition={{ duration: 1 }}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/400x600?text=✈️"; }}
                    />
                ))}

                {/* DEGRADADO MÁS SÓLIDO (Para legibilidad) */}
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 dark:from-slate-950 light:from-slate-50 via-slate-950/40 dark:via-slate-950/40 light:via-white/40 to-transparent z-10`}></div>

                {/* Overlay de color temático (Sutil) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${dest.color} opacity-30 z-10`}></div>
            </div>

            {/* CONTENIDO TEXTO */}
            <div className="relative z-20 p-8 md:p-10 h-full flex flex-col justify-end">
                <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-black text-white dark:text-white light:text-slate-900 italic tracking-tighter uppercase drop-shadow-lg">
                        {dest.name}
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.25em] font-black text-ari-rose">
                        {dest.info}
                    </p>
                </div>

                {/* BOTÓN MÁS SÓLIDO */}
                <a
                    href="https://instagram.com/arihessi_"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-4 bg-white dark:bg-white light:bg-slate-900 text-slate-950 dark:text-slate-950 light:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-ari-rose hover:text-white transition-all flex items-center justify-center gap-2 group/btn shadow-xl"
                >
                    Ver álbum en IG
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </motion.div>
    );
};

export const Travels = () => {
    return (
        <section id="travels" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-dark-bg dark:bg-dark-bg light:bg-ari-offwhite transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <span className="text-ari-rose font-black text-xs tracking-[0.4em] uppercase mb-2 block">Bitácora Global</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white dark:text-white light:text-slate-900 italic tracking-tighter uppercase leading-none">
                            MIS <span className="text-ari-lavender dark:text-ari-lavender light:text-ari-rose">AVENTURAS</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-500 light:text-slate-600 font-medium italic max-w-xs md:text-right text-sm md:text-base">
                        Capturando la esencia de cada ciudad, un disparo a la vez.
                    </p>
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
