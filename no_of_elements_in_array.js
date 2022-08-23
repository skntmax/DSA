   let Input = [ 3,4,3,5,3,6 ]
    
  // Expected Output : [3:3,4:1,5:1,6:1] Key : Val 
     
  // It may be a  [Key : Val ]- List      or       {Key : Val }- Object 
  // No of Occurrence of Each element in the Array 
  // Map Filter Object Method  Foreach

 
  let obj = {
     name:"sknt",
     address:" noida "
  }

   
   function  rootFun() {
    const getObject = ()=>{
        console.log("name is " , this.name +" belong from ", this.address);
      } 
      getObject()
   }
   

   function getObject(){
    console.log("name is " , this.name +" belong from ", this.address);
  }

//    rootFun.call(obj)
  
 let fun1=   rootFun.bind(obj)
  fun1()
   
        let arr1 = [1,2,3,4]
        let arr2 = [33,44,55,66]
     let arr3 = arr1.push.apply(null , arr2 )
     console.log(arr3) ;