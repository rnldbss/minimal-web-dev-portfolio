import React from "react"

const ThemeToggle = ({ className }) => {
  const [theme, toggleTheme] = useTheme()
  const isDark = theme === "dark"

  if (!theme) return null

  // Animation delays for sun dots
  const dotDelays = [
    "480ms",
    "400ms",
    "320ms",
    "240ms",
    "200ms",
    "280ms",
    "360ms",
    "440ms",
  ]

  return (
    <button
      className={`theme-toggle-button md:dark:bg-level-3-dark md:dark:ring-level-3-dark relative mx-2 aspect-square h-9 !rounded-sm p-1 md:bg-level-3 md:ring md:ring-level-3 ${className}`}
      onClick={() => toggleTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {!isDark && (
        <svg
          width="1.3rem"
          height="1.3rem"
          viewBox="0 0 24 24"
          className="theme-toggle-icon"
          style={{
            transform: `rotate(${isDark ? "40deg" : "0deg"})`,
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          key={theme}
        >
          {/* Animated sun dots */}
          <g mask="url(#sun-dots-mask)">
            {[
              [23, 12],
              [20.142, 20.142],
              [12, 23],
              [3.858, 20.142],
              [1, 12],
              [3.858, 3.858],
              [12, 1],
              [20.142, 3.858],
            ].map(([cx, cy], index) => (
              <circle
                key={index}
                data-include-enter-animation={!isDark ? "true" : undefined}
                cx={cx}
                cy={cy}
                r="1.5"
                fill="currentColor"
                className="theme-toggle-sun-dot"
                style={{
                  transformOrigin: "center center",
                  transform: "scale(0)",
                  "--enter-animation-delay": dotDelays[index],
                }}
              />
            ))}
          </g>

          {/* Central circle */}
          <g>
            <circle
              cx="12"
              cy="12"
              r="7.5"
              fill="currentColor"
              stroke="currentColor"
              mask={isDark ? "url(#moon-crescent-mask)" : undefined}
            />
          </g>
        </svg>
      )}
      {isDark && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2rem"
          height="1.2rem"
          viewBox="0 0 81.289 81.289"
          className="animate-moon-fade-in fill-on-level-0-dark"
        >
          <g>
            <path d="M79.248,38.668c-1.246-0.464-2.669-0.088-3.518,0.95c-4.791,5.84-11.858,9.192-19.403,9.192   c-13.833,0-25.083-11.255-25.083-25.083c0-6.963,2.808-13.441,7.908-18.242c0.977-0.918,1.26-2.357,0.705-3.579   c-0.552-1.222-1.818-1.959-3.157-1.826C15.778,2.112,0,19.511,0,40.555c0,22.424,18.245,40.669,40.672,40.669   c22.16,0,40.002-17.363,40.616-39.528C81.324,40.355,80.508,39.136,79.248,38.668z M40.671,74.953   c-18.971,0-34.402-15.43-34.402-34.4c0-14.93,9.389-27.69,22.859-32.43c-2.714,4.689-4.156,10.022-4.156,15.605   c0,17.292,14.065,31.355,31.357,31.355c6.317,0,12.373-1.882,17.479-5.322C69.82,64.399,56.557,74.953,40.671,74.953z" />
          </g>
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle
