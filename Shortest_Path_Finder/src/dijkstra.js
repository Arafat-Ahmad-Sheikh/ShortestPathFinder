export function dijkstra(n, edges, source, destination) {
    const dist = Array(n).fill(Infinity);
    const prev = Array(n).fill(null);
    dist[source] = 0;
  
    const visited = new Set();
  
    while (visited.size < n) {
      let u = -1;
      for (let i = 0; i < n; i++) {
        if (!visited.has(i) && (u === -1 || dist[i] < dist[u])) u = i;
      }
  
      if (dist[u] === Infinity) break;
      visited.add(u);
  
      for (const edge of edges) {
        if (edge.from === u && !visited.has(edge.to)) {
          const alt = dist[u] + edge.weight;
          if (alt < dist[edge.to]) {
            dist[edge.to] = alt;
            prev[edge.to] = u;
          }
        }
        if (edge.to === u && !visited.has(edge.from)) {
          const alt = dist[u] + edge.weight;
          if (alt < dist[edge.from]) {
            dist[edge.from] = alt;
            prev[edge.from] = u;
          }
        }
      }
    }
  
    const path = [];
    for (let at = destination; at !== null; at = prev[at]) path.push(at);
    return path.reverse();
  }
  