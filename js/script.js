const imgs = document.querySelectorAll(".header-slider ul img");
const prv_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

let n = 0;

function changeSlid() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}
changeSlid();
prv_btn.addEventListener("click", () => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlid();
});
next_btn.addEventListener("click", () => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlid();
});
const scrollContainer = document.querySelectorAll(".products");
scrollContainer;
for (const item of scrollContainer) {
  item.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}
