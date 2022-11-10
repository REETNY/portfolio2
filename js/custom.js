const text = "\n Hey \n I'm Shamsideen \n Ajide";
const textbox = document.getElementById("textBox");

console.log(text);

let index = 0;

function writeText(){
    textbox.innerText = text.slice(0, index);

    index++;
}

setInterval(writeText, 100);
