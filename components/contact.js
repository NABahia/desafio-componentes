function contact(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
 <section class="contact">
      <div class="contact__contenedor">
        <h2 class="contact__title">Escribime</h2>
        <form class="contact__form">
          <div class="contact__nombre-email-container">
            <div class="contact__fieldset">
              <label for="contact__nombre" class="caption contact__label-nombre"
                >Nombre</label
              >
              <input
                id="contact__nombre"
                name="nombre"
                type="text"
                class="contact__input-nombre caption"
                placeholder="Tu nombre"
              />
            </div>
            <div class="contact__fieldset">
              <label for="contact__email" class="caption contact__label-email"
                >Email</label
              >
              <input
                id="contact__email"
                name="email"
                type="email"
                class="contact__input-email caption"
                placeholder="tu@mail.com"
              />
            </div>
          </div>
          <div class="contact__fieldset-mensaje">
            <label for="contact__mensaje" class="caption contact__label-mensaje"
              >Mensaje</label
            >
            <textarea
              name="mensaje"
              id="contact__mensaje"
              class="contact__textarea-mensaje caption"
            ></textarea>
          </div>
          <div class="contact__submit-section">
            <button class="contact__submit-button caption">
              Enviar
              <i class="fas fa-paper-plane contact__submit-button-icon"></i>
            </button>
          </div>
        </form>

        <div class="overlay"></div>

        <div class="contact__alerta">
          <button class="contact__botonCierraAlerta">X</button>
          <div class="contact__contenedor-alerta">
            <h3 class="contact__alerta-mensaje">Soy una alerta</h3>
          </div>
        </div>
      </div>
    </section>
    `;

  el.appendChild(componentEl);

  (function () {
    const botonCierraAlertaEl = document.querySelector(
      ".contact__botonCierraAlerta"
    );
    const alertaEl = document.querySelector(".contact__alerta");
    const overlayEl = document.querySelector(".overlay");
    botonCierraAlertaEl.addEventListener("click", () => {
      alertaEl.style.display = "none";
      overlayEl.style.display = "none";
    });
  })();

  function enviarAlerta(mensajeAlerta, limpiar) {
    const mensajeMostrar = mensajeAlerta;
    const alertaEl = document.querySelector(".contact__alerta");
    const mensajeEl = document.querySelector(".contact__alerta-mensaje");
    const formEl = document.querySelector(".contact__form");
    const overlayEl = document.querySelector(".overlay");

    mensajeEl.innerText = mensajeMostrar;
    alertaEl.style.display = "block";
    overlayEl.style.display = "block";
    if (limpiar) {
      formEl.reset();
    }
  }

  function enviarMail(mensaje) {
    const url = "https://apx.school/api/utils/email-to-student";

    const data = {
      to: "bahiaadrian@gmail.com", // Reemplaza con tu email
      message: JSON.stringify(mensaje), // Mensaje a enviar
    };

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data), // Convierte el objeto a JSON
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Éxito:", data); // Maneja la respuesta del servidor
        const mensajeAlerta = "Mensaje enviado con exito";
        let limpiar = true;
        enviarAlerta(mensajeAlerta, limpiar);
      })
      .catch((error) => {
        console.error("Error:", error); // Maneja errores
      });
  }

  (function () {
    const formEl = document.querySelector(".contact__form");
    formEl.addEventListener("submit", (evento) => {
      evento.preventDefault();
      form = evento.target;
      const formData = new FormData(form);
      const mensaje = Object.fromEntries(formData.entries());

      // Validación de campos

      for (const [key, value] of formData.entries()) {
        if (!value.trim()) {
          const mensajeError = `El campo ${key} está vacío. Por favor, complétalo.`;
          let limpiar = false;
          enviarAlerta(mensajeError, limpiar);
          return;
        }
      }
      enviarMail(mensaje);
    });
  })();
}
