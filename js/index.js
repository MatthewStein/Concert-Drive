$(document).ready(function(){
    
var event_queue = [];
var song_queue = [];
var current_event = {};
var current_song = "";

var current_country = "US";

// hardcode car "route" for demo
var locations = ["Berlin,Germany","Munich,Germany","London,England"]
var location_pointer = 0;

var event_recommendations = []; // store events from liked songs
    
// STEP 1: GET UPCOMING EVENTS NEAR CURRENT LOCATION
    
function repopulateEvents(location, radius, callback) {
    $.getJSON("http://api.bandsintown.com/events/search.json?location="+location+"&radius="+radius+"&callback=?&app_id=concert_drive",
    function(data){
        data.forEach( function(event) {
            if (event.ticket_status !== "unavailable") {
                event_queue.push(event);
            }
        });
        console.log(JSON.stringify(event_queue));
        callback();
    });
};
    
// Structure for JSON from Bandsintown:
//
//[{
//  "id": "5010001",
//  "url": "http://www.bandsintown.com/event/5010001?artist=Skrillex",
//  "datetime": "2012-08-15T18:00:00",
//  "ticket_url": "http://www.bandsintown.com/event/5010001/buy_tickets",
//  "artists": [{
//     "name": "Skrillex",
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


function generatePlaylist() {
    for (var i=0; i<event_queue.length; i++) {
        var concert = event_queue[i];
        var name = concert.artists[0].name.replace(/\s/g,'+');
        $.ajax({
            url: "https://api.spotify.com/v1/search?q="+name+"&type=artist",
            success: function(data) {                                                       
                var artist = data.artists.items[0];
                if (artist !== undefined) {
                    var artist_info = [artist.name, artist.id, artist.genres];
                    // console.log(artist_info);
                    // event_queue[i].information = artist_info;
                    
                    $.ajax({
                        url: "https://api.spotify.com/v1/artists/"+artist.id+"/top-tracks?country="+current_country, 
                        success: function(data){
                            if (data.tracks[0] !== undefined) {
                                var song_preview = data.tracks[0].preview_url;
                                // event_queue[i].song_url = song_preview;
                                song_queue.push(song_preview);
                                console.log(song_preview);
                            }
                        }
                    });
                };
            }
        });
    }
};
        
repopulateEvents("Budapest,Hungary",1,generatePlaylist);

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


// UI FUNCTIONALITY FOR CAR SIMULATION
$("#refresh-map").click(function() {
    location_pointer += 1;
    event_queue = []; // clear past events
    song_queue = [];
    repopulateEvents(locations[location_pointer],1.5,generatePlaylist);
});

var audioObject = undefined;

function nextTrack() {
    console.log("next track");
    if (event_queue.length > 0) {
        current_event = event_queue.shift();
        current_song = song_queue.shift();
        console.log(current_song);
        if (audioObject) {
            audioObject.pause();
        }
        audioObject = new Audio(current_song);
        audioObject.pause();
        audioObject.play();
    }
};

$("#play-music").click(function() {
    nextTrack();
});

$("#pause-music").click(function() {
    audioObject.pause();
});

$("#like-button").click(function() {
    console.log("like!");
    event_recommendations.push(current_event);
    console.log(JSON.stringify(event_recommendations));
    nextTrack();
});

$("#skip-button").click(function() {
    console.log("dislike!");
    nextTrack();
    // add genre to negative preferences - later
});

$(audioObject).on('ended', function() {
    nextTrack();
});

});