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
	var sameCarStats;

		$.ajax({
			type: 'get',
			url: 'https://envirocar.org/api/stable/tracks/575e5184e4b0a69192ac65d1',
			success: function(xhr, textStatus, data){
				currentTrack = JSON.parse(data.responseText);

				$.ajax({
					type: 'get',
					url: 'https://envirocar.org/api/stable/sensors/' + currentTrack.properties.sensor.properties.id + '/statistics',
					success: function(xhr, textStatus, data){
						sameCarStats = JSON.parse(data.responseText);
						$.ajax({
						type: 'get',
						url: 'https://envirocar.org/api/stable/tracks',
						success: function(xhr, textStatus, data){
							var _parsedResponse = JSON.parse(data.responseText);
							ids = _parsedResponse.tracks;

									for(var index in ids){
										

										$.ajax({
											type: 'get',
											url: 'https://envirocar.org/api/stable/tracks/' + ids[index].id,
											success: function(xhr, textStatus, data){
												var _parsedTrack = JSON.parse(data.responseText);
												if(_parsedTrack.properties.sensor.properties.model == currentTrack.properties.sensor.properties.model){
													$.ajax({
														type: 'get',
														url: 'https://envirocar.org/api/stable/tracks/' +_parsedTrack.properties.id+ '/statistics',
														success: function(xhr, textStatus, data){
															sameCar.push(JSON.parse(data.responseText));
														},
														error: function(textStatus, errorThrown){
															console.log(errorThrown);
														}
													})
												}

											},
											error: function(textStatus, errorThrown){
												console.log(errorThrown);
											}
										});
										
									}
									setTimeout(function(){
										console.log(sameCar);
										console.log(sameCar.length);
										sameCar = sameCar.slice(0,3);
										console.log(sameCar.length);

										$('#current').text(JSON.stringify(currentTrack));
										$('#sameCar').text(JSON.stringify(sameCar));
										$('#own').text(JSON.stringify(sameCarStats));
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
				
			},
			error: function(textStatus, errorThrown){
				console.log(errorThrown);
			}
		});		
				

	


});
