import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    id: '',
    name: '',
    email: '',
    password: '',
    bithdate: ''
  }),
  actions: {
    setPlayer(player) {
      this.id  = player.id,
      this.name = player.name,
      this.email = player.email,
      this.password = player.password,
      this.bithdate = player.bithdate
    },

    logout() {
      this.name = '',
      this.email = '',
      this.password = '',
      this.bithdate = ''
    }
  },
  getters: {
    isLogin() {
      if(this.name == '', this.email== ''){
        return false
      }
      else{
        return true
      }
    }
  },
  persist: true,
})