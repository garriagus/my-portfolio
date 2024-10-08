"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HomeProps {
    children: React.ReactNode;
}

export default function Home({ }: HomeProps) {
    const [isShifted, setIsShifted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShifted(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const textVariants = {
        initial: { scale: 0, rotate: 0 },
        animate: {
            scale: 1,
            rotate: 360,
            color: ['#ff008c', '#e3b0ff', '#3a7bd5', '#00d2ff'],
            transition: {
                duration: 2,
                ease: 'easeInOut',
                times: [0, 0.5, 0.75, 1],
                loop: Infinity,
            },
        },
        exit: {
            opacity: 0,
            transition: { duration: 1 },
        },
    };

    const hiddenContentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1.5 },
        },
    };

    return (

        <div className="absolute inset-0 flex justify-center items-center">
            <div className="relative w-full h-full">

                <Head>
                    <title>Next.js + Framer Motion</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                {/* Fondo con transición */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isShifted ? 0 : 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 flex justify-center items-center"
                    style={{
                        backgroundImage: 'url("/output.jpg")', // Ruta de tu imagen
                        backgroundSize: 'cover', // Ajusta la imagen para cubrir el div
                        backgroundPosition: 'center', // Centra la imagen
                        backgroundRepeat: 'no-repeat' // Evita que la imagen se repita
                    }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 0 }}
                        variants={textVariants}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 1 }}
                        className="text-5xl font-extrabold text-white"
                    >
                        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                            <span className="block mb-4">
                                <span className="text-transparent typing-animation bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                                    Agustín Garrido
                                </span>
                            </span>
                            <span className="dark:text-white text-gray-900">
                                FULL STACK DEVELOPER
                            </span>
                        </h1>
                    </motion.h1>
                </motion.div>
            </div>
        </div>
    );
}
