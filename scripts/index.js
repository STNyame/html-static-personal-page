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

function addComment(textInput) {
  const newComment = document.createElement("div");

  newComment.classList.add("comment-img");

  const comment = document.createElement("p");

  comment.classList.add("comment-p");

  const textNode = document.createTextNode(textInput);

  comment.appendChild(textNode);

  newComment.appendChild(comment);

  // const rotate = Math.round(Math.random() * 3 - Math.random() * 2);

  // console.log(rotate);

  // newComment.style.transform = `rotate(${rotate}deg)`;
  // newComment.onmouseover = () => {
  //   newComment.style.transform = `scale(${1.5})`;
  // };
  document.querySelector(".comment-div").appendChild(newComment);
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const textInput = document.getElementById("new-comment");
  const newCommentText = textInput.value;

  if (newCommentText) {
    addComment(newCommentText);
  } else {
    return alert("please fill in somthing that needs to be done!");
  }

  textInput.value = null;
});
