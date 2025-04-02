function header(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
     <section class="header" id="header">
      <div class="header__contenedor">
        <div class="header__contenedor-logo">
          <a href="./index.html">
            <img src="./media/Logo.ico" alt="" class="header__logo" />
          </a>
        </div>
        <div class="header__contenedor-menu">
          <button class="botonAbreVentana">
            <img src="./media/burger.png" alt="" />
          </button>
        </div>
        <div class="header__contenedor-links">
         <a href="./portfolio.html" class="header__link">Porfolio</a>
         <a href="./servicios.html" class="header__link">Servicios</a>
         <a href="./contacto.html" class="header__link">Contacto</a>
         </div>
      </div>
      <div class="ventana">
        <button class="botonCierraVentana">X</button>
          <div class="header__contenedor-links-ventana">
         <a href="./portfolio.html" class="header__link-ventana">Porfolio</a>
         <a href="./servicios.html" class="header__link-ventana">Servicios</a>
         <a href="./contacto.html" class="header__link-ventana">Contacto</a>
         </div>
      </div>
    </section>
    `;

  el.appendChild(componentEl);

  (function () {
    const botonAbreVentanaEl = document.querySelector(".botonAbreVentana");
    const botonCierraVentanaEl = document.querySelector(".botonCierraVentana");
    const ventanaEl = document.querySelector(".ventana");

    botonAbreVentanaEl.addEventListener("click", () => {
      ventanaEl.style.display = "inherit";
    });
    botonCierraVentanaEl.addEventListener("click", () => {
      ventanaEl.style.display = "";
    });
  })();
}
