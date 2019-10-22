let slides = document.querySelectorAll('.project-inner-wrapper');
let index = 0;
changeSlide(0);

function changeSlide(n) {

  for (let item of slides) {
    item.style.display = "none";
  }

  index += n;
  index = (index > 1) ? 0 : (index < 0) ? 1 : index;
  slides[index].style.display = "block";

} {
  let swipeArea = document.querySelectorAll('.project-inner-wrapper');
  for (let item of swipeArea) {
    swipeDetect(item);
  }

  function swipeDetect(swipeArea) {
    let startX = 0;
    let distX = 0;

    swipeArea.addEventListener('touchstart', function (e) {
      startX = e.pageX;
    })

    swipeArea.addEventListener('touchend', function (e) {
      dist = e.pageX - startX;
      if (dist > -1) {
        changeSlide(1);
        return
      }
      changeSlide(-1);
    })
  }
}
getDescription();

function getDescription() {
  let check = true;
  let hints = document.querySelectorAll('.hint');
  let descriptionButtons = document.querySelectorAll('.button-description');
  let descriptions = document.querySelectorAll('.project-inner-wrapper');
  let description1=descriptions[0].querySelector('.text-wrapper');
  let description2=descriptions[1].querySelector('.text-wrapper');
  let images = document.querySelectorAll('.project-inner-wrapper');
  let image1 = images[0].querySelector('a');
  let image2 = images[1].querySelector('a');
console.log(description1);;
  for (let item of descriptionButtons) {
    item.addEventListener('touchstart', function (e) {
      if (check === true) {
        image1.style.display = "none";
        image2.style.display = "none";
        description1.style.display = "grid";
        description2.style.display = "grid";
        hints[0].innerHTML = "hide description";
        hints[1].innerHTML = "hide description";     
        check = false;
      } else {
        image1.style.display = "block";
        image2.style.display = "block";
        description1.style.display = "none";
        description2.style.display = "none";
        hints[0].innerHTML = "show description";
        hints[1].innerHTML = "show description";
        check = true;
      }
    })
  }

}