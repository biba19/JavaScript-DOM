console.log(document.title);
document.title = "Ce titre est beaucoup trop long";
var tagName = document.getElementsByTagName("h2");
console.log(tagName);
var classeName = document.getElementsByClassName("text-red");
console.log(classeName);
var byId = document.getElementById("sous-titre-DOM");
console.log(byId);
