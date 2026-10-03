"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MinimalYoutubePlayer from "./MinimalYoutubePlayer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const problemSection = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const texts = Array.from(
        problemSection.current?.querySelectorAll<HTMLElement>(
          ".problem-text",
        ) ?? [],
      );
      const progressTrack =
        problemSection.current?.querySelector(".problem-progress");
      const progressFill = problemSection.current?.querySelector(
        ".problem-progress-fill",
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: problemSection.current,
          start: "top top",
          end: "+=3000",
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            if (progressFill) {
              gsap.set(progressFill, { scaleX: self.progress });
            }
            progressTrack?.setAttribute(
              "aria-valuenow",
              String(Math.round(self.progress * 100)),
            );
          },
        },
      });

      tl.to(texts[0], {
        opacity: 1,
        duration: 1.5,
      })
        .to(texts[0], {
          opacity: 0,
          duration: 0.8,
        })
        .to(texts[1], {
          opacity: 1,
          duration: 0.8,
        })
        .to(texts[1], {
          opacity: 1,
          duration: 1.5,
        })
        .to(texts[1], {
          opacity: 0,
          duration: 0.8,
        })
        .to(texts[2], {
          opacity: 1,
          duration: 0.8,
        })
        .to(texts[2], {
          opacity: 1,
          duration: 1.5,
        });
    },
    { scope: problemSection },
  );

  return (
    <div id="top">
      {/* HERO */}
      <div className="flex flex-col h-screen bg-orange-50 items-center justify-center">
        <div className="absolute top-0 z-10 bg-orange-50 backdrop-blur-2xl p-4 w-95/100 flex justify-between">
          <p className="uppercase font-black text-red-600 tracking-tighter">
            by tonbridgians for tonbridgians
          </p>

          <img
            src="/tonbridge-crest.png"
            alt="Tonbridge crest"
            className="h-10"
          />

          <nav className="hidden gap-4 md:flex">
            <Link href="/" className="font-black tracking-tighter text-red-600">
              HOME
            </Link>
            <Link
              href="/about"
              className="font-black tracking-tighter text-red-600"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="font-black tracking-tighter text-red-600"
            >
              CONTACT
            </Link>
            <Link
              href="/privacy"
              className="font-black tracking-tighter text-red-600"
            >
              PRIVACY
            </Link>
          </nav>
        </div>

        <h1 className="scale-125 text-red-600 text-[6rem] leading-[0.75] tracking-[-0.08em] font-[1000] text-center sm:scale-150 sm:text-[8rem] md:scale-200 md:text-[10rem]">
          <span className="block">TONX</span>
          <span className="block">GRIP</span>
        </h1>

        <div className="absolute top-5/6 w-1/2">
          <div className="absolute inset-0 translate-x-[10px] translate-y-[10px] bg-[rgba(50,0,0,1)]" />

          <button className="relative text-xl uppercase font-bold tracking-tighter text-red-100 bg-red-600 p-2 active:translate-x-[10px] active:translate-y-[10px] transition-transform duration-100 w-full">
            Buy tonx - £13
          </button>
        </div>
      </div>

      {/* PROBLEM — PINNED SCROLL SECTION - SCROLLING ANIMATIONS ARE MOSTLY AI*/}
      <div
        ref={problemSection}
        className="relative h-screen bg-red-600 text-orange-50"
      >
        <div className="flex h-full flex-col">
          <div className="flex min-h-0 flex-1 flex-col justify-center md:flex-row">
            <div className="flex min-w-0 flex-1 flex-col justify-between p-8">
              {/* TITLE */}
              <div>
                <p className="text-red-300/50 uppercase font-black tracking-tighter mb-4">
                  0 // the problem
                </p>

                <h1 className="uppercase text-5xl leading-[0.8] tracking-tighter font-[1000] md:text-8xl">
                  the problem
                </h1>
              </div>

              {/* CHANGING TEXT */}
              <div className="relative max-h-5/10 -translate-y-8 md:-translate-y-12">
                {/* 01 */}
                <div className="problem-text">
                  <p className="text-red-200 uppercase font-black tracking-tighter">
                    01
                  </p>

                  <h1 className="text-4xl leading-[0.85] font-black tracking-tighter md:text-7xl">
                    SLIPPING
                  </h1>

                  <p className="text-white/80 font-black mt-4 text-lg leading-tight">
                    Your foot shouldn&apos;t be sliding around inside your sock.
                    Every little movement can make your footing feel less
                    secure, especially when you&apos;re changing direction or
                    pushing off.
                  </p>
                </div>

                {/* 02 */}
                <div className="problem-text absolute inset-0 opacity-0">
                  <p className="text-red-200 uppercase font-black tracking-tighter">
                    02
                  </p>

                  <h1 className="text-4xl leading-[0.85] font-black tracking-tighter md:text-7xl">
                    LOST STABILITY
                  </h1>

                  <p className="text-white/80 font-black mt-4 text-lg leading-tight">
                    When your foot and boot aren&apos;t moving as one, you lose
                    a little bit of stability. That unwanted movement can make
                    quick changes of direction and explosive movements feel less
                    controlled.
                  </p>
                </div>

                {/* 03 */}
                <div className="problem-text absolute inset-0 opacity-0">
                  <p className="text-red-200 uppercase font-black tracking-tighter">
                    03
                  </p>

                  <h1 className="text-4xl leading-[0.85] font-black tracking-tighter md:text-7xl">
                    LOST POWER
                  </h1>

                  <p className="text-white/80 font-black mt-4 text-lg leading-tight">
                    Power starts at your foot, so keeping it connected to your
                    boot matters. Unwanted movement between the two can reduce
                    how efficiently you transfer that power into the ground.
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="hidden h-full flex-1 overflow-hidden p-8 md:block">
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/kick.jpg"
                alt="Footballer wearing grip socks"
              />
            </div>
          </div>

          <div
            className="problem-progress mx-8 mb-8 h-1.5 overflow-hidden bg-red-300/40"
            role="progressbar"
            aria-label="Problem section scroll progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={0}
          >
            <div
              className="problem-progress-fill h-full origin-left bg-orange-50"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>

      {/* SO WE FIXED IT */}
      <div className="flex flex-col gap-20 h-screen items-center justify-center overflow-hidden bg-orange-50">
        <h1 className="text-center text-8xl leading-[0.75] tracking-[-0.08em] text-red-600 font-[1000] uppercase md:text-[10rem]">
          <span className="block">so we</span>
          <span className="block">fixed it.</span>
        </h1>

        <MinimalYoutubePlayer youtubeUrl="https://www.youtube.com/watch?v=eYBEJBfq_Zs" />
      </div>

      {/* HOW IT WORKS */}
      <div
        id="how-it-works"
        className="min-h-screen bg-orange-50 px-6 py-16 text-red-600 md:px-12 md:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-tighter text-red-600/50">
              02 // the basics
            </p>

            <h1 className="mb-12 text-6xl font-[1000] uppercase leading-[0.8] tracking-tighter md:text-8xl">
              How it works
            </h1>

            <ol className="divide-y divide-red-600/20">
              <li className="grid grid-cols-[3rem_1fr] gap-4 py-6 first:pt-0">
                <span className="pt-1 text-sm font-black text-red-600/50">
                  01
                </span>
                <div>
                  <h2 className="text-2xl font-black uppercase leading-none tracking-tighter">
                    Pull them on
                  </h2>
                  <p className="mt-2 max-w-md text-base leading-snug text-red-950/70">
                    Wear your TONX socks as your base layer, before putting on
                    your boots.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-[3rem_1fr] gap-4 py-6">
                <span className="pt-1 text-sm font-black text-red-600/50">
                  02
                </span>
                <div>
                  <h2 className="text-2xl font-black uppercase leading-none tracking-tighter">
                    Grip meets boot
                  </h2>
                  <p className="mt-2 max-w-md text-base leading-snug text-red-950/70">
                    The grip pads on the sole help hold your foot in place
                    inside your boot.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-[3rem_1fr] gap-4 py-6 last:pb-0">
                <span className="pt-1 text-sm font-black text-red-600/50">
                  03
                </span>
                <div>
                  <h2 className="text-2xl font-black uppercase leading-none tracking-tighter">
                    Move with confidence
                  </h2>
                  <p className="mt-2 max-w-md text-base leading-snug text-red-950/70">
                    Less unwanted movement helps you feel more connected through
                    every turn and push-off.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-red-600 md:min-h-[72vh] rounded-3xl">
            <Image
              src="/gripsocks.png"
              alt="White TONX grip socks showing the grip pads on the soles"
              fill
              sizes="(max-width: 768px) 90vw, 50vw"
              className="object-contain p-8 md:p-12"
            />
          </div>
        </div>
      </div>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-red-600 px-6 py-16 text-orange-50 md:px-12 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-tighter text-orange-50/60">
              TONX // ready when you are
            </p>
            <h2 className="text-4xl font-[1000] uppercase leading-[0.85] tracking-tighter sm:text-6xl md:text-8xl">
              <span className="block">So what are you</span>
              <span className="block">waiting for?</span>
            </h2>
          </div>

          <div className="relative w-full md:w-64">
            <div className="absolute inset-0 translate-x-[10px] translate-y-[10px] bg-red-950" />
            <button className="relative w-full bg-orange-50 p-3 text-xl font-bold uppercase tracking-tighter text-red-600 transition-transform duration-100 active:translate-x-[10px] active:translate-y-[10px]">
              Buy tonx - £13
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        aria-labelledby="faq-title"
        className="bg-orange-50 px-6 py-16 text-red-600 md:px-12 md:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-tighter text-red-600/50">
              A few quick answers
            </p>
            <h2
              id="faq-title"
              className="text-5xl font-[1000] uppercase leading-[0.85] tracking-tighter md:text-7xl"
            >
              Good to know.
            </h2>
          </div>

          <div className="border-t border-red-600/20">
            <details className="group border-b border-red-600/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl font-black uppercase leading-tight tracking-tighter marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 md:text-2xl">
                How do TONX grip socks work?
                <span
                  aria-hidden="true"
                  className="shrink-0 text-3xl font-normal transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-xl pb-6 pr-10 text-base leading-snug text-red-950/70">
                Grip pads on the sole help reduce unwanted movement between your
                foot and your boot.
              </p>
            </details>

            <details className="group border-b border-red-600/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl font-black uppercase leading-tight tracking-tighter marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 md:text-2xl">
                When should I put them on?
                <span
                  aria-hidden="true"
                  className="shrink-0 text-3xl font-normal transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-xl pb-6 pr-10 text-base leading-snug text-red-950/70">
                Pull them on before your boots so the grip pads sit between your
                foot and your footwear.
              </p>
            </details>

            <details className="group border-b border-red-600/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl font-black uppercase leading-tight tracking-tighter marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 md:text-2xl">
                Will they stop all movement?
                <span
                  aria-hidden="true"
                  className="shrink-0 text-3xl font-normal transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-xl pb-6 pr-10 text-base leading-snug text-red-950/70">
                They are designed to help reduce slipping, but the fit of your
                socks and boots can affect how they feel.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-red-600 px-6 py-8 text-orange-50 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-3xl font-[1000] uppercase leading-none tracking-tighter">
              TONX GRIP
            </p>
            <p className="mt-2 text-xs text-orange-50/65 uppercase font-bold">
              By Tonbridgians, for Tonbridgians.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex gap-6 text-sm font-bold uppercase"
          >
            <Link
              className="hover:text-red-200 focus-visible:outline-2"
              href="/#how-it-works"
            >
              How it works
            </Link>

            <Link
              className="hover:text-red-200 focus-visible:outline-2"
              href="/about"
            >
              About
            </Link>

            <Link
              className="hover:text-red-200 focus-visible:outline-2"
              href="/contact"
            >
              Contact
            </Link>

            <Link
              className="hover:text-red-200 focus-visible:outline-2"
              href="/privacy"
            >
              Privacy
            </Link>

            <Link
              className="hover:text-red-200 focus-visible:outline-2"
              href="/#top"
            >
              Back to top
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
