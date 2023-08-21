import $ from '../../../static/js/jquery.js'
function rotateZ(li,deg) {
	$(li).css({transform:'rotateZ('+deg+'deg)'}).find('label').css({transform:'rotateZ('+-deg+'deg)'})
}

function changeOptions(ele) {
	var $selector = $(ele).parent();
	$selector.toggleClass('open');
	var $li = $selector.find('li');
	var deg = 360/$li.length;
	
	for(var i = 0; i < $li.length; i++) {
		var d = i * deg;
		$selector.hasClass('open') ? rotateZ($li[i],d) : rotateZ($li[i],-360); 
	}
}

$('button').click(function(){
	changeOptions(this);
})

setTimeout(function() { changeOptions('.selector button'); }, 100);