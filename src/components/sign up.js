import React, { useState } from "react";

const RegistroForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [touched, setTouched] = useState({
    nombre: false,
    apellido: false,
    contrasena: false,
  });

  const validateContrasena = () => {
    if (contrasena.length < 6) {
      return "La contraseña debe tener al menos 6 caracteres.";
    }
    return "";
  };

  const validateNombre = () => {
    if (!/^[a-zA-Z]+$/.test(nombre)) {
      return "El nombre solo debe contener letras.";
    }
    return "";
  };

  const validateApellido = () => {
    if (!/^[a-zA-Z]+$/.test(apellido)) {
      return "El apellido solo debe contener letras.";
    }
    return "";
  };

  const handleBlur = (field) => {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [field]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones antes de enviar los datos al servidor
    const errorContrasena = validateContrasena();
    const errorNombre = validateNombre();
    const errorApellido = validateApellido();

    if (!errorContrasena && !errorNombre && !errorApellido) {
      // Aquí puedes hacer la llamada al backend para enviar los datos del formulario
      console.log({ nombre, apellido, correo, nacimiento, contrasena });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          onBlur={() => handleBlur("nombre")}
        />
        {touched.nombre && validateNombre() && <p>{validateNombre()}</p>}
      </div>
      <div>
        <label>Apellido:</label>
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          onBlur={() => handleBlur("apellido")}
        />
        {touched.apellido && validateApellido() && <p>{validateApellido()}</p>}
      </div>
      <div>
        <label>Correo:</label>
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </div>
      <div>
        <label>Fecha de nacimiento:</label>
        <input
          type="date"
          value={nacimiento}
          onChange={(e) => setNacimiento(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          onBlur={() => handleBlur("contrasena")}
        />
        {touched.contrasena && validateContrasena() && (
          <p>{validateContrasena()}</p>
        )}
      </div>

      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegistroForm;
