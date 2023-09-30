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
      this.all_suggestedPaths=[]

     }

      addSubstations( s, d ) {
         
            if(Object.keys(this.stations).length==0) {
                for(let val of this.nodes ) {
                    this.stations[val] = []
                  }
            }
          
        for(let nodes in this.stations) {
           if(nodes==s) {
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
        }
    return this.stations 
    }
      

    getSubPath(current_iteration_key , src ,  dst , sub_list ){
      // sub_list =  B: [ 'D', 'A' ],
      // src= A
      // dst = D
      // current_iteration =B
       let edge = []
       let path = []

        
          if(sub_list.includes(dst)){
                let indexOfStation =  sub_list.indexOf(dst)
                edge.push(indexOfStation)
                path.push( current_iteration_key )
                return src+path.join('')+dst
            } else{
               return ""
            }
        }


     suggestedPath (src, dst ) {
             
      for(let [ key , value ] of Object.entries(this.stations) ) {

            if(  this.stations[key].includes(dst) ) {
                 let  i=0
                   while(i<this.stations[key].length){
                     let path = this.getSubPath(key , src ,  dst , this.stations[key] )     
                     if(path){
                       this.all_suggestedPaths.push(path)
                     }
                     i++
                   }
             }

      }       
      }

     
 } 

  
 let trainA =new graph ( ['A' ,'B' ,"C" ,"D" ,"E"]   )
 

 trainA.addSubstations("A" , "B" )
 trainA.addSubstations("A" , "C" )
 trainA.addSubstations("C" , "A" )
 trainA.addSubstations("B" , "D" )
 trainA.addSubstations("B" , "A" )
 trainA.addSubstations("D" , "B" )
 trainA.addSubstations("D" , "C" )
 trainA.addSubstations("E" , "A" )
 trainA.addSubstations("E" , "D" )
 trainA.addSubstations("A" , "E" )
 trainA.addSubstations("E" , "B" )
 trainA.suggestedPath("A" , "D" )
  
 //  trainA.removeStations('C')


  
  console.log("trainA>>>" , trainA); 