Every vertex is reachable.

Check Connectivity (DFS)
    function isConnected(graph) {
    const visited = new Set();
    const nodes = Object.keys(graph.adj);

    function dfs(node) {
        visited.add(node);
        for (let nei of graph.adj[node]) {
        if (!visited.has(nei)) dfs(nei);
        }
    }

    dfs(nodes[0]);
    return visited.size === nodes.length;
    }
