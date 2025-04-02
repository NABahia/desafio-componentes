function services(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
        <div class="services__area-cards">
            <div class="services__contenedor-cards"></div>
          </div>
        </div>
      </section>
      <template id="card-template">
        <div class="card">
          <div class="card__contenedor-image">
            <img src="" alt="" class="card__image" />
          </div>
          <h3 class="card__title"></h3>
          <div class="card__description">
            <p class="card__description-text"></p>
          </div>
        </div>
      </template>
    `;

  el.appendChild(componentEl);

  function mostrarResultados(items) {
    const contenedor = document.querySelector(".services__contenedor-cards");
    const template = document.querySelector("#card-template");

    contenedor.innerHTML = "";

    items.forEach((item) => {
      const clone = document.importNode(template.content, true);

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

  (function () {
    const url =
      "https://cdn.contentful.com/spaces/b6umx2e4ufgj/environments/master/entries?access_token=YoWcEVcezbFSQ4GLtv043Yokq60RR_Ph4YoZbUPGMq0&content_type=services";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const items = data.items;
        mostrarResultados(items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  })();
}
