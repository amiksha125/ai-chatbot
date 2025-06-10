const messageInput = document.querySelector(".message-input");
const chatBody = document.querySelector(".chat-body");

//Create message element with dynamic classes and return it
const createMessageElement = (content, classes) => {
    const div = document.createElement("div");
    div.classList.add("message", classes);
    div.innerHTML = content;
    return div;
}

//handle outgoing user messages
const handleOutgoingMessage = (userMessage) => {
    // create and display user message 
    const messageContent = `<div class="message-text">${userMessage} </div>`;
    const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
    chatBody.appendChild(outgoingMessageDiv);
}

//Handle Enter key press for sending msg
messageInput.addEventListener("keydown", (e)=>{
  const userMessage = e.target.value.trim();
  if(e.key == "Enter" && userMessage){
     handleOutgoingMessage(userMessage);
  }
})