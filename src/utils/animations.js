// Variantes de animación reutilizables para Framer Motion

// Text Reveal - Aparece línea por línea
export const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Split Text - Cada letra aparece con rotación
export const splitTextVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: (i) => ({
    opacity: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

// Letters Pull Up - Letras suben desde abajo
export const lettersPullUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

// Container para animar hijos
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Fade In Up
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Scale In
export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Slide In From Left
export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Gradient Mesh Animation
export const gradientMeshVariants = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
    transition: {
      duration: 15,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

// Tilt effect compatible con Framer Motion
export const tiltVariants = {
  initial: { rotateX: 0, rotateY: 0, scale: 1 },
  hover: {
    rotateX: 10,
    rotateY: -10,
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Scroll Down Arrow Animation
export const scrollDownArrowVariants = {
  animate: {
    y: [0, 12, 0],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// Floating Animation
export const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// Glow Pulse
export const glowPulseVariants = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(244, 114, 182, 0.3)",
      "0 0 40px rgba(244, 114, 182, 0.6)",
      "0 0 20px rgba(244, 114, 182, 0.3)",
    ],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};
