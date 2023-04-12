//Standard built-in objects
console.group('Math');
console.log(Math.PI);
console.log(Math.random());
console.log(Math.floor(3.9));
console.groupEnd('Math');

//create object method
var MyMath = {
  PI: Math.PI,
  random: function(){
    return Math.random();
  },
  floor: function(val){
    return Math.floor(val);
  }
}

console.group('MyMath');
console.log(MyMath.PI);
console.log(MyMath.random());
console.log(MyMath.floor(3.9));
console.groupEnd('MyMath');