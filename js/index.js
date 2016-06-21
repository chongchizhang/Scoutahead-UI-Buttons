//===========================================
//spinning confirmed effect
// Thx Valentin's Pen for reference http://codepen.io/asstor_/pen/MYMZZK http://tympanus.net/Tutorials/CircularProgressButton/
$(function() {
  $("#confirmed").click(function() {
    $("#confirmed").addClass("onclic", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $("#confirmed").removeClass("onclic");
      $("#confirmed").addClass("validate", 450, callback);
    }, 2250);
  }

  function callback() {
    setTimeout(function() {
      $("#confirmed").removeClass("validate");
    }, 2450);
  }
});
//End of spinning confirmed effect

//====================================================
//View all toggle
//Thx Mason Fox's Pen for reference http://codepen.io/masonfox/pen/OymYMa?editors=1010
$('.view-all').click(function(){
  $('.education-content').slideToggle('fast');
  $('.reply').toggle();
  $('.text').text(function(i, v){
               return v == ' View All 5 Connections' ? ' View Less' : ' View All 5 Connections'
  });
});
//End of View all toggle

//=====================================================
//Date Picker
//thx for Ashley's pen http://codepen.io/aktorou/pen/MymKoB?editors=0110
$(function() {
  $( ".calendar" ).datepicker({
		dateFormat: 'mm/dd/yy',
		firstDay: 1
	});
	
	$(document).on('click', '.date-picker .input', function(e){
		var $me = $(this),
				$parent = $me.parents('.date-picker');
		$parent.toggleClass('open');
	});
	
	$(".calendar").on("change",function(){
		var $me = $(this),
				$selected = $me.val(),
				$parent = $me.parents('.date-picker');
		$parent.find('.result').children('span').html($selected);
	});
});
//End of Date Picker