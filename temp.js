let arr = [
    {
        "id": 23,
        "username": "sarah_jane98",
        "email": "sarah_jane98@gm.com",
        "role_id": 21,
        "role": "owner",
        "vhicle_id": 7,
        "vhicle_username": "SWC-e4786800-9d97-4c70-96f6-09e7074572fd"
    },
    {
        "id": 23,
        "username": "sarah_jane98",
        "email": "sarah_jane98@gm.com",
        "role_id": 21,
        "role": "owner",
        "vhicle_id": 8,
        "vhicle_username": "SWC-c39a0f26-f0a1-486d-bf8b-796b7ff5c8b1"
    },
    {
        "id": 32,
        "username": "sarah22",
        "email": "sarah22@gm.com",
        "role_id": 21,
        "role": "owner",
        "vhicle_id": 9,
        "vhicle_username": "SWC-e62f723e-7a65-4681-87a9-3b20c44b811f"
    }
]


let result = arr.reduce((acc , ele )=>{

   if(acc.filter(_=> _?.id==ele.id).length==0) {
      acc.push({
         "id": ele.id,
        "username": ele.username,
        "email": ele.email,
        "role_id": ele.role_id,
        "role": ele.role,
        vhicles:[{vhicle_id:ele.vhicle_id ,vhicle_username: ele.vhicle_username}]
      })
   }else{
        
        acc.forEach((_)=>{
        if(_.id==ele.id) {
                _.vhicles =  [..._.vhicles ,{vhicle_id:ele.vhicle_id ,vhicle_username: ele.vhicle_username  }]
        }
        })    
    }           

   return acc  

} , [])

console.log(result)