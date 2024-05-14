

const messageForm = document.querySelector("[name ='leave_message]"); 


messageForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    console.log("Form submitted"); 

    const usersName = event.target.usersName.value; 
    const usersEmail = event.target.usersEmail.value; 
    const usersMessage = event.target.usersMessage.value;
    
    console.log(usersName); 
    console.log(usersEmail); 
    console.log(usersMessage); 

    const messageSection = document.querySelector("#messages")

    const newMessage = document.createElement("li"); 
    newMessage.innerHTML = `
    <a href=mailto:${usersEmail}>${usersName}</a>
    <span>${usersMessage}</span> 
    `; 

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove"; 
    removeButton.type = "button"; 
    removeButton.addEventListener("click", (e) => {
        const entry = even.target.parentNode; 
        console.log(entry); 
        entry.remove(); 
    });

   // Add new message to the DOM 
   newMessage.appendChild(removeButton); 
   messageList.appnedChild(newMessage); 



   messageForm.reset(); 

}); 