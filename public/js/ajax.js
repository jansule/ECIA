$(document).ready(function(){
	//GET all trackIds --> https://envirocar.org/api/stable/tracks/
	//GET all statistics --> https://envirocar.org/api/stable/statistics/
	//GET own track --> https://envirocar.org/api/stable/tracks/:trackId
	var ids;
	var tracks = [];
	var stats;
	var currentTrack;
	var ownTracks = [];
	var sameCar = [];
	$.ajax({
		type: 'get',
		url: 'https://envirocar.org/api/stable/tracks',
		success: function(xhr, textStatus, data){
			var _parsedResponse = JSON.parse(data.responseText);
			ids = _parsedResponse.tracks;




			$.ajax({
				type: 'get',
				url: 'https://envirocar.org/api/stable/statistics/',
				success: function(xhr, textStatus, data){
					stats = JSON.parse(data.responseText);
					for(index in ids){



						$.ajax({
							type: 'get',
							url: 'https://envirocar.org/api/stable/tracks/' + ids[index].id,
							success: function(xhr, textStatus, data){
								var _parsedTrack = JSON.parse(data.responseText);
								tracks.push(_parsedTrack);
								if((index != 0) && (_parsedTrack.properties.sensor.properties.model == tracks[0].properties.sensor.properties.model)){
									sameCar.push(_parsedTrack);
								}

							},
							error: function(textStatus, errorThrown){
								console.log(errorThrown);
							}
						});
					}

					setTimeout(function(){
						currentTrack = tracks[0];
						for(var i=1; i<=10; i++){
							ownTracks.push(tracks[i]);
						}
						tracks.splice(0, 11);
						$('#stats').text(JSON.stringify(stats));
						$('#current').text(JSON.stringify(currentTrack));
						$('#sameCar').text(JSON.stringify(sameCar));
						$('#own').text(JSON.stringify(ownTracks));


						for(index in currentTrack.features){
							(function(ind){
								setTimeout(function(){

									/*
									*
									*
									##############################################################
									##############################################################
									#### Put here code for calculating live stats and display ####
									##############################################################
									##############################################################
									*
									*/
									//console.log('Coordinates: ' + currentTrack.features[ind].geometry.coordinates[0] + ' ' + currentTrack.features[ind].geometry.coordinates[1]);
								}, 5000 * ind);
							})(index);
						}
					}, 5000);
						
						

				},
				error: function(textStatus, errorThrown){
					console.log(errorThrown);
				}
			});


		},
		error: function(textStatus, errorThrown){
			console.log(errorThrown);	
		}
	});


	


});
