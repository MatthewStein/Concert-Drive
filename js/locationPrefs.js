$(document).ready(function(){
    
// STEP 1: GET UPCOMING EVENTS NEAR CURRENT LOCATION
    
    // To-do:
    // - update availableEvents each time location changes
    // - figure out optimal radius, based on city?
    
var location = "Berlin,Germany"; // can also use lat,lon
var radius = 5;

var availableEvents = [];
    
$.getJSON("http://api.bandsintown.com/events/search.json?location=" + location + "&radius=" + radius + "&callback=?&app_id=concert_drive",
    function(data){
        data.forEach( function(event) {
            if (event.ticket_status !== "unavailable") {
                availableEvents.push(event);
            }
        });
});

// Structure for JSON from Bandsintown:
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
    
// STEP 2: GET TOP MUSIC FROM THOSE BANDS
    
    // To-do:
    // - sort bands based on $$ (not now) or weighted genre preferences
    // - get top songs for each artist from Spotify API
    // - add snippets of songs to media player queue
    
    
// STEP 3: ACCEPT AND INTERPRET USER FEEDBACK
    
    // To-do:
    // - when user likes song:
    //      - UI preference to either move onto next song immediately or play to end
    //      - save concert to recommended events
    //      - remember genre/artist positively in music preferences
    // - when user dislikes song:
    //      - stop playing song
    //      - rember genre/artist negatively in music preferences
    // - if we run out of songs, rerun query with larger radius? or date more in future?
    
});