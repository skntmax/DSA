Edges go one direction.

Example
A → B → C
↑
D



Implementation
addEdge(u, v) {
  this.addVertex(u);
  this.addVertex(v);
  this.adj[u].push(v); // only one direction
}



Used in:

    Task scheduling

    Dependency graphs

    Workflows