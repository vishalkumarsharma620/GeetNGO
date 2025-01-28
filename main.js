var home = document.getElementById('opt1');
var education = document.getElementById('opt2');
var health = document.getElementById('opt3');
var article = document.getElementById('opt4');
var about = document.getElementById('opt5');
var donatebtn2 = document.getElementById('submitbtn');

var donatebtn = document.querySelector('.donatebtn');

home.addEventListener('click', () => {
    window.location.href = "index.html";
});

education.addEventListener('click', () => {
    window.location.href = "education.html";
});

health.addEventListener('click', () => {
    window.location.href = "health.html";
});

article.addEventListener('click', () => {
    window.location.href = "article.html";
});

about.addEventListener('click', () => {
    window.location.href = "about.html";
});

donatebtn.addEventListener('click', () => {
    window.location.href = "donate.html";
});
