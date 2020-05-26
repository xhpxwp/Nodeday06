let closeNameBox = () =>{
    nameBox.style.display = none
  }

let sendSMS = () =>{
  const val = stin.value
  if(val){
    client.send(val)
    stin.value = ''
  }
  else{
    alert('请输入内容')
  }
}

cancel.onclick = closeNameBox

confirm.onclick = () =>{
  window.username = user.value
  client.open = () =>{
    client.send(`${window.username}进来直播间`)
  }
  closeNameBox()
}

btn.onclick = sendSMS
document.onkeydown = function(e){
    e=event ||window.event
    if(e.keyCode==13){
    sendSMS()
    }
}


export {
    
}