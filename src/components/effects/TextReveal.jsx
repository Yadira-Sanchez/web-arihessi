import { motion } from 'framer-motion';
import { textRevealVariants } from '../../utils/animations';

export const TextReveal = ({ text, className = "", delay = 0 }) => {
  const lines = text.split('\n');
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {lines.map((line, lineIdx) => (
        <motion.div key={lineIdx} variants={textRevealVariants} custom={lineIdx}>
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
};
