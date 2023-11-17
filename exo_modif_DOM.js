function changeTitles() {
  var getTitle = document.querySelectorAll("div.container h1");
  getTitle[0].innerHTML = "Ce que j'ai appris à THP";
  var getSubtitle = document.querySelectorAll("div.container p");
  getSubtitle[1].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}

function changeCallToActions() {
  var getButtonMainCallToAction = document.querySelectorAll("div.container p a.btn");
  getButtonMainCallToAction[0].innerHTML = "OK je veux tester !";
  getButtonMainCallToAction[0].href = "http://www.thehackingproject.org";
  getButtonMainCallToAction[1].innerHTML = "Non merci";
  getButtonMainCallToAction[1].href = "https://www.pole-emploi.fr/accueil/";
}

function changeLogoName() {
  var getHeader = document.querySelector("header strong")
  getHeader.innerText = "The THP Experience"
  getHeader.style.fontSize = "2em"
}

function populateImages() {
  var getCards = document.querySelectorAll(".card");
  var imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  
  getCards.forEach(function(card, index) {
    var img = card.querySelector("img");
    img.src = imagesArray[index];
  });
}


















changeTitles();
changeCallToActions();
changeLogoName();
populateImages();