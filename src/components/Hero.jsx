import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { LettersPullUp } from './effects/LettersPullUp';
import { GradientMesh } from './effects/GradientMesh';
import { scrollDownArrowVariants, fadeInUpVariants } from '../utils/animations';

export const Hero = () => {
    const scrollToNext = () => {
        const aboutSection = document.getElementById('about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
            {/* GradientMesh de fondo */}
            <div className="absolute inset-0 opacity-30 dark:opacity-20">
                <GradientMesh className="w-full h-full" />
            </div>

            {/* Imagen de fondo responsiva con overlay */}
            <img
                src="/fondo.jpeg"
                className="hidden lg:block absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-20"
                alt="Fondo PC"
            />
            <img
                src="/fondo-mobile.jpg"
                className="block lg:hidden absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-10"
                alt="Fondo Móvil"
            />

            {/* Contenedor principal */}
            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center text-center">
                {/* Nombre con LettersPullUp */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black italic tracking-tighter text-slate-900 dark:text-white mb-4 sm:mb-6 lg:mb-8 leading-none">
                        <LettersPullUp text="ARIHESSI" delay={0} className="text-slate-900 dark:text-white" />
                    </h1>
                </motion.div>

                {/* Subtítulo con fade in */}
                <motion.p
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto mb-6 sm:mb-8 italic"
                >
                    Gaming • Terror • Zen • Hurones
                </motion.p>

                {/* Descripción */}
                <motion.p
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 }}
                    className="text-sm sm:text-base lg:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-10 sm:mb-12 lg:mb-16 leading-relaxed"
                >
                    Explorando los rincones más oscuros del gaming mientras comparto momentos de paz y amor por los perritos de Guerrero.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 mb-16 sm:mb-20 lg:mb-32"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(244, 114, 182, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 sm:py-4 bg-gradient-to-r from-ari-rose to-ari-lavender text-white rounded-full font-black uppercase tracking-wider text-sm transition-all"
                        onClick={scrollToNext}
                    >
                        Explorar
                    </motion.button>
                    <motion.a
                        href="https://twitch.tv/arihessi"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 sm:py-4 border-2 border-ari-rose text-ari-rose dark:text-ari-rose rounded-full font-black uppercase tracking-wider text-sm transition-all"
                    >
                        En Vivo
                    </motion.a>
                </motion.div>

                {/* Scroll Down Arrow animado */}
                <motion.button
                    variants={scrollDownArrowVariants}
                    animate="animate"
                    onClick={scrollToNext}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-900 dark:text-white cursor-pointer"
                >
                    <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10" />
                </motion.button>
            </div>
        </section>
    );
};
