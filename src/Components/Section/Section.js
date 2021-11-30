import React from 'react'
import './Section.css'

function Section() {
    return (
        <div>
                  {/**section */}
      <main>
        <section className="container-section">
          <div className="container-titulo1">
            <h1 className="section-h1" id="mision">
              Mision
            </h1>
            <p>
              La misión empresarial es el conjunto de objetivos generales y
              principios de trabajos para avanzar en una organización, que se
              expresa por medio de una declaración de la misión, que resume la
              misión empresarial en una sola frase, con el objetivo de comunicar
              la misión a todos los miembros de la organización
            </p>
          </div>
          <div className="container-img">
            <img
              src="https://images.pexels.com/photos/220444/pexels-photo-220444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="img-svg"
            />
          </div>
        </section>

        <section className="container-section">
          <div className="container-titulo1">
            <h1 className="section-h1" id="vision">
              Vision
            </h1>
            <p>
              La visión de una empresa describe el objetivo que espera lograr en
              un futuro. Se trata de la expectativa ideal de lo que quiere
              alcanzar la organización, indicando además cómo planea conseguir
              sus metas.
            </p>
          </div>
          <div className="container-img">
            <img
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="img-svg"
            />
          </div>
        </section>

        <section className="container-section">
          <div className="container-titulo1">
            <h1 className="section-h1" id="historia">
              Historia
            </h1>
            <p>
              La historia de la empresa es una disciplina intermedia entre la
              historiografía y la ciencia económica, que recientemente ha pasado
              a convertirse en disciplina académica. Tiene como objeto el
              estudio del desarrollo histórico de la empresa, unidad de
              producción en el sistema capitalista o en la economía de mercado.
            </p>
          </div>
          <div className="container-img">
            <img
              src="https://images.pexels.com/photos/7255262/pexels-photo-7255262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="img-svg"
            />
          </div>
        </section>
      </main>
        </div>
    )
}

export default Section
