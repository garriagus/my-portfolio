import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <nav className="p-4 bg-blue-500"
       style={{
        backgroundImage: 'url("/retro.jfif")', // Ruta de tu imagen
        backgroundSize: 'cover', // Mantén el tamaño original de la imagen
        backgroundPosition: 'center', // Centra la imagen
        backgroundRepeat: 'no-repeat', // Evita la repetición
        minHeight: '100vh', // Asegura que el body cubra toda la ventana
      }}
      >
        <ul className="p-4 bg-blue-500 container flex gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="max-w-2xl mx-auto text-center">
          <Image
            className="border-gray-500 lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            src="/notebook-bg.png"
            alt="Notebook"
            width={300}
            height={600}
            priority
          />
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our work
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Crafted with skill and care to help our clients grow their business!
          </p>
          <div className="flex justify-center mt-6">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Sobre Mí
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              Mis Proyectos
            </button>
          </div>
          <div className="">
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Soy un desarrollador de aplicaciones web y además incursiono en el
              mundo del Internet de las cosas (IoT). En este espacio encontrarás
              ejemplos prácticos sobre diversas tecnologías.
            </p>


          </div>
        </div>
      </nav>
    </header>
  );
}
