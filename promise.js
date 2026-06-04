const sleep = (ms, object) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(object), ms);
  });

 async function test() {
  let successRes = await sleep(2000, { status: true, message: "okokko" });
  console.log(successRes);
}

test();