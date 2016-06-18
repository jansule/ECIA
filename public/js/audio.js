'use strict';
var synth = window.speechSynthesis;

var pitchValue = 1; // pitch (Tonhoehe) of sound output
var rateValue = 1; // speed of sound output

// for testing
// todo: delete this
var inputForm = document.querySelector('form');
inputForm.onsubmit = function(event) {
    event.preventDefault();
    audioOutput(1, "co2", true);
};

/**
 * Create and play a audio output depending on the passed params
 * @param value
 * @param unit
 * @param betterThanAverage
 */
function audioOutput(value, unit, betterThanAverage){
    var voices = synth.getVoices();
    var outputSentence = "";
    if(betterThanAverage){
        outputSentence = "You are driving better than the average.";
    } else {
        outputSentence = "Your driving style could be better.";
    }

    var utterThis = new SpeechSynthesisUtterance(outputSentence);
    for(var i = 0; i < voices.length ; i++) {
        if(voices[i].name === "English") {
            // todo: auf englisch ändern
            console.log(voices[i].name);
            console.log(voices[i]);
            utterThis.voice = voices[i];
        }
    }
    utterThis.pitch = pitchValue;
    utterThis.rate = rateValue;
    synth.speak(utterThis);

    /*
    utterThis.onpause = function(event) {
        var char = event.utterance.text.charAt(event.charIndex);
        console.log('Speech paused at character ' + event.charIndex + ' of "' +
            event.utterance.text + '", which is "' + char + '".');
    };*/

}
