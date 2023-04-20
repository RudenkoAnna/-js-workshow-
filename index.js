const API_URL = `https://dummyjson.com/products`;

function createCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  // create card image
  const cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top");
  cardImage.src = product.thumbnail;

  // create card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // create card title
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = product.title;

  // create card text
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerText = product.description;

  // create card price
  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card-price");
  cardPrice.innerText = product.price;

  // create card button
  const cardButton = document.createElement("a");
  cardButton.classList.add("btn", "btn-primary");
  cardButton.href = `product.html?id=${product.id}`;
  cardButton.innerText = "View Product";

  // append all elements to card body
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardPrice);
  cardBody.appendChild(cardButton);

  // append card image and body to card
  card.appendChild(cardImage);
  card.appendChild(cardBody);

  return card;
}
