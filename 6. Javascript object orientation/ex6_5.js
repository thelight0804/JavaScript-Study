var Miorine = {
  name: 'Miorine Rembran',
  first: 10,
  second: 20,
  third: 30,
  sum: function(){
    return this.first + this.second + this.third;
  }
}
var Suletta = {
  name: 'Suletta Mercury',
  first: 5,
  second: 50,
  third: 10,
  sum: function(){
    return this.first + this.second + this.third;
  }
}

console.log(Miorine.sum());
console.log(Suletta.sum());