export default function ButtonPrimary({ buttonHref, buttonText }) {
  return (
    <a
      class="px-5 py-px rounded-sm inline-block ring hover:bg-accent-primary ring-accent-primary hover:text-on-level-0-dark transition-colors duration-75  w-max"
      href={buttonHref}
    >
      {buttonText}
    </a>
  );
}
