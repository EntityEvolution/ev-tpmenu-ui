// Add your options
newTeleport("tp1"), newTeleport("tp2"), newTeleport("tp3"), newTeleport("tp4"), newTeleport("tp5"),
newTeleport("tp6"), newTeleport("tp7"), newTeleport("tp8"), newTeleport("tp9"), newTeleport("tp10"); 

// Teleport function
function newTeleport(name) {
  $(`#${name}`).click(function() {
    $.post('https://pe-tpmenu-ui/tpOptions', JSON.stringify({action: name}));
    return;
  })
};

window.addEventListener("message", function (event) {
  switch (event.data.action) {
    case "show":
      $("#slideshow").fadeIn();
      $("#dots").fadeIn();
    break;
    
    case "hide":
      $("#slideshow").fadeOut();
      $("#dots").fadeIn();
    break;
  };
});

// Do not touch below this unless you know what your doing
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(number) {
  showSlides(slideIndex += number);
}

// Thumbnail image controls
function currentSlide(number) {
  showSlides(slideIndex = number);
}

function showSlides(number) {
  let i = undefined;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (number > slides.length) {slideIndex = 1}
  if (number < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  $(".numbertext").text(`${slideIndex} /${slides.length}`);
}

// Close with 'Escape' key
document.onkeyup = function(event) {
  if (event.key == 'Escape') {
      $.post('https://pe-tpmenu-ui/close');
  }
};