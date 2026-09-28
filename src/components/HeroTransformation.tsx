"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroTransformation() {
  const sectionRef = useRef<HTMLElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%",
            scrub: 1.1,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(
          beforeRef.current,
          {
            opacity: 0,
            scale: 1.08,
            ease: "none",
          },
          0
        )
          .fromTo(
            afterRef.current,
            {
              opacity: 0,
              scale: 1.12,
            },
            {
              opacity: 1,
              scale: 1,
              ease: "none",
            },
            0
          )
          .to(
            copyRef.current,
            {
              opacity: 0,
              y: -45,
              ease: "power2.in",
            },
            0.03
          )
          .fromTo(
            ".after-copy",
            {
              opacity: 0,
              y: 40,
            },
            {
              opacity: 1,
              y: 0,
              ease: "power2.out",
            },
            0.48
          )
          .to(
            badgeRef.current,
            {
              opacity: 0,
              y: -20,
            },
            0.12
          )
          .to(
            ".hero-scroll",
            {
              opacity: 0,
            },
            0.12
          );
      });

      // Mobile
      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=110%",
            scrub: 0.8,
            pin: true,
          },
        });

        tl.to(
          beforeRef.current,
          {
            opacity: 0,
            scale: 1.06,
            ease: "none",
          },
          0
        )
          .fromTo(
            afterRef.current,
            {
              opacity: 0,
              scale: 1.08,
            },
            {
              opacity: 1,
              scale: 1,
              ease: "none",
            },
            0
          )
          .to(
            copyRef.current,
            {
              opacity: 0,
              y: -25,
              ease: "none",
            },
            0
          )
          .fromTo(
            ".after-copy",
            {
              opacity: 0,
              y: 24,
            },
            {
              opacity: 1,
              y: 0,
              ease: "none",
            },
            0.5
          );
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="hero" ref={sectionRef}>
      {/* Before Image */}
      <div
        className="hero-image before-image"
        ref={beforeRef}
      >
        <Image
          src="/dental/images/tooth-before.png"
          alt="Dental professionals restoring a stained tooth"
          fill
          priority
          sizes="100vw"
        />
      </div>

      {/* After Image */}
      <div
        className="hero-image after-image"
        ref={afterRef}
      >
        <Image
          src="/dental/images/tooth-after.png"
          alt="Dental professionals polishing a bright white tooth"
          fill
          sizes="100vw"
        />
      </div>

      <div className="hero-overlay"></div>

      {/* Initial Content */}
      <div
        className="hero-content container"
        ref={copyRef}
      >
        <div className="eyebrow">
          Luma Dental · Advanced smile care
        </div>

        <h1>
          Your smile
          <br />
          <em>deserves a fresh start.</em>
        </h1>

        <p>
          Thoughtful dentistry, modern technology and a calmer
          way to care for your smile.
        </p>

        <div className="hero-actions">
          <a href="#book" className="button button-light">
            Book an appointment <span>↗</span>
          </a>

          <a href="#treatments" className="text-link">
            Explore treatments ↓
          </a>
        </div>
      </div>

      {/* After Transformation Content */}
      <div className="after-copy container">
        <div className="eyebrow">
          The result
        </div>

        <h2>
          A brighter smile
          <br />
          <em>starts here.</em>
        </h2>

        <p>
          From everyday cleanings to complete smile
          transformations, every treatment is built around you.
        </p>

        <a href="#book" className="button button-light">
          Start your smile journey <span>↗</span>
        </a>
      </div>

      {/* Before / After Badge */}
      <div
        className="hero-badge"
        ref={badgeRef}
      >
        <span>01</span>
        <div></div>
        <span>02</span>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <span>Scroll to transform</span>
        <i></i>
      </div>
    </section>
  );
}