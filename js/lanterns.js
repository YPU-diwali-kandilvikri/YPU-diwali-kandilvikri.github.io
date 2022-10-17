const cardGrid = document.querySelector(".cardGrid");
const lanternPricePairs = [
  { code: "A1KG_PURPLE", price: 200 },
  { code: "A1KG_WHITE", price: 200 },
  { code: "A1K_BLUE", price: 250 },
  { code: "A1K_LBLUE", price: 250 },
  { code: "A1K_ORANGE", price: 250 },
  { code: "A1K_PINK", price: 250 },
  { code: "A1K_WHITE", price: 250 },
  { code: "A1K_YELLOW", price: 250 },
  { code: "A1DK", price: 250 },
  { code: "A2DK", price: 280 },
  { code: "A1F", price: 280 },
  { code: "A1P_1", price: 280 },
  { code: "A1P_2", price: 280 },
  { code: "A1P_3", price: 280 },
  { code: "A1KV", price: 300 },
  { code: "PJ1", price: 400 },
  { code: "PJ2", price: 500 },
];

lanternPricePairs.forEach((lanternPricePair) => {
  const lantern = document.createElement("div");
  lantern.className = "card";
  let imageUrl = `images/lanterns/${lanternPricePair.code}-min.jpg`;
  let name = lanternPricePair.code;
  let price = lanternPricePair.price;
  let componentCode = /*html*/ `
<a href="${imageUrl}" target="_blank"><img class="img" src="${imageUrl}" alt=""></img></a><br/>
<span class="card-title text-glow">${name} - Rs. ${price}</span>
`;
  lantern.innerHTML = componentCode;
  cardGrid.appendChild(lantern);
});
const blankSpace = document.createElement("div");
blankSpace.innerHTML = /*html*/ `<span colspan="3" style="color: #000; text-shadow: none">Blank</span>`;
cardGrid.appendChild(blankSpace);
