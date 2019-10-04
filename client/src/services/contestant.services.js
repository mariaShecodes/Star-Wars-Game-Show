import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/contestant',
            withCredentials: true
        })
        this.swapi = axios.create({
            baseURL: 'https://swapi.co/api',
            withCredentials: false
        })
    }

    getContestants = () => this.service.get('/getAllContestants')
    getOneContestant = id => this.service.get(`/getOneContestant/${id}`)
    postContestant = theNewContestant => this.service.post('/postContestant', theNewContestant)
    handleUpload = theFile => this.service.post('/upload', theFile)
    deleteContestant = id => this.service.get(`/delete/${id}`)
    updateContestant = (id, theUpdateContestant) => this.service.post(`/edit/${id}`, theUpdateContestant)
    swapiNames = () => this.swapi.get('/people')
}