var memberArr = ['Tanjiro', 'Nezuko', 'Zenitsu', 'Inosuke'];
console.log("memberArr[1]: ", memberArr[1]);

var memberObj = {
  black: 'Tanjiro',
  pink: 'nezuko',
  yellow: 'Zenitsu',
  skyBlue: 'Inosuke'
}

memberObj.pink = 'Nezuko';
console.log("memberObj.pink: ", memberObj.pink);
console.log("memberObj['pink']: ", memberObj['pink']);

delete memberObj.pink;
console.log("delete memberObj.pink: ", memberObj.pink);