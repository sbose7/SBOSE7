
$(function() {
    $('.video').click(function(){this.paused?this.play():this.pause();});
    $('.video').parent().click(function () {
        if($(this).children(".video").get(0).paused){        $(this).children(".video").get(0).play();   $(this).children(".playpause").fadeOut();
        }else{       $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });

    function sizeTheVideo() {
        // - 1.78 is the aspect ratio of the video
// - This will work if your video is 1920 x 1080
// - To find this value divide the video's native width by the height eg 1920/1080 = 1.78
        var aspectRatio = 1.7;

        var video = $('#videoWithJs iframe');
        var videoHeight = video.outerHeight();
        var newWidth = videoHeight * aspectRatio;
        var halfNewWidth = newWidth / 2;
    }});
