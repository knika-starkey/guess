// window.onload = init;

// function init() {
//   let image1 = document.getElementById("one");
//   image1.onclick = showImageOne;
//   let image2 = document.getElementById("two");
//   image2.onclick = showImageTwo;
// }
// function showImageOne() {
//   let image = document.getElementById("one");
//   image.src = "images/one.jpg";
// }
// function showImageTwo() {
//   let image = document.getElementById("two");
//   image.src = "images/two.jpg";
// }
window.onload = function () {
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onmouseover = showAnswer;
  }
};

function showAnswer(event) {
  let image = event.target;
  let name = image.id;
  name = name + ".jpg";
  image.src = "images/" + name;
  setTimeout(blurAnswer, 2000, image);
}

function blurAnswer(image) {
  let name = image.id;
  name = name + "blur.jpg";
  image.src = "images/" + name;
}
