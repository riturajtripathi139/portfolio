
const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
let foot = document.querySelector("footer");
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
 })
const check = document.querySelector(".checkbox");
const body = document.querySelector("body");
let checks = 0
check.addEventListener('click', () => {
    if (checks == 0){
       body.style.backgroundColor = "#2b2b2b"
       foot.style.backgroundColor = "#2b2b2b"
        navLinks.style.backgroundColor = "#101010"
       checks = 1
    } else {
        body.style.backgroundColor = "#eaeaea"
        foot.style.backgroundColor = "#ebf2fa"
        navLinks.style.backgroundColor = "white"
        checks = 0
    }
   })
          
 const videos = document.querySelectorAll('.video');

    videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
    video.play();
    });
  
    video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
    });
 });
let checkss = 0
 check.addEventListener('click', function() {
    if(checkss == 0){
        document.documentElement.style.setProperty('--primary-text-color', 'white');
        document.documentElement.style.setProperty('--secondary-text-color', '#eaeaea');
        checkss = 1
    } else {
        document.documentElement.style.setProperty('--primary-text-color', '#183b56');
        document.documentElement.style.setProperty('--secondary-text-color', '#577592');
        checkss = 0
    }
});


