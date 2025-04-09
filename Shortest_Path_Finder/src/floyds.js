export function floydWarshall(n, edges, source, destination) {
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
    const next = Array.from({ length: n }, () => Array(n).fill(null));
  
    for (let i = 0; i < n; i++) {
      dist[i][i] = 0;
      next[i][i] = i;
    }
  
    for (const edge of edges) {
      dist[edge.from][edge.to] = edge.weight;
      dist[edge.to][edge.from] = edge.weight;
      next[edge.from][edge.to] = edge.to;
      next[edge.to][edge.from] = edge.from;
    }
  
    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
            next[i][j] = next[i][k];
          }
        }
      }
    }
  
    if (next[source][destination] === null) return [];
  
    const path = [source];
    while (source !== destination) {
      source = next[source][destination];
      path.push(source);
    }
    return path;
  }
  