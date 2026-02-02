import {Grandparent} from './grandparent.js'
import {Parents} from './parent.js'
import {Child} from './child.js'

// example of multilevel inheritance 

let newChild =  new Child()
newChild.walk()

let newChild2 =  new Child()
newChild.walk()


let newParents =  new Parents()
newParents.walk()




// grandfather 
// |
// |
// parents extends parent 
// |
// |
// |
// child  extends  child 