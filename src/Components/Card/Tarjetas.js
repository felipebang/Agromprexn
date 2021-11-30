import React from 'react'
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import './Tarjetas.css'


function Tarjetas() {
    return (
        <div>
            {/**Card */}
      <div className="card-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Verduras</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary">
                Catalogo
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Frutas</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary">
                Catalogo
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/3873912/pexels-photo-3873912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Vegetales</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary">
                Catalogo
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/5966153/pexels-photo-5966153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Frutos Secos
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary">
                Catalogo
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>

        </div>
    )
}

export default Tarjetas
