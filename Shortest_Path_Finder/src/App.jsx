import React, { useState, useEffect } from "react";
import Grid from "./Grid";
import Controls from "./Controls";
import { dijkstra } from "./dijkstra";
import { floydWarshall } from "./floyds";
import "./App.css";

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [edgeMode, setEdgeMode] = useState(false);
  const [edgeNodes, setEdgeNodes] = useState([]);
  const [weight, setWeight] = useState("");
  const [algorithm, setAlgorithm] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [shortestPath, setShortestPath] = useState([]);
  const [triggerPath, setTriggerPath] = useState(false);

  const handleClearAll = () => {
    setNodes([]);
    setEdges([]);
    setEdgeMode(false);
    setEdgeNodes([]);
    setWeight("");
    setAlgorithm("");
    setSource("");
    setDestination("");
    setShortestPath([]);
  };  

  const handleAddNode = (row, col) => {
    const exists = nodes.some(n => n.row === row && n.col === col);
    if (!exists) {
      const nodeNumber = nodes.length;
      setNodes([...nodes, { row, col, number: nodeNumber }]);
    }
  };

  const handleNodeClick = (node) => {
    if (!edgeMode) return;

    if (edgeNodes.length === 0) {
      setEdgeNodes([node]);
    } else if (edgeNodes.length === 1) {
      const first = edgeNodes[0];
      const second = node;

      const exists = edges.some(
        e =>
          (e.from === first.number && e.to === second.number) ||
          (e.from === second.number && e.to === first.number)
      );

      if (!exists && first.number !== second.number) {
        setEdges([...edges, { from: first.number, to: second.number, weight: Number(weight) }]);
      }

      setEdgeNodes([]);
      setEdgeMode(false);
      setWeight("");
    }
  };

  useEffect(() => {
    if (
      triggerPath &&
      source !== "" &&
      destination !== "" &&
      algorithm !== "" && // Ensure algorithm is selected
      nodes.length > 0 &&
      edges.length > 0
    ) {
      let path = [];
      if (algorithm === "dijkstra") {
        path = dijkstra(nodes.length, edges, Number(source), Number(destination));
      } else if (algorithm === "floyd") {
        path = floydWarshall(nodes.length, edges, Number(source), Number(destination));
      }
      setShortestPath(path);
      setTriggerPath(false); // reset trigger
    }
  }, [triggerPath, source, destination, algorithm, nodes, edges]);
  
  
  return (
    <div>
      <Controls
      weight={weight}
      setWeight={setWeight}
      setEdgeMode={setEdgeMode}
      edgeMode={edgeMode}
      nodes={nodes}
      algorithm={algorithm}
      setAlgorithm={setAlgorithm}
      source={source}
      destination={destination}
      setSource={setSource}
      setDestination={setDestination}
      setTriggerPath={setTriggerPath}
      handleClearAll={handleClearAll}
    />

      <Grid
        nodes={nodes}
        edges={edges}
        onCellClick={handleAddNode}
        onNodeClick={handleNodeClick}
        shortestPath={shortestPath}
      />
    </div>
  );
}

export default App;