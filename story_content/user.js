function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5iRZf40GxXS":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

