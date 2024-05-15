const frame = document.querySelector(".frame");
const circle = document.querySelector(".circle");
const ripEfc = document.querySelector(".ripple-effect");
frame.addEventListener("mousemove", (e) => {
  circle.style.top = `${e.offsetY}px`;
  circle.style.left = `${e.offsetX}px`;
});
frame.addEventListener("mouseleave", (e) => {
  circle.style.top = "50%";
  circle.style.left = "50%";
});

frame.addEventListener("mousedown", (e) => {
  circle.style.width = "50px";
  circle.style.height = "50px";
  ripEfc.style.top = "10px";
  ripEfc.style.left = "10px";
});

frame.addEventListener("mouseup", (e) => {
  circle.style.width = "25px";
  circle.style.height = "25px";
  ripEfc.style.top = "0";
  ripEfc.style.left = "0";
});