// alert("working!")
let index = 0;
document.querySelector("#dark-mode").addEventListener("click", () => {
  console.log("working");
  document.querySelector("body").classList.toggle("body-dark");
  document.querySelector(".copyright").classList.toggle("cdark");
  document.querySelector(".header-change").classList.toggle("cdark");

  if (index === 0) {
    index++;

    document
      .querySelector("#dark-mode")
      .setAttribute("src", "images/002-moon.png");
  } else {
    index--;
    document
      .querySelector("#dark-mode")
      .setAttribute("src", "images/001-sun.png");
  }
});
