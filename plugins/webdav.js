const { createClient } = require("webdav"); // https://github.com/perry-mitchell/webdav-client
const fs = require("fs");
import { random } from "lodash";

const client = createClient(
  "https://vriendenvanbrussel.stackstorage.com/remote.php/webdav/",
  {
    username: "biekas",
    password: "Gustav16"
  }
);

async function getDirectoryItems(directory) {
  // console.log("at webdav.js, getDirectoryItems, this is directory", directory);
  const contents = await client.getDirectoryContents(directory);
  return contents;
}

async function getDirectoryMedia(path) {
  const contents = await client.getDirectoryContents(path, {
    deep: true
    // glob: "/**/*.{png,jpg}"
  });
  // console.log('The contents we got', contents)
  return contents;
}

async function getDownloadUrl(path) {
  const url = await client.getFileDownloadLink(path);
  // console.log("here we are with the url", url);
  return url;
}

async function createTheFile(fullPath, fileName) {
  return new Promise((resolve, reject) => {
    let write = fs.createWriteStream("./static/" + fileName);
    fs.createReadStream(fullPath, "utf8").pipe(write);
    write.on("finish", resolve);
  });
}

// Move to helper library
function splitPath(path) {
  const regex = /^(.+)\/([^\/]+)$/gm;
  let m;
  while ((m = regex.exec(path)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    return m;
  }
}

async function checkFolder(directory, goUpOne = false) {
  // return directory
  // Get directory content
  // console.log("THE DIRECTORY WE ARE WORKING WITH", directory);
  // IMPLEMENT THE goUPONE flow, see line 112
  // console.log("go one up?", goUpOne);
  if (goUpOne) {
    const oneUp = splitPath(directory)[1];
    // console.log("should be going up one", { directory }, { oneUp });
    if (oneUp != "/fotografie en eigen werk") {
      // return
      // console.log("not at the highest level yet");
      // console.log("going up one, so directory is now", oneUp);
      directory = oneUp;
    }
  }

  console.log("looking inside folder", directory);
  // const directoryContent = await getDirectoryItems(directory)
  let directoryContent = await client.getDirectoryContents(directory);

  // console.log('got a directory with content', directoryContent)
  // Check directory length
  if (directoryContent.length == 0) {
    // The checked directory is empty

    return checkFolder(directory, true);
    // return checkFolder('/fotografie en eigen werk/GANSBERG KOEKELHOREN')
  }

  // Get only the directories in this directory
  // console.log('got this directory', directoryContent)

  // Filter out the folder we come from, if we are going up one
  if (goUpOne) {
    // console.log(
    //   "we went up one, so taking out the folder we were, so we dont go inside the same one",
    //   directory,
    //   directoryContent.length,
    //   directoryContent
    // );
    directoryContent = directoryContent.filter(d => d.filename != directory);
  }
  const onlyDirectories = directoryContent.filter(d => d.type == "directory");
  // console.log("there are directories here", onlyDirectories.length);
  // if there are no directories in this directory, we have to go up one, and retry (but not this one)
  if (onlyDirectories.length == 0) {
    // console.log("going in no directory flow with directory", directory);
    // TODO: Now i go all the way back up, would be better to go to one higher
    // console.log()
    const pathArray = splitPath(directory);
    // console.log(pathArray);
    // console.log("sending to downloadFile", pathArray[1]);

    // TODO: He keeps on being in this loop inside same folder. If none of them have a folder called 2048, move one higher
    return checkFolder(pathArray[1], true);
    // console.log("There are no directories in this directory");
  }

  // If there are directories, find one called 2048
  const only2048 = onlyDirectories.filter(d => {
    // console.log('checking for basename', d)
    if (d.basename == "2048") return d;
  });
  // console.log("these are the directories called 2048", only2048.length);
  // If there is no directory called 2048, grab a random directory, and run CheckForFolder again
  if (only2048.length == 0) {
    // console.log(
    //   'No 2048 folder',
    //   onlyDirectories[random(0, onlyDirectories.length)]
    // )

    //
    const randomNumber = random(0, onlyDirectories.length - 1);
    console.log("random number from directory list", randomNumber);
    // console.log(onlyDirectories, onlyDirectories.length)
    const directoryToCheck = onlyDirectories[randomNumber];
    // console.log('this is the new directory to check', directoryToCheck)

    // TODO: pass the old folder, and if an old folder is passed, after checking directoryContent,
    return checkFolder(directoryToCheck.filename, false);
  }

  // If this is the right folder, get contents and download
  // console.log('the 2048 folder we want to check', only2048[0].)
  const content2048 = await getDirectoryItems(only2048[0].filename);
  // console.log("This is the inside of the 2048 folder", content2048);
  return content2048;
}

async function downloadFile(fullPath, directory, fileName) {
  return new Promise((resolve, reject) => {
    let write = fs.createWriteStream("./static/" + fileName);
    client.createReadStream(fullPath).pipe(write);
    write.on("finish", resolve);
  });
}

async function writeFile(path, content) {
  // writeFile function with filename, content and callback function
  fs.writeFile(path, content, function(err) {
    if (err) throw err;
    console.log("File is created successfully.");
    return;
  });
}

async function sendSession(user, session) {
  // TODO: Add language
  return new Promise((resolve, reject) => {
    console.log(user.first, user.last, session);
    const fileName = user.first + "_" + user.last + "_" + Date.now() + ".txt";

    // Create the text file
    let content = "";
    for (let i = 0; i < session.length; i++) {
      content +=
        i + ". " + session[i].question + "\n" + session[i].answer + "\n" + "\n";
    }

    const localPath = "./sessions/" + fileName;
    console.log(
      `Creating a local file with path ${localPath} & items:`,
      session
    );

    let writeLocally = writeFile(localPath, content);
    const writeRemote = client.createWriteStream(
      "/fotografie en eigen werk/Nalatenschap Inzendingen/" + fileName
    );
    fs.createReadStream(localPath).pipe(writeRemote);
    writeRemote.on("finish", resolve);
  });
}

export {
  getDirectoryItems,
  checkFolder,
  getDirectoryMedia,
  getDownloadUrl,
  downloadFile,
  sendSession
};
//
