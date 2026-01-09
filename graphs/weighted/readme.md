3️⃣ Weighted Graph

Edges have weights (cost, distance).


Example
    A --5--> B
    B --2--> C


Implementation
    addEdge(u, v, weight) {
    this.addVertex(u);
    this.addVertex(v);
    this.adj[u].push({ node: v, weight });
    }



Used in:

    Maps

    Shortest path problems
