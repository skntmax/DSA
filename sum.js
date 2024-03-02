const res = [
  {
    name: "prodict1",
    price: 1,
  },
  {
    name: "prodict2",
    price: "10",
  },
  {
    name: "prodict3",
    price: null,
  },
  {
    name: "prodict4",
    price: "",
  },
  {
    name: "prodict5",
    price: undefined,
  },
  {
    name: "prodict6",
    price: 2.3,
  },
];
let pr = 0;
// const sum = res.reduce((item) => {
//   //   if (item.price !== null || item.price !== undefined || item.price !== "") {
//   //   } else {
//   //     pr += Number(item.price);
//   //   }
//   //   pr;
//   if (typeof item.price != NaN) {
//     return item.price;
//   }
// });
// console.log(sum);

let sm = res.reduce((acc, ele, i) => {
  acc = acc + (Number(ele.price) || 0);
  return acc;
}, 0);

console.log(sm);
