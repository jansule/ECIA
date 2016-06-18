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
			FP_speed.innerHTML = Math.floor(liveData[ind].properties.phenomenons.Speed.value * 100) / 100 + " km/h";
			FP_cons.innerHTML = Math.floor(liveData[ind].properties.phenomenons.Consumption.value * 100) / 100 + " l/h"
			FP_CO2.innerHTML = Math.floor(liveData[ind].properties.phenomenons.CO2.value * 100) / 100 + " kg/h";
			document.getElementById('SP_speed').innerHTML = "";
			SP_speed = new Rickshaw.Graph( {
				element: document.getElementById("SP_speed"),
				width: 450,
				height: 150,
				renderer: 'bar',
				unstack: true,
				series: [ 
					{
						data: [ { x: 0, y: liveData[ind].properties.phenomenons.Speed.value} ],
						color: '#0072ff',
						name: 'current'
					}, {
						data: [ { x: 0, y: enviro.ownTracksStats.statistics[0].avg} ],
						color: '#708090',
						name: 'average'

				} ]
			} );
			SP_speed_y = new Rickshaw.Graph.Axis.Y({graph: SP_speed})
			SP_speed_y.render();
			SP_speed.render();
			
			document.getElementById('SP_cons').innerHTML = "";
			SP_cons = new Rickshaw.Graph( {
				element: document.getElementById("SP_cons"),
				width: 450,
				height: 150,
				renderer: 'bar',
				unstack: true,
				series: [ 
					{
						data: [ { x: 0, y: liveData[ind].properties.phenomenons.Consumption.value} ],
						color: '#0072ff',
						name: 'current'
					}, {
						data: [ { x: 0, y: enviro.ownTracksStats.statistics[2].avg} ],
						color: '#708090',
						name: 'average'

				} ]
			} );
			SP_cons_y = new Rickshaw.Graph.Axis.Y({graph: SP_cons})
			SP_cons_y.render();
			SP_cons.render();

			document.getElementById('SP_co2').innerHTML = "";
			SP_co2 = new Rickshaw.Graph( {
				element: document.getElementById("SP_co2"),
				width: 450,
				height: 150,
				renderer: 'bar',
				unstack: true,
				series: [ 
					{
						data: [ { x: 0, y: liveData[ind].properties.phenomenons.CO2.value} ],
						color: '#0072ff',
						name: 'current'
					}, {
						data: [ { x: 0, y: enviro.ownTracksStats.statistics[1].avg} ],
						color: '#708090',
						name: 'average'
				} ]
			} );
			SP_co2_y = new Rickshaw.Graph.Axis.Y({graph: SP_co2})
			SP_co2_y.render();
			SP_co2.render();
			document.getElementById('TP_speed').innerHTML = "";
			TP_speed = new Rickshaw.Graph( {
				element: document.getElementById("TP_speed"),
				width: 450,
				height: 150,
				renderer: 'bar',
				unstack: true,
				series: [ 
					{
						data: [ { x: 0, y: calcLiveAverage(liveData.slice(0, ind + 1)).avgSpeed} ],
						color: '#0072ff',
						name: 'avg_track'
					}, {
						data: [ { x: 0, y: enviro.sameCarStats.statistics[0].avg} ],
						color: '#708090',
						name: 'same_car'

				} ]
			} );
			TP_speed_y = new Rickshaw.Graph.Axis.Y({graph: TP_speed})
			TP_speed.render();
			TP_speed_y.render();
			
			document.getElementById('TP_cons').innerHTML = "";
			TP_cons = new Rickshaw.Graph( {
				element: document.getElementById("TP_cons"),
				width: 450,
				height: 150,
				renderer: 'bar',
				unstack:true,
				series: [ 
					{
						data: [ { x: 0, y: calcLiveAverage(liveData.slice(0, ind + 1)).avgConsumption} ],
						color: '#0072ff'
					}, {
						data: [ { x: 0, y: enviro.sameCarStats.statistics[2].avg} ],
						color: '#708090'

				} ]
			} );
			TP_cons_y = new Rickshaw.Graph.Axis.Y({graph: TP_cons})
			TP_cons.render();
			TP_cons_y.render();

			document.getElementById('TP_co2').innerHTML = "";
			TP_co2 = new Rickshaw.Graph( {
				element: document.getElementById("TP_co2"),
				width: 450,
				height: 150,
				renderer: 'bar',
				unstack: true,
				series: [ 
					{
						data: [ { x: 0, y: calcLiveAverage(liveData.slice(0, ind + 1)).avgCo2} ],
						color: '#0072ff'
					}, {
						data: [ { x: 0, y: enviro.sameCarStats.statistics[1].avg} ],
						color: '#708090'

				} ]
			} );
			TP_co2_y = new Rickshaw.Graph.Axis.Y({graph: TP_co2})
			TP_co2.render();
			TP_co2_y.render();
			
			// average of all users' speed
			document.getElementById('LP_speed').innerHTML = "";
			LP_speed = new Rickshaw.Graph( {
				element: document.getElementById("LP_speed"),
				width: 450,
				height: 150,
				renderer: 'bar',
				unstack: true,
				series: [ 
					{
						data: [ { x: 0, y: liveData[ind].properties.phenomenons.Speed.value}],
						color: '#0072ff',
						name: 'current'
					}, {
						data: [ { x: 0, y: enviro.stats.statistics[0].avg}],
						color: '#708090',
						name: 'average'

				}
				]
			} );
			LP_speed_y = new Rickshaw.Graph.Axis.Y({graph: LP_speed})
			LP_speed.render();
			LP_speed_y.render();

			document.getElementById('LP_cons').innerHTML = "";
			LP_cons = new Rickshaw.Graph( {
				element: document.getElementById("LP_cons"),
				width: 450,
				height: 150,
				renderer: 'bar',
				unstack: true,
				series: [ 
					{
						data: [ { x: 0, y: liveData[ind].properties.phenomenons.Consumption.value}],
						color: '#0072ff',
						name: 'current'
					}, {
						data: [ { x: 0, y: enviro.stats.statistics[2].avg} ],
						color: '#708090',
						name: 'average'

				} ]
			} );
			LP_cons_y = new Rickshaw.Graph.Axis.Y({graph: LP_cons})
			LP_cons.render();
			LP_cons_y.render();

			document.getElementById('LP_co2').innerHTML = "";
			LP_co2 = new Rickshaw.Graph( {
				element: document.getElementById("LP_co2"),
				width: 450,
				height: 150,
				renderer: 'bar',
				unstack: true,
				series: [ 
					{
						data: [ { x: 0, y: liveData[ind].properties.phenomenons.CO2.value }],
						color: '#0072ff',
						name: 'current'
					}, {
						data: [ { x: 0, y: enviro.stats.statistics[1].avg} ],
						color: '#708090',
						name: 'average'

				} ]
			} );
			LP_co2_y = new Rickshaw.Graph.Axis.Y({graph: LP_co2});
			LP_co2.render();
			LP_co2_y.render();

			
		}, 5000 * ind);
	})(index);
}

// Clock, showing the duration of driving on the first page
var clock = $('#FP_dur').FlipClock({
    clockFace: 'DailyCounter',
    showSeconds: false
});