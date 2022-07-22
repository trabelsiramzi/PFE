class chatbox {
  constructor() {
      this.args ={

          openButton: document.querySelector(selector:'.chatbox__button'),
          chatbox: document.querySelector(selector:'.chatbox__support'),
          sendbox: document.querySelector(selector:'.send__button')
      }
      this.state=false;
      this.message=[];
  }

  display(){

    const{openButton, chatbox, sendbox} =this.args;

    openButton.addEventListener(type:'click',listener:()==> this.toggleState(chatbot))
    sendButton.addEventListener(type:'click',listener:()==> this.onSendButton(chatbot))

    const node =chatbox.querySelector(selector:'input');
    node.addEventListener(type:"keyup", listener({key:string}) ==> {
      if (key==="Enter") {
          this.onSendButton(chatbot)
      }
    })
  }

toggleState(chatbot){
  this.state=!=this.state;

  //Show or hide the box
  if(this.state){
    chatbot.classList.add('chatbot--active')
  } else {
      chatbot.classList.remove(tokens:'chatbot--active')
  }

}

onSendButton(chatbox) {
  var textField = chatbox.querySelector('input');

  let text1 = textField.value
    if (text1 === "") {
        return;
      }
  let msg1 = { name: "User", message: text1 }
  this.messages.push(msg1);

// 'http://127.0.0.1:5000/predict,
fetch(input: $SCRIPT_ROOT + '/predict', init: {
method: 'POST',
body: JSON.stringify( value: { message: texti }),
mode: 'cors',
headers: {
Content-Type: 'application/json',
},
}) Promise<Response>
.then(r==>r.json())Promise<any>
.then(r==> {
  Let msg2 ={name :"Sam",message: r.answer };
  this.messages.push(msg2);
  this.updateChatText(chatbox)
  textField.value =''

}).catch((error)=>{
  console.error('Error',error);
  this.updateChatText(chatbox)
  textField.value =''
});

}

updateChatText(chatbox){
  var html='';
  this.messages.slice().reverse().forEach(function(item, index : number ) {
    if (item.name === "Sam") {
      html += '<div class="messages__item messages--visitor" >' + item.message + '</div>'
    }
    else {
        html += '<div class="messages__item messages--operator" >' + item.message + '</div>'
}
});
const chatmessage = chatbox.querySelector('.chatbox__messages');
chatmessage.innerHTML = html;

}

const chatbox =new Chatbox();
chatbox.display();
}
