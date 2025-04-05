$(document).ready(function () {
  var playlist = [
    {
      title: "goyard",
      artist: "Nettspend",
      oga: "https://files.catbox.moe/7wgef3.ogg",
      poster: "https://files.catbox.moe/k0atg7.png"
    },
    {
      title: "BACK THËN",
      artist: "Yeat",
      oga: "https://files.catbox.moe/q7nauy.ogg",
      poster: "https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2Fdc431596045b63f47d256ad3d626f4d2.1000x1000x1.jpg"
    },
    {
      title: "WTW",
      artist: "Yeat",
      oga: "https://files.catbox.moe/5zh5az.ogg",
      poster: "https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2F29e0cc0219f861c08132e9eaf4ec31de.640x640x1.jpg"
    },
    {
      title: "goyard shopping bag",
      artist: "Playboi Carti, Lil Uzi Vert",
      oga: "https://files.catbox.moe/o7dy8b.ogg",
      poster: "https://lastfm.freetls.fastly.net/i/u/770x0/7b6ea4c1882d87e5c149bbaea8b8801e.jpg#7b6ea4c1882d87e5c149bbaea8b8801e"
    },
    {
      title: "hop out the car hop out the car",
      artist: "heroinsick",
      oga: "https://files.catbox.moe/df4kn9.ogg",
      poster: "https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2F61682c05be89f68e70db4ad53d63f9bd.500x500x1.jpg"
    },
    {
      title: "Vetement Jeans",
      artist: "Lil Uzi Vert, Playboi Carti",
      oga: "https://files.catbox.moe/lh765z.ogg",
      poster: "https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2F08d02b33fed7781693145cd10b16828a.862x862x1.png"
    },
    {
      title: "SKLUB",
      artist: "Yeat",
      oga: "https://files.catbox.moe/cwretk.ogg",
      poster: "https://images.genius.com/d11b5dedc9eefa0c0a9bd5dd53dd02fe.750x750x1.png"
    },
    {
      title: "Excuse My French",
      artist: "Fimiguerreo, Len",
      oga: "https://files.catbox.moe/er6wt0.ogg",
      poster: "https://i1.sndcdn.com/artworks-65aA51pswEkG-0-t500x500.jpg"
    },
    {
      title: "see u tomorrow",
      artist: "Ken Carson",
      oga: "https://files.catbox.moe/lu7zc2.ogg",
      poster: "https://theneedledrop.com/content/images/2024/11/Snapinsta.app_444800816_983794913115114_2416069661191001102_n_1080-1.jpg"
    },
    {
      title: "So What",
      artist: "Ken Carson",
      oga: "https://files.catbox.moe/p1a5wd.ogg",
      poster: "https://images.genius.com/d3a0f08457e58a24e5c4cf357f23b987.300x300x1.png"
    },
    {
      title: "THEY TELL MË",
      artist: "Yeat",
      oga: "https://files.catbox.moe/jbprvx.ogg",
      poster: "https://i.scdn.co/image/ab67616d0000b2738fd4ee592690d0a94caa0045"
    },
    {
      title: "DIFFERENT DAY",
      artist: "Playboi Carti",
      oga: "https://files.catbox.moe/8gepnm.ogg",
      poster: "https://upload.wikimedia.org/wikipedia/commons/7/7b/I_Am_Music_by_Playboi_Carti.jpg"
    },
    {
      title: "TURNMEUP",
      artist: "Yeat",
      oga: "https://files.catbox.moe/f2m4t7.ogg",
      poster: "https://i1.sndcdn.com/artworks-Ezo9zz7a3vIdc6BR-LhvieQ-t500x500.jpg"
    },
    {
      title: "10 10 in a benz",
      artist: "Rhymefest, Kanye West",
      oga: "https://files.catbox.moe/d3akbs.ogg",
      poster: "https://files.catbox.moe/aifmr8.png"
    },
    {
      title: "lil dub",
      artist: "Yeat",
      oga: "https://files.catbox.moe/b5zp8f.ogg",
      poster: "https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2F29e0cc0219f861c08132e9eaf4ec31de.640x640x1.jpg"
    },
    {
      title: "Diëd B4",
      artist: "Yeat",
      oga: "https://files.catbox.moe/ifx0a1.ogg",
      poster: "https://i.scdn.co/image/ab67616d0000b2738bec48cd14271058a813467d"
    },
    {
      title: "Talking 2 A Ghost",
      artist: "OsamaSon",
      oga: "https://files.catbox.moe/l6cnol.ogg",
      poster: "https://m.media-amazon.com/images/I/61zNhn0nPqL._UF1000,1000_QL80_.jpg"
    },
    {
      title: "grinning",
      artist: "saturn, oaf1",
      oga: "https://files.catbox.moe/7um107.ogg",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLT9LTxHLtJau1g96Zh1hDD04klYjdEnVNDQ&s"
    },
    {
      title: "bad idea",
      artist: "quinn, blackwinterwells",
      oga: "https://files.catbox.moe/k6hjn0.ogg",
      poster: "https://i.scdn.co/image/ab67616d0000b27387b13926650da1b8d92401f1"
    },
    {
      title: "Enter The Dragon",
      artist: "Lancey Foux, BNYX®",
      oga: "https://files.catbox.moe/21jp90.ogg",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUfHMMF8wN_TVhLxTDk_nQChiUJ0_p9Lyf7A&s"
    },
    {
      title: "PRETTIEST ONE",
      artist: "Destroy Lonely",
      oga: "https://files.catbox.moe/ay0d3o.ogg",
      poster: "https://i.scdn.co/image/ab67616d0000b273dca2deff544636f1ad1d9d96"
    },
    {
      title: "1093",
      artist: "Yeat",
      oga: "https://files.catbox.moe/2fa3zl.ogg",
      poster: "https://i.scdn.co/image/ab67616d0000b2739567b80f50a5b9f0178ae993"
    },
    {
      title: "Night Time",
      artist: "Yeat",
      oga: "https://files.catbox.moe/lbrsnr.ogg",
      poster: "https://i.scdn.co/image/ab67616d0000b273f273a7856ab03525740ccee9"
    },
    {
      title: "1st Thing 1st",
      artist: "Yeat",
      oga: "https://files.catbox.moe/4q9rva.ogg",
      poster: "https://i.scdn.co/image/ab67616d0000b273f273a7856ab03525740ccee9"
    },
    {
      title: "AMIRI TRENDSETTER",
      artist: "Rich Amiri, OsamaSon",
      oga: "https://files.catbox.moe/sk3zrt.ogg",
      poster: "https://i.scdn.co/image/ab67616d0000b273e20e203e532ab60a61b38fec"
    },
    {
      title: "Not the same",
      artist: "Yeat",
      oga: "https://files.catbox.moe/wlnr6o.ogg",
      poster: "https://i1.sndcdn.com/artworks-hz9qcXdxJ2l56Z8S-UJF6Ig-t500x500.jpg"
    },
    {
      title: "Free Agents",
      artist: "Homixide Gang",
      oga: "https://files.catbox.moe/slfbwr.ogg",
      poster: "https://files.catbox.moe/qh5xs2.png"
    },
    {
      title: "Moshpit Fukit",
      artist: "Yeat",
      oga: "https://files.catbox.moe/9hvtdr.ogg",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbB9qdv98gjgTKjcR5vgEgWeqzQ5Bz-UG0rQ&s"
    },
    {
      title: "Can’t See In",
      artist: "Yeat",
      oga: "https://files.catbox.moe/i82p57.ogg",
      poster: "https://files.catbox.moe/v8jrc2.png"
    },
    {
      title: "Snowed In",
      artist: "Ken Carson, Destroy Lonely",
      oga: "https://files.catbox.moe/bcl8bt.ogg",
      poster: "https://pbs.twimg.com/media/Fjf6EqcWQAAsYy1.jpg"
    },
    {
      title: "THX",
      artist: "Ken Carson",
      oga: "https://files.catbox.moe/h43ovr.ogg",
      poster: "https://upload.wikimedia.org/wikipedia/en/2/26/Ken_Carson_-_More_Chaos.jpg"
    },
    {
      title: "U Kan Do It Too",
      artist: "Playboi Carti",
      oga: "https://files.catbox.moe/nv3o9q.ogg",
      poster: "https://i1.sndcdn.com/artworks-k5TKfiCS3zYqoOWH-IKVxUw-t500x500.jpg"
    },
    {
      title: "Kryptonite",
      artist: "Ken Carson",
      oga: "https://files.catbox.moe/l6xlke.ogg",
      poster: "https://upload.wikimedia.org/wikipedia/en/2/26/Ken_Carson_-_More_Chaos.jpg"
    },
    {
      title: "MUNYUN",
      artist: "Playboi Carti",
      oga: "https://files.catbox.moe/9vakuw.ogg",
      poster: "https://upload.wikimedia.org/wikipedia/commons/7/7b/I_Am_Music_by_Playboi_Carti.jpg"
    },
    {
      title: "PHILLY",
      artist: "Playboi Carti, Travis Scott",
      oga: "https://files.catbox.moe/estzu9.ogg",
      poster: "https://upload.wikimedia.org/wikipedia/commons/7/7b/I_Am_Music_by_Playboi_Carti.jpg"
    },
    {
      title: "OLYMPIAN",
      artist: "Playboi Carti",
      oga: "https://files.catbox.moe/wr2u9z.ogg",
      poster: "https://upload.wikimedia.org/wikipedia/commons/7/7b/I_Am_Music_by_Playboi_Carti.jpg"
    },
    {
      title: "FOMDJ",
      artist: "Playboi Carti",
      oga: "https://files.catbox.moe/cotdud.ogg",
      poster: "https://upload.wikimedia.org/wikipedia/commons/7/7b/I_Am_Music_by_Playboi_Carti.jpg"
    },
    {
      title: "Jim Carrey",
      artist: "Destroy Lonely",
      oga: "https://files.catbox.moe/69jfcu.ogg",
      poster: "https://images.genius.com/301f1fe0f2c3dadfcc2bfc00b44e48fd.1000x1000x1.png"
    },
    {
      title: "Type monëy",
      artist: "Yeat",
      oga: "https://files.catbox.moe/l4ulz8.ogg",
      poster: "https://bloximages.chicago2.vip.townnews.com/utdailybeacon.com/content/tncms/assets/v3/editorial/f/ca/fca728c8-b6c4-11ed-9240-f7ae4dfc550c/63fce9e7b201d.image.jpg"
    },
    {
      title: "5 Star Raver",
      artist: "Destroy Lonely",
      oga: "https://files.catbox.moe/9pb6y9.ogg",
      poster: "https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2F9b6bd7273381f3dd9c08b690fd98fe6a.486x486x1.png"
    },
    {
      title: "Nightcore OG",
      artist: "Ken Carson",
      oga: "https://files.catbox.moe/iadj4c.ogg",
      poster: "https://upload.wikimedia.org/wikipedia/en/f/f5/Ken_Carson_-_A_Great_Chaos.jpg"
    }
  ];

  function preloadNextTrack(index) {
    var nextIndex = (index + 1) % playlist.length;
    var audio = new Audio(playlist[nextIndex].oga);
    audio.preload = "auto";
    var img = new Image();
    img.src = playlist[nextIndex].poster;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(playlist);

  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };

  var options = {
    swfPath: "https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3",
    volumechange: function (event) {
      $(".volume-level").slider("value", event.jPlayer.options.volume);
    },
    timeupdate: function (event) {
      $(".progress").slider("value", event.jPlayer.status.currentPercentAbsolute);
    },
    ended: function () {
      myPlaylist.next();
    },
    play: function (event) {
      preloadNextTrack(myPlaylist.current);
    }
  };

  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  var PlayerData = $(cssSelector.jPlayer).data("jPlayer");

  myPlaylist.next = function () {
    var nextIndex = (myPlaylist.current + 1) % playlist.length;
    myPlaylist.play(nextIndex);
  };

  myPlaylist.previous = function () {
    var prevIndex = (myPlaylist.current - 1 + playlist.length) % playlist.length;
    myPlaylist.play(prevIndex);
  };

  $(document).on("click", ".jp-next", function () {
    myPlaylist.next();
  });

  $(document).on("click", ".jp-previous", function () {
    myPlaylist.previous();
  });

  $(".volume-level").slider({
    animate: "fast",
    max: 1,
    range: "min",
    step: 0.01,
    value: $.jPlayer.prototype.options.volume,
    slide: function (event, ui) {
      $(cssSelector.jPlayer).jPlayer("option", "muted", false);
      $(cssSelector.jPlayer).jPlayer("option", "volume", ui.value);
    }
  });

  $(".progress").slider({
    animate: "fast",
    max: 100,
    range: "min",
    step: 0.1,
    value: 0,
    slide: function (event, ui) {
      var sp = PlayerData.status.seekPercent;
      if (sp > 0) {
        $(cssSelector.jPlayer).jPlayer("playHead", ui.value * (100 / sp));
      } else {
        setTimeout(function () {
          $(".progress").slider("value", 0);
        }, 0);
      }
    }
  });
});
