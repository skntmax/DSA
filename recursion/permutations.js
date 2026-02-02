let str = "abc"

function permutations(p , up ) {
  if(up=="") {
    console.log(p);
    return
  }
  let ch = up[0]
  for(let i=0; i<=p.length ; i++) {
     let fs =  p.substr(0,i)
     let ls =  p.substr(i,p.length)
     permutations(fs+ch+ls , up.substr(1,))
  }    
}

function permutationsArray(p , up , ans = [] ) {
  if(up=="") {
    ans.push(up)
    // console.log(p);
    return ans 
  }
  let ch = up[0]
  for(let i=0; i<=p.length ; i++) {
     let fs =  p.substr(0,i)
     let ls =  p.substr(i,p.length)
     ans.push(permutations(fs+ch+ls , up.substr(1,)))
  }    
}

// permutations("", str)
console.log("permutations>>" , permutationsArray("",  str , ) ); 