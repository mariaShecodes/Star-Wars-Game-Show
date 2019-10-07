import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faMapMarkerAlt, faMobileAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

import '../style/card-style.css'

class ContestantCard extends Component {

  constructor(props) {
      super(props)
      this.state = {
        show: false
      }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {

    const { _id, firstName, lastName, dateBirth, mobile, country, email, character, imageUrl } = this.props
    const photo = this.props.imageUrl === '' ? 'http://hdwpro.com/wp-content/uploads/2018/01/3D-Star-Wars.jpg' : imageUrl
    const capitalize = (str) => {
      let lower = str.toLowerCase()
      return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

      return (
 
      <div className='card'>
        <img src={photo} alt="Fotografia del concursante" className="photo"/>
        <div className="info-contestant">
          <h4 className="name-complet-contestant">{capitalize(firstName)} {capitalize(lastName)}</h4>
          <p className="data">Personaje elegido: {character}</p>
          <hr></hr>
          <p>Datos personales:</p>
          <div className="personal-data">
            <div className="order-data">
              <div className="colocation">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <p className="data">{dateBirth}</p>
              </div>
              <div className="colocation">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p className="data">{country}</p>
              </div> 
            </div>
            <div className="order-data">
              <div className="colocation">
                <FontAwesomeIcon icon={faMobileAlt} />
                <p className="data">{mobile}</p>
              </div>
              <div className="colocation">
                <FontAwesomeIcon icon={faEnvelopeOpen} />
                <p className="data">{email}</p>
              </div>
            </div>
          </div>
        </div>

        <Link to={`/edit/${_id}`} className="button-details">Editar</Link>
        <Link key={_id} onClick={this.handleShow} className="button-delete">Eliminar</Link>        

        <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Concursante</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Deseas eliminar el concursante?</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={this.handleClose}>
            Cerrar
          </Button>
          <Button variant="danger" onClick={this.props.delete.bind(this, _id)}>
            Eliminar
          </Button>
        </Modal.Footer>
        </Modal>
      
      </div>
    )
  }
}

export default ContestantCard
