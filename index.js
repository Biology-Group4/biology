var video = 1;
var collapsed = true;
var vid = $(".vid").on("click", function() {
    video++;
    console.log(video);
    if (video >= 7) {
        playVideo();
    }
});

function playVideo() {
    $(".water").css("display", "block");
}

$(".learn-more-button").on("click", function() {
    if (collapsed === true) {
        collapsed = false;
        $(".learn-more-button").html("See Less");
    } else {
        collapsed = true;
        $(".learn-more-button").html("Learn More");
    }
});