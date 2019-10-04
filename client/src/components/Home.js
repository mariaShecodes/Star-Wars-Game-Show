import React, { Component } from 'react'

import Navbar from './Navbar'
import { Toast } from 'react-bootstrap'
import SpringModal from './Modals/Modal'
import ContestantsForm from './Contestants-form'

import '../style/home-style.css'

class Home extends Component {

  constructor() {
    super()
    this.state = { showToast: false }
  }
  toastOpen = () => this.setState({ showToast: true })
  toastClose = () => this.setState({ showToast: false })

  render() {
    return (
      <>
        <Navbar />

        <Toast onClose={this.toastClose} show={this.state.showToast} delay={4000} autohide style={{ position: 'fixed', bottom:50, right:50, zIndex: 100 }}>
          <Toast.Header style={{background: '#464646', color: 'white' }}>
              <strong className="mr-auto">Acción completada</strong>
          </Toast.Header>
          <Toast.Body>Registro guardado correctamente <br/> ¡Que la suerte te acompañe!</Toast.Body>
        </Toast>

        <div className="background-home">
          <div className="container-home">
            <h1>Star Wars Game Show</h1>
            <p className="p-home">Aquí irá un texto motivador y maravilloso.
              "El miedo lleva a la ira, la ira lleva al odio,
              el odio lleva el sufrimiento. Percibo mucho miedo en ti"
            </p>

            <SpringModal button={ "Registrarse" } >
              <ContestantsForm showToast={this.toastOpen}/>
            </SpringModal>

          </div>
        </div>
      </>
    )
  }
}

export default Home
