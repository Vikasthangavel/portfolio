import React, { useEffect, useState } from "react";

export default function AnimatedCount({ target, duration = 1300, suffix = "", prefix = "" }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let rafId;
    const start = performance.now();

    const frame = (now) => {
      const progress = Math.max(0, Math.min((now - start) / duration, 1));
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        rafId = requestAnimationFrame(frame);
      }
    };

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration]);

  return (
    <strong>
      {prefix}
      {value}
      {suffix}
    </strong>
  );
}
