'use server';

import React, { JSX } from "react";
import { Blob } from "@/components/icons/default";
import LocalToggle from "@/components/base/localeToggle";
import Clock from "@/components/base/clock";
import ThemeToggle from "@/components/base/themeToggle";
import { getConnection } from "@/actions/demoActions";

const pangram = "The quick brown fox jumps over the lazy dog.";

const usefulLinks = [
  {
    name: "Next",
    url: "https://nextjs.org/",
  },
  {
    name: "Drizzle",
    url: "https://orm.drizzle.team/",
  },
];

export default async function Page() {
  const {connection, res} = await getConnection();

  const displayPangram = () => (
    <>
      <p className="opacity-100">{pangram}</p>
      <p className="opacity-80">{pangram}</p>
      <p className="opacity-60">{pangram}</p>
      <p className="opacity-40">{pangram}</p>
      <p className="opacity-20">{pangram}</p>
      <p className="opacity-10">{pangram}</p>
    </>
  );

  const displayData = () => {
    if (res && Array.isArray(res.query) && res.query?.[0]) {
      let componentArray: JSX.Element[] = [];
      const item = res.query[0];
      componentArray = Object.keys(item).map((key) => (
        <p key={key}>{`${key}: ${item?.[
          key as keyof (typeof res.query)[0]
        ]}`}</p>
      ));
      return componentArray;
    }

    // Process failed data without query
    const errPayload = res?.query as any;
    return <p> {errPayload?.message ?? "ERR_"}</p>;
  };

  return (
    <>
      <div className="absolute w-screen h-screen ">
        <div className="transition-all absolute w-full h-full bg-background overflow-hidden rounded-sm" />
        <div className="relative w-full h-full overflow-hidden z-0">
          <Blob
            className="absolute animate-float w-3/4 h-3/4 bottom-0 right-0 scale-90 origin-center mix-blend-lig opacity-95"
          />
          <Blob
            className="absolute w-3/4 h-3/4 bottom-0 right-0 origin-center scale-120 blur-sm "
          />
        </div>
      </div>
      <div className="relative flex flex-row w-screen h-screen overflow-hidden py-5 px-2 gap-2 text-foreground">
        <div className="flex flex-col items-center w-auto max-w-5 pt-1 pb-2">
          <div className="flex-1 [writing-mode:vertical-lr] boder-red-900">
            <div className="flex flex-row items-center whitespace-nowrap gap-1">
              <p className="text-sm">powered by{/* t("poweredBy") */} </p>
              {usefulLinks.map((link, i) => (
                <React.Fragment key={link.name}>
                  <a
                    aria-label={link.name}
                    className="inline-block relative my-1 font-bold text-sm underline"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                  <p className="font-regular">
                    {i < usefulLinks.length - 1 ? "," : "."}
                  </p>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="justify-self-end [writing-mode:vertical-lr] ">
            <a
              className="font-bold text-sm"
              href="https://github.com/lnxAv/next-drizzle-mysql"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="relative flex flex-col flex-1 ">
          <div className="flex flex-row items-start">
            <div className="px-2 md:px-5 sm:px-5 font-bold">
              <LocalToggle />
            </div>
            <div className="relative flex flex-1 justify-end h-full gap-5 px-2 md:px-5 sm:px-5 ">
              <div className="h-full">
                <Clock />
              </div>
              <div className="relative fill-foreground top-0 w-9 ">
                <ThemeToggle />
              </div>
            </div>
          </div>
          <div className="relative w-full h-full">
            <div className="absolute bottom-0 w-full h-auto flex">
              <div className="grid max-w-10 px-2 md:px-5 sm:px-5 mt-auto">
                <div className="font-regular text-sm">
                  apps/api/src/v1/routes/demo.route.ts
                </div>
                <div className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl ">
                  <p>
                    <span>
                      {connection ? `Success` : `Failded`}
                      {/*!isLoading
                        ? `${t(`connection.${data?.server || "failed"}`)},`
                        : `${t("connection.loading")}`*/}
                    </span>
                  </p>
                  <a
                    className="font-bold underline"
                    href="https://github.com/lnxAv/next-drizzle-mysql#database-setup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    README.MD
                  </a>
                </div>
              </div>
              <div
                className="ml-auto mt-auto text-xl max-md:text-lg max-sm:text-lg px-2 md:px-5 sm:px-5 py-2 lg:text-2xl xl:text-2xl max-sm:[writing-mode:vertical-rl] max-sm:rotate-180 ,"
                style={{ lineHeight: "10px" }}
              >
                {res && res.query ? displayData() : displayPangram()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}