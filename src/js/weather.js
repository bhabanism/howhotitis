

function fetchWeatherData() {
	var geolocation = $('#geolocation').val();
	var date = "today";
	var nDays = "1";
	var format = "json";
	var key = "1c2f6d532598d9a7f6e36da80ab77d8df6478e4d"; 	
	var xUrl = "http://api.worldweatheronline.com/free/v1/weather.ashx?q="+geolocation+"&format="+format+"&num_of_days="+nDays+"&date="+date+"&key="+key;
	
	$.ajax({
	  url: xUrl			 
	}).done(function( weatherdata ) {
	    setTemperature(weatherdata.data.current_condition[0].temp_C + " C");	
	    setSkyStatus(weatherdata.data.current_condition[0].weatherDesc[0].value);	    
	    setSkycon(weatherdata.data.current_condition[0].weatherIconUrl[0].value);	    
	    setHumidity(weatherdata.data.current_condition[0].humidity);
	    $('.weatherdesc').show();
	});
 }
 
function setTemperature(value) {
	$('#temperature').html(value);	
}

function setHumidity(value) {
	$('#humidity').html(value);	
}
 
function setSkyStatus(value) {
	$('#sky').html(value);
}

 
function setSkycon(value) {
	$('#skycon').attr('src', value);
}