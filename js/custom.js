const text = "\n Hey \n I'm Shamsideen \n Ajide";
const textbox = document.getElementById("textBox");
const rotate = document.getElementById("rotate");


console.log(text);

let index = 0;

function writeText(){
    if(index <= text.length){
        textbox.innerText = text.slice(0, index);
        index++;
    }
}

setInterval(writeText, 100);

rotate.addEventListener('click', rotateNav);

function rotateNav(){
    rotate.classList.toggle("clicked");
}