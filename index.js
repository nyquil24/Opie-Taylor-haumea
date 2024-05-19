
const footer = document.createElement('footer'); 
document.body.appendChild(footer); 

const today = new Date(); 
const thisYear = today.getFullYear(); 
const copyright = document.createElement('p'); 
copyright.innerHTML = `Nequil &copy; ${thisYear}`; 
footer.appendChild(copyright); 

const skills = ["JavaScript", "HTML", "CSS", "Git","GitHub"]; 
const skillsSection = document.getElementById('Skills'); 
const skillsList = skillsSection.querySelector('ul'); 

for(let skill of skills){ 
    const skillElement = document.createElement('li'); 
    skillElement.textContent = skill; 
    skillsList.appendChild(skillElement); 
}




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
        const entry = event.target.parentNode; 
        console.log(entry); 
        entry.remove(); 
    });

   // Add new message to the DOM 
   newMessage.appendChild(removeButton); 
   messageList.appendChild(newMessage); 



   messageForm.reset(); 

}); 