"use strict";

(function() {
  let video = document
    .querySelector("#video")
    .content.querySelector(".bt_video");

  let blockVideo = document.querySelector(".block_video");

  let renderVideo = function(evt) {
    let videoElement = video.cloneNode(true);
    videoElement.querySelector("#title").innerHTML = evt.title;
    videoElement.querySelector("#description").innerHTML = evt.description;
    videoElement.querySelector("#dateCreate").innerHTML = evt.dateCreate;
    videoElement.querySelector("#commentsCount").innerHTML = evt.commentsCount;
    videoElement.querySelector("#liksCount").innerHTML = evt.liksCount;

    return videoElement;
  };

  for (let i = 0; i < videos.length; i++) {
    video.setAttribute("data", i);
    blockVideo.appendChild(renderVideo(videos[i]));
  }
})();

document.querySelector("#bt_blocks").onclick = function() {
  document.querySelectorAll(".dec_video").forEach(function(element) {
    element.classList.add("dec_activ");
  });
  document.querySelectorAll(".bt_video").forEach(function(element) {
    element.classList.add("bt_activ");
  });
};

document.querySelector("#bt_line").onclick = function() {
  document.querySelectorAll(".dec_video").forEach(function(element) {
    element.classList.remove("dec_activ");
  });
  document.querySelectorAll(".bt_video").forEach(function(element) {
    element.classList.remove("bt_activ");
  });
};

let tab = document.querySelectorAll(".bt_video");
let tabs = document.querySelectorAll(".play_video");
let mmm = document.querySelector("#mmm");
let btMenu = document.querySelectorAll(".bt_menu");
let main = document.querySelector("main");

tab.forEach(function(element) {
  element.onclick = show;
});

tabs.forEach(function(element) {
  element.onclick = short;
});

function gray() {
  tabs.forEach(function(element) {
    element.style.backgroundColor = "#e5e5e5";
  });
}

function short() {
  gray();
  this.style.backgroundColor = "#F29563";
}

function show() {
  let data = this.getAttribute("data");
  let a = videos[data].url;
  document.querySelector("#like").innerHTML = videos[data].liksCount;
  mmm.setAttribute("src", a);
}

btMenu.forEach(function(element) {
  element.onclick = choice;
});

function nochoice() {
  btMenu.forEach(function(element) {
    element.classList.remove("activ");
  });
}

function choice() {
  nochoice();
  let data = this.getAttribute("data");
  if (data == 0) {
    document.title = "Home";
    main.style.display = "none";
  } else if (data == 1) {
    document.title = "Videos";
    main.style.display = "block";
  } else if (data == 2) {
    document.title = "Images";
    main.style.display = "none";
  } else if (data == 3) {
    document.title = "Articles";
    main.style.display = "none";
  } else {
    document.title = "Freebies";
    main.style.display = "none";
  }
  this.classList.add("activ");
}
