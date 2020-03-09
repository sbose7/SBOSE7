
$(function() {
	$('.video').click(function(){this.paused?this.play():this.pause();});
	$('.video').parent().click(function () {
		if($(this).children(".video").get(0).paused){        $(this).children(".video").get(0).play();   $(this).children(".playpause").fadeOut();
		}else{       $(this).children(".video").get(0).pause();
			$(this).children(".playpause").fadeIn();
		}
	});
	function sizeTheVideo() {
		var aspectRatio = 1.7;
		var video = $('#videoWithJs iframe');
		var videoHeight = video.outerHeight();
		var newWidth = videoHeight * aspectRatio;
		var halfNewWidth = newWidth / 2;
	}});