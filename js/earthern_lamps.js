const earthernLampsTable = document.querySelector("#earthern_lamps");
const earthernLampPrices = [
  { imageName: "4set1", price: 100 },
  { imageName: "4set2", price: 100 },
  { imageName: "4set3", price: 100 },
  { imageName: "4set4", price: 100 },
  { imageName: "4set5", price: 100 },
  { imageName: "4set6", price: 100 },
  { imageName: "4set7", price: 100 },
  { imageName: "4set8", price: 100 },
  { imageName: "4set9", price: 100 },
  { imageName: "4set10", price: 100 },
  { imageName: "4set11", price: 100 },
  { imageName: "4set12", price: 100 },
  { imageName: "4set13", price: 100 },
  { imageName: "6set", price: 120 },
];

for (let z = 0; z < 6; z++) {
  const row = document.createElement("tr");
  for (let i = 0; i < 3; i++) {
    if (earthernLampPrices[i]) {
      const cell = document.createElement("td");
      const lantern = document.createElement("lantern");
      let lantern_imageName = earthernLampPrices[i].imageName;
      let price = earthernLampPrices[i].price;
      lantern.setAttribute(
        "img",
        `./images/earthern_lamps/${lantern_imageName}.jpg`
      );
      lantern.setAttribute("price", price);
      row.appendChild(cell);
      cell.appendChild(lantern);
    } else {
      break;
    }
  }
  earthernLampPrices.splice(0, 3);
  earthernLampsTable.appendChild(row);
}

const lanterns = document.querySelectorAll("lantern");
lanterns.forEach((lantern) => {
  let imageUrl = lantern.getAttribute("img");
  let price = lantern.getAttribute("price");
  let componentimageName = /*html*/ `
<div class="card">
    <a href="${imageUrl}" target="_blank"><img class="img" src="${imageUrl}" alt=""></img></a><br/>
    <span class="card-title text-glow">Rs. ${price}</span>
</div>
    `;
  lantern.innerHTML = componentimageName;
});
const blankSpace = document.createElement("tr");
blankSpace.innerHTML = /*html*/ `<td colspan="3" style="color: #000; text-shadow: none">Blank</td>`;
earthernLampsTable.appendChild(blankSpace);
