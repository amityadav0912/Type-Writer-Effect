let text = document.getElementById("Typewriter");

// let text = document.querySelector(#Typewriter h2);
const textArray = text.textContent.split("");

let timeLooper;

text.innerHTML="";

function typeWriterEffect()
{
    if(textArray.length>0)
    {
        text.innerHTML += textArray.shift();
    }
    else{
        clearTimeout(timeLooper);
    }

    timeLooper=setTimeout("typeWriterEffect()",Math.floor(Math.random()*(200,250)));
}

typeWriterEffect();