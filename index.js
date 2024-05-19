
const footer = document.createElement('footer'); 
document.body.appendChild(footer); 

const today = new Date(); 
const thisYear = today.getFullYear(); 
const copyright = document.createElement('p'); 
copyright.innerHTML = `Nequil &copy; ${thisYear}`; 
footer.appendChild(copyright); 

const skills = ["JavaScript", "HTML", "CSS", "Git","GitHub"]; 
const skillsSection = document.getElementById('skills'); 
const skillsList = skillsSection.querySelector('ul'); 

for(let skill of skills){ 
    const skillElement = document.createElement('li'); 
    skillElement.textContent = skill; 
    skillsList.appendChild(skillElement); 
}




const messageForm = document.querySelector("[name='leave_message']"); 


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
        const entry = e.target.parentNode; 
        console.log(entry); 
        entry.remove(); 
    });

   // Add new message to the DOM 
   newMessage.appendChild(removeButton); 
   messageSection.appendChild(newMessage); 



   messageForm.reset(); 

}); 

// Fetch GitHub repositories
const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME'; // Replace with your GitHub username

fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Output the data to the console

    const repoList = document.createElement('ul');
    data.forEach(repo => {
      const listItem = document.createElement('li');
      listItem.textContent = repo.name;
      repoList.appendChild(listItem);
    });

    document.body.appendChild(repoList);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


fetch('https://api.github.com/users/nyquil24/repos')
  .then(response => {
    if (!response.ok) {
      throw new Error('Bad response ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    const repositories = data;
    console.log(repositories);

    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement('li');
      project.textContent = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
