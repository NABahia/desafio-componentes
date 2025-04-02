function footer(el) {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `
    <section class="footer">
      <div class="footer__contenedor">
        <div class="footer__contenedor-logo">
          <img src="./media/Logo.ico" alt="" class="footer__logo" />
        </div>
        <div class="footer__contenedor-links-sections">
          <div class="footer__contenedor-links-sections-link-container">
            <a class="footer__contenedor-links-sections-link" href="./index.html"
              ><i
                class="fa-solid fa-house footer__contenedor-links-sections-icon"
              ></i
              >Home</a
            >
          </div>
          <div class="footer__contenedor-links-sections-link-container">
            <a
              class="footer__contenedor-links-sections-link"
              href="./servicios.html"
              ><i
                class="fa-regular fa-user footer__contenedor-links-sections-icon"
              ></i
              >Servicios</a
            >
          </div>
          <div class="footer__contenedor-links-sections-link-container">
            <a class="footer__contenedor-links-sections-link" href="./contacto.html"
              ><i
                class="fa-solid fa-phone footer__contenedor-links-sections-icon"
              ></i
              >Contacto</a
            >
          </div>
        </div>
        <div class="footer__contenedor-links-redes">
              <a href="https://ar.linkedin.com/" class="social-link"
               ><i class="fa-brands fa-linkedin"></i
              ></a>
              <a href="https://github.com/NABahia" class="social-link"
                ><i class="fa-brands fa-square-github"></i
              ></a>
              <a href="https://x.com/Adrian_Bahia" class="social-link"
               ><i class="fa-brands fa-square-x-twitter"></i
              ></a>
        </div>
        <div class="footer__contenedor-my-link">
          <label for="">
            ©2025 - https://mi.web
            <link rel="stylesheet" href="https://mi.web" />
          </label>
        </div>
      </div>
    </section>
    `;

  el.appendChild(footerEl);
}
