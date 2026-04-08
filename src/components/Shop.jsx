import { motion } from 'framer-motion';

export const Shop = () => {
    const cushions = [
        { id: 1,  img: '/shop/almohada1.jpg', color: 'from-orange-600/40' },
        { id: 2,  img: '/shop/almohada2.jpg', color: 'from-yellow-500/40' },
        { id: 3,  img: '/shop/almohada3.jpg', color: 'from-blue-600/40' },
        { id: 4,  img: '/shop/almohada4.jpg', color: 'from-ari-rose/40' },
    ];

    const hats = [
        { id: 5, img: '/shop/gorro1.jpeg', tag: 'Limitado' },
        { id: 6, img: '/shop/gorro3.jpeg', tag: 'Últimos 2' },
    ];

    return (
        <section id="shop" className="py-24 px-6 bg-slate-950">
            <div className="max-w-7xl mx-auto">

                {/* ENCABEZADO PRINCIPAL */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="text-ari-rose font-black text-xs tracking-[0.5em] uppercase mb-4 block">Handmade Studio</span>
                    <h2 className="text-6xl font-black text-white italic tracking-tighter uppercase leading-none">
                        EL <span className="text-ari-lavender">TALLER</span>
                    </h2>
                    <p className="text-slate-500 mt-4 font-medium italic max-w-lg">
                        Piezas únicas hechas a mano. El tiempo de entrega y precio varían según la complejidad del diseño.
                    </p>
                </motion.div>

                {/* --- COLECCIÓN DE COJINES (4 personajes) --- */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <h3 className="text-2xl font-black text-white uppercase tracking-widest italic">Cojines Custom</h3>
                        <div className="h-px flex-grow bg-white/10"></div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Colección 2024</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cushions.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/5 shadow-2xl"
                            >
                                <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-all duration-700"
                                    onError={(e) => e.target.src = "https://via.placeholder.com/400x600?text=Cojin+FanArt"} />
                                <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 ${item.color} opacity-40 group-hover:opacity-20 transition-opacity`}></div>

                                <div className="absolute bottom-8 left-8 right-8 z-10">
                                    <span className="text-[9px] font-black text-ari-rose uppercase tracking-widest mb-1 block">{item.char}</span>
                                    <h4 className="text-xl font-bold text-white leading-tight uppercase italic">{item.name}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- COLECCIÓN DE GORRITOS (Pedidos limitados) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-1">
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic mb-4">Gorritos <br /><span className="text-ari-lavender">Tejidos</span></h3>
                        <p className="text-slate-400 font-medium text-sm leading-relaxed mb-8">
                            Debido a que cada gorrito es tejido a mano punto por punto, solo acepto un número limitado de pedidos por mes. ¡Asegura el tuyo por DM!
                        </p>
                        <a href="https://instagram.com/arihessi_" target="_blank" rel="noreferrer"
                            className="inline-block px-8 py-4 bg-white text-slate-950 rounded-2xl font-black text-[10px] tracking-widest uppercase hover:bg-ari-rose hover:text-white transition-all shadow-xl">
                            Consultar Disponibilidad
                        </a>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {hats.map((hat) => (
                            <motion.div key={hat.id} whileHover={{ scale: 1.02 }} className="relative h-[300px] rounded-[3rem] overflow-hidden border border-white/10 group">
                                <img src={hat.img} alt={hat.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all"
                                    onError={(e) => e.target.src = "https://via.placeholder.com/600x400?text=Gorrito+Tejido"} />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent flex flex-col justify-center p-10">
                                    <span className="px-3 py-1 bg-ari-lavender text-white text-[8px] font-black uppercase rounded-full w-fit mb-3">{hat.tag}</span>
                                    <h4 className="text-2xl font-black text-white uppercase italic">{hat.name}</h4>
                                    <p className="text-slate-300 text-xs font-bold tracking-widest uppercase">{hat.style}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* INFO ENVÍOS MÉXICO */}
                <div className="mt-24 p-8 rounded-[3rem] bg-white/5 border border-dashed border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <span className="text-4xl">🇲🇽</span>
                        <div className="text-left">
                            <p className="text-white font-bold uppercase tracking-widest text-sm">Envíos a todo México</p>
                            <p className="text-slate-500 text-xs">Cotización de envío según tu código postal.</p>
                        </div>
                    </div>
                    <p className="text-ari-rose font-black italic tracking-tighter text-lg uppercase">Precios a tratar por Instagram</p>
                </div>

            </div>
        </section>
    );
};