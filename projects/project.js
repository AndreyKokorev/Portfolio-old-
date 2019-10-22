let mobile = document.querySelector('.mobile-button');
let desktop = document.querySelector('.desktop-button');
let frame = document.querySelector('iframe');
let titleName = document.querySelector('title').innerHTML;
let back = document.querySelector('.back-button').addEventListener('click', function () {
  document.location = '../index.html';
});

if (titleName == "theyalow") {
  frame.style.height = "1840px";
}

mobile.addEventListener('click', function () {
  if (titleName == "rdproject") {
    frame.style.width = "375px";
    frame.style.height = "9500px";
  } else {
    frame.style.width = "640px";
    frame.style.height = "1555px";
  }
  mobile.style.display = "none";
  desktop.style.display = "block";
});

desktop.addEventListener('click', function () {
  if (titleName == "rdproject") {
    frame.style.height = "9900px";
  } else {
    frame.style.height = "1840px";
  }
  frame.style.width = "1920px";
  mobile.style.display = "block";
  desktop.style.display = "none";
});

if (document.body.clientWidth < 800) {
  mobile.style.display = "none";
}

