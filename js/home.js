const heading = document.querySelector(".heading");
const subheading1 = document.querySelector(".subheading1");
const subheading2 = document.querySelector(".subheading2");
const addr = document.querySelector(".addr");
const contact = document.querySelector(".contact");

// Form elements
const langSelector = document.querySelector("#langSelector");
langSelector.addEventListener("click", () => {
  let language = langSelector.innerHTML;
  if (language == "मराठी") {
    heading.innerHTML = "ज्ञान प्रबोधिनी - युवक विभाग";
    subheading1.innerHTML = "कंदील व पणत्या विक्री उपक्रम";
    subheading2.innerHTML =
      "ऑफर्स व आकर्षक सवलती मिळतील! त्वरित आमच्या स्टॉलला भेट द्या!";
    addr.innerHTML =
      "शॉप नं. ७, निलायम अपार्टमेंट, किनारा हॉटेल जवळ, लोकमान्य कॉलनी, वनाज, पुणे, ४११०३८";
    contact.innerHTML = "अधिक माहितीसाठी संपर्क<br />स्वराज थोरात - ८७८८५४५५८६";
    langSelector.innerHTML = "English";
  }
  if (language == "English") {
    heading.innerHTML = "Jnana Prabodhini - Yuvak Vibhag";
    subheading1.innerHTML = "Lanterns and Earthern Lamps Sale Activity";
    subheading2.innerHTML =
      "Offers and Discounts will be given! Be sure to visit our stall soon!";
    addr.innerHTML =
      "Shop no. 7, Nilayam Apartment, Near Kinara Hotel, Lokmanya Colony, Vanaz, Pune, 411038";
    contact.innerHTML = "Contact for more info<br />Swaraj Thorat - 8788545586";
    langSelector.innerHTML = "मराठी";
  }
});
