import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
                  <footer className="pie-pagina">
        <div className="grupo-1">
          <div className="box">
            <figure>
              <div className="cont-color">
                <h1 className="colorido" style={{ color: "yellow" }}>
                  A
                </h1>
                <h1 className="colorido" style={{ color: "green" }}>
                  G
                </h1>
                <h1 className="colorido" style={{ color: "blue" }}>
                  R
                </h1>
                <h1 className="colorido" style={{ color: "white" }}>
                  O
                </h1>
                <h1 className="colorido" style={{ color: "orange" }}>
                  M
                </h1>
                <h1 className="colorido" style={{ color: "violet" }}>
                  P
                </h1>
                <h1 className="colorido" style={{ color: "purple" }}>
                  R
                </h1>
                <h1 className="colorido" style={{ color: "grey" }}>
                  E
                </h1>
                <h1 className="colorido" style={{ color: "aqua" }}>
                  N
                </h1>
                <h1 className="colorido" style={{ color: "red" }}>
                  X
                </h1>
              </div>
            </figure>
          </div>
          <div className="box">
            <h2>SOBRE NOSOTROS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              ipsa?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              ipsa?
            </p>
          </div>
          <div className="box">
            <h2>SIGUENOS</h2>
            <div className="red-social">
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
                  alt=""
                  width="45px"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt=""
                  width="45px"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                  alt=""
                  width="45px"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn-icons.flaticon.com/png/512/3256/premium/3256013.png?token=exp=1635173090~hmac=2642d00616bc472b8afd3060d5bbcd1a"
                  alt=""
                  width="45px"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="grupo-2">
          <small>
            © 2021 <b>Agromprenx</b> - Todos los Derechos Reservados.
          </small>
        </div>
      </footer>
        </div>
    )
}

export default Footer
