const messageInput = document.querySelector(".message-input");
const chatBody = document.querySelector(".chat-body");
const sendMessageButton = document.querySelector("#send-msg");

const userData = {
    message: null
}

//Create message element with dynamic classes and return it
const createMessageElement = (content, classes) => {
    const div = document.createElement("div");
    div.classList.add("message", classes);
    div.innerHTML = content;
    return div;
}

//handle outgoing user messages
const handleOutgoingMessage = (e) => {
    //prevent form from submitting
    e.preventDefault();
    //storing user message by creating a global object, making it accessible throughout the project
    userData.message = messageInput.value.trim();

    // create and display user message 
    const messageContent = `<div class="message-text"></div>`;
    const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
    outgoingMessageDiv.querySelector(".message-text").innerText = userData.message;
    chatBody.appendChild(outgoingMessageDiv);
}

//Handle Enter key press for sending msg
messageInput.addEventListener("keydown", (e)=>{
  const userMessage = e.target.value.trim();
  if(e.key == "Enter" && userMessage){
     handleOutgoingMessage(e);
  }
})

sendMessageButton.addEventListener("click", (e) => handleOutgoingMessage(e));