class Chatbox {
  constructor() {
    this.args = {
      openButton: document.querySelector(".chatbox__button"),
      chatBox: document.querySelector(".chatbox__support"),
      sendButton: document.querySelector(".send__button"),
    };
    this.state = false;
    this.messages = [];
  }
  display() {
    const { openButton, chatBox, sendButton } = this.args;
    openButton.addEventListener("click", () => this.toggleState(chatBox));
    sendButton.addEventListener("click", () => this.onSendButton(chatBox));

    const node = chatBox.querySelector("input");
    node.addEventListener("keyup", ({ key }) => {
      if (key === "Enter") {
        this.onSendButton(chatBox);
      }
    });
  }
  toggleState(chatbox) {
    this.state = !this.state;
    if (this.state) {
      chatbox.classList.add("chatbox--active");
    } else {
      chatbox.classList.remove("chatbox--active");
    }
  }
  onSendButton(chatbox) {
    let textField = chatbox.querySelector("input");
    let text1 = textField.value;
    if (text1 === "") {
      return;
    }
    let msg1 = { name: "User", message: text1 };
    this.messages.push(msg1);

    fetch($SCRIPT_ROOT + "/predict", {
      method: "POST",
      body: JSON.stringify({ message: text1 }),
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((r) => {
        let msg2 = { name: "SDF", message: r.answer };
        this.messages.push(msg2);
        this.updateChatText(chatbox);
        textField.value = "";
      })
      .catch((error) => {
        console.error("Error: ", error);
        this.updateChatText(chatbox);
        textField.value = "";
      });
  }
  updateChatText(chatbox) {
    let html = "";
    this.messages
      .slice()
      .reverse()
      .forEach(function (item) {
        if (item.name === "SDF") {
          html +=
            '<div class="messages__item messages__item--visitor">' +
            item.message +
            "</div>";
        } else {
          html +=
            '<div class="messages__item messages__item--operator">' +
            item.message +
            "</div>";
        }
      });
    const chatmessage = chatbox.querySelector(".chatbox__messages");
    chatmessage.innerHTML = html;
  }
}
//import css
var head = document.getElementsByTagName('HEAD')[0];
 
        // Create new link Element
        var link = document.createElement('link');
 
        // set the attributes for link element
        link.rel = 'stylesheet';
     
        link.type = 'text/css';
     
        link.href = 'http://127.0.0.1:5000/css';
 
        // Append link element to HTML head
        head.appendChild(link);
//Create HTML file 
var chatboxDiv = document.querySelector(".chatbox");
const image = document.createElement('img');

// Remote image
image.setAttribute(
  'src',
  "https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-agent-basic-ui-elements-2.4-sbts2018-flat-sbts2018.png",
);
var h4=document.createElement('h4');
h4.setAttribute('class',"chatbox__heading--header");
h4.innerHTML="SOPRAHR BOT";
var p=document.createElement('p');
p.setAttribute('class',"chatbox__heading--header");
p.innerHTML="Votre assistant virtuel";

//chatbox content hearder 
 var divchatboxheader = document.createElement('div');
 divchatboxheader.setAttribute('class',"chatbox__content--header");
divchatboxheader.appendChild(h4);
divchatboxheader.appendChild(p);

//chatbox image hearder 
 var divimageheader = document.createElement('div');
 divimageheader.setAttribute('class',"chatbox__image--header");
divimageheader.appendChild(image);

//chatbot header 
var divchatheader = document.createElement('div');
 divchatheader.setAttribute('class',"chatbox__header");
divchatheader.appendChild(divimageheader)
divchatheader.appendChild(divchatboxheader)

//chatbox messages
var emptydiv =document.createElement('div');

var divchatboxmessage=document.createElement('div');
divchatboxmessage.setAttribute('class',"chatbox__messages");    
divchatboxmessage.appendChild(emptydiv);

//chatbox footer 
//---------input------
var input =document.createElement('input');
input.setAttribute('type',"text");
input.setAttribute('placeholder',"Écrire un message...");  
//----------button-----------
var button= document.createElement('button'); 
button.setAttribute('class',"chatbox__send--footer send__button");
button.innerHTML="Envoyer";
//------footer class----------
var divchatboxfooter=document.createElement('div');
divchatboxfooter.setAttribute('class',"chatbox__footer");    
divchatboxfooter.appendChild(input);
divchatboxfooter.appendChild(button);

// chat box support 
var divchatboxsupport=document.createElement('div');
divchatboxsupport.setAttribute('class',"chatbox__support"); 
divchatboxsupport.appendChild(divchatheader);
divchatboxsupport.appendChild(divchatboxmessage);
divchatboxsupport.appendChild(divchatboxfooter);

//button image 
const imagebt = document.createElement('img');

// Remote image
imagebt.setAttribute(
  'src',
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAB/UlEQVRYhe1WPUscURQ9d76WjbuErRRd0hqIxMJqycbeQtRiCVj4Hwxold4UgRR2YQkoGpBJY2EEtRLFr0iKkBQ2wpIiRVRkRXFm5900KYLcN7vzHLMpPOU5l3fOXM57DHCPNoOSDPN4uRBmwlGGNQKoxwAV/0g/QfyVFH1yA+cjfdg6SzUAV0rZoIMnQZgG8LDJ+DkYb7184TXNrl7fOsDlRKnHdngZjIFWwv518qGyVCVb3T82DnA5Ueqxbd4FUIybi0EtsvnZg+reD92ApRO4UsraDi/fwhwAHtkNWuHKEy9xgCDHLxOvXQLhaZDLT+llATxeLgSZxjGaF65VXHhkd9P77fpNQdxA6EVjKZoDQC7k6IUkOBLJlhoGy/10e8ugjoKo8cUpwqNtWQOGAFRv8nIHmPpEHgCYtRIQp6FfIsUNAOjUnaL7whbQJZG6W5A3dYlBQyJ1G9DCtAMAfkmk9h3QwrwDnyUy8QZMO0DAhsQn34AZ6i7ZS20MQDPSK/ivAnzx3OCNTrzrADUVOaP07jBsR4BdFTnPs/NbtbihuwhwCuCV54aDzcwBg2uoNSWskaJ117J8XeHSDnANYJ2IfLcOn/ydK5NDkgZQTNiBYj+jeIHm909MTE0CfAfBV5aaa/aXm0oAZt4ksoqAWoJSi5m5g29pmt7jv8JvRnimeDoeXboAAAAASUVORK5CYII=",
);
var divimagebutton = document.createElement('div');
 divimagebutton.setAttribute('class',"chatbox__button");
divimagebutton.appendChild(imagebt);
//div content 
chatboxDiv.appendChild(divchatboxsupport);
chatboxDiv.appendChild(divimagebutton);

//script root 
$SCRIPT_ROOT = "http://127.0.0.1:5000";
//run chatbox 
const chatbox = new Chatbox();
chatbox.display();
