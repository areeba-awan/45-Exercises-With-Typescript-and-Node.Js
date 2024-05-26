"use strict";
// ASSIGNMENT # 40 (ALBUM);
// DEFINE THE make_album FUNCTION
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// CALLING THREE FUNCTIONS AND CREATING 3 VARIABLES WITH DIFFERENT VALUES
let album1 = make_album("Areeba", "Album title 1");
let album2 = make_album("Laiba", "Album title 2");
// CALLING A make_album WITH 3RD PARAMETER
let album3 = make_album("Anaya", "Album title 3", 10);
// PRINTING THE VARIABLES 
console.log(album1);
console.log(album2);
console.log(album3);
