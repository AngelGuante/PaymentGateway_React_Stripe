//This script is to install dependencies into the server and the client at the same time
const child_process = require('child_process')

const installServerDependencies = () => child_process.exec('npm install --prefix server')
const installClientDependencies = () => child_process.exec('npm install --prefix client')

installServerDependencies()
installClientDependencies()
