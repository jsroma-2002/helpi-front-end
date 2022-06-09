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

    getTrainingMaterialByPlayer(playerId){
        return this.http.get(`/trainingMaterials/player/${playerId}`)
    }

    postPlayer(player){
        return this.http.post(`/players`, {
            name: player.name,
            email: player.email,
            password: player.password,
            birthDate: player.birthDate
        })
    }

    getPlayerById(playerId){
        return this.http.get(`/players/${playerId}`)
    }

    loginPlayer(email, password){
        return this.http.post(`/players/login`, {
            email: email,
            password: password,
        })
    }

    purchaseTrainingMaterial(playerId, trainingId){
        return this.http.put(`/players/${playerId}/training/${trainingId}`)
    }

    getCommunities(){
        return this.http.get(`/community`)
    }

    getCommunity(communityId){
        return this.http.get(`/community/${communityId}`)
    }
    
    joinCommunity(playerId, communityId){
        return this.http.put(`/players/${playerId}/community/${communityId}`)
    }

    getCommunitiesByPlayerId(playerId){
        return this.http.get(`/community/player/${playerId}`)
    }
}

export default new HelpiApiService();