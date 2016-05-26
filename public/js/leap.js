'use strict';

var element = document.getElementById('Heading');
var dir =  document.getElementById("dir");
element.style.color = "orange";

var color = ["red", "green", "blue", "orange"];
var i = 0;

Leap.loop({enableGestures: true}, function(frame){
    if(frame.valid && frame.gestures.length > 0){
        frame.gestures.forEach(function(gesture){
            switch (gesture.type){
                case "circle":
                    //element.style.color = color[i];
                    if(i<4){i++} else {i=0}
                    element.innerHTML = "Sie haben einen Kreis gezeichnet.";
                    //moveSlide("prev", 0);
                    break;
                case "swipe":
                    console.log("entered swipe");
                    element.style.color = color[i];
                    if(i<4){i++} else {i=0}
                    element.innerHTML = "Sie haben eine Wischgeste vollführt!";
                    $.fn.fullpage.slideArrowHandler()
                    break;
            }
        });
    }
});


Leap.loop({enablesGestures: true}, function frame(frame) {
    frame.hands.forEach(function(hand, index) {
       /*if(hand.direction[0] > 0) {
         element.innerHTML = "Swipe to the right"; 
        }
        if(hand.direction[0] < 0) {
           element.innerHTML = "Swipe to the left";
        }
        })*/
        dir.innerHTML = hand.direction;
    })
})