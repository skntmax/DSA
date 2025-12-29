
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

function dfs(graph, start) {
  visited = new Set()
  visited.add(start);
  console.log(start);

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

dfs(graph, "A");


// mine one 

function DFS (graph , vertex,visited = new Set(), result=[] ) {
     visited.add(vertex)
     result.push(vertex)
     for(neighbour of graph[vertex]) {
          DFS(graph ,neighbour , visited , result  )
     }
    return result 
}

// // BFS(graph,  "B") 
console.log(DFS(graph,  "A"))  


// | Step | Call Stack         | Current | Visited       | Result        |
// | ---: | ------------------ | ------- | ------------- | ------------- |
// |    1 | DFS(A)             | A       | {A}           | [A]           |
// |    2 | A → DFS(B)         | B       | {A,B}         | [A,B]         |
// |    3 | A → B → DFS(D)     | D       | {A,B,D}       | [A,B,D]       |
// |    4 | back to B → DFS(E) | E       | {A,B,D,E}     | [A,B,D,E]     |
// |    5 | back to A → DFS(C) | C       | {A,B,D,E,C}   | [A,B,D,E,C]   |
// |    6 | A → C → DFS(F)     | F       | {A,B,D,E,C,F} | [A,B,D,E,C,F] |
