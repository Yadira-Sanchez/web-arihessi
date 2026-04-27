import { motion } from 'framer-motion';

export const Community = () => {
    // Aquí pondrás las fotos de los perritos que ella alimenta en Guerrero
    // Solo pon las imágenes en la carpeta /public/ con estos nombres:
    const streetPhotos = ['/perrito1.png', '/perrito2.png', '/perrito3.png'];

    return (
        <section id="community" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-slate-900/20 dark:bg-slate-900/20 light:bg-slate-100/10 transition-colors duration-500">
            <div className="max-w-5xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-dark-card dark:bg-dark-card light:bg-white/50 p-8 md:p-10 lg:p-16 rounded-[4rem] border border-white/5 dark:border-white/5 light:border-slate-300/20 shadow-2xl dark:shadow-2xl light:shadow-lg relative overflow-hidden transition-all"
                >
                    {/* Decoración visual sutil */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-ari-rose/5 dark:bg-ari-rose/5 light:bg-ari-rose/10 blur-3xl rounded-full"></div>

                    <div className="text-center mb-10 md:mb-12">
                        <div className="flex justify-center gap-2 mb-4 text-xs md:text-sm font-black text-ari-rose tracking-[0.2em] uppercase">
                            <span>Acapulco</span>
                            <span>•</span>
                            <span>Guerrero</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white dark:text-white light:text-slate-900 mb-4 md:mb-6 italic tracking-tighter uppercase">
                            Alimentando <span className="text-ari-rose">Huellitas</span>
                        </h2>

                        <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                            En las calles de <span className="text-white dark:text-white light:text-slate-900 font-bold">Guerrero</span>, muchos perritos esperan una comida al día. Mi labor es llevarles alimento en mis recorridos diarios, gracias a lo que recaudamos en la Wishlist.
                        </p>

                        {/* Galería de fotos de los recorridos */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
                            {streetPhotos.map((img, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="aspect-square rounded-[2rem] overflow-hidden border-2 border-white/5 dark:border-white/5 light:border-slate-300/20 bg-slate-800 dark:bg-slate-800 light:bg-slate-200"
                                >
                                    <img
                                        src={img}
                                        alt="Perrito en Guerrero"
                                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                                        onError={(e) => e.target.src = 'https://via.placeholder.com/400?text=Foto+Perrito'}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <a
                            href="https://www.amazon.com.mx/hz/wishlist/ls/35XN6MZS2YU41?ref_=wl_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-[#FF9900] dark:bg-[#FF9900] light:bg-[#FF9900] text-black font-black text-sm md:text-base lg:text-lg hover:scale-105 transition-all shadow-xl shadow-orange-900/20"
                        >
                            DONAR ALIMENTO (Wishlist México)
                        </a>
                    </div>

                    {/* SECCIÓN DE AYUDA LOCAL EN GUERRERO */}
                    <div className="mt-12 pt-10 border-t border-white/10 dark:border-white/10 light:border-slate-300/20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                        <div className="space-y-4 text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-black text-ari-lavender dark:text-ari-lavender light:text-ari-rose italic uppercase">Ayuda en Acapulco / Guerrero</h3>
                            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                                Busco recomendaciones de <strong>clínicas veterinarias económicas en Guerrero</strong> para esterilizaciones masivas o refugios serios que puedan recibir casos urgentes de rescate.
                            </p>
                        </div>

                        <div className="bg-white/5 dark:bg-white/5 light:bg-slate-900/10 p-6 md:p-8 rounded-[2.5rem] border border-white/5 dark:border-white/5 light:border-slate-300/20 text-center">
                            <p className="text-[9px] md:text-xs text-slate-500 dark:text-slate-500 light:text-slate-600 font-bold uppercase tracking-widest mb-4">
                                ¿Conoces clínicas o refugios en la zona?
                            </p>
                            <a
                                href="https://instagram.com/arihessi_"
                                target="_blank"
                                className="inline-block text-white dark:text-white light:text-slate-900 font-black bg-ari-rose/20 dark:bg-ari-rose/20 light:bg-ari-rose/30 border border-ari-rose/30 dark:border-ari-rose/30 light:border-ari-rose/40 px-6 py-4 rounded-2xl hover:bg-ari-rose hover:text-white hover:border-ari-rose transition-all w-full text-xs md:text-sm"
                            >
                                ENVÍAME UN MENSAJE DIRECTO 📩
                            </a>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};
