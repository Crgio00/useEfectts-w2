import React, { useState, useEffect } from "react";

function Formulario() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    password: "",
  });
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!formulario.nombre) {
      nuevosErrores.nombre = "El nombre es requerido";
    }
    if (!formulario.email) {
      nuevosErrores.email = "El email es requerido";
    } else if (!/S+@S+.S+/.test(formulario.email)) {
      nuevosErrores.email = "El email es inválido";
    }
    if (!formulario.password) {
      nuevosErrores.password = "La contraseña es requerida";
    } else if (formulario.password.length < 8) {
      nuevosErrores.password = "La contraseña debe tener al menos 8 caracteres";
    }

    setErrores(nuevosErrores);
  };

  useEffect(() => {
    validarFormulario();
  }, [formulario]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errores).length === 0) {
      alert("Formulario válido. Datos enviados al servidor");
    } else {
      alert("Formulario inválido. Verifique los campos marcados");
    }
  };

  const handleChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formulario.nombre}
          onChange={handleChange}
        />
        {errores.nombre && <span className="error">{errores.nombre}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formulario.email}
          onChange={handleChange}
        />
        {errores.email && <span className="error">{errores.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formulario.password}
          onChange={handleChange}
        />
        {errores.password && <span className="error">{errores.password}</span>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
