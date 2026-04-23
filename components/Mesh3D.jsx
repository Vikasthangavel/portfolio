import React, { useEffect, useRef } from "react";

export default function Mesh3D({ hueOffset = 240, size = "medium", position = "center" }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Generate 3D wireframe mesh vertices
    const vertices = [
      // Front face
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      // Back face
      [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
      // Additional points for complexity
      [0, 0, -1.5], [0, 0, 1.5], [0, -1.5, 0], [0, 1.5, 0],
      [-1.5, 0, 0], [1.5, 0, 0]
    ];

    const edges = [
      // Front face
      [0, 1], [1, 2], [2, 3], [3, 0],
      // Back face
      [4, 5], [5, 6], [6, 7], [7, 4],
      // Connecting edges
      [0, 4], [1, 5], [2, 6], [3, 7],
      // Extra connections
      [0, 8], [1, 8], [2, 9], [3, 9],
      [4, 9], [5, 9], [6, 9], [7, 9],
      [10, 0], [10, 1], [10, 4], [10, 5],
      [11, 2], [11, 3], [11, 6], [11, 7],
      [12, 0], [12, 3], [12, 4], [12, 7],
      [13, 1], [13, 2], [13, 5], [13, 6],
      [8, 9], [10, 11], [12, 13]
    ];

    let rotation = { x: 0, y: 0, z: 0 };

    const animate = () => {
      rotation.x += 0.005;
      rotation.y += 0.008;
      rotation.z += 0.003;

      // Project 3D points to 2D
      const projectedPoints = vertices.map(([x, y, z]) => {
        let px = x, py = y, pz = z;

        // Rotate around X axis
        let cosX = Math.cos(rotation.x);
        let sinX = Math.sin(rotation.x);
        let ty = py * cosX - pz * sinX;
        let tz = py * sinX + pz * cosX;
        py = ty;
        pz = tz;

        // Rotate around Y axis
        let cosY = Math.cos(rotation.y);
        let sinY = Math.sin(rotation.y);
        let tx = px * cosY + pz * sinY;
        tz = -px * sinY + pz * cosY;
        px = tx;
        pz = tz;

        // Rotate around Z axis
        let cosZ = Math.cos(rotation.z);
        let sinZ = Math.sin(rotation.z);
        tx = px * cosZ - py * sinZ;
        ty = px * sinZ + py * cosZ;
        px = tx;
        py = ty;

        // Perspective projection
        const scale = 4 / (4 + pz);
        const x2d = px * scale * 60 + 150;
        const y2d = py * scale * 60 + 150;
        const depth = (pz + 3) / 6; // 0 to 1

        return { x: x2d, y: y2d, z: pz, depth };
      });

      // Clear previous lines
      const existingLines = svg.querySelectorAll("line");
      existingLines.forEach(line => line.remove());

      // Draw edges
      edges.forEach(([start, end]) => {
        const p1 = projectedPoints[start];
        const p2 = projectedPoints[end];

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", p1.x);
        line.setAttribute("y1", p1.y);
        line.setAttribute("x2", p2.x);
        line.setAttribute("y2", p2.y);

        // Color based on depth and edges
        const avgDepth = (p1.depth + p2.depth) / 2;
        const hue = hueOffset + avgDepth * 60; // Use hueOffset parameter
        const saturation = 60 + avgDepth * 40;
        const lightness = 40 + avgDepth * 20;

        line.setAttribute("stroke", `hsl(${hue}, ${saturation}%, ${lightness}%)`);
        line.setAttribute("stroke-width", 1.2 + avgDepth * 0.8);
        line.setAttribute("opacity", 0.3 + avgDepth * 0.7);
        line.setAttribute("stroke-linecap", "round");
        line.setAttribute("filter", "drop-shadow(0 0 4px rgba(120, 150, 255, 0.3))");

        svg.appendChild(line);
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [hueOffset, size, position]);

  return (
    <div className={`mesh-3d-container mesh-size-${size} mesh-pos-${position}`} aria-hidden="true">
      <svg
        ref={svgRef}
        className="mesh-3d-svg"
        viewBox="0 0 300 300"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      ></svg>
    </div>
  );
}
