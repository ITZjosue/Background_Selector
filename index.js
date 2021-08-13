let bg = document.getElementById('fondo');
let btn = document.getElementById('boton');

let colors = ['#DD0A0A','#DDD30A','#0ADD3C','#3C2FF3','green'];



const change =()=>{
    let rand = Math.floor((Math.random()*5)+1);
    bg.style.backgroundColor = `${colors[rand]}`; 
    btn.style.color = `${colors[rand]}`
}