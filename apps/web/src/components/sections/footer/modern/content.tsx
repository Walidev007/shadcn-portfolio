import React from "react";
import { copyright } from "@/components/sections/footer/config";
import { getYearDisplay } from "@/lib/utils";

export default function Content() {
  return (
    <div className="bg-muted/30 flex h-full w-full flex-col justify-end px-12 py-8">
      <Copyright />
    </div>
  );
}

const Copyright = () => {
  const { startYear } = copyright;
  const yearDisplay = getYearDisplay(startYear);

  return (
    <div className="flex flex-col items-start justify-between sm:flex-row sm:items-end">
      <h1 className="mt-10 text-[9vw] leading-[0.8] md:text-[8vw] lg:text-[9vw] xl:text-[10vw] 2xl:text-[11vw]">
        WALID MECHERI
      </h1>
      <p className="mt-4 text-xs sm:mt-0 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        © {yearDisplay}
      </p>
    </div>
  );
};
