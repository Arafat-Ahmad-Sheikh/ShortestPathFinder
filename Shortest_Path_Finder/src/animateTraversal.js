export function animateTraversal(visited, path, nodes, delay = 50) {
    const idToCoords = (id) => {
      const node = nodes.find(n => n.number === id);
      return node ? { row: node.row, col: node.col } : null;
    };
  
    for (let i = 0; i <= visited.length; i++) {
      if (i === visited.length) {
        setTimeout(() => {
          animatePath(path, nodes, delay);
        }, delay * i);
      } else {
        setTimeout(() => {
          const node = idToCoords(visited[i]);
          if (node) {
            const el = document.getElementById(`node-${node.row}-${node.col}`);
            if (el && !el.classList.contains("start") && !el.classList.contains("end")) {
              el.classList.add("visited");
            }
          }
        }, delay * i);
      }
    }
  }
  
  function animatePath(path, nodes, delay) {
    const idToCoords = (id) => {
      const node = nodes.find(n => n.number === id);
      return node ? { row: node.row, col: node.col } : null;
    };
  
    for (let i = 0; i < path.length; i++) {
      setTimeout(() => {
        const node = idToCoords(path[i]);
        if (node) {
          const el = document.getElementById(`node-${node.row}-${node.col}`);
          if (el && !el.classList.contains("start") && !el.classList.contains("end")) {
            el.classList.add("path");
          }
        }
      }, delay * i);
    }
  }
  