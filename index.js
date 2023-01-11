console.log(document.title);
document.title = "Ce titre est beaucoup trop long";
var tagName = document.getElementsByTagName("h2");
console.log(tagName);
var classeName = document.getElementsByClassName("text-red");
console.log(classeName);
var byId = document.getElementById("#sous-titre-DOM");
console.log(byId);
var element = document.getElementById("#event-listener");
if (element) {
  element.addEventListener("mouseover", function () {
    alert("mouseover!");
  });

  element.addEventListener("mousout", function () {
    alert("mouseout!");
  });

  element.onmousemove = function (event) {
    console.log("Evènement :", event);
    console.log("the x is=" + event.x + "the y is=" + event.y);
    console.log("HERE" + window.innerWidth);
  };

  element.onmouseout = function (event) {
    console.log("Evènement :", event);
    console.log("the x is=" + event.x + "the y is=" + event.y);
  };
}
