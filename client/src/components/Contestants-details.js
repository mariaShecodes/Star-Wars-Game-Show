import React, { Component } from 'react'
import Services from '../services/contestant.services'


class ContestantDetail extends Component {

  constructor(props) {
    super(props)
    this.state = { contestant: {} }
    this.service = new Services()
  }

  componentDidMount() {
    this.service.getOneContestant(this.props.match.params.id)
      .then(response => this.setState({ contestant: response.data}))
      .catch(err => console.log('err', err))
  }

  render() {
    return (
      <div className="container">
        <h3>Esta es la vista de detalles</h3>
      </div>
    )
  }
}

export default ContestantDetail