export default  client.onmessage = (msg) =>{
  const li = document.createElement('LI')
  li.innerHTML = msg.data
  ul.appendChild(li)
}