const cardGrid = document.querySelector(".cardGrid");
const earthernLampPrices = [
  { imageName: "4set1", price: 90 },
  { imageName: "4set2", price: 90 },
  { imageName: "4set3", price: 90 },
  { imageName: "4set4", price: 90 },
  { imageName: "4set5", price: 90 },
  { imageName: "4set6", price: 90 },
  { imageName: "4set7", price: 90 },
  { imageName: "4set8", price: 90 },
  { imageName: "4set9", price: 90 },
  { imageName: "4set10", price: 90 },
  { imageName: "4set11", price: 90 },
  { imageName: "4set12", price: 90 },
  { imageName: "4set13", price: 90 },
  { imageName: "6set", price: 120 },
];

earthernLampPrices.forEach((earthernLampPrice) => {
  const earthernLamp = document.createElement("earthernLamp");
  earthernLamp.setAttribute(
    "img",
    `images/earthern_lamps/${earthernLampPrice.imageName}.jpg`
  );
  earthernLamp.setAttribute("price", `${earthernLampPrice.price}`);
  cardGrid.appendChild(earthernLamp);
});
const blankSpace = document.createElement("div");
blankSpace.innerHTML = /*html*/ `<span colspan="3" style="color: #000; text-shadow: none">Blank</span>`;
cardGrid.appendChild(blankSpace);

const earthernLamps = document.querySelectorAll("earthernLamp");
earthernLamps.forEach((earthernLamp) => {
  let imageUrl = earthernLamp.getAttribute("img");
  let price = earthernLamp.getAttribute("price");
  let componentCode = /*html*/ `
<div class="card">
    <a href="${imageUrl}" target="_blank"><img class="img" src="${imageUrl}" alt=""></img></a><br/>
    <span class="card-title text-glow">Rs. ${price}</span>
</div>
    `;
  earthernLamp.innerHTML = componentCode;
});
