'use strict';

var element = document.getElementById('text');
var dir =  document.getElementById("dir");
element.style.color = "red";

//var color = ["red", "green", "blue", "orange"];
var i = 0;

var waitMode = false; 

Leap.loop({enableGestures: true}, function(frame){
    if(!waitMode && frame.valid && frame.hands.length > 0){
				
			var numberOfFingers = getExtendedFingers(frame.hands[0]);
			element.innerHTML = "You've shown " + numberOfFingers + " fingers.";	
			waitMode = true; 
			setTimeout(function(){ waitMode = false; }, 900); // need timeout for not recognising fingers again directly
			
    }
});

function getExtendedFingers(hand){
   var exfingers = 0;
   for(var i=0;i<hand.fingers.length;i++){
      if(hand.fingers[i].extended){
         exfingers++;
      }
   }
   return exfingers;
}


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
