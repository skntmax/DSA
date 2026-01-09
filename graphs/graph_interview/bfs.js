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

// A->B->C->D->E->F

// using queue  , BFS can be implmented 
function bfs(graph, start) {
 //  intialising  visited  set for record 
 const visited = new Set();
 // intialided queu 
  const queue = [start];

  //  added start pointer 
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

bfs(graph, "B");



// mine  at one attempt 

// function BFS (graph , vertex) {
//      let visited =  new Set(vertex)
//      let q = [vertex]
//      while(q.length>0) {
//           let pop = q.shift() // similar to pop 
//           console.log(pop)
//          for(let innerVer of graph[pop]) {
//               if(!visited.has(innerVer)) {
//                    visited.add(innerVer)
//                    q.push(innerVer)
//               }
//          }
//      }
// }

// BFS(graph,  "B") 

