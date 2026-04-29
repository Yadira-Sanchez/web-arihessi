import { motion } from 'framer-motion';
import { lettersPullUpVariants } from '../../utils/animations';

export const LettersPullUp = ({ text, className = "", delay = 0 }) => {
  const chars = text.split('');
  
  return (
    <motion.span className={className}>
      {chars.map((char, idx) => (
        <motion.span
          key={idx}
          variants={lettersPullUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={idx}
          style={{ display: 'inline-block' }}
          transition={{ delay: delay + idx * 0.04 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};
