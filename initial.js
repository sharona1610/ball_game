var timeout
var width= screen.availWidth-100;
var height = screen.availHeight-150;
$('.boundary').css('width', width)
$('.boundary').css('height', height)


$('body').keydown(function(x){
  if(x.keyCode===37) temp('left')
  else if(x.keyCode===38) temp('up')
  else if(x.keyCode===40) temp('down')
  else if(x.keyCode===39) temp('right')
  }
)
$('body').keyup(function(x){
    clearInterval(timeout);
  }
)

function temp(dir){
  timeout= setInterval(function(){
    var pos=$('.ball').position()
    if(dir==='up'){
      $('.ball').css('top',pos.top-10)
      console.log(pos);
    }
    else if (dir==='left'){
      $('.ball').css('left',pos.left-10)
      console.log(pos);
    }
    else if(dir==='down'){
      $('.ball').css('top',pos.top+10)
      console.log(pos);
    }
    else{
      $('.ball').css('left',pos.left+10)
      console.log(pos);
    }
  }, 10);
}

// DOWN!
$('.down').mousedown(function(){
    timeout= setInterval(function(){
      var pos=$('.ball').position()
        $('.ball').css('top',pos.top+10)
    }, 10);
    return false;
});
$('.down').mouseup(function(){
    clearInterval(timeout);
    return false;
});

//
// UP!!
$('.up').mousedown(function(){
    timeout = setInterval(function(){
      var pos=$('.ball').position()
        $('.ball').css('top',pos.top-10)
    }, 10);
    return false;
});
$('.up').mouseup(function(){
    clearInterval(timeout);
    return false;
});


//LEFT!
$('.left').mousedown(function(){
    timeout = setInterval(function(){
      var pos=$('.ball').position()
        $('.ball').css('left',pos.left-10)
    }, 10);
    return false;
});
$('.left').mouseup(function(){
    clearInterval(timeout);
    return false;
});


//RIGHT
$('.right').mousedown(function(){
    timeout = setInterval(function(){
      var pos=$('.ball').position()
        $('.ball').css('left',pos.left+10)
    }, 10);
    return false;
});
$('.right').mouseup(function(){
    clearInterval(timeout);
    return false;
});
