import { useEffect } from "react";

import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import CategoryCard from "@/components/CategoryCard";

export default function About() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c A brief intro about my self. Well a little brag about myself. 🐼\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>About - Mark</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col ">
            <h1
              className={`mt-6 mb-12 bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold`}
            >
              About
            </h1>
            <div className="mx-auto transition-all duration-1000 ease-in-out -mt-8">
              <Image
                src="/mark.jpg"
                height={800}
                width={800}
                className="select-none h-40 w-40 rounded-full mx-auto"
                alt="Mark Chen"
                priority
              />
            </div>
            <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm md:text-base lg:text-xl mb-2 px-2">
              Build, Learn, and Iterate
            </p>
          </div>
          <CategoryCard />
          <div className=" text-[0.92rem] text-base mx-12 font-light dark:text-white text-gray-900">
            <p className="mt-6 mb-4 font-normal">
              Tech entrepreneur with the mission to to push the frontier of
              technology with iterative approach to make the world a racially
              better place via the power of technologies and entrepreneurship.
            </p>
            <p className="mt-2 mb-12 font-normal">
              Experienced quantum computing and AI research. I am also a
              undergraduate student at the University of London studying
              computer science.
            </p>

            <p className="text-gray-400 select-none font-semibold mb-1 dark:text-white ">
              Contact
            </p>

            <p className="">
              If you have any queries or would like to discuss potential
              collaboration, feel to write email to my company email address.
              <a
                onClick={() =>
                  navigator.clipboard.writeText("mark@mindifyai.dev")
                }
                className=" underline underline-offset-4 decoration-2 decoration-purple-400 group select-all font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select "
                href="mailto:mark@mindifyai.dev"
              >
                {" "}
                mark@mindifyai.dev
              </a>
              </p>
          </div>
          <div className="flex mx-auto justify-center mt-16 select-none">
            <span className="font-black font-app text-2xl md:text-3xl align-text-bottom tracking-wider mx-3 md:mx-6">
              Mark Chen
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
