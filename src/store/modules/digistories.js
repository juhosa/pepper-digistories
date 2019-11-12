const state = {
  stories: [],
  detectedUser: null,
  userModalActive: false,
  currentUser: null,
  selectedStory: null
}

const getters = {
  getUser: state => state.currentUser,
  getStories: state => state.stories,
  getDetectedUser: state => state.detectedUser,
  getUserModalActive: state => state.userModalActive,
  getSelectedStory: state => state.selectedStory
}

const actions = {
}

const mutations = {
  SET_USER ({ dispatch, commit }, user) {
    state.currentUser = user
  },

  SET_SELECTEDSTORY ({ dispatch, commit }, s) {
    state.selectedStory = s
  },

  EMPTY_SELECTEDSTORY ({ dispatch, commit }, s) {
    state.selectedStory = null
  },

  SET_DETECTED_USER ({ dispatch, commit }, user) {
    state.detectedUser = user
  },

  SET_USERMODALACTIVE ({ dispatch, commit }, s) {
    state.userModalActive = s
  },

  EMPTY_USER ({ dispatch, commit }) {
    state.currentUser = null
  },

  EMPTY_DETECTED_USER ({ dispatch, commit }) {
    state.detectedUser = null
  },

  SET_DETECTED_WORD ({ dispatch, commit }, word) {
    state.detectedWord = word
  },

  EMPTY_DETECTED_WORD ({ dispatch, commit }) {
    state.detectedWord = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
