'use strict';
var synth = window.speechSynthesis;
var pitchValue = 1; // pitch (Tonhoehe) of audio output
var rateValue = 1; // speed of audio output

// for testing
// todo: delete this
/*var inputForm = document.querySelector('form');
inputForm.onsubmit = function(event) {
    event.preventDefault();
    audioOutput(4);
};*/

/**
 * Create and play a audio output depending on the current slide that is shown on the HUD
 * @param slide
 */
function audioOutput(slide){
    var outputSentence = ""; // string that will be played

    switch(slide) {
        case 1:
            var speed = Math.floor(liveData[curInd].properties.phenomenons.Speed.value * 100)/100 + " kilometers per hour";
            var consumption = Math.floor(liveData[curInd].properties.phenomenons.Consumption.value * 100) / 100 + " liters per hour";
            var co2 = Math.floor(liveData[curInd].properties.phenomenons.CO2.value * 100) / 100 + " kilogram per hour";
            outputSentence = "Your current speed is" + speed + ". Your Comsumption is" + consumption + ". Your carbon emission is" + co2;
            break;

        case 2:
            //var speedLive = liveData[curInd].properties.phenomenons.Speed.value;
            //var speedAvg = enviro.ownTracksStats.statistics[0].avg;
            var conLive = liveData[curInd].properties.phenomenons.Consumption.value;
            var conOwnAvg = enviro.ownTracksStats.statistics[2].avg;
            var co2Live = liveData[curInd].properties.phenomenons.CO2.value;
            var co2OwnAvg = enviro.ownTracksStats.statistics[1].avg;

            if(co2Live < co2OwnAvg && conLive < conOwnAvg){
                outputSentence = "Well done. Your driving style is environmentally friendly."
            } else if (conLive >= conOwnAvg){
                outputSentence = "Try to improve your driving style. Unfortunately the current fuel consumption is higher than usual."
            } else if (co2Live >= co2OwnAvg) {
                outputSentence = "Try to improve your driving style. Unfortunately the current carbon emission is higher than usual."
            }
            break;

        case 3:
            //var speedLiveAvg = calcLiveAverage(liveData.slice(0, curInd + 1)).avgSpeed;
            //var speedCarAvg = enviro.sameCarStats.statistics[0].avg;
            var conLiveAvg = calcLiveAverage(liveData.slice(0, curInd + 1)).avgConsumption;
            var conCarAvg = enviro.sameCarStats.statistics[0].avg;
            var co2LiveAvg = calcLiveAverage(liveData.slice(0, curInd + 1)).avgCo2;
            var co2CarAvg = enviro.sameCarStats.statistics[1].avg;

            if(co2LiveAvg < co2CarAvg && conLiveAvg < conCarAvg){
                outputSentence = "Well done. Your driving style is better than the driving style of other people driving the same car type"
            } else if (conLiveAvg >= conCarAvg){
               outputSentence = "Try to improve your driving style. Unfortunately the fuel consumption is higher than the average consumption of cars of the same type."
            }else if (co2LiveAvg >= co2CarAvg) {
                outputSentence = "Try to improve your driving style. Unfortunately the carbon emission is higher than the average carbon emission of cars of the same type."
            }
            break;

        case 4:
            //var speedLiveAvg = liveData[curInd].properties.phenomenons.Speed.value;
            //var speedCarAvg = enviro.stats.statistics[0].avg;
            var conAvg2 = liveData[curInd].properties.phenomenons.Consumption.value;
            var conAvg = enviro.stats.statistics[2].avg;
            var co2Avg2 = liveData[curInd].properties.phenomenons.CO2.value;
            var co2Avg = enviro.stats.statistics[1].avg;

            if(co2Avg2 < co2Avg && conAvg2 < conAvg) {
                outputSentence = "Well done. Your driving style is better than the driving style of the average of all users."
            }else if (conAvg2 >= conAvg){
                outputSentence = "Try to improve your driving style. Unfortunately the fuel consumption is higher than the average consumption of all users."
            } else if (co2Avg2 >= co2Avg){
                outputSentence = "Try to improve your driving style. Unfortunately the carbon emission is higher than the average carbon emission of all users."
            }
            break;

        case 5:
            // no audio output / HUD off
            break;
    }

    // play audio output
    var utterThis = new SpeechSynthesisUtterance(outputSentence);
    var voices = synth.getVoices();
    var selectedOption = "Google US English";
    for(var i = 0; i < voices.length ; i++) {
        if(voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
            console.log(voices[i]);
        }
    }
    utterThis.pitch = pitchValue;
    utterThis.rate = rateValue;
    synth.speak(utterThis);

}
