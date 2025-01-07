const obj = {
    "file_1_1": "file_1_1 content\n",
    "file_1_2": "file_1_2 content\n",
    "level_2": {

      "level_3_1": {
        "file_3_1_1": "file_3_1_1 content\n",
        "file_3_1_2": "file_3_1_2 content\n"
      },

      "level_3_2": {
        "file_3_2_1": "file_3_2_1 content\n",
        "file_3_2_2": "file_3_2_2 content\n",
        "level_4": {
          "file_4_1": "file_4_1 content\n",
          "file_4_2": "file_4_2 content\n"
        }
      }

    }
  }



function printTree(obj, indent = '') {
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        console.log(`${indent}${key}/`);
        printTree(obj[key], indent + '  ');
      } else {
        console.log(`${indent}${key}: ${obj[key]}`);
      }
    }
  }

  printTree(obj);


   
function rootFoldr(obj , indent="") {
    
    
    for(let file in obj ) {
        if(typeof(obj[file])!="string") {
             indent = indent+"/"+file
            rootFoldr(obj[file] , indent+"/" )
        }else{
            // console.log("typeof(file)",typeof(obj[file]))
            console.log(indent+obj[file]  )
        }
    }
    
}





// rootFoldr(obj)