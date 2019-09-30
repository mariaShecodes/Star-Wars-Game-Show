import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/contestant',
            withCredentials: true
        })
    }

    getContestants = () => this.service.get('/getAllContestants')
    getOneContestant = id => this.service.get(`/getOneContestant/${id}`)
    postContestant = theNewCoaster => this.service.post('/postContestant', theNewCoaster)
    handleUpload = theFile => this.service.post('/upload', theFile)
}