import React, { useEffect, useRef, useState } from "react";

const numRows = 16;
const numCols = 30;

export default function Grid({ nodes, edges, onCellClick, onNodeClick, shortestPath }) {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState({});
  const nodeRefs = useRef({});

  useEffect(() => {
    const updatePositions = () => {
      const newPositions = {};
      nodes.forEach((node) => {
        const ref = nodeRefs.current[node.number];
        if (ref && containerRef.current) {
          const rect = ref.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          newPositions[node.number] = {
            x: rect.left - containerRect.left + rect.width / 2,
            y: rect.top - containerRect.top + rect.height / 2,
          };
        }
      });
      setPositions(newPositions);
    };
  
    updatePositions();
  
    const resizeObserver = new ResizeObserver(updatePositions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
  
    return () => {
      resizeObserver.disconnect();
    };
  }, [nodes]);
  
  

  const isInPath = (from, to) => {
    for (let i = 0; i < shortestPath.length - 1; i++) {
      if (
        (shortestPath[i] === from && shortestPath[i + 1] === to) ||
        (shortestPath[i] === to && shortestPath[i + 1] === from)
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="grid-container" ref={containerRef}>
      <svg className="edge-layer">
        {edges.map((edge, i) => {
          const from = positions[edge.from];
          const to = positions[edge.to];
          if (!from || !to) return null;

          const dx = to.x - from.x;
          const dy = to.y - from.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const radius = 20;
          const offsetX = (dx / length) * radius;
          const offsetY = (dy / length) * radius;

          const startX = from.x + offsetX;
          const startY = from.y + offsetY;
          const endX = to.x - offsetX;
          const endY = to.y - offsetY;

          const midX = (startX + endX) / 2;
          const midY = (startY + endY) / 2;

          const color = isInPath(edge.from, edge.to) ? "red" : "white";

          return (
            <g key={i}>
              <line x1={startX} y1={startY} x2={endX} y2={endY} stroke={color} strokeWidth={2} />
              <text
                x={midX}
                y={midY - 5}
                fontSize="1.4rem"
                fontFamily="Courier New, monospace"
                fontWeight="bold"
                textAnchor="middle"
                fill="#3498db"
              >
                {edge.weight}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="grid">
        {Array.from({ length: numRows }).map((_, row) => (
          <div key={row} className="grid-row">
            {Array.from({ length: numCols }).map((_, col) => {
              const node = nodes.find((n) => n.row === row && n.col === col);
              return (
                <div
                  key={`${row}-${col}`}
                  className="cell"
                  onClick={() =>
                    node ? onNodeClick(node) : onCellClick(row, col)
                  }
                >
                  {node && (
                    <div
                      className="node"
                      ref={(el) => (nodeRefs.current[node.number] = el)}
                    >
                      <span className="node-number">{node.number}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
