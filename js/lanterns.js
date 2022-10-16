const lanternsTable = document.querySelector("#lanterns");
const lanternPricePairs = [
  { code: "A1K_BLUE", price: 250 },
  { code: "A1K_LBLUE", price: 250 },
  { code: "A1K_ORANGE", price: 250 },
  { code: "A1K_PINK", price: 250 },
  { code: "A1K_WHITE", price: 250 },
  { code: "A1K_YELLOW", price: 250 },
  { code: "A1KG_PURPLE", price: 200 },
  { code: "A1KG_WHITE", price: 200 },
  { code: "A1DK", price: 250 },
  { code: "A2DK", price: 280 },
  { code: "A1F", price: 280 },
  { code: "PJ1", price: 400 },
  { code: "PJ2", price: 500 },
  { code: "A1P_1", price: 280 },
  { code: "A1P_2", price: 280 },
  { code: "A1P_3", price: 280 },
  { code: "A1KV", price: 300 },
];

for (let z = 0; z < 6; z++) {
  const row = document.createElement("tr");
  for (let i = 0; i < 3; i++) {
    if (lanternPricePairs[i]) {
      const cell = document.createElement("td");
      const lantern = document.createElement("lantern");
      let lantern_code = lanternPricePairs[i].code;
      let price = lanternPricePairs[i].price;
      lantern.setAttribute("img", `./images/${lantern_code}.jpg`);
      lantern.setAttribute("name", lantern_code);
      lantern.setAttribute("price", price);
      row.appendChild(cell);
      cell.appendChild(lantern);
    } else {
      break;
    }
  }
  lanternPricePairs.splice(0, 3);
  lanternsTable.appendChild(row);
}
const blankSpace = document.createElement("tr");
blankSpace.innerHTML = /*html*/ `<td colspan="3" style="color: #000; text-shadow: none">Blank</td>`;
lanternsTable.appendChild(blankSpace);

const lanterns = document.querySelectorAll("lantern");
lanterns.forEach((lantern) => {
  let imageUrl = lantern.getAttribute("img");
  let name = lantern.getAttribute("name");
  let price = lantern.getAttribute("price");
  let componentCode = /*html*/ `
<div class="card">
    <a href="${imageUrl}" target="_blank"><img class="lantern-img" src="${imageUrl}" alt=""></img></a><br/>
    <span class="card-title text-glow">${name} - Rs. ${price}</span>
</div>
    `;
  lantern.innerHTML = componentCode;
});
