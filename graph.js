class graph  {

    constructor(nodes) {
       if(nodes!=undefined &&  Array.isArray(nodes) && nodes.length==0) {
          this.nodes = []
        }else if(nodes!=undefined && Array.isArray(nodes) && nodes.length>0 ){
          this.nodes = [...nodes]
        }else {
          this.nodes = []
        }
        
      this.stations = { }
      this.suggested_paths =  new Set() 

     }

      addSubstations( s, d ) {
         
            if(Object.keys(this.stations).length==0) {
                for(let val of this.nodes ) {
                    this.stations[val] = []
                   }
            }
          
        for(let nodes in this.stations) {
           if(nodes==s && !this.stations[nodes].includes(d) ) {
             this.stations[s] = [...this.stations[nodes] , d ]
            } 
        }
         return this.stations
     }


      
     addStation(station) {
       this.nodes.push(station)
     }

      
     removeStations(station) {
        for(let st in this.stations) {  
          if(this.stations[st].includes(station)) {
             this.stations[st] = this.stations[st].filter(ele=> ele!= station )
          }
          delete this.stations[station]
          this.nodes = this.nodes.filter(ele=> ele!=station )
        }
    return this.stations 
    }


     
  

    actualPath (current_key , s, d) {
      let path = []
       
       return ()=>{
        let it_arr = this.stations[current_key]
        for(let i=0; i<it_arr.length ; i++) {
           if(it_arr[i]==d) {
             path.push(s+current_key+d) 
           }else if(it_arr[i]!=s) {
              this.actualPath( it_arr[i] , s , d)            
            }   
        }
        
         if(path.length>0)
            return path
          else 
          return "" 
         
       }
      
    
    }
  
 

     
    
    getSuggestePath(s,d) {
        // s=A, d=D
          
            let valid_key_source = Object.keys(this.stations).indexOf(s)
            let valid_key_dst = Object.keys(this.stations).indexOf(d)
             
             if( valid_key_source>-1  && valid_key_dst>-1   ) {
                
              
              for(let key in this.stations ) {
                 if(key!=d) {
                       let i=0
                       while(i<this.stations[key].length) {
                           let final_path =   this.actualPath(key ,s, d )()                       
                           if(final_path.length>0)this.suggested_paths.add(final_path[0])
                          i++
                          }     
                   
                      }  
               }
   
             }else{
               return "not valid stations"
             }
    
     }
     
     
 } 

  
 let trainA =new graph ( ['A' ,'B' ,"C" ,"D" ,"E" ,"F" ,"G" ,"H"]   )
 
  
 trainA.addSubstations("A" , "B" )
 trainA.addSubstations("A" , "C" )
 trainA.addSubstations("C" , "A" )
 trainA.addSubstations("C" , "D" )
 trainA.addSubstations("B" , "D" )
 trainA.addSubstations("B" , "A" )
 trainA.addSubstations("D" , "B" )
 trainA.addSubstations("D" , "C" )
 trainA.addSubstations("E" , "A" )
 trainA.addSubstations("E" , "D" )
 trainA.addSubstations("A" , "E" )
 trainA.addSubstations("E" , "B" )
 trainA.addSubstations("F" , "D" )
 trainA.addSubstations("H" , "D" )
 trainA.addSubstations("G" , "H" )
 trainA.addSubstations("H" , "A" )

//  trainA.removeStations('A')
 trainA.getSuggestePath('A' ,"D" )
   
  console.log("trainA>>>" , trainA); 
   