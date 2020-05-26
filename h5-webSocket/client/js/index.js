const container = document.querySelector('.container')
const btn = document.querySelector('button')
const stin = document.querySelector('input')
const ul = document.querySelector('ul')
const h = document.documentElement.clientHeight
container.style.height = h - 100 + 'px'

const nameBox = document.querySelector('.name-box')
const cancel = document.querySelector('#cancel')
const confirm = document.querySelector('#confirm')
const user = document.querySelector('#username')

//连接服务器
const port = 5000
const host = 'localhost'
const serverURL = `ws://${host}:${port}`
const client = new WebSocket(serverURL)


import server from './server'
import input from  './input'



