
function binarySearch(  arr , target , compareFunction  ) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midValue = arr[mid];
  
      const comparison = compareFunction(midValue, target);
  
      if (comparison === 0) {
        return mid; // Element found, return its index
      } else if (comparison < 0) {
        left = mid + 1; // Adjust the left boundary
      } else {
        right = mid - 1; // Adjust the right boundary
      }
    }

    return -1; // Element not found in the array
  }
  
  // Example usage:
   

  
  let Genders = [
    {
      "id": 8,
      "name": "Male",
      "description": "",
      "modifiedBy": 982,
      "modifiedOn": "2023-10-27T09:58:46.607Z",
      "modifiedAt": "::ffff:127.0.0.1",
      "available": true,
      "org_id": "1697797363"
    },
     
    {
      "id": 9,
      "name": "Female",
      "description": "",
      "modifiedBy": 982,
      "modifiedOn": "2023-10-27T09:58:54.552Z",
      "modifiedAt": "::ffff:127.0.0.1",
      "available": true,
      "org_id": "1697797363"
    },
    {
      "id": 10,
      "name": "Other",
      "description": "",
      "modifiedBy": 982,
      "modifiedOn": "2023-10-27T09:59:00.954Z",
      "modifiedAt": "::ffff:127.0.0.1",
      "available": true,
      "org_id": "1697797363"
    }
  ]
  
  


//   const targetElement = { id: 5, name: 'cherry' };
  
  // Define a custom compare function that can handle both strings and numbers
  function customCompare(a, b) {
    if (a.id === b.id) {
      // If the id property is the same, compare other properties
      if (a.name && b.name) {
        return a.name.localeCompare(b.name);
      }
      if (a.age && b.age) {
        return a.age - b.age;
      }
      return 0;
    } else {
      return a.id - b.id;
    }
  }
  
  const index = binarySearch(Genders, {name:"Male"} , customCompare);
   
    if (index !== -1) {
        console.log(`Element found at index ${index}`);
    } else {
        console.log('Element not found in the array');
    }
  



