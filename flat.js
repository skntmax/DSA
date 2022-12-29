let arr =[[[2]] ,[4] ,[2] ,5 , 1 ,[12] , [211]]
 
 


  let flatArray = (arr,d)=>{
    let res = []
     while(d!=0) {
      for(let i=0;i<arr.length ; i++) {
        arr[i][0]?res.push(arr[i][0]):res.push(arr[i])
       }
       d--    
     }
      
     return res 
    
  }

  console.log(flatArray(arr,2));