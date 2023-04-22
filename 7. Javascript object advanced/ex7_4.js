var hoshino = {
  name : 'Ai',
  ageFirst : 16,
  ageSecond : 20,
  subAge : function(){ return this.ageSecond - this.ageFirst; }
};
var aqua = {
  name : 'aqua',
  ageFirst : 1,
  ageSecond : 15,
  avgAge : function(){ return (this.ageFirst + this.ageSecond) / 2; }
};

aqua.__proto__ = hoshino;
var ruby = Object.create(hoshino);
ruby.name = 'ruby';
ruby.ageFirst = 1;
ruby.ageSecond = 15;
ruby.avg = function(){ return (this.ageFirst + this.ageSecond) / 2; };


console.log(hoshino.subAge());
console.log(aqua.subAge());
console.log(aqua.avgAge());