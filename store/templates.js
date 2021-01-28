import { random } from "lodash";

export const state = () => ({
  active: 1,
  all: [
    {
      id: 0,
      name: "template-one",
      items: 8,
      used: false
    },
    {
      id: 1,
      name: "template-two",
      items: 4,
      used: false
    }
  ],
  folders: []
});

export const mutations = {
  setRandomTemplate(state, id) {
    state.active = id;
  }
};

export const actions = {
  setRandomTemplate({ commit, state, dispatch }, item) {
    const templateId = random(0, state.all.length - 1);
    commit("setRandomTemplate", templateId);
    console.log(templateId);
    const numberOfMediaToUse = state.all[templateId].items;
    dispatch("media/getMedia", { total: numberOfMediaToUse }, { root: true });
  }
};
