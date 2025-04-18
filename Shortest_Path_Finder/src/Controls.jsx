// // import React from "react";

// // export default function Controls({
// //   weight,
// //   setWeight,
// //   setEdgeMode,
// //   edgeMode,
// //   nodes,
// //   algorithm,
// //   setAlgorithm,
// //   source,
// //   destination,
// //   setSource,
// //   setDestination,
// //   setTriggerPath,      
// //   handleClearAll       
// // }) {
// //   return (
// //     <div className="controls">
// //       <button onClick={() => setEdgeMode(true)} disabled={edgeMode}>
// //         Add Edge
// //       </button>
// //       <input
// //         type="number"
// //         placeholder="Weight"
// //         value={weight}
// //         onChange={(e) => setWeight(e.target.value)}
// //         disabled={!edgeMode}
// //       />

// //       <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
// //         <option value="">Algorithm</option>
// //         <option value="dijkstra">Dijkstra</option>
// //         <option value="floyd">Floyd-Warshall</option>
// //       </select>

// //       <select value={source} onChange={(e) => setSource(e.target.value)}>
// //         <option value="">Source</option>
// //         {nodes.map((node) => (
// //           <option key={node.number} value={node.number}>
// //             Node {node.number}
// //           </option>
// //         ))}
// //       </select>

// //       <select value={destination} onChange={(e) => setDestination(e.target.value)}>
// //         <option value="">Destination</option>
// //         {nodes.map((node) => (
// //           <option key={node.number} value={node.number}>
// //             Node {node.number}
// //           </option>
// //         ))}
// //       </select>

// //       <button
// //       onClick={() => setTriggerPath(true)}
// //       disabled={source === "" || destination === "" || algorithm === ""}
// //     >
// //       Find Path
// //     </button>


// //       <button onClick={handleClearAll}>
// //         Clear All
// //       </button>
// //     </div>
// //   );
// // }


// import React from "react";
// import { BellIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// export default function Controls({
//   weight,
//   setWeight,
//   setEdgeMode,
//   edgeMode,
//   nodes,
//   algorithm,
//   setAlgorithm,
//   source,
//   destination,
//   setSource,
//   setDestination,
//   setTriggerPath,
//   handleClearAll,
// }) {
//   return (
//     <div className="bg-gray-800 text-white">
//       {/* Top Row: Navbar Heading */}
//       <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
//         <div className="flex items-center gap-3">
//           <span className="text-lg font-semibold">Shortest Path Finder</span>
//         </div>
//       </div>

//       {/* Bottom Row: Controls */}
//       <div className="px-4 py-2 flex flex-wrap gap-2 items-center text-sm border-t border-gray-700">
//         <button
//           onClick={() => setEdgeMode(true)}
//           disabled={edgeMode}
//           className={`px-3 py-1 rounded-md ${
//             edgeMode
//               ? "bg-gray-600 cursor-not-allowed"
//               : "bg-gray-700 hover:bg-gray-600"
//           }`}
//         >
//           Add Edge
//         </button>

//         <input
//           type="number"
//           placeholder="Weight"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
//           disabled={!edgeMode}
//           className="w-20 rounded-md px-2 py-1 bg-gray-700 text-white placeholder-gray-400 disabled:opacity-50"
//         />

//         <select
//           value={algorithm}
//           onChange={(e) => setAlgorithm(e.target.value)}
//           className="rounded-md px-2 py-1 bg-gray-700 text-white"
//         >
//           <option value="">Algorithm</option>
//           <option value="dijkstra">Dijkstra</option>
//           <option value="floyd">Floyd-Warshall</option>
//         </select>

//         <select
//           value={source}
//           onChange={(e) => setSource(e.target.value)}
//           className="rounded-md px-2 py-1 bg-gray-700 text-white"
//         >
//           <option value="">Source</option>
//           {nodes.map((node) => (
//             <option key={node.number} value={node.number}>
//               Node {node.number}
//             </option>
//           ))}
//         </select>

//         <select
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//           className="rounded-md px-2 py-1 bg-gray-700 text-white"
//         >
//           <option value="">Destination</option>
//           {nodes.map((node) => (
//             <option key={node.number} value={node.number}>
//               Node {node.number}
//             </option>
//           ))}
//         </select>

//         <button
//           onClick={() => setTriggerPath(true)}
//           disabled={source === "" || destination === "" || algorithm === ""}
//           className={`px-3 py-1 rounded-md ${
//             source === "" || destination === "" || algorithm === ""
//               ? "bg-gray-600 cursor-not-allowed"
//               : "bg-green-600 hover:bg-green-500"
//           }`}
//         >
//           Find Path
//         </button>

//         <button
//           onClick={handleClearAll}
//           className="px-3 py-1 rounded-md bg-red-600 hover:bg-red-500"
//         >
//           Clear All
//         </button>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { BellIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
  handleClearAll,
}) {
  return (
    <div className="bg-gray-800 text-white">
      {/* Top Row: Navbar with Centered Heading */}
      <div className="relative flex items-center justify-between px-4 py-3 border-b border-gray-700 min-h-[62px]">
        {/* Left placeholder (empty div keeps spacing for layout) */}
        <div className="w-8"></div>

        {/* Centered Heading */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <span className="text-3xl font-semibold">Shortest Path Finder</span>
        </div>

        {/* Right placeholder (empty div for layout balance) */}
        <div className="w-8"></div>
      </div>

      {/* Bottom Row: Controls */}
      <div className="px-4 py-4 flex flex-wrap gap-3 items-center justify-evenly text-sm border-t border-gray-700 min-h-[62px]">
        <button
          onClick={() => setEdgeMode(true)}
          disabled={edgeMode}
          className={`px-3 py-1 rounded-md ${
            edgeMode
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Add Edge
        </button>

        <input
          type="number"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          disabled={!edgeMode}
          className="w-20 rounded-md px-2 py-1 bg-gray-700 text-white placeholder-gray-400 disabled:opacity-50"
        />

        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          className="rounded-md px-2 py-1 bg-gray-700 text-white"
        >
          <option value="">Algorithm</option>
          <option value="dijkstra">Dijkstra</option>
          <option value="floyd">Floyd-Warshall</option>
        </select>

        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="rounded-md px-2 py-1 bg-gray-700 text-white"
        >
          <option value="">Source</option>
          {nodes.map((node) => (
            <option key={node.number} value={node.number}>
              Node {node.number}
            </option>
          ))}
        </select>

        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="rounded-md px-2 py-1 bg-gray-700 text-white"
        >
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
          className={`px-3 py-1 rounded-md ${
            source === "" || destination === "" || algorithm === ""
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-500"
          }`}
        >
          Find Path
        </button>

        <button
          onClick={handleClearAll}
          className="px-3 py-1 rounded-md bg-red-600 hover:bg-red-500"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
