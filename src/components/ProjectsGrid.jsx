import { AnimatePresence, motion } from "framer-motion";

import PortfolioCard from "./PortfolioCard";
import { urlFor } from "../sanity/lib/image";
import { useState } from "react";

export default function ProjectsGrid({ projectsList }) {
  const [twoColumnsGrid, setTwoColumnsGrid] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-1 relative ms-auto">
        <motion.div
          animate={twoColumnsGrid ? { x: "100%", width: "50%" } : { x: 0 }}
          transition={{ stiffness: 0 }}
          className="w-[calc(50%-8px)] rounded-sm h-full bg-level-3 dark:bg-level-3-dark absolute left-0 top-0 -z-10"
        ></motion.div>
        <button
          className="flex gap-1 w-1/2 items-center px-1"
          onClick={() => setTwoColumnsGrid(false)}
        >
          <svg
            width="8"
            height="8"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-on-level-0 dark:fill-on-level-0-dark"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0.75C0 0.55109 0.0790201 0.36032 0.21967 0.21967C0.36032 0.0790201 0.55109 0 0.75 0H13.25C13.4489 0 13.6397 0.0790201 13.7803 0.21967C13.921 0.36032 14 0.55109 14 0.75C14 0.94891 13.921 1.13968 13.7803 1.28033C13.6397 1.42098 13.4489 1.5 13.25 1.5H0.75C0.55109 1.5 0.36032 1.42098 0.21967 1.28033C0.0790201 1.13968 0 0.94891 0 0.75ZM0 5.75C0 5.55109 0.0790201 5.36032 0.21967 5.21967C0.36032 5.07902 0.55109 5 0.75 5H13.25C13.4489 5 13.6397 5.07902 13.7803 5.21967C13.921 5.36032 14 5.55109 14 5.75C14 5.94891 13.921 6.13968 13.7803 6.28033C13.6397 6.42098 13.4489 6.5 13.25 6.5H0.75C0.55109 6.5 0.36032 6.42098 0.21967 6.28033C0.0790201 6.13968 0 5.94891 0 5.75ZM0.75 10C0.55109 10 0.36032 10.079 0.21967 10.2197C0.0790201 10.3603 0 10.5511 0 10.75C0 10.9489 0.0790201 11.1397 0.21967 11.2803C0.36032 11.421 0.55109 11.5 0.75 11.5H13.25C13.4489 11.5 13.6397 11.421 13.7803 11.2803C13.921 11.1397 14 10.9489 14 10.75C14 10.5511 13.921 10.3603 13.7803 10.2197C13.6397 10.079 13.4489 10 13.25 10H0.75Z"
            />
          </svg>
          <span>list</span>
        </button>
        <button
          className="flex gap-1 w-1/2 items-center px-1"
          onClick={() => setTwoColumnsGrid(true)}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-on-level-0 dark:fill-on-level-0-dark"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.75 6.5C12.7165 6.5 13.5 5.7165 13.5 4.75L13.5 2.25C13.5 1.2835 12.7165 0.5 11.75 0.5L9.25 0.5C8.2835 0.5 7.5 1.2835 7.5 2.25L7.5 4.75C7.5 5.7165 8.2835 6.5 9.25 6.5L11.75 6.5ZM12 4.75C12 4.88807 11.8881 5 11.75 5L9.25 5C9.11193 5 9 4.88807 9 4.75L9 2.25C9 2.11193 9.11193 2 9.25 2L11.75 2C11.8881 2 12 2.11193 12 2.25L12 4.75Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.75 13.5C12.7165 13.5 13.5 12.7165 13.5 11.75L13.5 9.25C13.5 8.2835 12.7165 7.5 11.75 7.5L9.25 7.5C8.2835 7.5 7.5 8.2835 7.5 9.25L7.5 11.75C7.5 12.7165 8.2835 13.5 9.25 13.5L11.75 13.5ZM12 11.75C12 11.8881 11.8881 12 11.75 12L9.25 12C9.11193 12 9 11.8881 9 11.75L9 9.25C9 9.11193 9.11193 9 9.25 9L11.75 9C11.8881 9 12 9.11193 12 9.25L12 11.75Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.5 11.75C6.5 12.7165 5.7165 13.5 4.75 13.5L2.25 13.5C1.2835 13.5 0.500001 12.7165 0.500001 11.75L0.500001 9.25C0.500001 8.2835 1.2835 7.5 2.25 7.5L4.75 7.5C5.7165 7.5 6.5 8.2835 6.5 9.25L6.5 11.75ZM4.75 12C4.88807 12 5 11.8881 5 11.75L5 9.25C5 9.11193 4.88807 9 4.75 9L2.25 9C2.11193 9 2 9.11193 2 9.25L2 11.75C2 11.8881 2.11193 12 2.25 12L4.75 12Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.75 6.5C5.7165 6.5 6.5 5.7165 6.5 4.75L6.5 2.25C6.5 1.2835 5.7165 0.5 4.75 0.5L2.25 0.5C1.2835 0.5 0.500001 1.2835 0.500001 2.25L0.500001 4.75C0.500001 5.7165 1.2835 6.5 2.25 6.5L4.75 6.5ZM5 4.75C5 4.88807 4.88807 5 4.75 5L2.25 5C2.11193 5 2 4.88807 2 4.75L2 2.25C2 2.11193 2.11193 2 2.25 2L4.75 2C4.88807 2 5 2.11193 5 2.25L5 4.75Z"
            />
          </svg>
          <span>grid</span>
        </button>
      </div>

      <div
        className={`grid grid-flow-row ${twoColumnsGrid ? "grid-cols-2  gap-8" : "grid-cols-1 gap-10"}`}
      >
        <AnimatePresence>
          {projectsList.map((project) => (
            <motion.div
              key={project.slug.current}
              layout
              transition={{ duration: 0.5 }}
            >
              <PortfolioCard
                cardHeading={twoColumnsGrid ? undefined : project.title}
                cardBody={twoColumnsGrid ? undefined : project.cardDescription}
                cardImage={urlFor(project.mainImage)}
                cardImageAlt={project.mainImage.alt}
                cardList={project.projectOverview.techStack}
                projectSlug={project.slug.current}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
