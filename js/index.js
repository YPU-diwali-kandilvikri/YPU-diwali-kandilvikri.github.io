const pageDisplay = document.querySelector("#pageDisplay");
const homeBtns = document.querySelectorAll(".homeBtn");
const aboutBtns = document.querySelectorAll(".aboutBtn");
const lanternsBtns = document.querySelectorAll(".lanternsBtn");
const earthernlampsBtns = document.querySelectorAll(".earthernlampsBtn");
const offersBtns = document.querySelectorAll(".offersBtn");
homeBtns.forEach((homeBtn) => {
  homeBtn.addEventListener("click", () => {
    pageDisplay.src = "home.html";
  });
});
aboutBtns.forEach((aboutBtn) => {
  aboutBtn.addEventListener("click", () => {
    pageDisplay.src = "about.html";
  });
});
lanternsBtns.forEach((lanternsBtn) => {
  lanternsBtn.addEventListener("click", () => {
    pageDisplay.src = "lanterns.html";
  });
});
earthernlampsBtns.forEach((earthernlampsBtn) => {
  earthernlampsBtn.addEventListener("click", () => {
    pageDisplay.src = "earthern_lamps.html";
  });
});
offersBtns.forEach((offersBtn) => {
  offersBtn.addEventListener("click", () => {
    pageDisplay.src = "offers.html";
  });
});

const navBtns = document.querySelectorAll(".navBtns");
const sidebarlogos = document.querySelectorAll(".sidebarlogo");
sidebarlogos.forEach((sidebarlogo) => {
  sidebarlogo.addEventListener("mouseover", () => {
    navBtns.forEach((navBtn) => {
      navBtn.style.display = "table-cell";
    });
    sidebarlogo.parentNode.style.backgroundColor = "#c80";
    sidebarlogo.parentNode.nextElementSibling.style.backgroundColor = "#c80";
  });
  sidebarlogo.addEventListener("mouseout", () => {
    sidebarlogo.parentNode.style.backgroundColor = "#fa0";
    sidebarlogo.parentNode.nextElementSibling.style.backgroundColor = "#fa0";
  });
  navBtns.forEach((navBtn) => {
    navBtn.addEventListener("mouseover", () => {
      navBtn.style.backgroundColor = "#c80";
      navBtn.previousElementSibling.style.backgroundColor = "#c80";
    });
    navBtn.addEventListener("mouseout", () => {
      navBtn.style.backgroundColor = "#fa0";
      navBtn.previousElementSibling.style.backgroundColor = "#fa0";
      navBtns.forEach((navBtn) => {
        navBtn.style.display = "none";
      });
    });
  });
});
