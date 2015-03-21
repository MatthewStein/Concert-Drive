var location = "Berlin,Germany"; // can also use lat,lon
var radius = 5;

$.getJSON("http://api.bandsintown.com/events/search.json?location=" + location + "&radius=" + radius + "&callback=?&app_id=concert_drive",
    function(data){
        var availableEvents = [];
        data.forEach( function(event) {
            if (event.ticket_status !== "unavailable") {
                availableEvents.push(event);
            }
        });
});

// Structure for JSON from Bands in Town:
//
//[{
//  "id": "5010001",
//  "url": "http://www.bandsintown.com/event/5010001?artist=Skrillex",
//  "datetime": "2012-08-15T18:00:00",
//  "ticket_url": "http://www.bandsintown.com/event/5010001/buy_tickets",
//  "artists": [{
//    "name": "Skrillex",
//     "url": "http://www.bandsintown.com/Skrillex",
//     "mbid": "ae002c5d-aac6-490b-a39a-30aa9e2edf2b"
//  }],
//  "venue": {
//    "city": "Belfast",
//    "name": "Custom House Square Belfast",
//    "latitude": "54.6019150",
//    "region": "Northern Ireland",
//    "country": "United Kingdom",
//    "url": "http://www.bandsintown.com/venue/318603",
//    "id": "318603",
//    "longitude": "-5.9216950"
//  },
//  "status": "new",
//  "ticket_status": "available",
//  "on_sale_datetime": "2012-02-27T09:00:00"
//}]