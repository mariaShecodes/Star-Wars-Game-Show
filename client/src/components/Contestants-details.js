import React, { Component } from 'react'
import Services from '../services/contestant.services'
import { Form, Col } from 'react-bootstrap'

import '../style/details-style.css'

class ContestantDetail extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      contestant: {},
        country: '',
        mobile: '',
        email: '',
        description: ''
    }
    this.service = new Services()
  }

  componentDidMount() {
    this.service.getOneContestant(this.props.match.params.id)
      .then(response => this.setState({ contestant: response.data}))
      .catch(err => console.log('err', err))
  }

  handleChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.service.updateContestant(this.props.match.params.id)
      .then( x =>   console.log('actualiza'))
      .catch(err => console.log('error', err))
  }

  render() {
    return (
      <>
        <h3>Esta es la vista de detalles</h3>
        <div className="elements-details">
          <div className="container">
            <img src={this.state.contestant.imageUrl} alt="Foto concursante"className="image"/>
            <h4>{this.state.contestant.firstName} {this.state.contestant.lastName} </h4>
            <p>Fecha de nacimiento: {this.state.contestant.dateBirth} </p>
          </div>

          <form onSubmit={this.handleFormSubmit} className="form-update">
            <Form.Row>
              <Form.Group controlId="formGridMobile">
                <Form.Label className="title">Teléfono móvil</Form.Label>
                <Form.Control name="mobile" type="text" className="form-control update-control" id="input-mobile" onChange={this.handleChangeInput} placeholder={this.state.contestant.mobile} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="formGridCountry">
                <Form.Label className="title">País</Form.Label>
                <Form.Control name="country" type="text" className="form-control update-control" id="input-country" onChange={this.handleChangeInput} placeholder={this.state.contestant.country} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="formGridEmail">
                <Form.Label className="title">Email</Form.Label>
                <Form.Control name="email" type="email" className="form-control update-control" id="input-email" onChange={this.handleChangeInput} placeholder={this.state.contestant.email} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="formGridDescription">
                <Form.Label className="title">Descripción</Form.Label>
                <Form.Control name="description" as="textarea" className="form-control update-control" id="input-description" onChange={this.handleChangeInput} placeholder={this.state.contestant.description} />
              </Form.Group>
            </Form.Row>

            <button type="submit" className="button-form button-update">Guardar Cambios</button>
   
          </form>

        </div>
      </>
    )
  }
}
export default ContestantDetail