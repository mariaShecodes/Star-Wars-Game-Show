import React, { Component } from 'react'
import Services from '../services/contestant.services'

import { Form, Col } from 'react-bootstrap'
import '../style/form-style.css'

class ContestantForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      dateBirth: '',
      country: 'SPAIN',
      mobile: '',
      email: '',
      characters: '',
      imageUrl: '',
      description: ''
    }
    this.service = new Services()
  }

  handleChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.service.postContestant(this.state)
      .then( x => {
        console.log(x)
        this.props.closeModal()
      })
      .catch(err => console.log('error', err))
  }

  render() {
    return (
      <>
        <div className="header-form">
          <h4 className="tittle-form">Registro Participantes</h4>
          <button onClick={this.props.closeModal} className="button-form close-modal">X</button>
        </div>

        <hr></hr>

        <form onSubmit={this.handleFormSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label className="title">Nombre</Form.Label>
              <Form.Control name="firstName" type="text" className="form-control" id="input-firsttName" onChange={this.handleChangeInput} placeholder="Carlos"/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label className="title">Apellido</Form.Label>
              <Form.Control name="lastName" type="text" className="form-control" id="input-lasttName" onChange={this.handleChangeInput} placeholder="Rodríguez"/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="formGridDateBirth">
              <Form.Label className="title">Fecha de Nacimiento</Form.Label>
              <Form.Control name="dateBirth" type="date" className="form-control" id="input-dateBirth" onChange={this.handleChangeInput} placeholder="12/05/2000"/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="formGridMobile">
              <Form.Label className="title">Teléfono móvil</Form.Label>
              <Form.Control name="mobile" type="text" className="form-control" id="input-mobile" onChange={this.handleChangeInput} placeholder="666 555 444"/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="formGridEmail">
              <Form.Label className="title">Email</Form.Label>
              <Form.Control name="email" type="email" className="form-control" id="input-email" onChange={this.handleChangeInput} placeholder="hello@starwars.es"/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="formGridImage">
              <Form.Label className="title">Imagen</Form.Label>
              <Form.Control name="imageUrl" type="file" className="form-control-image" id="input-img" onChange={this.handleFileUpload} />
            </Form.Group>
          </Form.Row>
          <div class="box-button-send">
            <button type="submit" className="button-form button-send">Enviar</button>
          </div>
        </form>
      </>
    )
  }
}
export default ContestantForm