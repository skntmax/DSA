function random(num) {
  if (num < 0) {
    return 0;
  }

  random(num - 1);
  
   // tail recursion
   
  console.log("num", num);
}




random(10);
