import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const ContestantCard = ({ _id, firstName, lastName, dateBirth, 
    mobile, country, email, character, imageUrl}) => {

        return (
            <div className="col-md-3">
                <article className="contestant-card">
                    <h3>{firstName} {lastName}</h3>
                    <Link to={`/contestants/${_id}`}>
                        <Button variant="dark" size="sm" block>Ver detalles</Button>
                    </Link>
                </article>
            </div>
        )
    }
export default ContestantCard
