/*********************************************************************************************
 .)    PLAYER
 **********************************************************************************************/
 const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});



function AudioPlayer(_autoPlay, _loop) {
var seekBg = document.getElementById("seek");
  this.volume = 1;
  this.loop = _loop;
  this.autoPlay = _autoPlay;
  let $href = location.hostname; // modificado 20191106
  let $fullurl = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : ''); //agregado el 20200124
  let $base = $fullurl; // modificado 20191106
  let isMobile = false; //initiate as false
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))
    isMobile = true;

  albumsXunorus = [{
      "album": "The last Puestero (2022)",
      "cover": $base + "/TLPtracks/TLPv1.jpg",
      "info": "by Xunorus",
      "cdinfo": "Composiciones del Film Documental The Last Puestero por Xunorus ",
      "link": $base + "/boabdil.html",
      "tags": "solo",
      "fullscore": $base + "/music/elJardinDeBoabdil/score.pdf",
      "fulldownload": $base + "/music/elJardinDeBoabdil/mp3album/album_MP3WRAP.mp3",
      "id": "ejdb",
      "tracks": [{
          "track": "1",
          "title": "The Last Puestero",
          "source": $base + "/TLPtracks/01_thelastpuestero220109.mp3",
          "feat": "by Xunorus"
        },

        {
          "track": "2",
          "title": "Light's slice",
          "source": $base + "/TLPtracks/11-light's slice_220109.mp3",
          "feat": "by Xunorus"
        } 
      ]
    } 

  ]

  
  

  //////////////////////////////////////////////////////
  // METHODS 
  //////////////////////////////////////////////////////

  this.playing = false;
  this.play = function () {
    // playBtn.innerHTML = "<i class='fa fa-pause'></i>";
    this.playing = true;
    this.song.play();
  };

  this.pause = function () {
    // playBtn.innerHTML = "<i class='fa fa-play'></i>";
    this.playing = false;
    this.song.pause();
  };

  let togglePlay = function (event) {
    if (event) event.preventDefault();
    if (this.song.paused) {
      this.play();
      console.log("playing");
    } else {
      this.pause();
      console.log("paused");
    }
  }.bind(this);


  let toggleHeart = function (event) {
    if (event) event.preventDefault();
      $("#likeTrack").toggleClass('trackLiked');
      
      if ($('#likeTrack').hasClass('trackLiked')) {
      console.log('track liked!')
  } else{
    console.log('track Disliked :(')

  }
 
  }.bind(this);


  // document.onkeydown = function (evt) {
  //   if (evt.which == 32) {
  //     togglePlay();

  //   }
  // };


  //fin  INSERCION KEYUP

  //  let formatTime = function(i) {
  formatTime = function (i) { // hecho global para que funcione
    let minutes = Math.floor(i / 60);
    let seconds = Math.floor(i % 60);
    return ((minutes < 10) ? ("0" + minutes) : minutes) + ":" + ((seconds < 10) ? ("0" + seconds) : seconds);
  };

  let getMousePos = function (evt, element) {
    let rect = element.getBoundingClientRect();
    let root = document.documentElement;
    let mouseX = evt.clientX - rect.left - root.scrollLeft;
    let mouseY = evt.clientY - rect.top - root.scrollTop;

    return {
      x: mouseX,
      y: mouseY
    };
  }.bind(this);

  changeTime = function (event) {
    event.preventDefault();
    
    this.song.addEventListener("timeupdate", updateTime, false);
    document.removeEventListener("mousemove", seek, false);
    document.removeEventListener("mouseup", changeTime, false);
    event.preventDefault();
    let mousePos = getMousePos(event, seekBg);
    this.seekTo((mousePos.x / seekBg.offsetWidth) * this.song.duration);
    
    return false;
  }.bind(this);

  startSeek = function (event) {
    event.preventDefault();
    // console.log('startSeek:',event);
    this.song.removeEventListener("timeupdate", updateTime, false);
    document.addEventListener("mousemove", seek, false);
    document.addEventListener("mouseup", changeTime, false);
    return false;
  }.bind(this);

  seek = function (event) {
    event.preventDefault();
    let mousePos = getMousePos(event, seekBg);
    let dragTime = (mousePos.x / seekBg.offsetWidth) * this.song.duration;
    timeLabel.innerHTML = formatTime(dragTime);
    if (Math.round((1 - (dragTime / this.song.duration)) * (seekBg.offsetWidth)) + 3 < timeLabel.offsetWidth / 2) {
      timeLabel.style.left = (seekHolder.offsetWidth - timeLabel.offsetWidth) + "px";
    } else if (Math.round(((dragTime / this.song.duration)) * (seekBg.offsetWidth) + 3) < timeLabel.offsetWidth / 2) {
      timeLabel.style.left = "0px";
    } else {
      timeLabel.style.left = Math.round(((dragTime / this.song.duration)) * (seekBg.offsetWidth) + 3 - timeLabel.offsetWidth / 2) + "px";
    }
    seekFill.style.width = Math.round((dragTime / this.song.duration) * (seekBg.offsetWidth - 2)) + "px";
    seekDrag.style.left = Math.round((dragTime / this.song.duration) * (seekBg.offsetWidth - 2)) + "px";
    return false;
  }.bind(this);

  updateTime = function (event) {
    currentTime.innerHTML = formatTime(this.song.currentTime);
    timeLabel.innerHTML = currentTime.innerHTML;

    if (Math.round((1 - (this.song.currentTime / this.song.duration)) * (seekBg.offsetWidth)) + 3 < timeLabel.offsetWidth / 2) {
      timeLabel.style.left = (seekHolder.offsetWidth - timeLabel.offsetWidth) + "px";
    } else if (Math.round(((this.song.currentTime / this.song.duration)) * (seekBg.offsetWidth) + 3) < timeLabel.offsetWidth / 2) {
      timeLabel.style.left = "0px";
    } else {
      timeLabel.style.left = Math.round(((this.song.currentTime / this.song.duration)) * (seekBg.offsetWidth) + 3 - timeLabel.offsetWidth / 2) + "px";
    }
    seekFill.style.width = Math.round((this.song.currentTime / this.song.duration) * (seekBg.offsetWidth - 2)) + "px";
    seekDrag.style.left = Math.round((this.song.currentTime / this.song.duration) * (seekBg.offsetWidth - 2)) + "px";
  }.bind(this);


  this.seekTo = function (time) {
    console.log('seekTo: ', time);
    let stringTime = time.toString(); 
    this.song.currentTime = stringTime;

  };



  this.resetSong = function (event) {
    if ((event && !this.loop) || !event) {
      this.seekTo(0);
      this.pause();
      console.log('termino la obra/se reseteo el player');
    }
  }.bind(this);


  let init = function () {
    totalTime.innerHTML = formatTime(this.song.duration);


    if (this.autoPlay) {
      this.play();
    }

    playBtn.addEventListener("click", togglePlay, false);
    likeTrack.addEventListener("click", toggleHeart, false);
    seekBg.addEventListener("mousedown", startSeek, false);
    seekFill.addEventListener("mousedown", startSeek, false);
    seekDrag.addEventListener("mousedown", startSeek, false);
    // audio|video.addEventListener("seeking", myScript);

    this.song.addEventListener("timeupdate", updateTime, false);
    this.song.addEventListener("ended", this.resetSong, false);
    console.log('player init executed!');
  }.bind(this);


  
  
  
  //////////////////////////////////////////////////////
  // PLAY RANDOM TRACK
  //////////////////////////////////////////////////////
  let randomAlbum = 0; // the album number
  let randomTrack = Math.floor(Math.random() * (albumsXunorus[randomAlbum].tracks.length)); //aqui elige el track
  let randomTrackSouce = albumsXunorus[randomAlbum].tracks[randomTrack].source;
  let randomTrackTitle = albumsXunorus[randomAlbum].tracks[randomTrack].title;
  let randomTrackInfo = albumsXunorus[randomAlbum].tracks[randomTrack].feat;
  this.song = new Audio(randomTrackSouce); // aqui da play?
  // $('#info').empty(); // Vacia la info del track
  // document.getElementById("info").innerHTML = "<h1 class='afterText tName'>" + randomTrackTitle + "</h1>";
  // $("#info").append("<h2 class='afterText aName'>" + randomTrackInfo + "</h2>");
  
  // info.innerHTML =`<h1 class='afterText tName'>${randomTrackTitle}</h1><h2 class='afterText aName'>${randomTrackInfo}</h2>`;
  
  this.song.addEventListener("canplaythrough", init, false); // UAU 


  
  // hide player initially
  gsap.set('#controls a, #controls span, #seekHolder,.afterText', {
    autoAlpha: 0
  });

  // player opacity to 1
  setTimeout(() => {
    gsap.set('#controls a, #controls span, #seekHolder', {
      autoAlpha: 1
    });


    // shows player UI
    TweenMax.staggerFrom('#controls a, #controls span, #seekHolder', 0.5, {
      opacity: 0,
      x: -20,
      ease: Power2.easeIn
    }, 0.1);

    // textt effect
    setTimeout(() => {
      gsap.set('.afterText', {
        autoAlpha: 1
      });

      $(".afterText").textEffect();

    }, 1200);
  }, 1200);



  // prevent spacebar tubbon to scroll page (it is anoying)
  // window.addEventListener('keydown', function (e) {
  //   if (e.keyCode == 32 && e.target == document.body) {
  //     e.preventDefault();
  //   }
  // });



}
//fin Audioplayer

a = new AudioPlayer(false, false);


// ADD TRACKS

function fmtMSS(s) {
  return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
}
// fetch('https://audius-discovery.nz.modulational.com/v1/users/v7jmY/tracks')
function fetchTracks(json){

fetch("js/tlp.json")
  .then(res => res.json())
  .then(data => {
    console.log(data);

    console.log(data.album, data.cover, data.info, data.tracks);
    let y = data.tracks;
    let x = data.tracks.length;
    console.log('ALBUM NAME: ', data.album);
    console.log('TOTAL TRACKS: ', x);

    for (var i = 0; i < x; i++) {
      let dur = fmtMSS(y[i].duration);
      plList.innerHTML += `
      <li class='track '>
        <div class='plItem'> 
          <span class='plNum'></span> 
          <span class='plTitle'>${y[i].title}</span> 
          <span class='plLength'>${dur}</span>
          <source src="${y[i].source}" type="audio/mpeg"> 
          <span class="plInfo" style="display:none">${y[i].feat}</span>
        </div>
      </li>
      `
    }


    // ////////////////////////////////
    // // muestra tracks
    gsap.from('.tracklist li', 0.5, {
      opacity: 0,
      y: 20,
      ease: Power2.easeInOut,
      stagger: 0.1 //simple stagger of 0.5 seconds
    });


  });
}


  
