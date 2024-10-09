"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Card(children: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10"
        key={children.posts.id}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundImage: `url(${children.posts.image})`, // Asigna la URL de la imagen de fondo
        }}
      >
        <div
          className={`transition-all duration-400 min-h-[300px] relative z-50 h-full  mx-auto flex flex-col justify-center items-center text-center text-white p-6 mb-8
         ${isHovered ? "" : "backdrop-blur-xl"}`}
        >
          <Link href={children.posts.slug}>
            <h2 className="tdark:prose-invert sm:text-4xl text-2xl font-bold mb-6">
              {" "}
              {children.posts.title}
            </h2>
          </Link>
          <p className="text-lg text-center text-white">
            {children.posts.description}
          </p>
          <a
            href=""
            className="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            {children.posts.slug}
          </a>
        </div>
      </div>
    </>
  );
}
