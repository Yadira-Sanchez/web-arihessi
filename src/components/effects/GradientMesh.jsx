import { motion } from 'framer-motion';
import { gradientMeshVariants } from '../../utils/animations';

export const GradientMesh = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, 
          rgba(244, 114, 182, 0.3) 0%,
          rgba(167, 139, 250, 0.3) 25%,
          rgba(74, 222, 128, 0.3) 50%,
          rgba(244, 114, 182, 0.3) 75%,
          rgba(167, 139, 250, 0.3) 100%)`,
        backgroundSize: '200% 200%',
      }}
      animate="animate"
      variants={gradientMeshVariants}
    >
      {children}
    </motion.div>
  );
};
