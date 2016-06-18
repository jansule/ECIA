'use strict';
var synth = window.speechSynthesis;

var pitchValue = 1; // pitch (Tonhoehe) of audio output
var rateValue = 1; // speed of audio output
var language = "English"; // language for audio output

// for testing
// todo: delete this
var inputForm = document.querySelector('form');
inputForm.onsubmit = function(event) {
    event.preventDefault();
    audioOutput(1);
};

/**
 * Create and play a audio output depending on the current slide that is shown on the HUD
 * @param slide
 */
function audioOutput(slide){
    var voices = synth.getVoices();
    var outputSentence = ""; // string that will be played

    switch(slide) {
        case 1:
            var speed = Math.floor(liveData[curInd].properties.phenomenons.Speed.value * 100)/100 + " kilometers per hour";
            var consumption = Math.floor(liveData[curInd].properties.phenomenons.Consumption.value * 100) / 100 + " liters per hour";
            var co2 = Math.floor(liveData[curInd].properties.phenomenons.CO2.value * 100) / 100 + " kilogram per hour";
            outputSentence = "Your current speed is" + speed + ". Your Comsumption is" + consumption + ". Your carbon emission is" + co2;
            break;
        case 2:
            // todo: audio output for second slide
            break;
        case 3:
            // todo: audio output for third slide
            break;
        case 4:
            // todo: audio output for fourth slide
            break;
        case 5:
            // no audio output / HUD off
            break;
    }

    // play audio output
    var utterThis = new SpeechSynthesisUtterance(outputSentence);
    utterThis.voice = "English";
    utterThis.pitch = pitchValue;
    utterThis.rate = rateValue;
    synth.speak(utterThis);

}
