const pageDisplay = document.querySelector("#pageDisplay");
const homeBtns = document.querySelectorAll(".homeBtn");
const aboutBtns = document.querySelectorAll(".aboutBtn");
const lanternsBtns = document.querySelectorAll(".lanternsBtn");
const earthernlampsBtns = document.querySelectorAll(".earthernlampsBtn");
const navBtns = document.querySelectorAll(".navBtns");
const sidebarlogos = document.querySelectorAll(".sidebarlogo");

if (sessionStorage.getItem("page") != undefined) {
  pageDisplay.src = sessionStorage.getItem("page");
} else {
  pageDisplay.src = "home.html";
}

homeBtns.forEach((homeBtn) => {
  homeBtn.addEventListener("click", () => {
    pageDisplay.src = "home.html";
    sessionStorage.setItem("page", "home.html");
  });
});
aboutBtns.forEach((aboutBtn) => {
  aboutBtn.addEventListener("click", () => {
    pageDisplay.src = "about.html";
    sessionStorage.setItem("page", "about.html");
  });
});
lanternsBtns.forEach((lanternsBtn) => {
  lanternsBtn.addEventListener("click", () => {
    pageDisplay.src = "lanterns.html";
    sessionStorage.setItem("page", "lanterns.html");
  });
});
earthernlampsBtns.forEach((earthernlampsBtn) => {
  earthernlampsBtn.addEventListener("click", () => {
    pageDisplay.src = "earthern_lamps.html";
    sessionStorage.setItem("page", "earthern_lamps.html");
  });
});

let colors = {
  backgroundColor: "#ffdd99",
  color: "#000",
};

navBtns.forEach((navBtn) => {
  navBtn.addEventListener("mouseover", () => {
    navBtn.style.backgroundColor = "#eecc99";
  });
  navBtn.addEventListener("mouseout", () => {
    navBtn.style.backgroundColor = colors.backgroundColor;
  });
});
