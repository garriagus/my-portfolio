// pages/index.js
"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        // Redirigir a la página principal después de 4 segundos
        const timer = setTimeout(() => {
            router.push("/main"); // Cambia '/main' por la ruta de tu página principal
        }, 4000);

        return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
    }, [router]);

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -50 }} // Estado inicial de la animación
                animate={{ opacity: 1, y: 0 }}   // Estado final de la animación
                transition={{ duration: 1 }}     // Duración de la animación
            >
                <h1>Este es el elemento HTML animado</h1>
            </motion.div>
        </div>
    );
}
