// you are given a 3*3 matrix ,  find the total number of ways to  reach the last grid , user is only  restrict to go right down , doagonally 

// r, c --> r = row , c = columns  

function findNumberOfWays(r, c ) {
    if(r==1 || c==1) {
        return 1 
    }

    if(r>1 && c>1) {
         var diagonalAns =  findNumberOfWays( r-1 , c-1 )
    }

    if(r>1) {
         var leftAns =  findNumberOfWays( r-1 , c )
    }

    if(c>1) {
         var rightAns =  findNumberOfWays( r , c-1 )
    }


    return leftAns + rightAns + diagonalAns
}


console.log(findNumberOfWays(3 , 3 ));

// findin paths as well 
function findPossiblePaths(p="" , r, c ,) {
    if(r==1 || c==1) {
        console.log(p);
        return p 
    }

      if(r>1 && c>1) {
           findPossiblePaths(p+ "d-->" , r-1 , c-1 )
        }
    
        if(r>1){
            findPossiblePaths(p+"D-->" , r-1 , c )   
        }

        if(c>1) {
           findPossiblePaths(p+"R-->" , r , c-1 )  
        }
    
}


// findPossiblePaths("",3,3)

function findPossiblePathsInArray(p="" , r, c , res=[] ) {
    if(r==1 || c==1) {
         res.push(p)
        return  res 
    }

    if(r>1 && c>1) {
       res.push( findPossiblePaths(p+ "d-->" , r-1 , c-1 , res  )) 
    }
    

    if(r>1){
      res.push(findPossiblePaths(p+"D-->" , r-1 , c , res  ))    
    }

    if(c>1) {
       res.push(findPossiblePaths(p+"R-->" , r , c-1, res  ))  
    }    
}

findPossiblePathsInArray("",3 ,3 ,[] )