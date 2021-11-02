/* Variabler för knappar */
var buttonOne = document.getElementById("nej"); //Skapar en variabel som är vår första bild i HTML
var buttonTwo = document.getElementById("ja"); //Skapar en variabel som är vår tredje bild i HTML

/* Knapp 1 onclick-event byter bild */
buttonOne.addEventListener("click", function (value) {
    this.classList.toggle("greenBg");
    var pic;
    pic = "/eaten.jpeg";
    document.getElementById('apple').src = pic;
    buttonTwo.classList.remove("blueBg");
});

/* Knapp 2 onclick-event byter bild */
buttonTwo.addEventListener("click", function (value) {
    this.classList.toggle("blueBg");
    var pic;
    pic = "/noteaten.jpeg";
    document.getElementById('apple').src = pic;
    buttonOne.classList.remove("greenBg");
});

/* Scrollevent, när man skrollar till sidans slut visas meddelande */
window.addEventListener('scroll', () => {
    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    var scrolled = window.scrollY;
    if (scrolled === scrollable) {
        alert("Woooohooo!");
    }
});