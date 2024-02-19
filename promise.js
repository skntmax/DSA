let prms1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("promise 1");
    }, 1000);
  });
};

let prms2 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("promise 2");
    }, 200);
  });
};

let prms3 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("promise 3");
    }, 100);
  });
};

const promiseResolver = async () => {
  let res1 = await prms1();
  let res2 = await prms2();
  let res3 = await prms3();

  console.log(res1); // order wise
  console.log(res2); // order wise
  console.log(res3); // order wise
};

promiseResolver();
