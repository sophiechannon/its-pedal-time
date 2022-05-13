//knobs
const dials = ["knob0", "knob1", "knob2", "knob3"];

const knobs = [];
dials.forEach(function(dial){
  knobs.push(document.getElementById(dial));
});


let randomRotation = Math.floor(Math.random()*360); 


let knobRotate = (knob) => {
    knob.target.style.transform = `rotate(${randomRotation}deg)`;
}

let knobReturn = (knob) => {
    knob.target.style.transform = "";
}

let knobAction = (knob) => {
    knob.onmouseover = knobRotate;
    knob.onmouseout = knobReturn;
}

knobs.forEach(knobAction);

//buttons
const buttonTargets = ["collection-button", "home-button", "about-button", "shop-button", "contact-button", "home-button-shh", "about-button-shh", "shop-button-shh", "contact-button-shh"];

let buttons = [];
buttonTargets.forEach(function(button){
    buttons.push(document.getElementById(button));
});

let ButtonHover = (event) => {
    event.target.style.color = "black";
    event.target.style.backgroundColor = "whitesmoke";
}

let ButtonLeave = (event) => {
    event.target.style.color = "";
    event.target.style.backgroundColor = "";
}

let buttonAction = (button) => {
    button.onmouseover = ButtonHover;
    button.onmouseout = ButtonLeave;
};

buttons.forEach(buttonAction);





