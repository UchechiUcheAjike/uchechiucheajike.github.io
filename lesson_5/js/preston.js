
// function for hamburger
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// function for date format
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

/* display banner only fridays */
if(dayName === "Tuesday") {
    document.getElementById("banner-top").style.display = "block";
}