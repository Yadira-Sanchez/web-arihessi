export const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-dark-bg dark:bg-dark-bg light:bg-ari-offwhite">

            {/* Imágenes de fondo responsivas */}
            <img
                src="/fondo.jpeg"
                className="hidden lg:block absolute inset-0 w-full h-full object-cover"
                alt="Fondo PC"
            />
            <img
                src="/fondo-mobile.jpg"
                className="block lg:hidden absolute inset-0 w-full h-full object-cover"
                alt="Fondo Móvil"
            />

            {/* Overlay adaptativo para light y dark mode */}
            <div className="absolute inset-0 bg-slate-950/20 dark:bg-slate-950/20 light:bg-white/10 lg:bg-gradient-to-r lg:dark:from-slate-950 lg:dark:to-transparent lg:light:from-white/20 lg:light:to-transparent"></div>
        </section>
    );
};
