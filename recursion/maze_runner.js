// you are given a 3*3 matrix ,  find the total number of ways to  reach the last grid , user is only  restrict to go right n down 

// r, c --> r = row , c = columns  

// (3,3) ──R──▶ (3,2) ──R──▶ (3,1)
//   │            │
//   D            D
//   ▼            ▼
// (2,3) ──R──▶ (2,2) ──R──▶ (2,1)
//   │
//   D
//   ▼
// (1,3) ──R──▶ (1,2) ──R──▶ (1,1)


// f(3,3)
// ├── f(2,3)
// │   ├── f(1,3) → 1
// │   └── f(2,2)
// │       ├── f(1,2) → 1
// │       └── f(2,1) → 1
// │       => f(2,2) = 2
// │   => f(2,3) = 3
// └── f(3,2)
//     ├── f(2,2) → 2
//     └── f(3,1) → 1
//     => f(3,2) = 3

// => f(3,3) = 6


function findNumberOfWays(r, c ) {
    if(r==1 || c==1) {
        return 1 
    }

    if(r>1) {
         var leftAns =  findNumberOfWays( r-1 , c )
    }

    if(c>1) {
         var rightAns =  findNumberOfWays( r , c-1 )
    }


    return leftAns + rightAns
}


console.log( findNumberOfWays(3 , 3 ));

// findin paths as well 
function findPossiblePaths(p="" , r, c ,) {
    if(r==1 || c==1) {
        console.log(p);
        return p 
    }

    if(r>1){
      findPossiblePaths(p+"D" , r-1 , c )   
    }

    if(c>1) {
       findPossiblePaths(p+"R" , r , c-1 )  
    }
    
}



// "" 
// ├── D
// │   ├── D
// │   │   └── RR   → DDRR
// │   └── R
// │       ├── D → DRDR
// │       └── R → DRRD
// └── R
//     ├── D
//     │   ├── D → RDDR
//     │   └── R → RDRD
//     └── R
//         └── D → RRDD

// findPossiblePaths("",3 ,3 ) 

function findPossiblePathsInArray(p="" , r, c , res=[] ) {
    if(r==1 || c==1) {
         res.push(p)
        return  res 
    }

    if(r>1){
      res.push(findPossiblePaths(p+"D" , r-1 , c , res  ))    
    }

    if(c>1) {
       res.push(findPossiblePaths(p+"R" , r , c-1, res  ))  
    }     
}



console.log(findPossiblePathsInArray("",3 ,3 ,[] ) );