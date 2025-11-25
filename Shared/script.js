const defaultCards = [
  {
    title: "Announcements",
    desc: "Latest updates and information from PSTIE.",
    img: "Icon.png"
  },
  {
    title: "Events",
    desc: "Upcoming activities and student programs.",
    img: "Icon.png"
  },
  {
    title: "Members",
    desc: "Meet the PSTIE officers and team.",
    img: "Icon.png"
  },
  {
    title: "About PSTIE",
    desc: "Learn more about the organization.",
    img: "Icon.png"
  }
];



function loadCards() {
  let cards = JSON.parse(localStorage.getItem("cards"));
  if (!cards) {
    localStorage.setItem("cards", JSON.stringify(defaultCards));
    cards = defaultCards;
  }
  return cards;
}


function loadCardsAdmin() {
  const cards = loadCards();
  const container = document.getElementById("cardsContainer");
  container.innerHTML = "";

  cards.forEach((card, index) => {
    container.innerHTML += `
      <div class="card">
        <img src="../Image/${card.img}">
        <div>
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
        </div>

        <div class="card-buttons">
          <button onclick="editCard(${index})">Edit</button>
          <button class="delete" onclick="deleteCard(${index})">Delete</button>
        </div>
      </div>
    `;
  });
}

function editCard(i) {
  let cards = loadCards();

  const newTitle = prompt("New Title:", cards[i].title);
  const newDesc = prompt("New Description:", cards[i].desc);

  if (newTitle) cards[i].title = newTitle;
  if (newDesc) cards[i].desc = newDesc;

  localStorage.setItem("cards", JSON.stringify(cards));
  loadCardsAdmin();
}

function deleteCard(i) {
  let cards = loadCards();
  cards.splice(i, 1);
  localStorage.setItem("cards", JSON.stringify(cards));
  loadCardsAdmin();
}

function addCard() {
  let cards = loadCards();

  const title = prompt("Card Title:");
  const desc = prompt("Card Description:");
  const img = "Icon.png"; 

  if (title && desc) {
    cards.push({ title, desc, img });
    localStorage.setItem("cards", JSON.stringify(cards));
    loadCardsAdmin();
  }
}


function loadCardsUser() {
  const cards = loadCards();
  const container = document.getElementById("cardsContainer");

  container.innerHTML = "";

  cards.forEach(card => {
    container.innerHTML += `
      <div class="card">
        <img src="../Image/${card.img}">
        <div>
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
        </div>
      </div>
    `;
  });
}
