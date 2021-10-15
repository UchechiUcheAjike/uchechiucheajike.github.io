// // get last updated time


// // hamburger javascript code
// const hambutton = document.querySelector('.ham');
// const mainnav = document.querySelector('.navigation')

// hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// // To solve the mid resizing issue with responsive class on
// window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')}


function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


function lastModified() {
    // var x = document.write(new Date(document.lastModified));
    today = new Date(document.lastModified);
    weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = weekNames[today.getDay()];
    var month = monthNames[today.getMonth()];
    var date = today.getDate();
    var year = today.getYear() +  1900;
    var span = document.querySelector(".updated");
    span.innerHTML = week + ", " + date + " " + month + " " + year + ".";

}
lastModified();