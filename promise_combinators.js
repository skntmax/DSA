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

const promiseResolverByAll = async () => {
  let res = await Promise.all([
    subscribeTheVideo("subscribe the video "),
    shareTheVideo("share the video "),
    likeTheVideo("like the video "),
  ]);

  console.log(res);
};

const promiseResolverByRace = async () => {
  let res = await Promise.race([
    subscribeTheVideo("subscribe the video "),
    shareTheVideo("share the video "),
    likeTheVideo("like the video "),
  ]);

  console.log(res);
};

const promiseResolverByAllSettled = async () => {
  let res = await Promise.allSettled([
    subscribeTheVideo("subscribe the video "),
    shareTheVideo("share the video "),
    likeTheVideo("like the video "),
  ]);

  console.log(res);
};

// promiseResolverByAll();
// [ 'subscribe the video ', 'share the video ', 'like the video ' ]

// promiseResolverByRace();
//  like the video

// promiseResolverByAllSettled(); // give all the rejecte dand fullfull promised as well ,shareTheVideo promise is rejected
// [
//   { status: 'fulfilled', value: 'subscribe the video ' },
//   { status: 'rejected', reason: 'share the video ' },
//   { status: 'fulfilled', value: 'like the video ' }
// ]
