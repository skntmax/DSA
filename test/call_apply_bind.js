let object = {
    name: "shashi kant ",
    lastName: "kumar",
    details: {
      address: "kanpur",
      education: "btech",
      background: {
        location: " sample location ",
      },
    },

    getName:function(city){
        return this.name +"and lives in "+this.details.address    
    }
  };


  const obj = {
    name:"rakesh",
    details: {
      address: "baraily",
      education: "btech",
      background: {
        location: " sample location ",
      },
    },
  }
  

  console.log(object.getName());
  console.log(object.getName.call(obj));  
 