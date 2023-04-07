var Links = {
  SetColor : function(color){
  // var aList = document.querySelectorAll('a');
  // var i = 0;
  //   while(i < aList.length){
  //     aList[i].style.color = color;
  //     i++
  //   }
  $('a').css('color', color);
  }
}

var Body = {
  SetColor: function (target, color) {
    // target.style.color = color;
    $("body").css("color", color);
  },
  SetBackgroundColor: function (target, color) {
    // target.style.backgroundColor = color;
    $("body").css("backgroundColor", color);
  },
};

function nightDayHandler(self) {
  var target = document.querySelector('body');
  if (self.value === 'night') {
    Body.SetBackgroundColor(target, 'black')
    Body.SetColor(target, 'white')
    self.value = 'day';
    Links.SetColor('powderblue');
  } else {
    Body.SetBackgroundColor(target, 'white')
    Body.SetColor(target, 'black')
    self.value = 'night';
    Links.SetColor('blue');
  }
}