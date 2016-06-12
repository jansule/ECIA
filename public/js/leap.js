'use strict';

var element = document.getElementById('text');
var dir =  document.getElementById("dir");
element.style.color = "red";
var waitMode = false; 
var oldFrame = false;

$( document ).ready(function() {
	
	Leap.loop({enableGestures: true}, function(frame){
		if(!waitMode && frame.valid && frame.hands.length > 0){
			waitMode = true; 		
			var numberOfFingers = getExtendedFingers(frame.hands[0]);
			element.innerHTML = "You've shown " + numberOfFingers + " fingers.";	
			console.log("fingers: " + numberOfFingers);
			
			var destination = numberOfFingers-1;
			if(destination > -1 && destination < 4){
				$.fn.fullpage.silentMoveTo(0, destination);	
			}

		    //if 5 fingers are shown the application should be turned on/off
			if(destination == 4){
				
				//TODO: turn visibility of iframe on/off
			}
			
			setTimeout(function(){ waitMode = false; }, 1000); // need timeout for not recognising fingers again directly
				
		}
		if(!oldFrame){
		  oldFrame = frame;
		}

		if(frame.valid && frame.gestures[0] && !oldFrame.gestures[0]){
		  frame.gestures.forEach(function(gesture){
			  if(gesture.type == "circle"){
				   //TODO: turn on audio control
				   console.log("Circle Gesture");                 
			  }
          });
        }
		oldFrame = frame;
	});

	function getExtendedFingers(hand){
	   var exfingers = 0;
	   for(var j=0;j<hand.fingers.length;j++){
		  if(hand.fingers[j].extended){
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
});