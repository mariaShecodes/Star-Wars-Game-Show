import React, { Component } from 'react'
import Services from '../services/contestant.services'

import Navbar from './Navbar'
import ContestantCard from './Contestants-card'

import '../style/list-style.css'


class ContestantList extends Component {

  constructor() {
    super()
    this.state = {
      contestants: [],
    }
    this.services = new Services()
  }

  componentDidMount = () => this.updateList()

  updateList = () => {
    this.services.getContestants()
      .then(response => this.setState({ contestants: response.data }))
      .catch(err => console.log(err))
  }
 
  deleteContestant(id) {
    this.services.deleteContestant(id)
      .then( x => this.updateList())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
      <Navbar />
        <div className="container">
          <h2 className="title-page">Listado de concursantes</h2>
            <div className="row">
              {this.state.contestants.map((contestant, idx) => <ContestantCard key={contestant._id} {...contestant} 
              delete={this.deleteContestant.bind(this)}/>)}
            </div>
        </div>
      </>
    )
  }
}

export default ContestantList

