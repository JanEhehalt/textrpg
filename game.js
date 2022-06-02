// will later be read from files
var bsptext = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

var printedText = 0;
var textbox = document.getElementById("textbox");
var timer;

function startText(){
    if(timer == null){
        timer = setInterval("printText()", 40);
    }
}


function printText(){
    // adding text to textbox
    textbox.children[0].textContent = bsptext.substring(0, printedText);
    printedText++;
    // trying to make the animation look more natural
    // -> no constant typing speed
    if(Math.random() < 0.8){
        printedText++;
    }
    if(Math.random() < 0.4){
        printedText++;
    }
    // when text has finished printing, stopping and nulling timer
    if(printedText > bsptext.length){
        clearInterval(timer);
        timer = null;
        printedText = 0;
    }
}