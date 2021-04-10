const currentPhoto = document.getElementById("photograph");

function changePic() {
  if(currentPhoto.getAttribute("src") ==  "Vettel1a.jpg") {
    console.log("Changing Vettel1a to Vettel1b!")
    currentPhoto.src = "Vettel1b.jpg"
  } else if(currentPhoto.getAttribute("src") ==  "Vettel1b.jpg") {
    console.log("Changing Vettel1b to Vettel1c!")
    currentPhoto.src = "Vettel1c.jpg"
  } else if(currentPhoto.getAttribute("src") ==  "Vettel1c.jpg") {
    console.log("Changing Vettel1c to Vettel1d!")
    currentPhoto.src = "Vettel1d.jpg"
  } else if(currentPhoto.getAttribute("src") ==  "Vettel1d.jpg") {
    console.log("Changing Vettel1d to Vettel1e!")
    currentPhoto.src = "Vettel1e.jpg"
  } else if(currentPhoto.getAttribute("src") ==  "Vettel1e.jpg") {
    console.log("Changing Vettel1e to Vettel1f!")
    currentPhoto.src = "Vettel1f.jpg"
  } else {
    console.log("Changing Vettel1f to Vettel1a!")
    currentPhoto.src = "Vettel1a.jpg"
  }
}

setInterval(changePic, 3000)

const overviewText = document.getElementById("overview-text");
const career1Text = document.getElementById("career1-text");
const career2Text = document.getElementById("career2-text");
const racingText = document.getElementById("racing-text");


function showOverview() {
  overviewText.style.display = "block";
  career1Text.style.display = "none";
  career2Text.style.display = "none";
  racingText.style.display = "none";
}

function showCareer1() {
  overviewText.style.display = "none";
  career1Text.style.display = "block";
  career2Text.style.display = "none";
  racingText.style.display = "none";
}

function showCareer2() {
  overviewText.style.display = "none";
  career1Text.style.display = "none";
  career2Text.style.display = "block";
  racingText.style.display = "none";
}

function showRacing() {
  overviewText.style.display = "none";
  career1Text.style.display = "none";
  career2Text.style.display = "none";
  racingText.style.display = "block";
}

showOverview();

const song = document.createElement('audio');
song.src = "bensound-anewbeginning.mp3";

function toggleAudio() {
  if (song.paused) {
    song.play()
    console.log("music playing");
  }
  else {
    song.pause()
    console.log("music paused");
  }
}