import axios from 'axios'

class HelpiApiService {
    http = null

    constructor(){
        this.http = axios.create({
            baseURL: `https://helpi-api.herokuapp.com/api`,
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
        return this.http.get(`/trainingMaterials/game/${gameId}/trainings`)
    }

    getTrainingMaterialById(trainingId){
        return this.http.get(`/trainingMaterials/${trainingId}`)
    }

    postPlayer(player){
        return this.http.post(`/players`, {
            name: player.name,
            email: player.email,
            password: player.password,
            birthDate: player.birthDate
        })
    }
    
}

export default new HelpiApiService();