// import { socketService, SOCKET_EVENT_REVIEW_ADDED, SOCKET_EVENT_REVIEW_ABOUT_YOU } from '../services/socket.service'
import { bugService } from '../services/bug.service'
export const bugStore = {
  state: {
    bug: {},
  },
  getters: {
    bug(state) {
      return state.bug
    },
  },
  mutations: {
    setBugs(state, { bugs }) {
      state.bugs = bugs
    },
    addBug(state, { bug }) {
      state.bug = bug
    },
    removeBug(state, { bugId }) {
      state.bugs = state.bugs.filter((bug) => bug._id !== bugId)
    },
  },
  actions: {
    async sendBug(context, { bug }) {
      try {
        bug = await bugService.add(bug)
        context.commit({ type: 'addBug', bug })
        return bug
      } catch (err) {
        console.log('bugStore: Error in addBug', err)
        throw err
      }
    },
  },
}
