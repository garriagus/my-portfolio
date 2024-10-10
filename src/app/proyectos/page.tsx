import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import Tag from "@/components/Tag";
export default function Home() {
  return (
    <>
      <h1 className="text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl mb-4 ">
        <span className="text-transparent typing-animation bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Bienvenido a nuestro espacio de tecnología y desarrollo.
        </span>
      </h1>
      <h2 className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-4">
        Explora nuestro blog donde compartimos proyectos de desarrollo web, nos
        sumergimos en el mundo del Internet de las Cosas (IoT) y ofrecemos
        información sobre tecnología. Este es tu lugar para descubrir, aprender
        y mantenerse al tanto de las últimas tendencias en el ámbito
        tecnológico.
      </h2>
      <div className="container mx-auto flex flex-col items-center min-h-screen md:flex-row justify-between p-24 md:px-5 py-6">

        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="flex sm:space-x-24">
            <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
              <div className="px-6 py-4">
                <Link
                  href={`/blog`}
                  className="font-bold uppercase text-green-500 hover:text-primary-500 dark:text-green-500 dark:hover:text-primary-500"
                >
                  Todo el contenido
                </Link>
                <ul className="list-outside list-disc space-y-2">
                  <Tag></Tag>
                </ul>
              </div>
            </div>
            <div>
              <ul>
                {allPosts.map((post) => {
                  const { _id, title, date, description, author, slug, tags } =
                    post;
                  return (
                    <li key={_id} className="py-5">
                      <article className="flex flex-col space-y-2 xl:space-y-0">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime={date}>{date}</time>
                          </dd>
                          <h1>{description}+ {author}+ {slug}</h1>
                        </dl>
                        <div className="space-y-3">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/${title}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags?.map((tag, index) => (
                                <h2 key={index} style={{ marginRight: "8px" }}>
                                  {tag}
                                </h2>
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {title} asdasd{" "}
                          </div>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
