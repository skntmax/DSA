
// id name mobile address salary 
// 1   e1     m1          
// 2   e2     m1   
// 3   e3     m1
// 4   e4     m2

// // output 

// name          mobile 

// e1,e2,e3       m1
// e4             m2 

// itemsPerPage = 10 
// pn = 1


// select * from emp  


// 1 page 
// select * from  emp e ,
// where   e.name like '_a' and salary> 200 
// offset (p-1)*10   // 0
// limit 10  



// sequelize.find().skip().limit()




// 2 page 
// offset (p-1)*10   // 10     
// limit 10  


// 2 page 
// offset (p-1)*10   // 20  
// limit 10  

// {
//     coutn: 100 
// }













