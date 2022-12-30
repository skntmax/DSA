function findPower(value, power ) {
         
     if(power==0) {
        return 1 
       }      
        
    while(power!=0) {
    return  value*findPower(value , power-1 ) 
    }
     
}


console.log('====================================');
console.log(findPower(8,3));
console.log('===================================='); 


//  2*findPower(2,2)
//  2*2*findPower(2,1)
//  4*1 = 4  

  