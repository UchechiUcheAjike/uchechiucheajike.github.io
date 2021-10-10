// get last updated time

window.addEventListener('load', () =>{

lastModified();


 })

function lastModified() 
{
     const span = document.querySelector('#updated');
     var date = new Date();
    span.innerHTML= String(document.lastModified);}
    span.innerHTML= String(date.getDay() +" "+ date.getDate() +" "+ date.getMonth() +" "+ date.getFullYear());

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("demo").innerHTML = months[d.getMonth()];

const today = new Date() today. toLocaleString('default', { month: 'long' })
today. toLocaleString('default', { month: 'short' })
const today = new Date() today. toLocaleString('it-IT', { month: 'long' })

// hamburger javascript code
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
