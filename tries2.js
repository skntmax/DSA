

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

class TrieNode { 
    constructor() {
         this.children={}
         this.isEnd = false 
    }
}



class tries  {

    constructor() {
          this.rootNode = new TrieNode() 
    }
    
    insert(word) {
         let current = this.rootNode
         for(let i=0; i<word.length ; i++) {
            let ch = word[i]
            
            if(!ch in current.children) {
                current.children[ch] = new TrieNode(ch) 
            }
             current = current.children[ch] 
          }

          current.isEnd = true;
    }
}


let t = new tries()

t.insert('apple')

console.log( t );


