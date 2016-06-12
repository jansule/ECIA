"use strict"

 var FP_speed = document.getElementById("FP_speed");
 FP_speed.innerHTML = Math.floor(enviro.currentTrack.features[0].properties.phenomenons.Speed.value * 100) / 100 + " KM/H";

console.log(enviro.currentTrack)
var FP_cons = document.getElementById("FP_cons");
// This value is not given in the JSON from envirocar
//FP_cons.innerHTML = Math.floor(enviro.currentTrack.features[0].properties.phenomenons.Consumption.value * 100) / 100 + " L/H"

// random data to display
var FP_co2 = new Rickshaw.Graph( {
	element: document.getElementById("FP_co2"),
	width: 450,
	height: 150,
	renderer: 'bar',
	series: [ 
		{
			data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 } ],
			color: '#4682b4'
		}, {
			data: [ { x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 19 }, { x: 3, y: 15 }, { x: 4, y: 16 } ],
			color: '#9cc1e0'

	} ]
} );
var FP_co2_y = new Rickshaw.Graph.Axis.Y({graph: FP_co2})
FP_co2_y.render();
FP_co2.render();

// Clock, showing the duration of driving
var clock = $('#FP_dur').FlipClock({
    clockFace: 'DailyCounter',
    showSeconds: false
});

var SP_speed = new Rickshaw.Graph( {
	element: document.getElementById("SP_speed"),
	width: 450,
	height: 150,
	renderer: 'bar',
	series: [ 
		{
			data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 } ],
			color: '#4682b4'
		}, {
			data: [ { x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 19 }, { x: 3, y: 15 }, { x: 4, y: 16 } ],
			color: '#9cc1e0'

	} ]
} );
var SP_speed_y = new Rickshaw.Graph.Axis.Y({graph: SP_speed})

var SP_cons = new Rickshaw.Graph( {
	element: document.getElementById("SP_cons"),
	width: 450,
	height: 150,
	renderer: 'bar',
	series: [ 
		{
			data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 } ],
			color: '#4682b4'
		}, {
			data: [ { x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 19 }, { x: 3, y: 15 }, { x: 4, y: 16 } ],
			color: '#9cc1e0'

	} ]
} );
var SP_cons_y = new Rickshaw.Graph.Axis.Y({graph: SP_cons})

var SP_co2 = new Rickshaw.Graph( {
	element: document.getElementById("SP_co2"),
	width: 450,
	height: 150,
	renderer: 'bar',
	series: [ 
		{
			data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 } ],
			color: '#4682b4'
		}, {
			data: [ { x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 19 }, { x: 3, y: 15 }, { x: 4, y: 16 } ],
			color: '#9cc1e0'

	} ]
} );
var SP_co2_y = new Rickshaw.Graph.Axis.Y({graph: SP_co2})

var TP_speed = new Rickshaw.Graph( {
	element: document.getElementById("TP_speed"),
	width: 450,
	height: 150,
	renderer: 'bar',
	series: [ 
		{
			data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 } ],
			color: '#4682b4'
		}, {
			data: [ { x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 19 }, { x: 3, y: 15 }, { x: 4, y: 16 } ],
			color: '#9cc1e0'

	} ]
} );
var TP_speed_y = new Rickshaw.Graph.Axis.Y({graph: TP_speed})

var TP_cons = new Rickshaw.Graph( {
	element: document.getElementById("TP_cons"),
	width: 450,
	height: 150,
	renderer: 'bar',
	series: [ 
		{
			data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 } ],
			color: '#4682b4'
		}, {
			data: [ { x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 19 }, { x: 3, y: 15 }, { x: 4, y: 16 } ],
			color: '#9cc1e0'

	} ]
} );
var TP_cons_y = new Rickshaw.Graph.Axis.Y({graph: TP_cons})

var TP_co2 = new Rickshaw.Graph( {
	element: document.getElementById("TP_co2"),
	width: 450,
	height: 150,
	renderer: 'bar',
	series: [ 
		{
			data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 } ],
			color: '#4682b4'
		}, {
			data: [ { x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 19 }, { x: 3, y: 15 }, { x: 4, y: 16 } ],
			color: '#9cc1e0'

	} ]
} );
var TP_co2_y = new Rickshaw.Graph.Axis.Y({graph: TP_co2})

console.log(enviro.stats)
// average of all users' speed
var LP_speed = new Rickshaw.Graph( {
	element: document.getElementById("LP_speed"),
	width: 450,
	height: 150,
	renderer: 'bar',
	unstack: true,
	series: [ 
		{
			data: [ { x: 0, y: 40 }],
			color: '#4682b4',
			name: 'current'
		}, {
			data: [ { x: 0, y: enviro.stats.statistics[4].avg}],
			color: 'green',
			name: 'average'

	}
	]
} );
var LP_speed_y = new Rickshaw.Graph.Axis.Y({graph: LP_speed})

var LP_cons = new Rickshaw.Graph( {
	element: document.getElementById("LP_cons"),
	width: 450,
	height: 150,
	renderer: 'bar',
	unstack: true,
	series: [ 
		{
			data: [ { x: 0, y: 40 }],
			color: '#4682b4',
			name: 'current'
		}, {
			data: [ { x: 0, y: enviro.stats.statistics[10].avg} ],
			color: 'green',
			name: 'average'

	} ]
} );
var LP_cons_y = new Rickshaw.Graph.Axis.Y({graph: LP_cons})

var LP_co2 = new Rickshaw.Graph( {
	element: document.getElementById("LP_co2"),
	width: 450,
	height: 150,
	renderer: 'bar',
	unstack: true,
	series: [ 
		{
			data: [ { x: 0, y: 40 }],
			color: '#4682b4',
			name: 'current'
		}, {
			data: [ { x: 0, y: enviro.stats.statistics[7].avg} ],
			color: 'green',
			name: 'average'

	} ]
} );
var LP_co2_y = new Rickshaw.Graph.Axis.Y({graph: LP_co2})

function makeGraphs() {
	SP_speed_y.render();
	SP_speed.render();
	SP_cons_y.render();
	SP_cons.render();
	SP_co2_y.render();
	SP_co2.render();
	TP_speed_y.render();
	TP_speed.render();
	TP_cons_y.render();
	TP_cons.render();
	TP_co2_y.render();
	TP_co2.render();
	LP_speed_y.render();
	LP_speed.render();
	LP_cons_y.render();
	LP_cons.render();
	LP_co2_y.render();
	LP_co2.render();
}
makeGraphs();
//TODO: Die Current Daten immer in den Graph pushen, und mit makeGraphs aktualisieren.