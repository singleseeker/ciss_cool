$(function(){

	$('.single-page-nav li').not('.current').hover(function(){
		$(this).addClass('current');
		$(this).data('origin_url',$(this).find('img').attr('src'));
		$(this).find('img').attr('src', $(this).find('img').attr('hover'));
	} ,function(){
		$(this).removeClass('current');
		$(this).find('img').attr('src', $(this).data('origin_url'));
	}).click(function(){
		window.location.href = $(this).find('a').attr('href');
	});

	$('.user-dash-nav li').not('.current').hover(function(){
		$(this).addClass('current');
		$(this).css('border-right','1px solid #ccc');
		$(this).data('origin_url',$(this).find('img').attr('src'));
		$(this).find('img').attr('src', $(this).find('img').attr('hover'));
	} ,function(){
		$(this).removeClass('current');
		$(this).find('img').attr('src', $(this).data('origin_url'));
	}).click(function(){
		window.location.href = $(this).find('a').attr('href');
	});

});