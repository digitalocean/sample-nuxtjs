const express = require('express')
const app = express()
const {
  getDirectoryItems,
  getDirectoryMedia,
  getDownloadUrl,
  downloadFile,
  checkFolder
} = require('../plugins/webdav.js')

// Move to helper library
function splitPath(path) {
  const regex = /^(.+)\/([^\/]+)$/gm
  let m
  while ((m = regex.exec(path)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++
    }

    return m
  }
}

app.get('/getDirectoryItems', async (req, res) => {
  const path = req.query.path
  // const images = await client.getDirectoryContents("/", { deep: true, glob: "/**/*.{png,jpg,gif}" });
  let items = await getDirectoryItems(path)
  // console.log('all items in folder', items)
  res.send(items)
})

app.get('/getMediaFromFolder', async (req, res) => {
  const path = req.query.path
  // const images = await client.getDirectoryContents("/", { deep: true, glob: "/**/*.{png,jpg,gif}" });
  let items = await getDirectoryMedia(path)
  // console.log('all items in folder', items)
  res.send(items)
})

app.get('/getFile', async (req, res) => {
  const path = req.query.path

  // Seperate path and file name
  const pathArray = splitPath(path)
  // console.log('sending to downloadFile', path)
  await downloadFile(pathArray[0], pathArray[1], pathArray[2])
  // console.log('WHY THIS NO WORK?', downloaded)
  res.send(pathArray[2])
})

app.get('/checkFolder', async (req, res) => {
  const path = req.query.path
  // const images = await client.getDirectoryContents("/", { deep: true, glob: "/**/*.{png,jpg,gif}" });
  let items = await checkFolder(path)
  console.log('At API now, got items', items)
  // console.log('all items in folder', items)
  res.send(items)
})

module.exports = {
  path: '/api/',
  handler: app
}
