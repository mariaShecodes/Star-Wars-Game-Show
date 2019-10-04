import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'

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

    const { _id, firstName, lastName, character, imageUrl } = this.props

      return (
      <div className='card'>
        <img src={imageUrl} alt="Fotografia del concursante" className="photo"/>
        <div className="info-contestant">
          <h4 className="name-contestant">{firstName} {lastName}</h4>
          <p className="character">Personaje elegido: {character}</p>
        </div>
        <Link to={`/contestants/${_id}`} className="button-details">Ver detalles</Link>
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
