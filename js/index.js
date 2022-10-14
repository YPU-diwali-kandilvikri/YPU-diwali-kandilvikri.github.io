const pageDisplay = document.querySelector("#pageDisplay");
const homeBtn = document.querySelector("#homeBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const lanternsBtn = document.querySelector("#lanternsBtn");
const earthernlampsBtn = document.querySelector("#earthernlampsBtn");
const offersBtn = document.querySelector("#offersBtn");
homeBtn.addEventListener("click", () => {
  pageDisplay.src = "home.html";
});
aboutBtn.addEventListener("click", () => {
  pageDisplay.src = "about.html";
});
lanternsBtn.addEventListener("click", () => {
  pageDisplay.src = "lanterns.html";
});
earthernlampsBtn.addEventListener("click", () => {
  pageDisplay.src = "earthern_lamps.html";
});
offersBtn.addEventListener("click", () => {
  pageDisplay.src = "offers.html";
});
