import React, { Component } from 'react'
import Services from '../services/contestant.services'

import { Form, Col, Button } from 'react-bootstrap'

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

    handleFormSubmit = e => {
        e.preventDefault()
        this.service.postContestant(this.state)
            .then(x => {
                this.props.updateContestantList()
            })
            .catch(err => console.log('error', err))
    }

    render() {
        return (
            <>
                <h4>Registro Participantes</h4>
                <hr></hr>
                <form onSubmit={this.handleFormSubmit}>
           
                </form>
            </>

        )
    }
}