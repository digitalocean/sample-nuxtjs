const { getDirectoryItems, checkFolder } = require('../plugins/webdav.js')
import { random } from 'lodash'

export const state = () => ({
  all: [],
  activePath: null,
  folders: [],
  activeStatus: 0,
  status: [
    {
      id: 0,
      text: 'All good'
    },
    {
      id: 1,
      text: 'Loading media'
    }
  ]
})

export const mutations = {
  add(state, item) {
    state.all.push(item)
  },
  setActivePath(state, item) {
    state.activePath = item
  },
  setFolders(state, item) {
    state.folders = item
  },
  setFolderAsUsed(state, id) {
    state.folders[id].used = true
  },
  resetMedia(state, id) {
    state.all = []
  },
  setStatus(state, id) {
    state.activeStatus = id
  }
}

export const actions = {
  async getMedia({ state, commit }, { total: total }) {
    console.log('Starting to get media')
    commit('setStatus', 1)
    console.log('getting media with a total of', total)
    // Empty media first
    commit('resetMedia')

    console.log('total of images we need to get', total)

    // const folders = await checkFolder(
    //   '/fotografie en eigen werk/GANSBERG KOEKELHOREN'
    // )

    const res = await this.$axios.get('/api/checkFolder', {
      params: {
        path: '/fotografie en eigen werk/GANSBERG KOEKELHOREN'
      }
    })
    console.log('HERE WE ARE', res.data)
    const items = res.data

    for (let i = 0; i < total; i++) {
      // get a random image
      const itemId = random(0, items.length)
      // console.log(itemId, items, items.length)
      const file = items[itemId - 1]
      // remove image from list
      console.log(items, itemId)
      console.log('the file', file)
      if (file == undefined) return null
      const res = await this.$axios.get('/api/getFile', {
        params: {
          path: file.filename
        }
      })
      // console.log('test with state', state)
      // console.log('the downloadLink we got back from server', res.data)
      const updatedFile = { ...file, url: res.data }
      commit('setActivePath', updatedFile.filename)
      commit('add', updatedFile)
      console.log('going through media', i, total - 1)
      if (i == total - 1) {
        console.log('finishing up')
      }
    }
    commit('setActivePath', null)
    commit('setStatus', 0)

    return
    // return
  }
}
