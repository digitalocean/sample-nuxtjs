// const { createClient } = require('webdav') // https://github.com/perry-mitchell/webdav-client
// import { random } from 'lodash'
//
// const client = createClient(
//   'https://vriendenvanbrussel.stackstorage.com/remote.php/webdav/',
//   {
//     username: 'biekas',
//     password: 'Gustav16'
//   }
// )
//
// const baseDirectory = `/fotografie en eigen werk/GANSBERG KOEKELHOREN`
//
// async function getDirectoryItems(directory) {
//   console.log('1', directory)
//   const contents = await client.getDirectoryContents(directory)
//   console.log('2', contents, contents.length)
//   // TODO: if the folder is empty, i just now start from the beginning (baseDirectory). Would be better if I just go one folder up?
//   if (contents.length === 0) return findItems(baseDirectory)
//   if (contents == undefined) return findItems(baseDirectory)
//   return contents
// }
//
// async function getRandomFromFolder(directoryItems) {
//   console.log('3', directoryItems, directoryItems.length)
//   if (directoryItems.length === 1) return directoryItems[0]
//   const folder = directoryItems[random(0, directoryItems.length - 1)]
//   console.log(20, folder)
//   console.log('4', directoryItems.length, folder, directoryItems)
//   console.log('5', folder, directoryItems)
//   if (folder == undefined) return directoryItems
//   if (folder.basename === '.DS_Store' || folder.basename === '._.DS_Store')
//     return getRandomFromFolder(directoryItems)
//   return folder
// }
//
// function getFolderFromItemName(path) {
//   const regex = /^(.+)\/([^\/]+)$/gm
//   let m
//   while ((m = regex.exec(path)) !== null) {
//     // This is necessary to avoid infinite loops with zero-width matches
//     if (m.index === regex.lastIndex) {
//       regex.lastIndex++
//     }
//
//     // The result can be accessed through the `m`-variable.
//     // m.forEach((match, groupIndex) => {
//     //   console.log(`Found match, group ${groupIndex}: ${match}`)
//     // })
//     console.log(8, m)
//     return m[1]
//   }
// }
// function checkType(item) {
//   console.log('10', item)
//   if (item.type === 'directory') {
//     console.log('11', item.type === 'directory', item)
//     return findItems(item.filename)
//   } else {
//     const folderPath = getFolderFromItemName(item.filename)
//     console.log('6', folderPath)
//     return folderPath
//   }
// }
//
// async function findItems(path) {
//   return checkType(await getRandomFromFolder(await getDirectoryItems(path)))
// }
//
// export default async function({ route, store }) {
//   // return store.commit('media/add', 3)
//   const items = await findItems(baseDirectory)
//
//   console.log('This is the result', items)
//
//   // await getDirectoryItems()
//
//   //   const folderItems = await client.getDirectoryContents(folder.filename)
//   //
//   //   console.log(folderItems)
//
//   //   Promise.all(
//   //     directoryItems.map(async file => {
//   //       const contents = await client.getFileDownloadLink(file.filename)
//   //
//   //       return store.commit('media/add', contents)
//   //     })
//   //   )
// }
