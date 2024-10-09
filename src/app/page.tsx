import Image from "next/image";
import Card from "@/components/Card";
//import { allPosts } from "@/.contentlayer/generated";
export default function Home() {
  return (
    <section className="text-white-700 body-font">
      <div className="container mx-auto  mb-24 flex px-5 py-6 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
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
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Soy un desarrollador de aplicaciones web y además incursiono en el
            mundo del Internet de las cosas (IoT). En este espacio encontrarás
            ejemplos prácticos sobre diversas tecnologías.
          </p>
          <div className="flex justify-center mt-6">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Sobre Mí
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              Mis Proyectos
            </button>
          </div>
        </div>
        <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="border-gray-500 lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            src="/notebook-bg.png"
            alt="Notebook"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
      {/*   {allPosts.map((post) => (
        <Card
          key={post._id}
          posts={{
            id: post._id,
            title: post.title,
            image: post.image,
            description: post.description,
            date: post.date,
            author: post.author,
            author_image: post.author_image,
            tag: post.tags,
            slug: post.slug,
          }}
        ></Card>
      ))}*/}

    </section>
  );
}
