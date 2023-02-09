

let users = [];

fetch("https://randomuser.me/api/?results=20")
  .then((response) => response.json())
  .then((data) => {
    users = data.results;
    displayUsers();
  });

function displayUsers() {
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let card = document.createElement("div");
    card.classList.add("card");

    let gender = user.gender === "male" ? "Homme" : "Femme";
    let name = user.name.title + " " + user.name.first + " " + user.name.last;
    let email = user.email;
    let image = user.picture.medium;

    let registeredDate = new Date(user.registered.date);
    let today = new Date();
    let diffTime = Math.floor(today - registeredDate);
    let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    card.innerHTML = `
      <p>Genre : ${gender}</p> 
      <p>Nom : ${name}</p>
      <p>Email : ${email}</p>
      <p>Jours depuis l'inscription : ${diffDays}</p>
      <img src="${image}" />
    `;

    document.querySelector(".container").appendChild(card);
  }
}
