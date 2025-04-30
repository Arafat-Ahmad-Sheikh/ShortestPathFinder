# Shortest Path Visualizer

A dynamic web application built using **React.js** to visualize the shortest path algorithms (Dijkstra's and Floyd-Warshall) on a grid. Users can interact with the grid, select nodes, edges, and compute the shortest path between selected nodes. The application provides a clear and intuitive visual representation of the shortest path in red, and supports multiple algorithm selection.

## Features

- **Interactive Grid**: Users can click on grid cells to create nodes.
- **Node and Edge Management**: Create and remove nodes and define weighted edges between them.
- **Shortest Path Algorithms**: Supports **Dijkstra's Algorithm** and **Floyd-Warshall Algorithm** to find the shortest path between two selected nodes.
- **Path Visualization**: The shortest path is visualized on the grid with red-colored edges.
- **Responsive Design**: The application adjusts seamlessly to different screen sizes.
  
## Tech Stack

- **Frontend**: React.js, JavaScript, HTML, CSS
- **State Management**: React State
- **Styling**: Custom CSS for grid and node designs
- **Algorithms**: Dijkstra's and Floyd-Warshall algorithms implemented in JavaScript

## Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/shortest-path-visualizer.git
cd shortest-path-visualizer
```
## Installation

Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
npm install
```

## Start the Application

```bash
npm run dev
```

This will start the development server.  
Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Usage

- **Grid Interaction:** Click on the grid to create nodes.
- **Define Edges:** Click between nodes to define weighted edges.
- **Select Algorithm:** Choose between Dijkstra or Floyd-Warshall from the dropdown.
- **Find Shortest Path:** Select the source and destination nodes, then click "Find Path" to visualize the shortest path.

## How It Works

### 1. Grid Layout

- The grid consists of 16 rows and 30 columns.
- Click any cell to add a node. Each node is uniquely identified by its number.

### 2. Node and Edge Management

- Click on a node to view its number.
- Create edges by clicking between nodes. The weight of each edge is visually represented on the grid.

### 3. Shortest Path Algorithms

- **Dijkstra's Algorithm:** Calculates the shortest path from a source node to a destination node by iteratively updating the shortest known distance to each node.
- **Floyd-Warshall Algorithm:** Computes the shortest paths between all pairs of nodes, enabling comprehensive pathfinding across the grid.

### 4. Path Visualization

- Once the shortest path is found, it is visually highlighted in red on the grid for easy identification.

## Future Improvements

- **Dynamic Node Creation:** Allow dynamic creation and removal of nodes through user input.
- **Algorithm Optimization:** Implement additional algorithms like A* for more efficient pathfinding.
- **Graph Export:** Enable saving and sharing of graph configurations.
