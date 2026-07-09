import { useMemo } from 'react';
import { motion } from 'framer-motion';

const Stars = () => {

    const stars = useMemo(() => {
        return Array.from({ length: 48 }, () => ({
          size: Math.random() * 3 + 1,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: Math.random() * 2,
          duration: Math.random() * 4 + 2,
          glow: Math.random() > 0.7,
        }));
      }, []);

  return (
    
      <div className="fixed inset-0 pointer-events-none"
      aria-hidden="true">
        <div className="absolute inset-0">
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: star.top,
                left: star.left,
                backgroundColor: 'var(--star-color)',
                boxShadow: star.glow ? '0 0 8px rgba(255, 255, 255, 0.85)' : 'none',
              }}
              animate={{ opacity: [0.2, 1, 0.35], scale: [1, 1.35, 1] }}
              transition={{ repeat: Infinity, duration: star.duration, delay: star.delay }}
            >
            </motion.div>
          ))}

        </div>
      </div>
    
  );
}

export default Stars;