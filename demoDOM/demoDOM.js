//document représente notre page web/point de départ de notre DOM.
// 1 - récuperer les éléments par "id".
let monParagraphe = document.getElementById("monParagraphe");
console.log(monParagraphe);
// 1 - par la classe
let contenus = document.getElementsByClassName("contenu");
console.log(contenus);
// 3 - par la balise
let articles = document.getElementsByTagName("article");
console.log(articles);
//4 - selection complexe unique
let paragrapheContenu = document.querySelector("#maDiv p.contenu")
console.log(paragrapheContenu);
//4 - selection complexe multiple
let elements = document.querySelectorAll("article, p")
console.log(elements);
// des for
console.log("for sur le contenus")
for (let i = 0; i < contenus.length; i++) {
    console.log(contenus[i]);  
}
console.log("for sur les elements")
for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);  
}

console.log("foreach sur les elements")
contenus = Array.from(contenus);   
contenus.forEach(element => {
    console.log(element)
});
//--

//Modifier le DOM
//le contenu d'un paragraphe
let p = document.getElementById("monParagraphe");
// 1 - textContent : permet d'insérer du texte dans un élément
// 2 - innerHTML : permet d'insérer du HTML dans un élément

p.textContent = "coucou <strong>GRAS</strong>";
// p.innerHTML = "coucou <strong>GRAS</strong>";

//ajouter une classe
p.classList.add("rouge")

//ajouter un style
p.style.color = "red";

//creer un element et l'inserer dans mon element
let maDiv = document.getElementById("maDiv"); //je reupere un div
let input = document.createElement("input") //je fabrique un input
input.setAttribute("type","password");// je le met en type password
maDiv.appendChild(input); // JE N'OUBLIE PAS D'AJOUTER AU DOM

