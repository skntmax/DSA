Acyclic Graph (DAG)

    No cycles (Directed Acyclic Graph).

Example
    A → B → C



Topological Sort (Kahn’s Algorithm)

function topoSort(graph) {
  const indeg = {};
  const res = [];
  const q = [];

  for (let u in graph.adj) {
    indeg[u] = indeg[u] || 0;
    for (let v of graph.adj[u]) {
      indeg[v] = (indeg[v] || 0) + 1;
    }
  }

  for (let v in indeg) {
    if (indeg[v] === 0) q.push(v);
  }

  while (q.length) {
    const node = q.shift();
    res.push(node);
    for (let nei of graph.adj[node]) {
      if (--indeg[nei] === 0) q.push(nei);
    }
  }

  return res;
}


Used in:

    Build systems

    Course schedules