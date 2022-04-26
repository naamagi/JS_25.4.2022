const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
let p;
let styles;
let size;
const MAX = 100;
const MIN = 6;
plus.addEventListener("click", (event) => {
  event.preventDefault();
  p = document.querySelector("p");
  styles = getComputedStyle(p);
  size = parseFloat(styles.fontSize);
  if (size < MAX) {
    console.log(size);
    size += 1;
    p.style.fontSize = `${size}px`;
  }
});
minus.addEventListener("click", (event) => {
  event.preventDefault();
  p = document.querySelector("p");
  styles = getComputedStyle(p);
  size = parseFloat(styles.fontSize);
  if (size > MIN) {
    console.log(size);
    size -= 1;
    p.style.fontSize = `${size}px`;
  }
});
