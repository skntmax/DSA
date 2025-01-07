let obj = {

      docTypes: {
      "aadhaar_card":'aadhaar_card' ,  
     "driving_license":'aadhaar_card'
    },
  
    validDoc: function (docType) {
      if (Array.isArray(docType)) {
        // Check if every element in the input array exists as a key in this.docTypes
        return  docType.every(ele=> ele in this.docTypes && ele!="aadhaar_card" )
      }
  
      // Check if the single value exists as a key in this.docTypes
      return docType in this.docTypes && docType!="driving_license";
    },
  };
  
  // Test the function
  console.log(obj.validDoc(['driving_license', 'driving_license'])); // true
  console.log(obj.validDoc('aadhaar_card')); // true
                       // false
  
  // console.log(validDoc('aadhaar_card'));
  