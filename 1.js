// paralax navbar

var trangthai = false;
var small_navbar = document.querySelector('.nav');

window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 120) {
        if (trangthai == true) {
            small_navbar.classList.add('smaller');
            trangthai = false;
        }

    } else {
        if (trangthai == false) {
            small_navbar.classList.remove('smaller');
            trangthai = true;
        }
    }
});


// scroll smooth when click on navbar 


var menu_link = document.getElementById('menu_link');
menu_link.addEventListener('click', function (e) {
    let temp = menu_link.getAttribute('href');
    let target = document.querySelector(temp);
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    history.pushState(null, null, temp)
    e.preventDefault()
    
})
window.addEventListener('scroll', function(){
    var x = this.pageYOffset;
    if(x >= 3762 && x <=4362 ){
        this.document.getElementById('menu_link').classList.add('red');
    }
    else{
        this.document.getElementById('menu_link').classList.remove('red');
    }
})


// slide_show when click icon in group5
var slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    // var x = document.getElementById('group5').scrollHeight; // 375
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].className = slides[i].className.replace(" animated bounceInLeft", "");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].className += " animated bounceInLeft "
    dots[slideIndex - 1].className += " active";
}

// validation name, phone, email
var inputs = document.querySelectorAll('.col input');
function borderRed(i) {

    inputs[i].style.borderColor = "red";

}
// function checkName() {
//     var name = inputs[0].value;
//     if (name == "") {
//         alert("Please enter your name!!!!");
//         return false;
//     }
//     return true;
// }
// function checkEmail() {
//     var email = inputs[2].value;
//     if (email == "") {
//         alert("Please enter your email");
//         return false;
//     } else if ((/\S+@\S+\.\S+/).test(email) == false) {
//         alert("Your email is not invalid");
//         return false;
//     }
//     return true;
// }
// function checkPhone() {
//     var phone = inputs[5].value;
//     if (phone == "") {
//         alert("Please enter your phone number");
//         return false;
//     }
//     else if((/((09|03|07|08|05)+([0-9]{8})\b)/g).test(phone) == false){
//         alert("Your phone number is not invalid");
//         return false;
//     }
//     return true;
// }
// function checkDate(){
//     var date = inputs[2].value;
//     alert(date);
// }
function validation() {
    var name = inputs[0].value;
    var email = inputs[2].value;
    var phone = inputs[5].value;
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.borderColor = "#fff";
    }
    if (name == "") {
        alert("Please enter your name!!!!");
        borderRed(0);
    }
    else {
        if (email == "") {
            alert("Please enter your email");
            borderRed(2);
        } else if ((/\S+@\S+\.\S+/).test(email) == false) {
            alert("Your email is not invalid");
            borderRed(2);
        }
        else {
            if (phone == "") {
                alert("Please enter your phone number");
                borderRed(5);
            }
            else if ((/((09|03|07|08|05)+([0-9]{8})\b)/g).test(phone) == false) {
                alert("Your phone number is not invalid");
                borderRed(5);
            }
        }
    }

}
