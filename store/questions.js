import { random } from "lodash";

export const state = () => ({
  activeQuestion: 0,
  list: [
    { id: 0, text: "Hoe voel je je vandaag?", next: [], used: false },
    {
      id: 1,
      text: "Wat gaat er op dit moment in je om ?",
      next: [],
      used: false
    },
    {
      id: 2,
      text: "Kun je me meer vertellen over wat je daarover voelt ?",
      next: [],
      used: false
    },
    {
      id: 3,
      text: "Verontschuldigingen zijn niet nodig.",
      next: [],
      used: false
    },
    { id: 4, text: "ik luister.", next: [], used: false },
    { id: 5, text: "Dat is interessant. Ga door.", next: [], used: false },
    { id: 6, text: "Wat betekent dat voor je ?", next: [], used: false },
    { id: 7, text: "Ga door.", next: [], used: false },
    { id: 8, text: "Is dat echt altijd zo ?", next: [], used: false },
    { id: 9, text: "Wat ervaar je op dit moment ?", next: [], used: false },
    {
      id: 10,
      text:
        "Moeten we oppassen voor de glijbaan van emoties? Of net niet oppassen?",
      next: [],
      used: false
    },
    { id: 11, text: "Als in..?", next: [], used: false },
    {
      id: 12,
      text: "Ja. Ik weet het. Hoe kan je daar anders tegenaan kijken?",
      next: [],
      used: false
    },
    { id: 13, text: "Hoe gaat het daar met je?", next: [], used: false },
    { id: 14, text: "Hoe is dat voor je ?", next: [], used: false },
    { id: 15, text: "Vertel me daar meer over.", next: [], used: false },
    {
      id: 16,
      text: "Wat voor gevoelens heb je hierover ?",
      next: [],
      used: false
    },
    {
      id: 17,
      text: "Je lijkt er niet helemaal zeker van.",
      next: 17,
      used: false
    },
    { id: 18, text: "Wanneer ben jij jarig?", next: [], used: false }
  ]
});

export const mutations = {
  setUsed(state, key) {
    let list = state.list;
    list[key].used = true;
    state.list = [...list];
  },
  setNextQuestion(state, max) {
    console.log(max);
    state.activeQuestion = random(0, max);
  }
};

// export const actions = {
//   setNextQuestion(state, max) {
//     random(0, max)
//   }
// }
