import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import '../style/home-style.css'


import SpringModal from './Modals/Modal'
import ContestantsForm from './Contestants-form'

class Home extends Component {

  render() {
    return (
      <div className="background-home">
        <Container className="container-home">
          <Row>
            <Col>
              <h1>Star Wars Game Show</h1>
     
              
              <p className="p-home">Aquí irá un texto motivador y maravilloso.
                "El miedo lleva a la ira, la ira lleva al odio,
                el odio lleva el sufrimiento. Percibo mucho miedo en ti"
              </p>


              <SpringModal button={ "Registrarse" } className="button-home">
                <ContestantsForm />
              </SpringModal>

            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home
