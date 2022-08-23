
        let arr = [ 2, 8 , 1, -3, 6, 7, 5, 4,-12, 82, 31, -34, 56, -76, 57, 82,82,31 ]
  let sorted_array = arr.sort( (  a,b ) => 
     {
       if( a>b ) return 1
       if(b>a) return -1 
       if(a===b) return 0  
    })  
     
    console.log("sorted array " , sorted_array);
        // console.log( [ ... new Set(arr.sort( ( a,b ) => a-b ))] )

         