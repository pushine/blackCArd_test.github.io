/*
* jquery
*/
//=../libs/jquery/dist/jquery.js


$(function () {
	// асинхронное подключение стилей
	// $("head").append("<link rel='stylesheet'  href='css/main.css' />");

  var todoCheck = $('.toggle_state_check');
  todoCheck.on('change', changeTodoState);

  function changeTodoState() {
    var parent = $(this).parents('.todo__list_item');
    parent.toggleClass('checked');
  }
});

