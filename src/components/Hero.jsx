export const Hero = () => {
    return (
        // h-screen asegura que ocupe exactamente el alto del celular/pantalla
        <section id="home" className="relative h-screen w-full overflow-hidden">

            {/* Solo esta imagen debe existir como fondo principal */}
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

            {/* Este overlay unifica todo el diseño */}
            <div className="absolute inset-0 bg-slate-950/20 lg:bg-gradient-to-r lg:from-slate-950 lg:to-transparent"></div>

            {/* Resto del contenido... */}
        </section>
    );
};