const persons = [
  {
    id: 1,
    name: "Dilshad",
    age: 22,
  },
  {
    id: 2,
    name: "Andrew",
    age: 51,
  },
  {
    id: 3,
    name: "Fin",
    age: 16,
  },
   
];
 
const skills = [
  {
    id: 1,
    name: "C",
  },
  {
    id: 2,
    name: "C++",
  },
  {
    id: 3,
    name: "Java",
  },
  {
    id: 4,
    name: "JavaScript",
  },
  {
    id: 5,
    name: "Python",
  },
];





const personsSkills = [
  {
    id: 1,
    skill_id: 5,
    data_id: 1,
  },
  {
    id: 2,
    skill_id: 2,

    data_id: 1,
  },
  {
    id: 3,
    skill_id: 1,
    data_id: 1,
  },
  {
    id: 4,
    skill_id: 3,
    data_id: 3,
  },
  {
    id: 5,
    skill_id: 1,
    data_id: 3,
  },
];

 


let data = persons.map((data) => {
  return {
    ...data,
    skills: personsSkills
      .filter((ds) => ds.data_id === data.id)
      .map((dSkill) => {
        return skills.find((skill) => skill.id === dSkill.skill_id);
      }),
  };
});

//  console.log(data);


  let res = persons.map((per)=>personsSkills.filter((pskls)=>{
           return skills.filter(finalSkill=> per.id==pskls.id && pskls.id==finalSkill.id  )
  }))

     console.log(res);
  


/*
Can anyone optimise this code or help me in order to optimise it?

```
let data = persons.map((data) => {
    return {
        ...data,
        skills: personsSkills
            .filter((ds) => ds.data_id === data.id)
                .map((dSkill) => {
                    return skills.find((skill) => skill.id === dSkill.skill_id);
                }),
        };
});
```

*/
