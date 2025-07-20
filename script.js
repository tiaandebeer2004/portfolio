/* TEXT ROTATE */
var terms = ["musician 🎵.", "coffee fanatic ☕.", "huge Minecraft fan 🎮.", "guitar player 🎸.", "vegetarian 🥗.", "math nerd ➗.", "nature lover 🌲.", "member of a band 🎶.", "pineapple on pizza enjoyer 🍕."];

function rotateTerm() {
    var ct = $("#rotate").data("term") || 0;
    $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn().delay(2500).fadeOut(200, rotateTerm);
}
$(rotateTerm);