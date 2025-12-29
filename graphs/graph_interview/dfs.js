
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
  F: [],
};


//    A
//    / \
//   B   C
//  / \   \
// D   E   F

function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

dfs(graph, "A");