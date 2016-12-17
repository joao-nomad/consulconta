$("#orientacaoGestao").click(function() {
  window.location.href = 'services/orientacaoGestao.html';
});

$("#orientacaoGestao").hover(function() {
  $(this).children().children('span').children().css('background-color', 'black');
});

$("#orientacaoGestao").mouseleave(function() {
  $(this).children().children('span').children().css('background-color', '#367100');   
});

//--------------------------------------------------------------------------------------------//