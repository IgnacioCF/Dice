
var randomNumber1 = Math.floor(Math.random() * 6) +1
var randomDiceImage1 = "dice" + randomNumber1 + ".png"
var randomImageSource = "images/" + randomDiceImage1
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource)

var randomNumber2 = Math.floor(Math.random() * 6) +1
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2)

function sampleFunction(){

    if (randomNumber1 === randomNumber2){
        alert("Em pAte'  ")
    }if (randomNumber1>randomNumber2){
        alert( "gana jugador 1 ")
    }
    if(randomNumber1<randomNumber2){
        alert("gana jugador 2 ")
    }
}

if (randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="&#9994 Player 1 won!"
}if(randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML= "Player 2 won! &#9994"    
}if(randomNumber1 ===randomNumber2){
document.querySelector("h1").innerHTML = "&#128080 Draw! &#128080"
}



