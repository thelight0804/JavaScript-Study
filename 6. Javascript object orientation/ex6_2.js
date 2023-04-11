var memberArr = ['Tanjiro', 'Nezuko', 'Zenitsu', 'Inosuke'];

var memberObj = {
  black: 'Tanjiro',
  pink: 'Nezuko',
  yellow: 'Zenitsu',
  skyBlue: 'Inosuke'
}

console.group('array loop');
var i = 0;
while(i < memberArr.length){
  console.log(i, memberArr[i]);
  i ++;
}
console.groupEnd('array loop');

console.group('object loop');
for(var x in memberObj){
  console.log(x, memberObj[x]);
}
console.groupEnd('object loop');
