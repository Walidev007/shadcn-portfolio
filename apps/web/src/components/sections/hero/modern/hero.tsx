"use client";

import Image from "next/image";

function Hero() {
  return (
    <section className="bg-background/[0.96] relative w-full overflow-hidden">
      <div className="relative z-10 h-[42.5dvh] md:h-[51.2dvh] md:min-h-[50dvh] xl:h-[61.2dvh]">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex w-full items-start justify-center gap-4 px-4 md:gap-8 md:px-6">
            <div className="relative mt-2 aspect-square h-24 shrink-0 overflow-hidden rounded-full sm:h-32 md:mt-4 md:h-40 lg:h-48 xl:h-56">
              <Image
                src="/images/person/walid-mecheri.png"
                alt="Walid Mecheri"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1280px) 14rem, (min-width: 768px) 10rem, 6rem"
              />
            </div>
            <h1 className="text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <span>A product builder</span>
              <br />
              <span className="flex items-center gap-2 md:gap-4">
                <span>Who</span>
                <span
                  className={
                  `relative mx-2 my-auto inline-block aspect-[1.5/1] h-[3.25rem] overflow-hidden rounded-full bg-linear-to-br from-pink-200 from-40% to-pink-400 md:mx-4 md:h-[7.8rem]`
                  }
                >
                  <span className="absolute inset-0 flex items-center justify-center text-4xl select-none md:text-7xl">
                    ❤️
                  </span>
                </span>
                <span>to</span>
                <span>automate</span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
