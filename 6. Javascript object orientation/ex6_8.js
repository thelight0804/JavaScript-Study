class Gundam{
  constructor(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
  }
  sum(){
    return this.first + this.second + this.third;
  }
}

var Miorine = new Gundam('Miorine Rembran', 10, 20, 30);
Miorine.sum = function(){
  return this.first + this.second;
}

var Suletta = new Gundam('Suletta Mercury', 5, 50, 10);

console.log(Miorine.sum());
console.log(Suletta.sum());