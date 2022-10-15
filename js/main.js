const textspan = document.querySelector(".typed-text");
const textarray = ["Online Shopping", "Online Shopping", "Online Shopping"];
const typingdelay = 200;
const earserdelay = 100;
const newtextdelay = 100;
let textarrayindex = 0;
let charindex = 0;

function type() {
    if (charindex < textarray[textarrayindex].length) {
        // textspan.textContent += textarray[textarrayindex].charAt(charindex);
        charindex++
        setTimeout(type, typingdelay);
    } else {
        setTimeout(earse, newtextdelay);
    }
}


function earse() {
    if (charindex > 0) {
        // textspan.textContent = textarray[textarrayindex].substring(0, charindex - 1);
        charindex--;
        setTimeout(earse, earserdelay);
    } else {
        textarrayindex++;
        if (textarrayindex >= textarray.length) textarrayindex = 0;
        setTimeout(type, typingdelay);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, newtextdelay);
})

var products = ["fashion", "phone", "electronics", "sports", "books"];    

function showall() {
    products.forEach(element => {
        document.getElementById(`${element}-products`).style.display = "block";
    });
}


function showStuff(test) {
    products.forEach(element => {
        if(element != test){
            document.getElementById(`${element}-products`).style.display = "none";
        }
        else{
            document.getElementById(`${element}-products`).style.display = "block";
        }
    });
}
