export const state = () => ({
  sessionId: null,

  maxQuestions: 6,
  items: [],
  user: {
    first: "",
    last: ""
  },
  activeStatus: 0,
  status: [
    {
      id: 0,
      text: "All good"
    },
    {
      id: 1,
      text: "Selectie versturen"
    }
  ]
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
  },
  setStatus(state, value) {
    state.activeStatus = value;
  }
};

export const actions = {
  async sendSession({ state, commit }) {
    console.log("Starting to send selection");
    commit("setStatus", 1);

    const res = await this.$axios.get("/api/sendSession", {
      params: {
        session: JSON.stringify(state.items),
        user: JSON.stringify(state.user)
      }
    });

    console.log("HERE WE ARE", res.data);

    return;
    // return
  }
};
