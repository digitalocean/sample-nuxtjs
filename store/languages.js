import { random } from "lodash";

// https://www.programmableweb.com/news/how-to-programmatically-translate-your-app-or-website-apis/how-to/2020/06/18
export const state = () => ({
  active: 0,
  all: [
    { lang: "nl", active: true },
    { lang: "en", active: false },
    { lang: "fr", active: false },
    { lang: "ar", active: false },
    { lang: "it", active: false },
    { lang: "gr", active: false },
    { lang: "es", active: false },
    { lang: "ch", active: false },
    { lang: "de", active: false },
    { lang: "pl", active: false },
    { lang: "ru", active: false },
    { lang: "ro", active: false },
    { lang: "sk", active: false },
    { lang: "se", active: false },
    { lang: "dk", active: false }
  ]
});

export const mutations = {
  setActive(state, lang) {
    state.active = lang;
  }
};

// export const actions = {
//   setNextQuestion(state, max) {
//     random(0, max)
//   }
// }
