$( document ).ready( function () {
    $('form').submit(function() {
        event.preventDefault();
        console.log ( 'Submitted!' );
        var cityName = $( '#cityName' ).val ();
        console.log ( cityName );

        var theUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&" + "units=imperial" + openWeatherMapAPI;
        console.log ( theUrl );

        $.get( theUrl, function ( currentTemperature ) {
            console.log ( currentTemperature );
            var currTemp = currentTemperature.main.temp;
            console.log ( currTemp );
            $( "body" ).append( $("<p>Current temperature in " + cityName + " is " + currTemp + " degrees F" + "</p>"));
        }, "json");

    });
    
})