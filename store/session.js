export const state = () => ({
  sessionId: null,
  items: []
});

export const mutations = {
  saveItemToSession(state, item) {
    state.items.push(item);
  }
};

// export const actions = {
//   async saveItemToSession({ state, commit }, { filename, question }) {
//
//   }
// };
