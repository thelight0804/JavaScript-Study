function Gundam(name, first, second, third){
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function(){
    return this.first + this.second + this.third;
  }
}

console.log(Gundam()); //undefined
console.log(new Gundam()); //constructor

var Miorine = new Gundam('Miorine Rembran', 10, 20, 30);
var Suletta = new Gundam('Suletta Mercury', 5, 50, 10);

console.log(Miorine.sum())
console.log(Suletta.sum())

