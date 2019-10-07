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
      country: '',
      mobile: '',
      email: '',
      character: '',
      imageUrl: '',
      uploading: false,
      swapiAllNames: null
    }
    this.service = new Services()
  }

  handleChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFileUpload = e => {
    this.setState({uploading:true})
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    this.service.handleUpload(uploadData)
        .then(this.setState({ uploading: true }))
        .then(response => this.setState({ imageUrl: response.data.secure_url, uploading:false }))
        .catch(err => console.log(err))
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.service.postContestant(this.state)
      .then( x => {
        console.log(x)
        this.props.closeModal()
        this.props.showToast()
      })
      .catch(err => console.log('error', err))
  }

  swapiSelectorPrinter = () => {
    let apiRequestCounter = 0
    if((this.state.swapiAllNames == null) && (apiRequestCounter < 3)) {
      this.service.swapiNames()
        .then( res => this.setState({swapiAllNames: res.data.results}))
        .catch(err => console.log('error', err))
      apiRequestCounter++
    }
  }

  render() {

    return (
      <>
        <div className="header-form">
          <h4 className="tittle-form">Registro de Participantes</h4>
          <button onClick={this.props.closeModal} className="button-form close-modal">X</button>
        </div>

        <hr></hr>

        <form onSubmit={this.handleFormSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label className="title">Nombre</Form.Label>
              <Form.Control name="firstName" type="text" className="form-control" id="input-firsttName" onChange={this.handleChangeInput} placeholder="Carlos" required/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label className="title">Apellido</Form.Label>
              <Form.Control name="lastName" type="text" className="form-control" id="input-lasttName" onChange={this.handleChangeInput} maxlength="10" placeholder="Rodríguez" required/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridDateBirth">
              <Form.Label className="title">Fecha de Nacimiento</Form.Label>
              <Form.Control name="dateBirth" type="date" className="form-control" id="input-dateBirth" onChange={this.handleChangeInput} maxlength="10" placeholder="12/05/2000" required/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridMobile">
              <Form.Label className="title">Teléfono móvil</Form.Label>
              <Form.Control name="mobile" type="text" className="form-control" id="input-mobile" onChange={this.handleChangeInput} maxlength="9" placeholder="666555444" required/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Label className="title">País</Form.Label>
              <Form.Control as="select" name="country" className="" id="input-country" selected={this.state.country} onChange={this.handleChangeInput} required>
                <option disabled selected value>Selecciona un país</option>
                <option value="España">España</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="title">Email</Form.Label>
              <Form.Control name="email" type="email" className="form-control" id="input-email" onChange={this.handleChangeInput} placeholder="hello@starwars.es" required/>
            </Form.Group>
          </Form.Row>
          
          <Form.Row>
            <Form.Group controlId="formGridImage">
              <Form.Label className="title">Imagen</Form.Label>
              <Form.Control name="imageUrl" type="file" className="form-control-image" id="input-img" onChange={this.handleFileUpload} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formGridImage">
              <p className="title">Personaje a interpretar</p>
              <select name="character" id="input-character" onChange={this.handleChangeInput}>
                {this.state.swapiAllNames ? this.state.swapiAllNames.map( character => <option key={character.name} value={character.name}>{character.name}</option>): this.swapiSelectorPrinter()}
              </select>
            </Form.Group>
          </Form.Row>
          <div class="box-button-send">
            {this.state.uploading ? <img src="./spinner01.gif" width="150px" className="imageUploader" alt="Cargando imagen" /> : <button type="submit" className="button-form button-send">Enviar</button>}
          </div>
        </form>
      </>
    )
  }
}
export default ContestantForm