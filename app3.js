  //Do Not Modify the getMusic function
    function getMusic(){
        var artist = document.getElementById('artist').value;
        itunes.getMusicByArtist(artist).then(drawSongs);
    };

    var songs = getMusic(drawSongs);

    function drawSongs(songs){
        console.log(songs);

        let table = $('.table');
        songs.forEach(function(item, index) {
            table.append($('<tr><td>' + item.title + '</td><td><img src="' + item.albumArt + '"</td><td>' + item.artist + '</td><td>' + item.collection + '</td><td>' + item.price + '</td><td><audio controls class="audio"><source src="' + item.preview + '"></audio></td></tr>'))
        });
    };

