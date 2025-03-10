export default function ButtonPrimary({ buttonHref, buttonText }) {
  return (
    <a
      class="group flex items-center gap-2 border-b-2 font-semibold border-accent-primary w-max"
      href={buttonHref}
    >
      <span> {buttonText}</span>

      <svg
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-on-level-0 dark:fill-on-level-0-dark group-hover:translate-x-0.5 ease-linear duration-100"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.21967 0.969668C5.51256 0.676777 5.98744 0.676777 6.28033 0.969668L10.5303 5.21967C10.8232 5.51256 10.8232 5.98744 10.5303 6.28033L6.28033 10.5303C5.98744 10.8232 5.51256 10.8232 5.21967 10.5303C4.92678 10.2374 4.92678 9.7626 5.21967 9.4697L8.1893 6.5H0.75C0.33579 6.5 0 6.16421 0 5.75C0 5.33579 0.33579 5 0.75 5H8.1893L5.21967 2.03033C4.92678 1.73744 4.92678 1.26256 5.21967 0.969668Z"
        />
      </svg>
    </a>
  );
}
