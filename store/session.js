export const state = () => ({
  sessionId: null,
  items: [],
  user: {
    first: "",
    last: ""
  }
});

export const mutations = {
  saveItemToSession(state, item) {
    state.items.push(item);
  },
  setFirstName(state, event) {
    state.user.first = event.target.value;
  },
  setLastName(state, event) {
    state.user.last = event.target.value;
  }
};

// export const actions = {
//   async saveItemToSession({ state, commit }, { filename, question }) {
//
//   }
// };
