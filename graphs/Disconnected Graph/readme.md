Graph has multiple components.

Count Components


function countComponents(graph) {
  const visited = new Set();
  let count = 0;

  function dfs(node) {
    visited.add(node);
    for (let nei of graph.adj[node]) {
      if (!visited.has(nei)) dfs(nei);
    }
  }

  for (let node in graph.adj) {
    if (!visited.has(node)) {
      dfs(node);
      count++;
    }
  }

  return count;
}