"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const treatments = [
  {
    number: "01",
    title: "Dental Cleaning",
    description:
      "Professional cleaning to remove plaque, buildup and keep your smile fresh.",
    icon: "cleaning",
  },
  {
    number: "02",
    title: "Dental Implants",
    description:
      "Natural-looking tooth replacement designed for comfort and confidence.",
    icon: "implant",
  },
  {
    number: "03",
    title: "Clear Aligners",
    description:
      "A discreet way to gradually create a straighter, more confident smile.",
    icon: "aligner",
  },
  {
    number: "04",
    title: "Root Canal",
    description:
      "Modern treatment focused on relieving discomfort and preserving your tooth.",
    icon: "root",
  },
  {
    number: "05",
    title: "Cosmetic Dentistry",
    description:
      "Personalized treatments to refine the appearance of your smile.",
    icon: "cosmetic",
  },
  {
    number: "06",
    title: "Kids Dentistry",
    description:
      "Gentle dental care designed around the comfort of growing smiles.",
    icon: "kids",
  },
];

function TreatmentIcon({ type }: { type: string }) {
  if (type === "cleaning") {
    return (
      <svg viewBox="0 0 120 120" className="treatment-svg">
        <path
          d="M43 22c-12 1-19 12-17 25 2 14 9 18 12 35 2 12 7 19 14 19s8-9 8-18c0-8 2-14 6-14s6 6 6 14c0 9 2 18 9 18s12-7 14-19c3-17 10-21 12-35 2-13-5-24-17-25-8-1-14 5-24 5S51 21 43 22Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M72 18v25M60 30l12 13 12-13"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="72" cy="13" r="4" fill="currentColor" />
      </svg>
    );
  }

  if (type === "implant") {
    return (
      <svg viewBox="0 0 120 120" className="treatment-svg">
        <path
          d="M35 27c-8 4-11 14-9 24 3 13 10 16 13 32 2 10 6 16 13 16 7 0 9-8 9-17V50"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M85 27c8 4 11 14 9 24-3 13-10 16-13 32-2 10-6 16-13 16-7 0-9-8-9-17V50"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M60 48v45"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M50 58h20M50 68h20M50 78h20"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "aligner") {
    return (
      <svg viewBox="0 0 120 120" className="treatment-svg">
        <path
          d="M25 42c8-14 21-21 35-21s27 7 35 21c-7 13-20 21-35 21S32 55 25 42Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M25 42c8 13 21 21 35 21s27-8 35-21"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M36 72c8 12 16 18 24 18s16-6 24-18"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="45" cy="41" r="3" fill="currentColor" />
        <circle cx="60" cy="45" r="3" fill="currentColor" />
        <circle cx="75" cy="41" r="3" fill="currentColor" />
      </svg>
    );
  }

  if (type === "root") {
    return (
      <svg viewBox="0 0 120 120" className="treatment-svg">
        <path
          d="M40 25c-11 2-17 12-15 25 2 13 9 17 12 32 3 14 7 19 14 19 6 0 8-9 9-19"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M80 25c11 2 17 12 15 25-2 13-9 17-12 32-3 14-7 19-14 19-6 0-8-9-9-19"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M60 39v42"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="60" cy="29" r="8" fill="none" stroke="currentColor" strokeWidth="4" />
      </svg>
    );
  }

  if (type === "cosmetic") {
    return (
      <svg viewBox="0 0 120 120" className="treatment-svg">
        <path
          d="M25 47c7-14 20-22 35-22s28 8 35 22c-7 14-20 22-35 22S32 61 25 47Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M37 47c6 6 14 9 23 9s17-3 23-9"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M88 22v18M79 31h18"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M94 52v12M88 58h12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 120" className="treatment-svg">
      <circle
        cx="60"
        cy="52"
        r="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M45 51c5 5 10 7 15 7s10-2 15-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="50" cy="45" r="3" fill="currentColor" />
      <circle cx="70" cy="45" r="3" fill="currentColor" />
      <path
        d="M35 91c7-10 15-15 25-15s18 5 25 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="28" cy="27" r="5" fill="currentColor" opacity=".35" />
      <circle cx="92" cy="30" r="4" fill="currentColor" opacity=".35" />
    </svg>
  );
}

export default function Treatments() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".treatments-heading > *", {
        y: 45,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".treatments-heading",
          start: "top 80%",
        },
      });

      gsap.from(".treatment-card", {
        y: 70,
        opacity: 0,
        scale: 0.96,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".treatments-grid",
          start: "top 78%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="treatments" className="treatments">
      <div className="treatments-wrap">

        <div className="treatments-heading">
          <div className="eyebrow">
            <span />
            OUR TREATMENTS
          </div>

          <h2>
            Complete care for
            <br />
            <i>your smile.</i>
          </h2>

          <p>
            Modern dentistry with a softer approach. Explore treatments
            designed around your comfort, health and confidence.
          </p>
        </div>

        <div className="treatments-grid">
          {treatments.map((item) => (
            <article className="treatment-card" key={item.number}>
              <div className="illustration-box">
                <TreatmentIcon type={item.icon} />

                <span className="treatment-index">
                  {item.number}
                </span>
              </div>

              <div className="treatment-info">
                <span>{item.title}</span>

                <h3>{item.description}</h3>

                <a href="#booking">
                  Learn more
                  <b>↗</b>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}