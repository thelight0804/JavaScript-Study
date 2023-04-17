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
  constructor(name, first, second, third, fourth){
    super(name, first, second, third);
    this.fourth = fourth;
  }
  sum(){
    return super.sum() + this.fourth;
  }
  avg(){
    return (this.first + this.second + this.third + this.fourth) / 4;
  }
}

var Miorine = new Gundam('Miorine Rembran', 10, 20, 30);
Miorine.sum = function(){
  return this.first + this.second;
}

var Suletta = new GundamPlus('Suletta Mercury', 5, 50, 10, 20);

console.log(Suletta.sum());