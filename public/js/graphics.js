"use strict"

// declare vairables
var liveData = [];
var calculatedData = {};
var FP_speed = document.getElementById("FP_speed");
var FP_CO2 = document.getElementById("FP_co2");
var FP_cons = document.getElementById("FP_cons");
var SP_speed, SP_speed_y, SP_cons, SP_cons_y, SP_co2, SP_co2_y, TP_speed, TP_speed_y, TP_cons, TP_cons_y, TP_co2, TP_co2_y, LP_speed, LP_speed_y, LP_cons, LP_cons_y, LP_co2, LP_co2_y;
var curInd;

//update the information in the HUD every 5 sec
for(var index in enviro.currentTrack.features){
	(function(ind){
		setTimeout(function(){
			curInd = ind;
			liveData.push(enviro.currentTrack.features[ind]);
			calculatedData = calcLiveAverage(liveData);
			//##########################################################
			// Put here code for calculating live stats and display ####
			//##########################################################

			/**
			 * First page
 			 */
 			 
			FP_speed.innerHTML = Math.floor(liveData[ind].properties.phenomenons.Speed.value * 100) / 100 + " km/h";
			FP_cons.innerHTML = Math.floor(liveData[ind].properties.phenomenons.Consumption.value * 100) / 100 + " l/h";
			FP_CO2.innerHTML = Math.floor(liveData[ind].properties.phenomenons.CO2.value * 100) / 100 + " kg/h";

			
		/*################
		####Second slide##
		##################*/
		var sp_speed_options = {
			xaxis: {
				max: 1,
				ticks: 0
			},
			yaxis: {
				max: enviro.ownTracksStats.statistics[2].max,
				ticks: 0
			}
		};
		var sp_speed = $.plot('#SP_speed', [{
			data: [[0, liveData[ind].properties.phenomenons.Speed.value]],
			bars: {
				show: true,
				fill: 1,
				fillColor: 'steelblue',
				lineWidth: 0
			},
			color: 'steelblue',
			shadowSize: 0
		},{
			data: [[0, calcLiveAverage(liveData.slice(0, ind + 1)).avgSpeed], [1, calcLiveAverage(liveData.slice(0, ind + 1)).avgSpeed]],
			lines: {
				show: true,
				lineWidth: 3
			},
			color: '#FF0000',
			shadowSize: 4
		}], sp_speed_options);

		var o = sp_speed.pointOffset({ x: 1.2, y: calcLiveAverage(liveData.slice(0, ind + 1)).avgSpeed});

		// Append it to the placeholder that Flot already uses for positioning

		$('#SP_speed').append("<div style='position:absolute;left:" + (o.left + 2) + "px;top:" + (o.top-5) + "px;color:#FF0000; font-family: sans-serif'><b>avg " + calcLiveAverage(liveData.slice(0, ind + 1)).avgSpeed.toFixed(1) + "</b></div>");


		o = sp_speed.pointOffset({ x: -0.1, y: -2});
		$('#SP_speed').append("<div style='position:absolute;left:" + (o.left + 2) + "px;top:" + (o.top) + "px;color: steelblue; font-family: sans-serif'><b>"+ liveData[ind].properties.phenomenons.Speed.value.toFixed(1)+" km/h</b></div>");

		o = sp_speed.pointOffset({ x: -1, y: enviro.ownTracksStats.statistics[2].max + 20});
		$('#SP_speed').append("<div style='position:absolute;left:" + (o.left + 2) + "px;top:" + (o.top-10) + "px;color: black; font-size: xx-large; font-family: sans-serif'>Speed</div>");			
	

		var sp_cons_options = {
			xaxis: {
				max: 1,
				ticks: 0
			},
			yaxis: {
				max: enviro.ownTracksStats.statistics[0].max,
				ticks: 0
			}
		};
		var sp_cons = $.plot('#SP_cons', [{
			data: [[0, liveData[ind].properties.phenomenons.Consumption.value]],
			bars: {
				show: true,
				fill: 1,
				fillColor: 'steelblue',
				lineWidth: 0
			},
			color: 'steelblue',
			shadowSize: 0
		},{
			data: [[0, calcLiveAverage(liveData.slice(0, ind + 1)).avgConsumption], [1, calcLiveAverage(liveData.slice(0, ind + 1)).avgConsumption]],
			lines: {
				show: true,
				lineWidth: 3
			},
			color: '#FF0000',
			shadowSize: 4
		}], sp_cons_options);

		var co = sp_cons.pointOffset({ x: 1.2, y: calcLiveAverage(liveData.slice(0, ind + 1)).avgConsumption});

		// Append it to the placeholder that Flot already uses for positioning

		$('#SP_cons').append("<div style='position:absolute;left:" + (co.left + 2) + "px;top:" + (co.top-5) + "px;color:#FF0000; font-family: sans-serif'><b>avg " + calcLiveAverage(liveData.slice(0, ind + 1)).avgConsumption.toFixed(1) + "</b></div>");


		co = sp_cons.pointOffset({ x: -0.1, y: -0.2});
		$('#SP_cons').append("<div style='position:absolute;left:" + (co.left + 2) + "px;top:" + (co.top) + "px;color: steelblue; font-family: sans-serif'><b>"+ liveData[ind].properties.phenomenons.Consumption.value.toFixed(1)+" l/h</b></div>");

		co = sp_cons.pointOffset({ x: -2.5, y: enviro.ownTracksStats.statistics[0].max + 2.5});
		$('#SP_cons').append("<div style='position:absolute;left:" + (co.left + 2) + "px;top:" + (co.top-10) + "px;color: black; font-size: xx-large; font-family: sans-serif'>Consumption</div>");


		var sp_co2_options = {
			xaxis: {
				max: 1,
				ticks: 0
			},
			yaxis: {
				max: enviro.ownTracksStats.statistics[1].max,
				ticks: 0
			}
		};
		var sp_co2 = $.plot('#SP_co2', [{
			data: [[0, liveData[ind].properties.phenomenons.CO2.value]],
			bars: {
				show: true,
				fill: 1,
				fillColor: 'steelblue',
				lineWidth: 0
			},
			color: 'steelblue',
			shadowSize: 0
		},{
			data: [[0, calcLiveAverage(liveData.slice(0, ind + 1)).avgCo2], [1, calcLiveAverage(liveData.slice(0, ind + 1)).avgCo2]],
			lines: {
				show: true,
				lineWidth: 3
			},
			color: '#FF0000',
			shadowSize: 4
		}], sp_co2_options);

		var co2 = sp_co2.pointOffset({ x: 1.2, y: calcLiveAverage(liveData.slice(0, ind + 1)).avgCo2});

		// Append it to the placeholder that Flot already uses for positioning

		$('#SP_co2').append("<div style='position:absolute;left:" + (co2.left + 2) + "px;top:" + (co2.top-5) + "px;color:#FF0000; font-family: sans-serif'><b>avg " + calcLiveAverage(liveData.slice(0, ind + 1)).avgCo2.toFixed(1) + "</b></div>");


		co2 = sp_co2.pointOffset({ x: -0.1, y: -0.5});
		$('#SP_co2').append("<div style='position:absolute;left:" + (co2.left + 2) + "px;top:" + (co2.top) + "px;color: steelblue; font-family: sans-serif'><b>"+ liveData[ind].properties.phenomenons.CO2.value.toFixed(1)+" kg/h</b></div>");

		co2 = sp_co2.pointOffset({ x: -0.6, y: enviro.ownTracksStats.statistics[1].max + 5.5});
		$('#SP_co2').append("<div style='position:absolute;left:" + (co2.left + 2) + "px;top:" + (co2.top-10) + "px;color: black; font-size: xx-large; font-family: sans-serif'>CO2</div>");

		/*###########
		End Second slide
		#############*/

		/*################
		####Third slide##
		##################*/

		var tp_speed_options = {
			xaxis: {
				max: 1,
				ticks: 0
			},
			yaxis: {
				max: enviro.ownTracksStats.statistics[2].max,
				ticks: 0
			}
		};
		var tp_speed = $.plot('#TP_speed', [{
			data: [[0, liveData[ind].properties.phenomenons.Speed.value]],
			bars: {
				show: true,
				fill: 1,
				fillColor: 'steelblue',
				lineWidth: 0
			},
			color: 'steelblue',
			shadowSize: 0
		},{
			data: [[0, enviro.sameCarStats.statistics[0].avg], [1, enviro.sameCarStats.statistics[0].avg]],
			lines: {
				show: true,
				lineWidth: 3
			},
			color: '#FF0000',
			shadowSize: 4
		}], tp_speed_options);

		var o = tp_speed.pointOffset({ x: 1.2, y: enviro.sameCarStats.statistics[0].avg});

		// Append it to the placeholder that Flot already uses for positioning

		$('#TP_speed').append("<div style='position:absolute;left:" + (o.left + 2) + "px;top:" + (o.top-5) + "px;color:#FF0000; font-family: sans-serif'><b>avg " + enviro.sameCarStats.statistics[0].avg.toFixed(1) + "</b></div>");


		o = tp_speed.pointOffset({ x: -0.1, y: -2});
		$('#TP_speed').append("<div style='position:absolute;left:" + (o.left + 2) + "px;top:" + (o.top) + "px;color: steelblue; font-family: sans-serif'><b>"+ liveData[ind].properties.phenomenons.Speed.value.toFixed(1)+" km/h</b></div>");

		o = tp_speed.pointOffset({ x: -1, y: enviro.ownTracksStats.statistics[2].max + 20});
		$('#TP_speed').append("<div style='position:absolute;left:" + (o.left + 2) + "px;top:" + (o.top-10) + "px;color: black; font-size: xx-large; font-family: sans-serif'>Speed</div>");			
	

		var tp_cons_options = {
			xaxis: {
				max: 1,
				ticks: 0
			},
			yaxis: {
				max: enviro.ownTracksStats.statistics[0].max,
				ticks: 0
			}
		};
		var tp_cons = $.plot('#TP_cons', [{
			data: [[0, liveData[ind].properties.phenomenons.Consumption.value]],
			bars: {
				show: true,
				fill: 1,
				fillColor: 'steelblue',
				lineWidth: 0
			},
			color: 'steelblue',
			shadowSize: 0
		},{
			data: [[0, enviro.sameCarStats.statistics[2].avg], [1, enviro.sameCarStats.statistics[2].avg]],
			lines: {
				show: true,
				lineWidth: 3
			},
			color: '#FF0000',
			shadowSize: 4
		}], tp_cons_options);

		var co = tp_cons.pointOffset({ x: 1.2, y: enviro.sameCarStats.statistics[2].avg});

		// Append it to the placeholder that Flot already uses for positioning

		$('#TP_cons').append("<div style='position:absolute;left:" + (co.left + 2) + "px;top:" + (co.top-5) + "px;color:#FF0000; font-family: sans-serif'><b>avg " + enviro.sameCarStats.statistics[2].avg.toFixed(1) + "</b></div>");


		co = tp_cons.pointOffset({ x: -0.1, y: -0.2});
		$('#TP_cons').append("<div style='position:absolute;left:" + (co.left + 2) + "px;top:" + (co.top) + "px;color: steelblue; font-family: sans-serif'><b>"+ liveData[ind].properties.phenomenons.Consumption.value.toFixed(1)+" l/h</b></div>");

		co = tp_cons.pointOffset({ x: -2.5, y: enviro.ownTracksStats.statistics[0].max + 2.5});
		$('#TP_cons').append("<div style='position:absolute;left:" + (co.left + 2) + "px;top:" + (co.top-10) + "px;color: black; font-size: xx-large; font-family: sans-serif'>Consumption</div>");


		var tp_co2_options = {
			xaxis: {
				max: 1,
				ticks: 0
			},
			yaxis: {
				max: enviro.ownTracksStats.statistics[1].max,
				ticks: 0
			}
		};
		var tp_co2 = $.plot('#TP_co2', [{
			data: [[0, liveData[ind].properties.phenomenons.CO2.value]],
			bars: {
				show: true,
				fill: 1,
				fillColor: 'steelblue',
				lineWidth: 0
			},
			color: 'steelblue',
			shadowSize: 0
		},{
			data: [[0, enviro.sameCarStats.statistics[1].avg], [1, enviro.sameCarStats.statistics[1].avg]],
			lines: {
				show: true,
				lineWidth: 3
			},
			color: '#FF0000',
			shadowSize: 4
		}], tp_co2_options);

		var co2 = tp_co2.pointOffset({ x: 1.2, y: enviro.sameCarStats.statistics[1].avg});

		// Append it to the placeholder that Flot already uses for positioning

		$('#TP_co2').append("<div style='position:absolute;left:" + (co2.left + 2) + "px;top:" + (co2.top-5) + "px;color:#FF0000; font-family: sans-serif'><b>avg " + enviro.sameCarStats.statistics[1].avg.toFixed(1) + "</b></div>");


		co2 = tp_co2.pointOffset({ x: -0.1, y: -0.5});
		$('#TP_co2').append("<div style='position:absolute;left:" + (co2.left + 2) + "px;top:" + (co2.top) + "px;color: steelblue; font-family: sans-serif'><b>"+ liveData[ind].properties.phenomenons.CO2.value.toFixed(1)+" kg/h</b></div>");

		co2 = tp_co2.pointOffset({ x: -0.6, y: enviro.ownTracksStats.statistics[1].max + 5.5});
		$('#TP_co2').append("<div style='position:absolute;left:" + (co2.left + 2) + "px;top:" + (co2.top-10) + "px;color: black; font-size: xx-large; font-family: sans-serif'>CO2</div>");

		/*###########
		End Third slide
		#############*/
		/*################
		####Fourth slide##
		##################*/

		var lp_speed_options = {
			xaxis: {
				max: 1,
				ticks: 0
			},
			yaxis: {
				max: enviro.ownTracksStats.statistics[2].max,
				ticks: 0
			}
		};
		var lp_speed = $.plot('#LP_speed', [{
			data: [[0, liveData[ind].properties.phenomenons.Speed.value]],
			bars: {
				show: true,
				fill: 1,
				fillColor: 'steelblue',
				lineWidth: 0
			},
			color: 'steelblue',
			shadowSize: 0
		},{
			data: [[0, enviro.stats.statistics[0].avg], [1, enviro.stats.statistics[0].avg]],
			lines: {
				show: true,
				lineWidth: 3
			},
			color: '#FF0000',
			shadowSize: 4
		}], lp_speed_options);

		var o = lp_speed.pointOffset({ x: 1.2, y: enviro.stats.statistics[0].avg});

		// Append it to the placeholder that Flot already uses for positioning

		$('#LP_speed').append("<div style='position:absolute;left:" + (o.left + 2) + "px;top:" + (o.top-5) + "px;color:#FF0000; font-family: sans-serif'><b>avg " + enviro.stats.statistics[0].avg.toFixed(1) + "</b></div>");


		o = lp_speed.pointOffset({ x: -0.1, y: -2});
		$('#LP_speed').append("<div style='position:absolute;left:" + (o.left + 2) + "px;top:" + (o.top) + "px;color: steelblue; font-family: sans-serif'><b>"+ liveData[ind].properties.phenomenons.Speed.value.toFixed(1)+" km/h</b></div>");

		o = lp_speed.pointOffset({ x: -1, y: enviro.ownTracksStats.statistics[2].max + 20});
		$('#LP_speed').append("<div style='position:absolute;left:" + (o.left + 2) + "px;top:" + (o.top-10) + "px;color: black; font-size: xx-large; font-family: sans-serif'>Speed</div>");			
	

		var lp_cons_options = {
			xaxis: {
				max: 1,
				ticks: 0
			},
			yaxis: {
				max: enviro.ownTracksStats.statistics[0].max,
				ticks: 0
			}
		};
		var lp_cons = $.plot('#LP_cons', [{
			data: [[0, liveData[ind].properties.phenomenons.Consumption.value]],
			bars: {
				show: true,
				fill: 1,
				fillColor: 'steelblue',
				lineWidth: 0
			},
			color: 'steelblue',
			shadowSize: 0
		},{
			data: [[0, enviro.stats.statistics[2].avg], [1, enviro.stats.statistics[2].avg]],
			lines: {
				show: true,
				lineWidth: 3
			},
			color: '#FF0000',
			shadowSize: 4
		}], lp_cons_options);

		var co = lp_cons.pointOffset({ x: 1.2, y: enviro.stats.statistics[2].avg});

		// Append it to the placeholder that Flot already uses for positioning

		$('#LP_cons').append("<div style='position:absolute;left:" + (co.left + 2) + "px;top:" + (co.top-5) + "px;color:#FF0000; font-family: sans-serif'><b>avg " + enviro.stats.statistics[2].avg.toFixed(1) + "</b></div>");


		co = lp_cons.pointOffset({ x: -0.1, y: -0.2});
		$('#LP_cons').append("<div style='position:absolute;left:" + (co.left + 2) + "px;top:" + (co.top) + "px;color: steelblue; font-family: sans-serif'><b>"+ liveData[ind].properties.phenomenons.Consumption.value.toFixed(1)+" l/h</b></div>");

		co = lp_cons.pointOffset({ x: -2.5, y: enviro.ownTracksStats.statistics[0].max + 2.5});
		$('#LP_cons').append("<div style='position:absolute;left:" + (co.left + 2) + "px;top:" + (co.top-10) + "px;color: black; font-size: xx-large; font-family: sans-serif'>Consumption</div>");


		var lp_co2_options = {
			xaxis: {
				max: 1,
				ticks: 0
			},
			yaxis: {
				max: enviro.ownTracksStats.statistics[1].max,
				ticks: 0
			}
		};
		var lp_co2 = $.plot('#LP_co2', [{
			data: [[0, liveData[ind].properties.phenomenons.CO2.value]],
			bars: {
				show: true,
				fill: 1,
				fillColor: 'steelblue',
				lineWidth: 0
			},
			color: 'steelblue',
			shadowSize: 0
		},{
			data: [[0, enviro.stats.statistics[1].avg], [1, enviro.stats.statistics[1].avg]],
			lines: {
				show: true,
				lineWidth: 3
			},
			color: '#FF0000',
			shadowSize: 4
		}], tp_co2_options);

		var co2 = lp_co2.pointOffset({ x: 1.2, y: enviro.stats.statistics[1].avg});

		// Append it to the placeholder that Flot already uses for positioning

		$('#LP_co2').append("<div style='position:absolute;left:" + (co2.left + 2) + "px;top:" + (co2.top-5) + "px;color:#FF0000; font-family: sans-serif'><b>avg " + enviro.stats.statistics[1].avg.toFixed(1) + "</b></div>");


		co2 = lp_co2.pointOffset({ x: -0.1, y: -0.5});
		$('#LP_co2').append("<div style='position:absolute;left:" + (co2.left + 2) + "px;top:" + (co2.top) + "px;color: steelblue; font-family: sans-serif'><b>"+ liveData[ind].properties.phenomenons.CO2.value.toFixed(1)+" kg/h</b></div>");

		co2 = lp_co2.pointOffset({ x: -0.6, y: enviro.ownTracksStats.statistics[1].max + 5.5});
		$('#LP_co2').append("<div style='position:absolute;left:" + (co2.left + 2) + "px;top:" + (co2.top-10) + "px;color: black; font-size: xx-large; font-family: sans-serif'>CO2</div>");

		/*###########
		End Fourth slide
		#############*/

		}, 5000 * ind);
	})(index);
}

// Clock, showing the duration of driving on the first page
var clock = $('#FP_dur').FlipClock({
    clockFace: 'DailyCounter',
    showSeconds: false
});