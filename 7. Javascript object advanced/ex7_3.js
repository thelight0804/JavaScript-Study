var hoshino = {
  name: "Ai",
  ageFirst: 16,
  ageSecond: 20,
};
var aqua = {
  name: "aqua",
  ageFirst: 1,
  ageSecond: 15,
};

function subAge(prefix) {
  return prefix + (this.ageSecond - this.ageFirst);
};

console.log(subAge.call(hoshino, '->')); //4
console.log(subAge.call(aqua, '->')); //14
