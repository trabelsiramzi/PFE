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
/*const image = document.createElement('img');
*/
// Remote image
/*image.setAttribute(
  'src',
  "https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-agent-basic-ui-elements-2.4-sbts2018-flat-sbts2018.png",
);*/
var h4=document.createElement('h3');
h4.setAttribute('class',"chatbox__heading--header");
h4.innerHTML="SOPRAHR BOT";
var p=document.createElement('h4');
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
/*divimageheader.appendChild(image);
*/
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
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADyElEQVRoge2Zz2scZRjHP8+8Oxu3iTlUL6KBFAUP4hbBkqh3IbGlm9ksYv8A6V3B6KEJnoKiV6XXgghpZldM7KF3keRij4KF2JZKDypNf5mdeefxkJ3ttsTMu7uzXSP5wsIz7zw/vl9e3vd5Z184xCH6grg6PqhUJo3nfSwwq/AcYHLmYgV+V1i3SbJcajS2XIKcBETz829rklwEnu6LojvuiGrVr9cvZzlmCnhQqx0z1l7hyZHfheq2FSmXwvC3/dy8rDzG2gWeNHkAkXEjspDllilAYDYfRj1ANbN2poDWgh0Wns9yyBRA/rtNN8is7SLgP41DAcPGI30grlZnE9Ul4DhQHA6lf0UTuOIlyWKh0biUDrZnoEV+DTiBI3mF9diYF2KYUJFL2RF9xRWBE4nnrceVykw62J6BZhBstMg7I4aJI2F4A+D+6dMTBWOuDTKuAxvFMJyCR9fA8dTwd3aOFsNQimHofNgbFFIevjHPdAy3uRY6fVND1tf/ckluRM7fD4L3sVaMMeddSfUSJysrfzaDIH0cSY3C3u5uENWZAlzHdNfreo3bCwd+G/1fCWimhtZqR4fApSf0tY0OE+kO2Z4BL0kWAe02kcAn/ujoGHAW1W2HkNvAWT+OxwWWuq23R/2HiCuVmcTzFoHXcOzG/ujomFy4cA9AT516NvL99xTeETjGw/P8dYUtUV3z4Vup1/8A0JmZ8ahUut0L8XQGMhtVMwj2nRUR+cBfXf2yFxLR3NyHKvL5fj6dzbSTSzreVx8AUNUvoiB40ybJR081GlddYv6uVF40xnymqkG29/7oWwCAQtXzvKAZBD8CF4GffGOucvfu7poYGxuP4/glFZkCasAbqprLMSUXAS0I8FbrR2QtlEq7b6wFGcyxyqWR2YFUdkNmbRcBN3Mg0ituZDm4CPghByK9IrN2pgCbJMvAnVzodAPVbWvMcpZbpoBSo7ElqlXHLpsPVLcF5ksrK5lfak6nUb9ev2xFyoh8DVxjMAvbtnJ/ZQuFV13+mYYu7geGDa3VTGRt3Hq0xTAswAH6HtiJosnUFriV2gdGgPG8M+0Hkc3UzLMT74l4bu5kInIOeAX4VUU+HVldXe0mR7NanVLV9l1BAt+k9kDXQIv8948Nq4rUskRorWZ2omjSeN4ZhQXgSOvVpl8uT8vSUgIDFtAMgk3g9RxT3rIw1XntNOg18HKOuTZtkkw/fmc2aAG/9BFrBW6KyHcq8q5fLk/vdfU6nDUA1ZEwrOdRY6AzUKjX1zw4CWwA9xD5OU/yhzhEDvgHG2dVNTsZwJgAAAAASUVORK5CYII=");
  var divimagebutton = document.createElement('div');
 divimagebutton.setAttribute('class',"chatbox__button");
divimagebutton.appendChild(imagebt);
//div content 
chatboxDiv.appendChild(divchatboxsupport);
chatboxDiv.appendChild(divimagebutton);

//div chatbot 
var body = document.getElementsByTagName('BODY')[0];
var divchatbot = document.createElement('div');
divchatbot.setAttribute('class',"chatbox");
divchatbot.appendChild(chatboxDiv);
body.appendChild(divchatbot);
//script root 
$SCRIPT_ROOT = "http://127.0.0.1:5000";
//run chatbox 
const chatbox = new Chatbox();
chatbox.display();
