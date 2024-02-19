let subscribeTheVideo = (args) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(args);
    }, 1000);
  });
};

let shareTheVideo = (args) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(args);
    }, 200);
  });
};

let likeTheVideo = (args) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(args);
    }, 100);
  });
};

const promiseResolverByChaining = () => {
  subscribeTheVideo("subscribe the video ")
    .then((res) => {
      console.log(res);
      return shareTheVideo("share the video ");
    })
    .then((res) => {
      console.log(res);
      return likeTheVideo("like the video ");
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

promiseResolverByChaining();

// output
// subscribe the video
// share the video
// like the video
