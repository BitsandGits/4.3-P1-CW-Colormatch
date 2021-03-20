function evaluateLove(){
    let userName = prompt("What is your name?");
    let userColor = prompt("What is your favorite color? The color name in lowercase please");
    let color1 = "blue";
    let color2 = "silver";
    let color3 = "pastel";
    if (userColor != color1 && userColor != color2 && userColor != color3){
        alert(`Sorry ${userName}, we are not a colormatch :(`);
    }
    else {alert(`Ding Ding Ding ${userName} we are a colormatch!!`);}
}
