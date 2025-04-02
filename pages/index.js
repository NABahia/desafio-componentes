function main() {
  const headerContainer = document.querySelector(".header-container");
  header(headerContainer);

  const contactContainer = document.querySelector(".contact-container");
  contact(contactContainer);

  const servicesContainer = document.querySelector(".services-container");
  services(servicesContainer);

  const footerContainer = document.querySelector(".footer-container");
  footer(footerContainer);

  (function () {
    const imgWelcomeId = "IMAGE_ID_WELCOME"; // ID de la imagen de bienvenida
    const imgEllipseId = "IMAGE_ID_ELLIPSE"; // ID de la imagen de elipse
    const accessToken = "TU_ACCESS_TOKEN"; // Access token de Contentful
    const spaceId = "TU_SPACE_ID"; // Space ID de Contentful

    // URLs de las imágenes
    const imgWelcomeUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/assets/${imgWelcomeId}?access_token=${accessToken}`;
    const imgEllipseUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/assets/${imgEllipseId}?access_token=${accessToken}`;

    fetch(imgWelcomeUrl)
      .then((response) => response.json())
      .then((data) => {
        const imgElWelcome = document.querySelector(".welcome__image");
        imgElWelcome.src = "https:" + data.fields.file.url;
        imgElWelcome.alt = data.fields.title || "Welcome Image"; // Opcional
      })
      .catch((error) => console.error("Error fetching welcome image:", error));

    fetch(imgEllipseUrl)
      .then((response) => response.json())
      .then((data) => {
        const imgElEllipse = document.querySelector(".welcome__image-elipse");
        imgElEllipse.src = "https:" + data.fields.file.url;
        imgElEllipse.alt = data.fields.title || "Ellipse Image"; // Opcional
      })
      .catch((error) => console.error("Error fetching ellipse image:", error));
  })();

  function cargarContenido(id) {
    const entryId = id;
    const url = `https://cdn.contentful.com/spaces/b6umx2e4ufgj/environments/master/entries/${entryId}?access_token=YoWcEVcezbFSQ4GLtv043Yokq60RR_Ph4YoZbUPGMq0`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const titleEl = document.querySelector(".about-me__title");
        titleEl.textContent = data.fields.title;

        const contentEl = document.querySelector(".about-me__content");
        contentEl.textContent = data.fields.description;

        const imgEl = document.querySelector(".about-me__image");
        const imgId = data.fields.image.sys.id;

        const imgUrl = `https://cdn.contentful.com/spaces/b6umx2e4ufgj/environments/master/assets/${imgId}?access_token=YoWcEVcezbFSQ4GLtv043Yokq60RR_Ph4YoZbUPGMq0`;

        fetch(imgUrl)
          .then((response) => response.json())
          .then((imageData) => {
            const imageUrl = "https:" + imageData.fields.file.url;
            imgEl.src = imageUrl;
            imgEl.alt = imageData.fields.title;
          })
          .catch((error) => {
            console.error("Error fetching image:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching about me entry:", error);
      });
  }

  cargarContenido("7LTZN7pHIRtZwWKApCiSxB");
}

main();
