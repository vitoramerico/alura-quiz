/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

export default function ResultadoResposta({ isCorrect }) {
  const msg = isCorrect ? 'Voce acertou' : 'Voce errou';
  const myColor = isCorrect ? 'green' : 'red';

  return (
    <motion.div
      transition={{
        delay: 0,
        duration: 0.5,
      }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      <p
        style={{ color: myColor }}
      >
        <h3>{msg}</h3>
      </p>
    </motion.div>
  );
}
