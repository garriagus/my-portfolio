"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HomeProps {
    children: React.ReactNode;
}

export default function Transition({ children }: HomeProps) {
    const [isShifted, setIsShifted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShifted(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isShifted ? 0 : 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex justify-center items-center"
            style={{
                backgroundImage: 'url("/background.jpg")', // Ruta de tu imagen
                backgroundSize: 'cover', // Ajusta la imagen para cubrir el div
                backgroundPosition: 'center', // Centra la imagen
                backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
                width: '100%', // Ocupar el 100% del ancho
                height: '100%' // Ocupar el 100% del alto
            }}
        >

            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                {children}
            </h1>
        </motion.div>
    );
}
