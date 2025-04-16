import React from "react";

export default function Controls({
  weight,
  setWeight,
  setEdgeMode,
  edgeMode,
  nodes,
  algorithm,
  setAlgorithm,
  source,
  destination,
  setSource,
  setDestination,
  setTriggerPath,      
  handleClearAll       
}) {
  return (
    <div className="controls">
      <button onClick={() => setEdgeMode(true)} disabled={edgeMode}>
        Add Edge
      </button>
      <input
        type="number"
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        disabled={!edgeMode}
      />

      <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
        <option value="">Algorithm</option>
        <option value="dijkstra">Dijkstra</option>
        <option value="floyd">Floyd-Warshall</option>
      </select>

      <select value={source} onChange={(e) => setSource(e.target.value)}>
        <option value="">Source</option>
        {nodes.map((node) => (
          <option key={node.number} value={node.number}>
            Node {node.number}
          </option>
        ))}
      </select>

      <select value={destination} onChange={(e) => setDestination(e.target.value)}>
        <option value="">Destination</option>
        {nodes.map((node) => (
          <option key={node.number} value={node.number}>
            Node {node.number}
          </option>
        ))}
      </select>

      <button
      onClick={() => setTriggerPath(true)}
      disabled={source === "" || destination === "" || algorithm === ""}
    >
      Find Path
    </button>


      <button onClick={handleClearAll}>
        Clear All
      </button>
    </div>
  );
}