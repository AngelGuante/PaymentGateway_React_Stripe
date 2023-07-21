//This script is to start the server and the client at the same time
const childProcess = require('child_process')

const startServer = () => childProcess.exec('npm start --prefix server')
const startClient = () => childProcess.exec('npm start --prefix client')

startServer()
startClient()


// () => {
//     childProcess.exec('npm start --prefix server')}
// () => {
//     childProcess.exec('npm start --prefix client')}