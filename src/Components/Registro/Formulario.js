import React, { useState } from "react";
import { Field, Formik } from "formik";
import { Form } from "formik";
import Button from "react-bootstrap/Button";

const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          Apellido: "",
          fecha_nacimiento: "",
          documento_identidad: "",
          correo: "",
          Nombre_Usuario: "",
          password: "",
          Confirmacion_password: "",
          Acepto_condiciones: "",
        }}
        validate={(valores) => {
          if (!valores.nombre) console.log("por favor un nombre");
          let errores = {};

          //validacion
          //nombre

          if (!valores.nombre) {
            errores.nombre = "por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "el nombre solo puede tener letra y espacio";
          }

          //Apellido

          if (!valores.Apellido) {
            errores.Apellido = "por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.Apellido)) {
            errores.Apellido = "el nombre solo puede tener letra y espacio";
          }

          //telefono
          if (!valores.telefono) {
            errores.telefono = "por favor ingresa tu numero telefonico";
          } else if (!/^\d{7,14}$/.test(valores.telefono)) {
            errores.telefono = "ingrese su numero telefonico";
          }

          //correo
          if (!valores.correo) {
            errores.correo = "por favor ingresa un correo electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo = "El nombre solo puede contener letras y espacios";
          }

          //documento_identidad
          if (!valores.documento_identidad) {
            errores.documento_identidad =
              "por favor ingresa tu documento identidad";
          }

          //Nombre_Usuario
          if (!valores.Nombre_Usuario) {
            errores.Nombre_Usuario = "por favor ingresa un Nombre de Usuario";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.Nombre_Usuario)) {
            errores.Nombre_Usuario =
              "el Nombre de Usuario solo puede tener letra y espacio";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <Form className="formulario" onSubmit={handleSubmit}>
            {console.log(errors)}

            {
              //nombre
            }

            <div>
              <h1>REGISTRARSE</h1>
            </div>
            <div>
              <label htmlFor="nombre">NOMBRE</label>
              <input
                className="form-control"
                type="text"
                id="nombre"
                name="nombre"
                placeholder="felipe banguero"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombre && errors.nombre && (
                <div className="error">{errors.nombre}</div>
              )}
            </div>

            {
              //Apellido
            }
            <div>
              <label htmlFor="nombre">APELLIDO</label>
              <input
                className="form-control"
                type="text"
                id="Apellido"
                name="Apellido"
                placeholder="Montaño Diaz"
                value={values.Apellido}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.Apellido && errors.Apellido && (
                <div className="error">{errors.Apellido}</div>
              )}
            </div>

            {
              //telefono
            }

            <div>
              <label htmlFor="telefono">TELEFONO</label>
              <input
                className="form-control"
                type="numero"
                id="telefono"
                name="telefono"
                placeholder="3000154706"
                value={values.telefono}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.telefono && errors.telefono && (
                <div className="error">{errors.telefono}</div>
              )}
            </div>

            {
              //documento_identidad
            }

            <div>
              <label htmlFor="documento_identidad">DOCUMENTO IDENTIDAD</label>
              <input
                className="form-control"
                type="numeros"
                id="documento_identidad"
                name="documento_identidad"
                placeholder="documento_identidad"
                value={values.documento_identidad}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.documento_identidad && errors.documento_identidad && (
                <div className="documento_identidad">
                  {errors.documento_identidad}
                </div>
              )}
            </div>

            {
              //correo
            }
            <div>
              <label htmlFor="correo">CORREO ELECTRONICO</label>
              <input
                className="form-control"
                type="text"
                id="correo"
                name="correo"
                placeholder="cooreo@correo.com"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.correo && errors.correo && (
                <div className="error">{errors.correo}</div>
              )}
            </div>

            {
              //Nombre_Usuario
            }

            <div>
              <label htmlFor="nombre">Nombre de Usuario</label>
              <input
                className="form-control"
                type="text"
                id="Nombre_Usuario"
                name="Nombre_Usuario"
                placeholder="philip"
                value={values.Nombre_Usuario}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.Nombre_Usuario && errors.Nombre_Usuario && (
                <div className="error">{errors.Nombre_Usuario}</div>
              )}
            </div>

            {
              //Contraseña
            }
            <div>
              <label>password:</label>
              <input
                required
                className="form-control"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            {
              //Contraseña
            }
            <div>
              <label>Confirmación de password:</label>
              <input
                required
                className="form-control"
                name="password"
                type="password"
                value={values.Confirmacion_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.Confirmacion_password &&
                errors.Confirmacion_password && (
                  <div className="error">{errors.Confirmacion_password}</div>
                )}
            </div>

            {
              //acepto
            }
            <div>
              <label>
                Acepta las<a href="Acepto_condiciones">condiciones</a>
              </label>
              <input
                type="checkbox"
                name=" Acepto las condiciones"
                value={values.Acepto_condiciones}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            {
              //eniando
            }

            <Button variant="secondary" type="submit">
              Registrarse
            </Button>

            {formularioEnviado && (
              <p className="exito">Formulario enviando con exito!</p>
            )}

            <li>
              <em>Agromprenx</em>
            </li>
            <div>
              <Button variant="success">iniciar sesion </Button>{" "}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
