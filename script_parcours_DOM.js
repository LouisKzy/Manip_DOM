var howManyP = document.getElementsByTagName("p").length;
console.log("Q1 Combien y a-t-il d'éléments <p> présents dans la page HTML ? Il y a '", howManyP,"' éléments '<p>' dans ce document.");

var getIdCoucou = document.getElementById("coucou").innerHTML;
console.log("Q2 Quel est le contenu texte de l'élément portant l'id coucou ?", getIdCoucou);

var getUrlThirdElementA = document.getElementsByTagName("a")[2];
console.log("Q3 Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ?",getUrlThirdElementA.href);

var getClassCompteMoi = document.getElementsByClassName("compte-moi");
console.log("Q4 Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console. Il y a '",getClassCompteMoi.length,"' élements qui portent la classe compte-moi.");

var liCompteMoi = document.querySelectorAll("li.compte-moi").length;
console.log("Q5 Combien d'éléments <li> portent la classe compte-moi ? Il y a,'", liCompteMoi,"'éléments li avec la classe compte-moi.");

var olLiCompteMoi = document.querySelectorAll("ol li.compte-moi").length;
console.log("Q6 Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? ? Il y a,'", olLiCompteMoi,"'éléments li avec la classe compte-moi contenu dans les tous les éléments ol.");

var jeuDePiste = document.querySelectorAll("div ul li");
console.log('La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l"utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le message caché dans la console : "', jeuDePiste[5].innerHTML,'.', jeuDePiste[6].innerHTML,'"');
