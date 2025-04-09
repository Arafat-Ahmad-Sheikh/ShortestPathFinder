// algorithms.js

// Dijkstra's Algorithm
export function dijkstra(nodes, edges, start) {
    const distances = Array(nodes.length).fill(Infinity);
    distances[start] = 0;
    const visited = new Set();
  
    while (visited.size < nodes.length) {
      let minNode = -1;
      let minDist = Infinity;
  
      for (let i = 0; i < distances.length; i++) {
        if (!visited.has(i) && distances[i] < minDist) {
          minDist = distances[i];
          minNode = i;
        }
      }
  
      if (minNode === -1) break;
      visited.add(minNode);
  
      for (let edge of edges) {
        if (edge.from === minNode && !visited.has(edge.to)) {
          distances[edge.to] = Math.min(
            distances[edge.to],
            distances[minNode] + parseFloat(edge.weight)
          );
        }
        if (edge.to === minNode && !visited.has(edge.from)) {
          distances[edge.from] = Math.min(
            distances[edge.from],
            distances[minNode] + parseFloat(edge.weight)
          );
        }
      }
    }
  
    return distances;
  }
  
  // Floyd-Warshall Algorithm
  export function floydWarshall(nodes, edges) {
    const n = nodes.length;
    const dist = Array.from({ length: n }, () =>
      Array(n).fill(Infinity)
    );
  
    for (let i = 0; i < n; i++) dist[i][i] = 0;
  
    for (let edge of edges) {
      const w = parseFloat(edge.weight);
      dist[edge.from][edge.to] = Math.min(dist[edge.from][edge.to], w);
      dist[edge.to][edge.from] = Math.min(dist[edge.to][edge.from], w);
    }
  
    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
      }
    }
  
    return dist;
  }  