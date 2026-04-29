import { motion } from 'framer-motion';
import { splitTextVariants } from '../../utils/animations';

export const SplitText = ({ text, className = "", delay = 0 }) => {
  const chars = text.split('');
  
  return (
    <motion.span
      className={className}
      style={{ perspective: 1000 }}
    >
      {chars.map((char, idx) => (
        <motion.span
          key={idx}
          variants={splitTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={idx}
          style={{ display: 'inline-block' }}
          transition={{ delay: delay + idx * 0.03 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};
