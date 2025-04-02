let visibleItems = 3;

function mostrarResultados(items) {
  const contenedor = document.querySelector(".portfolio__contenedor-cards");
  const template = document.querySelector("#card-template");

  contenedor.innerHTML = "";

  items.slice(0, visibleItems).forEach((item) => {
    const clone = document.importNode(template.content, true);

    const linkEl = clone.querySelector(".card-link");
    linkEl.href = item.fields.url;
    console.log(item.fields.url);

    const titleEl = clone.querySelector(".card__title");
    titleEl.textContent = item.fields.title;

    const descriptionFullEl = clone.querySelector(".card__description-text");
    descriptionFullEl.textContent = item.fields.description;

    const imgEl = clone.querySelector(".card__image");

    const imgId = item.fields.image.sys.id;

    const imgUrl = `https://cdn.contentful.com/spaces/b6umx2e4ufgj/environments/master/assets/${imgId}?access_token=YoWcEVcezbFSQ4GLtv043Yokq60RR_Ph4YoZbUPGMq0`;

    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = "https:" + data.fields.file.url;
        imgEl.src = imageUrl;
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });

    contenedor.appendChild(clone);
  });
}

function main() {
  const headerContainer = document.querySelector(".header-container");
  header(headerContainer);

  const footerContainer = document.querySelector(".footer-container");
  footer(footerContainer);

  const url =
    "https://cdn.contentful.com/spaces/b6umx2e4ufgj/environments/master/entries?access_token=YoWcEVcezbFSQ4GLtv043Yokq60RR_Ph4YoZbUPGMq0&content_type=pages";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const items = data.items;
      mostrarResultados(items);

      console.log(data.items.length);

      const verMasButton = document.querySelector(".ver-mas-button");
      verMasButton.addEventListener("click", () => {
        visibleItems += 3;
        mostrarResultados(items);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

main();
