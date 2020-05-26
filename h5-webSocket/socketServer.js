const ws = require('ws')
const host = 'localhost'
const port = 5000
let server = new ws.Server({host,port})
let count =1000
const clients=[]
server.on('connection',client =>{
  client.name ==++count
  clients[client.name] =client

  client.on('message', msg =>{
    msg.name = client.name 
    boradcast(clients,msg)
  })
})

let boradcast = (clients,msg) =>{
  for(let key in clients){
    clients[key].send(msg.toString())
  }
  
}
server.on('listening',() =>{
  console.log(`the server is running at ws://${host}:${port}`)
})