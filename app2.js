//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
};


function thisForEach(item, index) {
    songTable.append($('<tr><td>' + song.trackName + '</td><td>' + song.artworkUrl60 + '</td><td>' + song.artistName + '</td><td>' + song.collectionName + '</td><td>' + song.collectionPrice + '</td><td>' + song.previewUrl + '</td></tr>'))
};

function drawSongs() {

    var songList = getTunes();

    console.log(songList);

    let songTable = $('.table');
    songList.forEach(thisForEach(item, index));

};

function getTunes() {

};
