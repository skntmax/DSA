let arr = [
    {
      name: 'Term',
      productId: 7,
      noOfRenewals1: 7,
      renewalsApe1: 740000,
      noOfRenewals2: 0,
      renewalsApe2: 0,
    },
  
  
     {
      name: 'Term',
      productId: 7,
      noOfRenewals1: 4,
      renewalsApe1: 740000,
      noOfRenewals2: 0,
      renewalsApe2: 0,
    },
  
    {
      name: 'Hospitalization',
      productId: 106,
      noOfRenewals1: 1,
      renewalsApe1: 3000,
      noOfRenewals2: 0,
      renewalsApe2: 0,
    },
    {
      name: 'Investment',
      productId: 115,
      noOfRenewals1: 8,
      renewalsApe1: 3270845,
      noOfRenewals2: 0,
      renewalsApe2: 0,
    },
    {
      name: 'Personal Accident',
      productId: 118,
      noOfRenewals1: 3,
      renewalsApe1: 27001,
      noOfRenewals2: 0,
      renewalsApe2: 0,
    },
    {
      name: 'Car',
      productId: 186,
      noOfRenewals1: 1,
      renewalsApe1: 2795,
      noOfRenewals2: 0,
      renewalsApe2: 0,
    },
    {
      name: 'Two Wheeler',
      productId: 187,
      noOfRenewals1: 1,
      renewalsApe1: 5542.9,
      noOfRenewals2: 0,
      renewalsApe2: 0,
    },
    {
      name: 'Two Wheeler',
      productId: 187,
      noOfRenewals1: 2,
      renewalsApe1: 5542.9,
      noOfRenewals2: 0,
      renewalsApe2: 0,
    },
  
    {
      name: 'Commercial',
      productId: 188,
      noOfRenewals1: 1,
      renewalsApe1: 11457,
      noOfRenewals2: 0,
      renewalsApe2: 0,
    },
    {
      name: 'Health',
      productId: 190,
      noOfRenewals1: 61,
      renewalsApe1: 1938195,
      noOfRenewals2: 0,
      renewalsApe2: 0,
    },
  ];
  
  console.log(arr.length);
        console.log(
          arr.reduce((acc, ele) => {
            if (acc[ele.name]) {
              acc[ele.name] = { total: acc[ele.name].total + ele.noOfRenewals1 || 0 };
            } else {
              acc[ele.name] = { total: ele.noOfRenewals1 };
            }
            return acc;
          }, {})
        );
  
  

let avg = arr.reduce((acc, ele) => {
    if (acc[ele.name]) {
      acc[ele.name] = {
        total: acc[ele.name].noOfRenewals1+ ele.total , 
        avg: ele.noOfRenewals1 / acc[ele.name].count,
        count: acc[ele.name].count + 1,
      };
    } else {
 
      acc[ele.name] = { avg: ele.noOfRenewals1, count: 1 ,total: ele.noOfRenewals1 , };
    }
    return acc;
  }, {});
  
  
  console.log(avg)

  


