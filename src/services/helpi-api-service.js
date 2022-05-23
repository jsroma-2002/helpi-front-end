import axios from 'axios'

class HelpiApiService {
    http = null

    constructor(){
        this.http = axios.create({
            baseURL: `http://localhost:8080/api`,
            headers: {
                'accept': 'application/json'
            }
        })
    }

    getGamesApi(){
        return this.http.get(`/games`)
    }

    getGame(gameId){
        return this.http.get(`/games/${gameId}`)
    }

    getTrainingMaterialGameId(gameId){
        return this.http.get(`/trainingMaterials/${gameId}/trainings`)
    }

    getTrainingMaterialById(trainingId){
        return this.http.get(`/trainingMaterials/${trainingId}`)
    }
}

export default new HelpiApiService();