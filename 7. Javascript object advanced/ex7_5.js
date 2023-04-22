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
  Gundam(name, first, second, third);
  this.fourth = fourth;
}
GundamPlus.prototype.age = function(){
  return (this.first + this.second + this.third + this.fourth) / 4;
}

var Suletta = new GundamPlus('Suletta Mercury', 5, 50, 10, 20);

console.log(Suletta.sum());