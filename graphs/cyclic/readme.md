5️⃣ Cyclic Graph

Contains at least one cycle.

Example
    A → B → C
    ↑       ↓
    └───────┘


Cycle Detection (DFS)
    function hasCycle(graph) {
    const visited = new Set();
    const recStack = new Set();

    function dfs(node) {
        if (recStack.has(node)) return true;
        if (visited.has(node)) return false;

        visited.add(node);
        recStack.add(node);

        for (let nei of graph.adj[node]) {
        if (dfs(nei)) return true;
        }

        recStack.delete(node);
        return false;
    }

    for (let node in graph.adj) {
        if (dfs(node)) return true;
    }

    return false;
    }