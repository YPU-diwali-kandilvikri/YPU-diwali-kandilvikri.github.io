const pageDisplay = document.querySelector("#pageDisplay");
const homeBtns = document.querySelectorAll(".homeBtn");
const aboutBtns = document.querySelectorAll(".aboutBtn");
const lanternsBtns = document.querySelectorAll(".lanternsBtn");
const earthernlampsBtns = document.querySelectorAll(".earthernlampsBtn");
const offersBtns = document.querySelectorAll(".offersBtn");
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
offersBtns.forEach((offersBtn) => {
  offersBtn.addEventListener("click", () => {
    pageDisplay.src = "offers.html";
    sessionStorage.setItem("page", "offers.html");
  });
});

sidebarlogos.forEach((sidebarlogo) => {
  sidebarlogo.addEventListener("mouseover", () => {
    navBtns.forEach((navBtn) => {
      navBtn.style.display = "table-cell";
    });
    sidebarlogo.parentNode.style.backgroundColor = "#c80";
    sidebarlogo.parentNode.nextElementSibling.style.backgroundColor = "#c80";
  });
  sidebarlogo.addEventListener("mouseout", () => {
    sidebarlogo.parentNode.style.backgroundColor = "#d90";
    sidebarlogo.parentNode.nextElementSibling.style.backgroundColor = "#d90";
  });
  sidebarlogo.addEventListener("click", () => {
    navBtns.forEach((navBtn) => {
      if (navBtn.style.display != "none") {
        navBtn.style.display = "none";
      } else {
        navBtn.style.display = "table-cell";
      }
    });
  });
});
navBtns.forEach((navBtn) => {
  navBtn.addEventListener("mouseover", () => {
    navBtn.style.backgroundColor = "#c80";
    navBtn.previousElementSibling.style.backgroundColor = "#c80";
  });
  navBtn.addEventListener("mouseout", () => {
    navBtn.style.backgroundColor = "#d90";
    navBtn.previousElementSibling.style.backgroundColor = "#d90";
    navBtns.forEach((navBtn) => {
      navBtn.style.display = "none";
    });
  });
  navBtn.addEventListener("click", () => {
    navBtns.forEach((navBtn) => {
      navBtn.style.display = "none";
    });
  });
});
