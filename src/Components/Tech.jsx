import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useLayoutEffect, useState, useMemo } from "react";

import bigquery from "../assets/bigquery.webp";
import colab from "../assets/colab.webp";
import excel from "../assets/excel.webp";
import jupyter from "../assets/jupyter.webp";
import looker from "../assets/looker.webp";
import mysql from "../assets/mysql.webp";
import powerbi from "../assets/powerbi.webp";
import python from "../assets/python.webp";
import r from "../assets/r.webp";
import sheets from "../assets/sheets.webp";
import tableau from "../assets/tableau.webp";

const TECH_STACK = [
  { name: "BigQuery", src: bigquery },
  { name: "Colab", src: colab },
  { name: "Excel", src: excel },
  { name: "Jupyter", src: jupyter },
  { name: "Looker", src: looker },
  { name: "MySQL", src: mysql },
  { name: "Power BI", src: powerbi },
  { name: "Python", src: python },
  { name: "R", src: r },
  { name: "Sheets", src: sheets },
  { name: "Tableau", src: tableau },
];

const MULTIPLIER = 4;

/* Fisher-Yates shuffle (real random, no bias) */
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function TechItem({ tech }) {
  return (
    <div className="flex flex-col items-center gap-2 px-5 sm:px-7 lg:px-10 shrink-0 select-none">
      <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-23 lg:h-32">
        <img
          src={tech.src}
          alt={tech.name}
          draggable="false"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
      <span className="text-xs sm:text-sm text-gray-500 font-medium">
        {tech.name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, direction = "left", speed = 80 }) {
  const x = useMotionValue(0);
  const contentRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (contentRef.current) setWidth(contentRef.current.offsetWidth);
  }, [items]);

  useLayoutEffect(() => {
    if (direction === "right" && width) x.set(-width);
  }, [width, direction, x]);

  useAnimationFrame((_, delta) => {
    if (!width) return;
    const move = (speed * delta) / 1000;
    let next = x.get();

    if (direction === "left") {
      next -= move;
      if (next <= -width) next += width;
    } else {
      next += move;
      if (next >= 0) next -= width;
    }
    x.set(next);
  });

  return (
    <div className="overflow-hidden">
      <motion.div style={{ x }} className="flex will-change-transform">
        <div ref={contentRef} className="flex">
          {items.map((tech) => (
            <TechItem key={tech.name} tech={tech} />
          ))}
        </div>

        {Array.from({ length: MULTIPLIER - 1 }, (_, i) =>
          items.map((tech) => (
            <TechItem key={`${direction}-clone-${i}-${tech.name}`} tech={tech} />
          ))
        )}
      </motion.div>
    </div>
  );
}

export default function Tech() {
  /* Shuffle ONCE per render (stable, no jitter) */
  const { firstRow, secondRow } = useMemo(() => {
    const shuffled = shuffle(TECH_STACK);

    return {
      firstRow: shuffled.slice(0, 5),
      secondRow: shuffled.slice(5, 11),
    };
  }, []);

  return (
    <section className="bg-gray-50 pb-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 px-4">
          Data Analyst Tech Stack
        </h2>

        <MarqueeRow items={firstRow} direction="left" speed={70} />

        <div className="mt-6 sm:mt-8">
          <MarqueeRow items={secondRow} direction="right" speed={55} />
        </div>
      </motion.div>
    </section>
  );
}