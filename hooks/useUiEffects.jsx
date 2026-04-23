import { useEffect } from "react";

export default function useUiEffects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canAnimate3D =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canAnimate3D) return undefined;

    const tiltTargets = document.querySelectorAll(
      ".hero-left, .hero-right, .brand-card, .tool-pill, .exp-card, .skill-card, .contact-card"
    );

    const cleanups = [];

    tiltTargets.forEach((card) => {
      card.classList.add("tilt-card");

      const onMove = (event) => {
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;

        const rx = (0.5 - py) * 4;
        const ry = (px - 0.5) * 5;

        card.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0)`;
        card.style.boxShadow = "0 24px 38px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(101, 145, 255, 0.2)";
      };

      const onLeave = () => {
        card.style.transform = "";
        card.style.boxShadow = "";
      };

      card.addEventListener("pointermove", onMove);
      card.addEventListener("pointerleave", onLeave);

      cleanups.push(() => {
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);
}
