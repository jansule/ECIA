'use strict';

var element = document.getElementById('text');
var dir =  document.getElementById("dir");
element.style.color = "red";
var waitMode = false; 

$( document ).ready(function() {
	
	Leap.loop({enableGestures: true}, function(frame){
		if(!waitMode && frame.valid && frame.hands.length > 0){
			waitMode = true; 		
			var numberOfFingers = getExtendedFingers(frame.hands[0]);
			element.innerHTML = "You've shown " + numberOfFingers + " fingers.";	
			console.log("fingers: " + numberOfFingers);
			
			var destination = numberOfFingers-1;
			if(destination > -1){
				$.fn.fullpage.silentMoveTo(0, destination);	
			}
			
			setTimeout(function(){ waitMode = false; }, 1000); // need timeout for not recognising fingers again directly
				
		}
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