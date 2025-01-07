

import React , {useEffect, useMemo, useState } from 'react'
 
 

const App =()=>{
     
  const [obj , setList ]  = useEffect({
     list: [1,2,3,4,5] ,
     selected:[] ,
     random:null
  })

  
  useEffect(()=>{
         
    if(!selected.includes()) {
          alert('hi ')
    }

    setList(p=>({
        ...p ,  selected:p.selected.push(p.random)
     }))
    

  },[obj.selected.length])


 return <>
   
     <button onCanPlay={()=>{
          setList(p=>({
             ...p ,  random:Math.random()*10
          }))
          
     }}>

     </button>

     {memosed}
   
   </>     
}
export default App