import { createStore } from 'vuex'

export default createStore({
  state: {
    lang: 'en',
    gender: '',
    info: '',
    dailyAct: '',
    timeTired: '',
    digest: '',
    cravings: '',
    goals: '',
    height: '',
    age: '',
    curWeight: '',
    goalWeight: '',
    months_en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    months_fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    week_en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    week_fr: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
  },
  mutations: {
    setState(state, payload) {
      state[payload.name] = payload.val
    }
  },
  actions: {
  },
  getters: {
    currentWeek(state) {
      let result = []
      const today = new Date().getTime()

      for (let i=0; i<7; i++) {
        let idx = new Date().getDay() + i
        if (idx > 6) idx -= 7
        result.push({
          day: state[`week_${state.lang}`][idx],
          num: new Date(today + (1000 * 60 * 60 * 24 * i)).getDate()
        })
      }
      return result
    },
    resultWeight(state) {
      const current = +state.curWeight
      const goal = +state.goalWeight
      if (current - goal > 29) {
        return current - 29
      }
      return goal
    },
    possibleLoss(state) {
      const current = +state.curWeight
      const goal = +state.goalWeight
      if (current - goal > 29) {
        return 7.3
      }
      return ((current - goal) / 4)
    },
    similar(state, getters) {
      return getters.possibleLoss * 3.3
    },
    date(state) {
      const today = new Date().getTime()
      const dd = new Date(today + 2.506e+9).getDate()
      const mm = new Date(today + 2.506e+9).getMonth()
      const yy = new Date(today + 2.506e+9).getFullYear()
      return `${dd} ${state[`months_${state.lang}`][mm]} ${yy}`
    },
    monthYear(state) {
      const mm = new Date().getMonth()
      const year = new Date().getFullYear()
      return `${state[`months_${state.lang}`][mm]}, ${year}`
    }
  }
})
