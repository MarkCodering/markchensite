import { useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import Contact from "@/components/Contact";

import { BsArrowUpRight } from "react-icons/bs";

import MarkImage from "@/public/mark.jpg";
import Link from "next/link";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Designed and Developed by Mark Chen %c %c🚀 %c\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 5px 5px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
    console.log.apply(console, [
      "%c Build, Learn, and Iterate %c\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>Mark Chen - Founder of Mindify AI</title>
        <link rel="icon" href="/mark.jpg" className="rounded-full" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <div className="flex flex-row justify-center items-center mt-20">
            <Image
              src={currentTheme === "dark" ? MarkImage : MarkImage}
              alt="Mark Chen"
              width="80"
              height="80"
              style={{ borderRadius: "50%" }}
            />
            <div className="flex flex-col ml-4">
              <h2 className="flex sm:text-2xl md:text-2xl lg:text-2xl">
                <span className="font-semibold">
                  Mark Chen - Founder of Mindify AI
                </span>
              </h2>
              <h3>
                <Link
                  href={"https://www.linkedin.com/in/mark-chen-next"}
                  target="_blank"
                  className="text-[#717171bb] flex items-center"
                >
                  <p>@Mark Chen</p>
                  <BsArrowUpRight className="stroke-1 h-3" />
                </Link>
              </h3>
            </div>
          </div>
          <Contact />
        </div>
      </div>
    </>
  );
}
