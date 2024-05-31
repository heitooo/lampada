const turnOn = document.getElementById('buttonOn');
const turnOff = document.getElementById('buttonOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.scr.indexOf('quebrada') > -1;
}
function ligarOn(){
    if(!isLampBroken()){
        lamp.src = 'img/ligada.jpeg';
    }
}
function desligarOff(){
    if(!isLampBroken()){
        lamp.src = '/img/desligada.jpeg';
    }
}
function quebrarLamp(){
    lamp.src = '/img/quebrada.jpeg';
}
turnOn.addEventListener('click', ligarOn);
turnOff.addEventListener('click', desligarOff);
lamp.addEventListener('mouseover', ligarOn);
lamp.addEventListener('mouseout', desligarOff);
lamp.addEventListener('dblclick', quebrarLamp);
