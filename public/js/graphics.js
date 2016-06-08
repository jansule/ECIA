"use strict"

var FP_speed = new Rickshaw.Graph( {
	element: document.getElementById("FP_speed"),
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
FP_speed.render();

var FP_cons = new Rickshaw.Graph( {
	element: document.getElementById("FP_cons"),
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
FP_cons.render();

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
FP_co2.render();

var clock = $('#FP_dur').FlipClock({
    clockFace: 'DailyCounter',
    showSeconds: false
});
clock.start();

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
SP_speed.render();

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
SP_cons.render();

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
SP_co2.render();

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
TP_speed.render();

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
TP_cons.render();

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
TP_co2.render();

var LP_speed = new Rickshaw.Graph( {
	element: document.getElementById("LP_speed"),
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
LP_speed.render();

var LP_cons = new Rickshaw.Graph( {
	element: document.getElementById("LP_cons"),
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
LP_cons.render();

var LP_co2 = new Rickshaw.Graph( {
	element: document.getElementById("LP_co2"),
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
LP_co2.render();