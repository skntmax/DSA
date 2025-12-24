class Graph {
  constructor() {
    this.adj = {};
  }

  addVertex(v) {
    if (!this.adj[v]) this.adj[v] = [];
  }

  addEdge(u, v) {
    this.addVertex(u);
    this.addVertex(v);
    this.adj[u].push(v);
    this.adj[v].push(u); // bidirectional
  }
}