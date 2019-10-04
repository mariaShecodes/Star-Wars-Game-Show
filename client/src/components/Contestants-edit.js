import React, { Component } from 'react'
import Services from '../services/contestant.services'
import { Form } from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom'
import Navbar from './Navbar'

import '../style/edit-style.css'

class ContestantDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      contestant: {},
      country: '',
      mobile: '',
      email: '',
    }
    this.service = new Services()
  }

  componentDidMount() {
    this.service.getOneContestant(this.props.match.params.id)
      .then(response => this.setState({ contestant: response.data}))
      .catch(err => console.log('err', err))
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/contestants' />
    }
  }

  handleChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    let theUpdateContestant = {
      country: this.state.country,
      mobile: this.state.mobile,
      email: this.state.email
    }
    this.service.updateContestant(this.props.match.params.id, theUpdateContestant)
      .then( x => {
        this.setRedirect()
      })
      .catch(err => console.log('error', err))
  }

  render() {
    const photo = this.state.contestant.imageUrl == '' ? 'http://hdwpro.com/wp-content/uploads/2018/01/3D-Star-Wars.jpg' : this.state.contestant.imageUrl
    
    return (
      <>
        <Navbar />
        <div className="container">
          <h2 className="title-page">Editar información</h2>
         
          <div className="elements-details">
            <div className="container name-contestant">
              <img src={photo} alt="Foto concursante"className="image"/>
              <h4 className="name">{this.state.contestant.firstName} {this.state.contestant.lastName} </h4>
              <p>{this.state.contestant.dateBirth} </p>
              <p>Personaje elegido: {this.state.contestant.character} </p>
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

              <button type="submit" className="button-form button-update">Guardar</button>
              {this.renderRedirect()}

              <Link to={'/contestants'} className="link-back">Volver</Link>
            </form>
          </div>
        </div>
      </>
    )
  }
}
export default ContestantDetail