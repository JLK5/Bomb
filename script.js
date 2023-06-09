const Manual = document.querySelector("#manual");
const Timer = document.querySelector("#Countdown");
const explosion = document.querySelector("#explosion");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const buttons = document.querySelector("#buttons");
const wire4 = document.querySelector("#wire4");
const wires = document.querySelector("#wires");
const battery = document.querySelector("#battery");
const Victory = document.querySelector("#Conffeti");
function showManual() {
    Manual.style.display = "flex";
}
function hideManual() {
    Manual.style.display = "none";
}
function Countdown() {
    let value = parseInt(Timer.innerHTML);
    value -= 1;
    Timer.innerHTML = value.toString();
    if(value == 0) {
        explosion.style.display = "flex";
    }
}
setInterval(Countdown, 1500);

function buttonpress2() {
    button2.style.backgroundColor = "rgb(16, 186, 13)";
}
function buttonpress1() {
    if(button4.style.backgroundColor != "rgb(16, 186, 13)") {
        explosion.style.display = "flex";
    } else{
        button1.style.backgroundColor = "rgb(16, 186, 13)";
    }
}
function buttonpress3() {
    if(button1.style.backgroundColor != "rgb(16, 186, 13)") {
        explosion.style.display = "flex";
    } else{
        button3.style.backgroundColor = "rgb(16, 186, 13)";
        buttons.style.backgroundColor = "darkgreen"
    }
}
function buttonpress4() {
    if(button2.style.backgroundColor != "rgb(16, 186, 13)") {
        explosion.style.display = "flex";
    } else{
        button4.style.backgroundColor = "rgb(16, 186, 13)";
    }
}
function cutwire1() {
    explosion.style.display = "flex";
}
function cutwire2() {
    explosion.style.display = "flex";
}
function cutwire3() {
    explosion.style.display = "flex";
}
function cutwire4() {
    wire4.style.backgroundImage = "url(cutwire.jpg)"
    wires.style.backgroundColor = "rgb(16, 186, 13)"
}
function cutwire5() {
    explosion.style.display = "flex";
}
function powerOff() {
    if(buttons.style.backgroundColor == "darkgreen" && wires.style.backgroundColor == "rgb(16, 186, 13)"){
        Victory.style.display = "flex";
        clearInterval(Countdown);
    } else {
        explosion.style.display = "flex";
    }
}

