var x = document.getElementById("navid");


window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        x.classList.add("nav_black");
    } else {
        x.classList.remove("nav_black");

    }

});

console.log("hello updated");


var y = document.querySelector(".items");

document.querySelector('.cross').style.display = "none";
y.addEventListener('click', () => {

    document.querySelector('.text').classList.toggle('show');

    if (document.querySelector('.text').classList.contains('show')) {
        document.querySelector('.icon').style.display = "none";
        document.querySelector('.cross').style.display = "inline";
    } else {

        document.querySelector('.cross').style.display = "none";
        document.querySelector('.icon').style.display = "inline";
    }

})

//text 2 cost wale k liye
var z = document.querySelector(".items2");

document.querySelector('.cross2').style.display = "none";
z.addEventListener('click', () => {

    document.querySelector('.text2').classList.toggle('showcost');

    if (document.querySelector('.text2').classList.contains('showcost')) {
        document.querySelector('.icon2').style.display = "none";
        document.querySelector('.cross2').style.display = "inline";
    } else {

        document.querySelector('.cross2').style.display = "none";
        document.querySelector('.icon2').style.display = "inline";
    }

})




//text 3 cancel wale k liye
var w = document.querySelector(".items3");

document.querySelector('.cross3').style.display = "none";
w.addEventListener('click', () => {

    document.querySelector('.text3').classList.toggle('showcancel');

    if (document.querySelector('.text3').classList.contains('showcancel')) {
        document.querySelector('.icon3').style.display = "none";
        document.querySelector('.cross3').style.display = "inline";
    } else {

        document.querySelector('.cross3').style.display = "none";
        document.querySelector('.icon3').style.display = "inline";
    }

})




//text 4 watch wale k liye
var w = document.querySelector(".items4");

document.querySelector('.cross4').style.display = "none";
w.addEventListener('click', () => {

    document.querySelector('.text4').classList.toggle('showwatch');

    if (document.querySelector('.text4').classList.contains('showwatch')) {
        document.querySelector('.icon4').style.display = "none";
        document.querySelector('.cross4').style.display = "inline";
    } else {

        document.querySelector('.cross4').style.display = "none";
        document.querySelector('.icon4').style.display = "inline";
    }

})


//sign in
var user = document.getElementById('sign')

user.addEventListener('click', () => {
    var comp = prompt("Enter the email: ")
    if (comp == "gauravsachar29@gmail.com") {
        window.location.href = "/netflix-clone.github.io/profile.html";

    } else {
        alert("Please enter valid username")
    }

})


var user2 = document.getElementById('sign_in')

user2.addEventListener('click', () => {
    var comp = prompt("Enter the email: ")
    if (comp == "gauravsachar29@gmail.com") {
        window.location.href = "/netflix-clone.github.io/profile.html";

    } else {
        alert("Please enter valid username")
    }

})
