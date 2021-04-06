const input = document.getElementById("input");
const form = document.getElementById("form");

const expresionRegular = {
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};
const campos = {
  correo: false,
};
const validarForm = (e) => {
  if (e.target.name == "correo") {
    if (expresionRegular.correo.test(e.target.value)) {
      document
        .getElementById("contenedor__form")
        .classList.remove("contenedor__form-incorrecto");
      campos["correo"] = true;
    } else {
      document
        .getElementById("contenedor__form")
        .classList.add("contenedor__form-incorrecto");
      campos["correo"] = false;
      setTimeout(() => {
        document
          .getElementById("contenedor__form")
          .classList.remove("contenedor__form-incorrecto");
      }, 5000);
    }
  }
};

input.addEventListener("change", validarForm);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (campos.correo) {
    form.reset();
  } else
    document
      .getElementById("contenedor__form")
      .classList.add("contenedor__form-incorrecto");
});
