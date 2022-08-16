let queueList =[] 
let maxSize = 100
 
function  enque(ele){
     if(queueList.length>maxSize){
         alert(" queue is full ")
     }else{
        queueList[queueList.length] = ele
        // queueList.length =queueList.length+1          
     }    
}

 

function display(){
     for(let i=0 ; i <queueList.length ; i++ ){
         console.log(queueList[i]+"\n");
     } 
}

  //fifo
   
function deque(){
    for( let i=0;i<queueList.length; i++ ){
        queueList[i]=queueList[i+1]
    }
    queueList.length=queueList.length-1
}

enque(4)
enque(34)
enque(54)
enque(76)
enque(1)
 
deque()


// display()

console.log(queueList);