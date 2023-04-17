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
class GundamPlus extends Gundam{
  avg(){
    return (this.first + this.second + this.third) / 3;
  }
}

var Miorine = new Gundam('Miorine Rembran', 10, 20, 30);
Miorine.sum = function(){
  return this.first + this.second;
}

var Suletta = new GundamPlus('Suletta Mercury', 5, 50, 10);

console.log(Suletta.avg());