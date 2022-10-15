const lanterns = document.querySelectorAll("lantern");
lanterns.forEach((lantern) => {
  let imageUrl = lantern.getAttribute("img");
  let name = lantern.getAttribute("name");
  let price = lantern.getAttribute("price");
  let componentCode = /*html*/ `
<div class="card">
    <a href="${imageUrl}" target="_blank"><img class="lantern-img" src="${imageUrl}" alt=""></img></a><br/>
    <span class="card-title text-glow">${name} - ${price}</span>
</div>
    `;
  lantern.innerHTML = componentCode;
});
