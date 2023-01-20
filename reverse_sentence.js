let str = "my name is shashi kant"
           
 

function reverseWords(name) {
       
let arr = mysplit(name)
     
}
 
function mysplit(string) {
     let sp=0; 
     let ep = 0
    for(val of string) {
         if(val!=" "  ) {
             ep++
         }else{
             if(ep!=string.length) {
               //  sp++
               let seperate_word = getWord(sp,ep,string)
               console.log(seperate_word);
             console.log(sp,ep);
             sp=ep 
             }else{
               console.log(sp, ep);
             }
            
            }
    }
      
  }
 


  function getWord(sp,ep,name) {
     console.log(sp,ep);
    let str =""
     for(let i=ep; i=>sp; i--) {
         str=str+name[i]
     }
     return str
     
  }

// console.log( reverseWords(str))




let tags = `#webdevelopment #webdevelopmentcompany #webdevelopmentservices #webdevelopmentagency #frontendwebdevelopment #webdevelopmentdubai #ecommercewebdevelopment #webdevelopmentindia #webdevelopmentservice #customwebdevelopment #phpwebdevelopment #learnwebdevelopment #webdevelopmentsupport #bestwebdevelopmentcompany #webdevelopmentbootcamp #fullstackwebdevelopment #backendwebdevelopment #webdevelopmentinlagos #floridawebdevelopment #webdevelopmentmiami #webdevelopmentcompanymangalore #webdevelopmentjakarta #wordpresswebdevelopment #responsivewebdevelopment #webdevelopmentagencyindubai #webdevelopmentsandiego #webdevelopmentjobs #webdevelopmentagencyinuk #webdevelopmentagencyuae #webdevelopmentftlauderdale #mobilewebdevelopment #laravelwebdevelopment #webdevelopmentinlebanon #magentowebdevelopment #pythonwebdevelopment #webdevelopmenttips #digitalmarketingtipswebdevelopment #learningwebdevelopment #webdevelopmentexpert #webdevelopmentuae`

let tags2 =     `#reactjs #javascript #html #css #programming #coding #webdeveloper #webdevelopment #nodejs #python #developer #programmer #frontenddeveloper #angular #java #vuejs #php #webdesign #softwaredeveloper #code #coder #react #javascriptdeveloper #daysofcode #fullstackdeveloper #js #frontend #backenddeveloper #reactnative #angularjs`

console.log(tags2.split(' ').join(','));