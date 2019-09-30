import React, { Component } from 'react'
import Services from '../services/contestant.services'

import ContestantCard from './Contestants-card'

class ContestantList extends Component {

    constructor() {
        super()
        this.state = { contestants: [] }
        this.services = new Services()
    }

    componentDidMount = () => this.updateList()

    updateList = () => {
        this.services.getContestants()
            .then(response => this.setState({ contestants: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Listado de concursantes</h1>
                {this.state.contestants.map(contestant => <ContestantCard key={contestant._id} {...contestant} />)}
            </div>
        )
    }
}

export default ContestantList






// import React from 'react'
// import Services from '../services/contestant.services'
// const contestantsList = () => {
//     const [contestants, setContestants] = useState([])
//     const context = useContext(contextValue)
//     useEffect(() => {
//         updateList()
//     }, [])
    
    
//     updateList = () => {
//         this.services.getContestants()
//             .then(response => setContestants(response.data))
//     }
    

//     return (
//         <div>
//             {contestants}
//         </div>
//     )
// }


