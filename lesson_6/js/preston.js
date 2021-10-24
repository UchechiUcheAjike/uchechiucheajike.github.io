
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


// Calculate the Windchill
function buildWC(speed, temp) {
    let wcTemp = document.getElementById('windchill');
   
    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);
   
    // Round the answer down to integer
    wc = Math.floor(wc);
   
    // If chill is greater than temp, return the temp
    wc = (wc > temp)?temp:wc;
   
    // Display the windchill
    console.log(wc);
    wcTemp.innerHTML = wc;
}