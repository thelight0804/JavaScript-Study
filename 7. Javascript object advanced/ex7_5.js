function Gundam(name, first, second, third){
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}
Gundam.prototype.sum = function(){
  return this.first + this.second + this.third;
}

function GundamPlus(name, first, second, third, fourth){
  Gundam.call(this, name, first, second, third);
  this.fourth = fourth;
}
// GundamPlus.prototype.__proto__ = Gundam.prototype;
GundamPlus.prototype = Object.create(Gundam.prototype);

GundamPlus.prototype.age = function(){
  return (this.first + this.second + this.third + this.fourth) / 4;
}

var Suletta = new GundamPlus('Suletta Mercury', 5, 50, 10, 20);

console.log(Suletta.age()); //21.25
console.log(Suletta.sum()); //65
console.log(Suletta.constructor);
