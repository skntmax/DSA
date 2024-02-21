// const subscribe = () => {
//   let status = true;
//   return new Promise((resolve, reject) => {
//     if (status) {
//       setTimeout(() => {
//         resolve("subscribe the channel ");
//       }, 1000);
//     } else {
//       reject("did not subscribe ");
//     }
//   });
// };

// polyfill for promise

function myPromise(executor) {
  let onResolve, onReject;

  const resolve = (args) => onResolve(args);
  const reject = (args) => onReject(args);

  this.then = function (cb) {
    onResolve = cb;
    return this;
  };

  this.catch = function (cb) {
    onReject = cb;
    return this;
  };

  executor(resolve, reject);
}

const subscribe = () => {
  let status = true;
  return new myPromise((resolve, reject) => {
    if (status) {
      setTimeout(() => {
        resolve("subscribe the channel ");
      }, 1000);
    } else {
      reject("did not subscribe ");
    }
  });
};

subscribe("subscribe the channel ").then((res) => {
  console.log(res);
});
//   .catch((err) => {
//     console.log(err);
//   });
