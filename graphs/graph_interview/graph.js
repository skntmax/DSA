class graph {
    g = {}
    constructor(vertex="", edges=[]) {
     this.g = {[vertex]:edges}
    }

    connect(source , dest=[]) { 
        if(this["g"][source]){
        this.g[source] = [...new Set([...this.g[source] , ...dest  ])] 
       }else{
        this.g[source] =[...new Set([...dest])] 
       }
   return this.g 
    }

}

let g1  = new graph("A")
g1.connect("B", ["D","E"])
g1.connect("A", ["B","C"])
g1.connect("C", ["F"])
g1.connect("D", )
g1.connect("E", )
g1.connect("F", )
console.log(g1);