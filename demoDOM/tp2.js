let mainContent = document.getElementById("main-content");
console.log("Elements 'mainContent' : ");
console.log(mainContent);
console.log("------------");
let important = document.getElementsByClassName("important");
console.log("Elements 'importants' : ");
console.log(important);
console.log("------------");
let articles = document.getElementsByTagName("article");
console.log("Elements 'articles' : ");
console.log(articles);
console.log("------------");
console.log("foreach sur les elements 'articles' : \n------------")
articles = Array.from(articles);   
articles.forEach(e => {
    console.log(e)
});
console.log("------------\nFin de foreach")
console.log("------------");
let elements1 = document.querySelectorAll("div.important > ul > li");
console.log(elements1);
console.log("------------");
let element4 = document.querySelector("ul.important > li"); //not all donc juste le premier
let element4bis = document.querySelectorAll("ul.important li")[0]; //alternative
console.log(element4);
console.log(element4bis);
console.log("------------");
let elementLi = document.querySelectorAll("ul li:first-child"); //premier enfant seulement
console.log(elementLi);
//alternative
let elementLi2 = document.querySelectorAll("ul li:nth-child(2)");
console.log(elementLi2);

//   Mini TP
// - créer un nouvel élément de type paragraphe
// - ajouter le texte "Salut tout le monde !" dans ce paragraphe
// - créer un élément de type div ayant pour id "divJavascript"
// - ajouter le paragraphe créer dans la question 1 dans le div
// - changer le couleur du paragraphe en bleu et mettre le mot "monde" en gras
// - ajouter le div dans votre body

let p = document.createElement("p");
p.innerHTML = "Salut tout le <strong>monde</strong> !";
p.style.color = "blue";
//console.log(p);
let div = document.createElement("div");
div.classList.add("divJavascript");
div.appendChild(p);
//console.log(div);
// document.body.insertBefore(div);
document.body.prepend(div); //append pr a la fin
