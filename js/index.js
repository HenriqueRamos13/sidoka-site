window.addEventListener("load", () => {
  document.querySelector(".loading").classList.remove("open");
  //   document.querySelector("body").style.overflowY = "scroll";
});

const observer = lozad(); // lazy loads elements with default selector as ".lozad"
observer.observe();

var mouse_x;
var mouse_y;
const obg = document.querySelector(".object");
const cur = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cur.style.left = e.pageX + "px";
  cur.style.top = e.pageY + "px";
  setTimeout(() => {
    obg.style.left = e.pageX + "px";
    obg.style.top = e.pageY + "px";
  }, 50);
});
// var contact = document.querySelector(".contact-text");
// contact.addEventListener("mouseover", (e) => {
//   obg.classList.add("object-hover");
// });
// contact.addEventListener("mouseout", (e) => {
//   obg.classList.remove("object-hover");
// });
document.querySelectorAll(".section").forEach((e) => {
  e.children[1].addEventListener("mouseover", (i) => {
    e.children[2].classList.add("center-video");
  });
  e.children[1].addEventListener("mouseout", (i) => {
    e.children[2].classList.remove("center-video");
  });
});
document.querySelectorAll("a").forEach((e) => {
  e.addEventListener("mouseover", (i) => {
    obg.classList.add("object-hover");
  });
  e.addEventListener("mouseout", (i) => {
    obg.classList.remove("object-hover");
  });
});
