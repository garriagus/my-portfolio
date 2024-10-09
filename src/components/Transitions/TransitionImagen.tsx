"use client";

import { motion } from "framer-motion";

interface BreathingBackgroundProps {
    imageUrl: string;
}

export default function BreathingBackground({ imageUrl }: BreathingBackgroundProps) {
    return (
        <motion.div
            initial={{ scale: 1 }} // Inicia en tamaño normal
            whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 4px gray"
              }}
            whileTap={{
                scale: 1.1, // Mantiene el efecto cuando se presiona
                filter: "blur(5px)", // Blur permanece
                transition: { duration: 2, ease: "easeInOut" },
            }}
            animate={{ scale: 1, filter: "blur(0px)" }} 
            transition={{
                duration: 2, // Duración total de la animación
                repeat: Infinity, // Repetir infinitamente
                ease: "easeInOut", // Efecto de suavizado para un movimiento continuo
            }}
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover", // Asegura que la imagen cubra toda el área
                backgroundPosition: "center", // Centra la imagen
                position: "absolute", // Para que ocupe todo el viewport
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1, // Coloca el fondo detrás de los demás elementos
            }}
        />
    );
}
