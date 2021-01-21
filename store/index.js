const { checkFolder } = require("../plugins/webdav.js");

export const actions = {
  // This async function runs once before serving up the pages. We get the folder paths, and put it in an object, in the media state.
  // TODO: check if folder is empty, if empty, don't add.
  //   async nuxtServerInit({ commit }, { req }) {
  //     console.log(checkFolder)
  //
  //     const folders = await checkFolder(
  //       '/fotografie en eigen werk/GANSBERG KOEKELHOREN'
  //     )
  //
  //     console.log('at store index, got back folder content', folders)
  //
  //     // if (folders.length === 0) return []
  //     // const filterFolders = folders.filter(
  //     //   f =>
  //     //     f.type === 'directory' &&
  //     //     f.basename !== '.DS_Store' &&
  //     //     f.basename !== '._.DS_Store'
  //     // )
  //
  //     console.log('GOT FOLDER', folders)
  //     // const arrangedFolders = filterFolders.map((f, key) => {
  //     //   return { path: f.filename, id: key, used: false }
  //     // })
  //
  //     // commit('media/setFolders', arrangedFolders)
  //   }
};
