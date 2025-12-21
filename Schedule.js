

function schedule(st, et, interval  ){
     if(st==et) return []

     const [ start_hr , start_min]  = st.split(':') 
     const [ end_hr , end_min ]  = et.split(':')
     
     let temp_hr=start_hr , temp_min=start_min 

      if(start_min=="60") {
         start_hr++
         temp_hr= start_hr 
       } 
       
       
       

       return [ `${start_hr}:${start_min} - ${temp_hr}:${temp_min} ` , ...schedule(`${}:${}`, et , interval )  ]
    
   
}


schedule( '10:00' , '12:00' , '30' ) 