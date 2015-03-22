$(document).ready(function(){
    
var event_queue = [{"artists":[{"name":"Boston Bach Birthday 330","mbid":null,"url":"http://www.bandsintown.com/BostonBachBirthday330"}],"id":9403734,"ticket_url":"http://www.bandsintown.com/event/9403734/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.074141,"name":"First Lutheran Church of Boston","id":1700966,"country":"United States","region":"MA","latitude":42.353797,"city":"Boston","url":"http://www.bandsintown.com/venue/1700966"},"ticket_status":"available","datetime":"2015-03-21T09:00:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9403734?app_id=concert_drive"},{"artists":[{"name":"Andrew Jackson Jihad","mbid":"5e1dbdb2-87ac-41ff-9960-4a42a872327a","url":"http://www.bandsintown.com/AndrewJacksonJihad"},{"name":"THE SMITH STREET BAND","mbid":null,"url":"http://www.bandsintown.com/TheSmithStreetBand"},{"name":"Chumped","mbid":null,"url":"http://www.bandsintown.com/Chumped"},{"name":"Jeff Rosenstock","mbid":null,"url":"http://www.bandsintown.com/JeffRosenstock"}],"id":9076298,"ticket_url":"http://www.bandsintown.com/event/9076298/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.06527,"name":"Royale","id":1084502,"country":"United States","region":"MA","latitude":42.349838,"city":"Boston","url":"http://www.bandsintown.com/venue/1084502"},"ticket_status":"available","datetime":"2015-03-21T17:00:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9076298?app_id=concert_drive"},{"artists":[{"name":"Thomas Anderson Band","mbid":null,"url":"http://www.bandsintown.com/ThomasAndersonBand"}],"id":9338144,"ticket_url":"http://www.bandsintown.com/event/9338144/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.0545731,"name":"Hard Rock Cafe","id":1172302,"country":"United States","region":"MA","latitude":42.3607101,"city":"Boston","url":"http://www.bandsintown.com/venue/1172302"},"ticket_status":"available","datetime":"2015-03-21T19:45:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9338144?app_id=concert_drive"},{"artists":[{"name":"Miss Jennifer","mbid":null,"url":"http://www.bandsintown.com/MissJennifer"}],"id":9542964,"ticket_url":"http://www.bandsintown.com/event/9542964/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.065163,"name":"CANDIBAR","id":2461943,"country":"United States","region":"MA","latitude":42.349892,"city":"Boston","url":"http://www.bandsintown.com/venue/2461943"},"ticket_status":"available","datetime":"2015-03-21T22:00:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9542964?app_id=concert_drive"},{"artists":[{"name":"DJ CASE","mbid":null,"url":"http://www.bandsintown.com/DjCase"}],"id":9552023,"ticket_url":"http://www.bandsintown.com/event/9552023/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.0647101,"name":"Tunnel","id":2004148,"country":"United States","region":"MA","latitude":42.3510242,"city":"Boston","url":"http://www.bandsintown.com/venue/2004148"},"ticket_status":"available","datetime":"2015-03-21T22:00:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9552023?app_id=concert_drive"},{"artists":[{"name":"Fort Romeau","mbid":null,"url":"http://www.bandsintown.com/FortRomeau"},{"name":"Matt McNeill","mbid":null,"url":"http://www.bandsintown.com/MattMcneill"}],"id":9500060,"ticket_url":"http://www.bandsintown.com/event/9500060/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.0602778,"name":"Good Life","id":764148,"country":"United States","region":"MA","latitude":42.3583333,"city":"Boston","url":"http://www.bandsintown.com/venue/764148"},"ticket_status":"available","datetime":"2015-03-21T22:00:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9500060?app_id=concert_drive"},{"artists":[{"name":"Bamboora","mbid":null,"url":"http://www.bandsintown.com/Bamboora"}],"id":9390845,"ticket_url":"http://www.bandsintown.com/event/9390845/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.0658078,"name":"Whiskey Saigon","id":2004069,"country":"United States","region":"MA","latitude":42.3524123,"city":"Boston","url":"http://www.bandsintown.com/venue/2004069"},"ticket_status":"available","datetime":"2015-03-21T22:00:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9390845?app_id=concert_drive"},{"artists":[{"name":"Sander Kleinenberg","mbid":"96ca75af-d011-4cf0-aa92-3d48521ff615","url":"http://www.bandsintown.com/SanderKleinenberg"}],"id":9398930,"ticket_url":"http://www.bandsintown.com/event/9398930/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.052838,"name":"Prime","id":1532594,"country":"United States","region":"MA","latitude":42.3571175,"city":"Boston","url":"http://www.bandsintown.com/venue/1532594"},"ticket_status":"available","datetime":"2015-03-21T23:00:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9398930?app_id=concert_drive"},{"artists":[{"name":"Steve Porter","mbid":"2bf695b4-61b5-4999-b152-681f18e76f30","url":"http://www.bandsintown.com/StevePorter"},{"name":"Chris Micali","mbid":"0c0e5ee0-d55e-494f-b6ed-638b41f809fc","url":"http://www.bandsintown.com/ChrisMicali"},{"name":"Eli Wilkie","mbid":null,"url":"http://www.bandsintown.com/EliWilkie"},{"name":"Nightriders","mbid":"de928019-6a1c-4a4f-8f3d-a6f6b07269f5","url":"http://www.bandsintown.com/Nightriders"},{"name":"Hush & Bons","mbid":null,"url":"http://www.bandsintown.com/HushAndBons"},{"name":"Chris Reavey","mbid":null,"url":"http://www.bandsintown.com/ChrisReavey"},{"name":"Fernando Bairos","mbid":null,"url":"http://www.bandsintown.com/FernandoBairos"}],"id":9545926,"ticket_url":"http://www.bandsintown.com/event/9545926/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.070224,"name":"RISE AFTER-HOURS","id":1697271,"country":"United States","region":"MA","latitude":42.350062,"city":"Boston","url":"http://www.bandsintown.com/venue/1697271"},"ticket_status":"available","datetime":"2015-03-21T23:59:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9545926?app_id=concert_drive"},{"artists":[{"name":"ET Honor Awards","mbid":null,"url":"http://www.bandsintown.com/EtHonorAwards"}],"id":9525154,"ticket_url":"http://www.bandsintown.com/event/9525154/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.0545731,"name":"Hard Rock Cafe","id":1172302,"country":"United States","region":"MA","latitude":42.3607101,"city":"Boston","url":"http://www.bandsintown.com/venue/1172302"},"ticket_status":"available","datetime":"2015-03-22T16:00:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9525154?app_id=concert_drive"},{"artists":[{"name":"Don Felder","mbid":"49ee6f7f-2c69-42d8-9c06-253c408f72a8","url":"http://www.bandsintown.com/DonFelder"}],"id":8981756,"ticket_url":"http://www.bandsintown.com/event/8981756/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.064916,"name":"Wilbur Theatre","id":291030,"country":"United States","region":"MA","latitude":42.350314,"city":"Boston","url":"http://www.bandsintown.com/venue/291030"},"ticket_status":"available","datetime":"2015-03-22T19:30:00","on_sale_datetime":"2014-11-19T20:43:37","url":"http://www.bandsintown.com/event/8981756?app_id=concert_drive"},{"artists":[{"name":"The Prototypes","mbid":"b047f834-e2cd-4f31-a324-fefbfc080c15","url":"http://www.bandsintown.com/ThePrototypes"}],"id":9282775,"ticket_url":"http://www.bandsintown.com/event/9282775/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.0602778,"name":"City Of Gold ","id":2607893,"country":"United States","region":"MA","latitude":42.3583333,"city":"Boston","url":"http://www.bandsintown.com/venue/2607893"},"ticket_status":"available","datetime":"2015-03-22T22:00:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9282775?app_id=concert_drive"},{"artists":[{"name":"Neil Diamond","mbid":"a42d3fd5-55de-4206-86c3-4fbb5404018f","url":"http://www.bandsintown.com/NeilDiamond"},{"name":"Neil Diamond 2015 World Tour","mbid":null,"url":"http://www.bandsintown.com/NeilDiamond2015WorldTour"},{"name":"Neil Diamond World Tour 2015","mbid":null,"url":"http://www.bandsintown.com/NeilDiamondWorldTour2015"}],"id":8765616,"ticket_url":"http://www.bandsintown.com/event/8765616/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.0602778,"name":"TD Garden","id":275842,"country":"United States","region":"MA","latitude":42.3583333,"city":"Boston","url":"http://www.bandsintown.com/venue/275842"},"ticket_status":"available","datetime":"2015-03-23T20:00:00","on_sale_datetime":"2014-09-30T13:43:02","url":"http://www.bandsintown.com/event/8765616?app_id=concert_drive"},{"artists":[{"name":"Fifth Harmony","mbid":null,"url":"http://www.bandsintown.com/FifthHarmony"},{"name":"Jasmine V","mbid":null,"url":"http://www.bandsintown.com/JasmineV"},{"name":"Jacob Whitesides","mbid":null,"url":"http://www.bandsintown.com/JacobWhitesides"}],"id":9189533,"ticket_url":"http://www.bandsintown.com/event/9189533/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.064916,"name":"Wilbur Theatre","id":291030,"country":"United States","region":"MA","latitude":42.350314,"city":"Boston","url":"http://www.bandsintown.com/venue/291030"},"ticket_status":"available","datetime":"2015-03-24T19:00:00","on_sale_datetime":"2009-09-12T20:00:00","url":"http://www.bandsintown.com/event/9189533?app_id=concert_drive"},{"artists":[{"name":"Laura Cortese","mbid":"66752368-2698-4c38-9be3-b7be18bb02f6","url":"http://www.bandsintown.com/LauraCortese"}],"id":9510719,"ticket_url":"http://www.bandsintown.com/event/9510719/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.0602778,"name":"Concert Window","id":2253126,"country":"United States","region":"MA","latitude":42.3583333,"city":"Boston","url":"http://www.bandsintown.com/venue/2253126"},"ticket_status":"available","datetime":"2015-03-24T21:00:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9510719?app_id=concert_drive"},{"artists":[{"name":"On an On","mbid":"394a213b-2b69-4d67-a3f4-34fa028f66f2","url":"http://www.bandsintown.com/OnAnOn"},{"name":"Big Data","mbid":null,"url":"http://www.bandsintown.com/BigData"}],"id":9196838,"ticket_url":"http://www.bandsintown.com/event/9196838/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.0602778,"name":"The Sinclair","id":1833870,"country":"United States","region":"MA","latitude":42.3583333,"city":"Boston","url":"http://www.bandsintown.com/venue/1833870"},"ticket_status":"available","datetime":"2015-03-25T19:00:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9196838?app_id=concert_drive"},{"artists":[{"name":"CHAPPO","mbid":"2f5fc3db-2771-4bf6-8281-ec3f959bc450","url":"http://www.bandsintown.com/CHAPPO"}],"id":9322213,"ticket_url":"http://www.bandsintown.com/event/9322213/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.0602778,"name":"The Sinclair","id":1833870,"country":"United States","region":"MA","latitude":42.3583333,"city":"Boston","url":"http://www.bandsintown.com/venue/1833870"},"ticket_status":"available","datetime":"2015-03-25T19:00:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9322213?app_id=concert_drive"},{"artists":[{"name":"18th & Addison","mbid":null,"url":"http://www.bandsintown.com/18thAndAddison"}],"id":9153795,"ticket_url":"http://www.bandsintown.com/event/9153795/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.073035,"name":"The Spot","id":1025366,"country":"United States","region":"MA","latitude":42.351649,"city":"Boston","url":"http://www.bandsintown.com/venue/1025366"},"ticket_status":"available","datetime":"2015-03-26T17:00:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9153795?app_id=concert_drive"},{"artists":[{"name":"New York Funk Exchange","mbid":null,"url":"http://www.bandsintown.com/NewYorkFunkExchange"}],"id":9295223,"ticket_url":"http://www.bandsintown.com/event/9295223/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.0602778,"name":"Johnny D's","id":2611459,"country":"United States","region":"MA","latitude":42.3583333,"city":"Boston","url":"http://www.bandsintown.com/venue/2611459"},"ticket_status":"available","datetime":"2015-03-26T19:00:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9295223?app_id=concert_drive"},{"artists":[{"name":"Stevie Jenko","mbid":null,"url":"http://www.bandsintown.com/StevieJenko"}],"id":9450341,"ticket_url":"http://www.bandsintown.com/event/9450341/buy_tickets?app_id=concert_drive","venue":{"longitude":-71.0602778,"name":"Wentworth College","id":2592315,"country":"United States","region":"MA","latitude":42.3583333,"city":"Boston","url":"http://www.bandsintown.com/venue/2592315"},"ticket_status":"available","datetime":"2015-03-26T20:30:00","on_sale_datetime":null,"url":"http://www.bandsintown.com/event/9450341?app_id=concert_drive"}];
var current_country = "US";
    
// STEP 1: GET UPCOMING EVENTS NEAR CURRENT LOCATION
    
function repopulateEvents(location, radius) {
    $.getJSON("http://api.bandsintown.com/events/search.json?location="+location+"&radius="+radius+"&callback=?&app_id=concert_drive",
    function(data){
        data.forEach( function(event) {
            if (event.ticket_status !== "unavailable") {
                event_queue.push(event);
            }
        });
        console.log(JSON.stringify(event_queue));
    });
};

//repopulateEvents("Boston,MA",1);
    
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
    event_queue.forEach(function(event) {
        var name = event.artists[0].name.replace(/\s/g,'+');
        // console.log(name);
        $.ajax({
            url: "https://api.spotify.com/v1/search?q="+name+"&type=artist",
            success: function(data) {                                                       
                var artist = data.artists.items[0];
                if (artist !== undefined) {
                    var artist_info = [artist.name, artist.id, artist.genres];
                    // console.log(artist_info);
                    event.information = artist_info;
                    
                    $.ajax({
                        url: "https://api.spotify.com/v1/artists/"+artist.id+"/top-tracks?country="+current_country, 
                        success: function(data){
                            var song_preview = data.tracks[0].preview_url;
                            event.song_url = song_preview;
                            // console.log(song_preview);
                        }
                    });
                }
            }
        });
    });
};
                   
generatePlaylist();

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