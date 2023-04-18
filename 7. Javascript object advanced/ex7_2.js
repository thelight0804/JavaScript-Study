var superObj = { superVal: 'super' }; //부모 객체
var subObj = { subVal: 'sub' }; //자식 객체

subObj.__proto__ = superObj;
console.log(subObj); // { subVal: 'sub' }
console.log(subObj.superVal); //super

subObj.superVal = 'change!';
console.log(subObj.superVal); //change!
console.log(superObj.superVal); //super