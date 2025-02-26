$(document).ready(function () {
  var playlist = [
    {
      title: "goyard",
      artist: "Nettspend",
      oga: "https://files.catbox.moe/7wgef3.ogg",
      poster: "https://media.discordapp.net/attachments/1272005855788798065/1343981644150866045/14faf1ff-d118-440c-abf8-ff5818aaee6a.png?ex=67bf3ff1&is=67bdee71&hm=ae9465bcce7175656df3e7fc4bf8e104c6716eb1d12d527fcb9c616f1f2072e7&=&width=647&height=671"
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
      artist: "Playboi Carti, Lil Uzi Vert",
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
      title: "UR THE MOON",
      artist: "Playboi Carti",
      oga: "https://files.catbox.moe/8gepnm.ogg",
      poster: "https://i.scdn.co/image/ab67616d0000b27312b97cf843c0dfd62b10254f"
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
