// All credits accorded to https://github.com/wesbos & big thanks !

/* document.addEventListener('keypress', function(e) {
    if (e.keyCode == 65) {
      document.getElementById('65').audio.play();
    }
  }); */

  document.addEventListener('keydown' , event => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!audio) return;
    audio.play();
    })