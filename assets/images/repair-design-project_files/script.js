//First slider
{
  let images = document.querySelector('.completed-projects').getElementsByClassName('inner-wrapper');
  let points = document.querySelector('.completed-projects').querySelectorAll('.slider-point');
  let description = document.querySelector('.completed-projects').querySelectorAll('.label');
  let backButton = document.querySelector('.completed-projects').querySelector('.slider-button-back');
  let forwardButton = document.querySelector('.completed-projects').querySelector('.slider-button-forward');
  let currentPoint = points[0];
  let currentDescription = description[0];
  let index = 0;
  let move = 0;

  getIndex1(index);

  function getIndex1(n) {
    changeSlide(index += n, n);
  };

  function changeSlide(n, m) {

    currentPoint.style.opacity = "0.3";
    currentDescription.style.opacity = "0.3";
    currentDescription.removeAttribute("id");

    index = (n < 0) ? points.length - 1 : (n > points.length - 1) ? 0 : n;

    forwardButton.style.display = "block";
    backButton.style.display = "block";
    if (index == 0) {
      backButton.style.display = "none";
      forwardButton.style.display = "block";
    } else if (index == points.length - 1) {
      forwardButton.style.display = "none";
      backButton.style.display = "block";
    }
    if (index == 0) {
      move = 0;
    } else if (index == points.length - 1) {
      move = -1200;
    } else if (m == 1) {
      move -= 650;
    } else if (m == -1) {
      move += 650;
    }

    images[0].style.transition = "0.5s";
    images[0].style.transform = `translateX(${move}px`;

    points[index].style.opacity = "1";
    description[index].id = "active";
    description[index].style.opacity = "1";

    currentImage = images[index];
    currentPoint = points[index];
    currentDescription = description[index];
  }
}
//Second slider
{
  let images = document.querySelector('.six-steps').querySelector('.image-box__image-wrapper').children;
  let points = document.querySelector('.six-steps').querySelectorAll('.slider-point');
  let description = document.querySelector('.six-steps').querySelectorAll('.inner-wrapper');
  let counter = document.querySelector('.counter');
  let currentImage = images[0];
  let currentPoint = points[0];
  let currentDescription = description[0];
  let index = 0;

  for (let i = 0; i < description.length; i++) {
    let j = i

    description[i].addEventListener("click", function () {
      if (index == j) {
        return;
      }
      changeSlide(j);
    })
  }

  getIndex(index);

  function getIndex(n) {
    changeSlide(index += n);
  };

  function changeSlide(n) {

    currentImage.style.display = "none";
    currentPoint.style.opacity = "0.3";
    currentDescription.style.opacity = "0.3";
    currentDescription.style.transform = "scale(1)";

    index = (n < 0) ? images.length - 1 : (n > images.length - 1) ? 0 : n;

    images[index].style.display = "block";
    points[index].style.opacity = "1";
    description[index].style.opacity = "1";
    description[index].style.transform = "scale(1.1)";
    counter.innerHTML = `${index+1}/6`;

    currentImage = images[index];
    currentPoint = points[index];
    currentDescription = description[index];
  }
}
//Third Slider
{
  let images = document.querySelector(".architecture-styles").querySelector(".img-box-1").children;
  let currentImage = images[0];
  let index = 0;
  changeSlide(0);

  function changeSlide(n) {
    currentImage.style.display = "none";
    index += n;
    if (index < 0) {
      index = images.length - 3;
    } else if (index > images.length - 3) {
      index = 0;
    }

    images[index].style.display = "block"
    currentImage = images[index];
  }
}
