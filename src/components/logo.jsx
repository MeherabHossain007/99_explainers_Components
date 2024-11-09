'use client'
import { useEffect } from "react";

export default function Logo() {
  useEffect(() => {
    const pupils = document.querySelectorAll(".pupil");

    const lookDown = () => {
      pupils.forEach((pupil) => pupil.classList.add("look-down"));
      setTimeout(() => {
        pupils.forEach((pupil) => pupil.classList.remove("look-down"));
      }, 1000); // Stay down for 1 second
    };

    const lookUp = () => {
      pupils.forEach((pupil) => pupil.classList.add("look-up"));
      setTimeout(() => {
        pupils.forEach((pupil) => pupil.classList.remove("look-up"));
      }, 1000); // Stay up for 1 second
    };

    const lookLeft = () => {
      pupils.forEach((pupil) => pupil.classList.add("look-left"));
      setTimeout(() => {
        pupils.forEach((pupil) => pupil.classList.remove("look-left"));
      }, 1000); // Stay left for 1 second
    };

    const lookRight = () => {
      pupils.forEach((pupil) => pupil.classList.add("look-right"));
      setTimeout(() => {
        pupils.forEach((pupil) => pupil.classList.remove("look-right"));
      }, 1000); // Stay right for 1 second
    };

    const blink = () => {
      const eyes = document.querySelectorAll(".eye-area");
      eyes.forEach((eye) => eye.classList.add("blink"));
      setTimeout(() => {
        eyes.forEach((eye) => eye.classList.remove("blink"));
      }, 400); // Blink duration (smooth)
    };

    const triggerRandomAnimation = () => {
      lookDown();
      setTimeout(() => lookUp(), 4000); // Wait 2s before looking up
      setTimeout(() => lookLeft(), 6000); // Wait 4s before looking left
      setTimeout(() => lookRight(), 8000); // Wait 6s before looking right
      setTimeout(() => blink(), 12000); // Wait 8s before blinking

      // Trigger the next set of animations after 12 seconds
      setTimeout(triggerRandomAnimation, 16000);
    };

    triggerRandomAnimation();
  }, []);

  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 431.41 187.13"
      className="h-20 w-auto"
    >
      <defs>
        <style>{`
          .cls-1 { fill: #b71c22; }
          .cls-2 { fill: #fff; }
          .cls-3 { clip-path: url(#clippath); }

          /* Eye area blink animation */
          .eye-area {
            transition: transform 0.2s ease;
          }
          .blink {
            animation: blink-animation 0.2s ease-in-out;
          }

          /* Keyframes for smoother blink */
          @keyframes blink-animation {
            0%, 100% {
              fill: #fff; /* Original color */
              transform: scaleY(1); /* Eyes open */
            }
            50% {
              fill: #b71c22; /* Fill color for blink */
              transform: scaleY(1);
            }
          }

          /* Pupil movement animations */
          .pupil {
            transition: transform 0.4s ease-in-out;
          }

          /* Look down animation */
          .look-down { transform: translateY(15px); }

          /* Look up animation with slight angle */
          .look-up { transform: translateY(-15px) translateX(-5px); }

          /* Look left animation */
          .look-left { transform: translateX(-15px); }

          /* Look right animation */
          .look-right { transform: translateX(15px); }
        `}</style>
        <clipPath id="clippath">
          <path
            className="cls-1"
            d="M431.41,3.14l-165.43,163.05c-28.63,28.22-74.71,27.88-102.92-.75L0,0l430.25,3.13h1.17Z"
          />
        </clipPath>
      </defs>
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <path
            className="cls-1"
            d="M431.41,3.14l-165.43,163.05c-28.63,28.22-74.71,27.88-102.92-.75L0,0l430.25,3.13h1.17Z"
          />
          <g className="cls-3">
            <rect
              className="cls-2"
              x="171.29"
              y="74.76"
              width="21.82"
              height="111.37"
              transform="translate(89.63 -73.62) rotate(30)"
            />
            <rect
              className="cls-2"
              x="246.68"
              y="72.86"
              width="21.82"
              height="143.3"
              transform="translate(106.76 -109.43) rotate(30)"
            />
          </g>
        </g>

        {/* Eye Areas (White Part) */}
        <circle className="eye-area cls-2" cx="185.54" cy="70.63" r="37.91" />
        <circle className="eye-area cls-2" cx="268.95" cy="70.63" r="37.97" />

        {/* Pupils (Inner Part) */}
        <circle className="pupil cls-1" cx="185.54" cy="70.63" r="18.31" />
        <circle className="pupil cls-1" cx="268.95" cy="70.63" r="18.31" />
      </g>
    </svg>
  );
}

