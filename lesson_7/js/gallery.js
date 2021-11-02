
// function for hamburger
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
today = new Date();
// function for date format
function lastModified() {
    // var x = document.write(new Date(document.lastModified));
    modified = new Date(document.lastModified);
    var week = weekNames[modified.getDay()];
    var month = monthNames[modified.getMonth()];
    var date = modified.getDate();
    var year = modified.getYear() +  1900;
    var span = document.querySelector(".updated");
    span.innerHTML = week + ", " + date + " " + month + " " + year + ".";

}
lastModified();


// weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayName = weekNames[today.getDay()];

/* display banner only fridays */
if(dayName === "Friday") {
    var banner = document.getElementById("banner-top");
    banner.style.display = "block";
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

let speed = 5;
let temp = 6;


buildWC(speed,temp);


// lazy load images

// function preloadeImage(img) {
//     const src = img.getAttribute("data-src");
//     if(!src) {
//         return;
//     }
//     img.src = src;
// }

// const images = document.querySelectorAll("[data-src]");

// const imgOptions = {
//     threshold: 0,
//     rootMargin: "0px 0px 300px 0px"
// };

// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             return;
//         } 
//         else{
//             preloadImage(entry.target);
//             imgObserver.unobserve(entry.target);

//         }
//     })

// }, imgOptions);

// images.forEach(image => {
//     imgObserver.observe(image);
// })




function loadImages(images){
    images.forEach((image)=>{
        const {src} = image.dataset;
        if(!src) return;
        image.src =src;
    })
}

(function () {

const images = document.querySelectorAll("img");

if(!window.IntersectionObserver){
    loadImages(images);
    return;
}

var intersectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach((entry)=> {
        if(!entry.isIntersecting) return;
        intersectionObserver.unobserve(entry.target);
        const {src} = entry.target.dataset;
        if(!src) return;
        entry.target.src = src;
    })
  });
  // start observing
  images.forEach((image)=>{
      intersectionObserver.observe(image);
  })
  })();