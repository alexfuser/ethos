import React, { Component } from 'react'
import './Descripcion.css'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

class Descripcion extends Component {
  render() {
    return (
      <div className="Descripcion">
        <Container className="py-5">
          <Row>
            <Col xs="12" lg="12">
              <p>
                Si eres un/a estudiante, desarrollador, investigador, diseñador, empresa, consultoría, equipo, o persona de la sociedad civil que considere tener una solución viable....
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Descripcion
