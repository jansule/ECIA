'use strict';

function hand(e) {
    if (e.fingers == 0) {
        console.log("fist detected");

        //active audioOutput on fist detected
        var currentIndex = $('.slide.active').index();
        audioOutput(currentIndex+1);
    } else {
        console.log(e.fingers + "fingers detected");

        //change slide
        var destination = e.fingers - 1;
        if (destination > -1 && destination < 5) {
            $.fn.fullpage.silentMoveTo(0, destination);
            if(destination == 4){
                $("#section0").addClass("deactivated");
            }
            else{
                if ($("#section0").hasClass("deactivated")){
                    $("#section0").removeClass("deactivated");
                }

            }
        }
    }
}

var config = {
    useControllerEvents: true,
    confidenceThreshold: 0.15,
    handDuration: 1000
}
var leapGestures = new LeapGestures(config);
var c = leapGestures.getLeapController();
c.on("gestureHand", hand);
