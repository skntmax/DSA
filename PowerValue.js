function powerFunction(root, power) {
  if (power == 0) return 1;
  return root * powerFunction(root, power - 1);
}

console.log(powerFunction(5, 3));
