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

var link = document.querySelectorAll('.group1 .nav li a')
// console.log(link);
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function (e) {
        let temp = link[i].getAttribute('href');
        let target = document.querySelector(temp);
        // console.log(target);
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        // history.pushState(null, null, temp)
        e.preventDefault()
    })

}

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
        slides[i].className = slides[i].className.replace(" animated bounceInDown", "");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].className += " animated bounceInDown "
    dots[slideIndex - 1].className += " active";
}

// validation name, phone, email
var inputs = document.querySelectorAll('.col input');
function borderRed(i) {

    inputs[i].style.borderColor = "red";

}
function checkName() {
    var name = inputs[0].value;
    if (name == "") {
        alert("Please enter your name!!!!");
        return false;
    }
    return true;
}
function checkEmail() {
    var email = inputs[2].value;
    if (email == "") {
        alert("Please enter your email");
        return false;
    } else if ((/\S+@\S+\.\S+/).test(email) == false) {
        alert("Your email is not invalid");
        return false;
    }
    return true;
}
function checkPhone() {
    var phone = inputs[5].value;
    if (phone == "") {
        alert("Please enter your phone number");
        return false;
    }
    else if((/((09|03|07|08|05)+([0-9]{8})\b)/g).test(phone) == false){
        alert("Your phone number is not invalid");
        return false;
    }
    return true;
}
// function checkDate(){
//     var date = inputs[2].value;
//     alert(date);
// }
function validation() {
    let check_Name = checkName();
    let check_Mail = checkEmail();
    let check_Phone = checkPhone();
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.borderColor = "#fff";
    }

    if (check_Name == false) {
        borderRed(0);
    }
    if (check_Mail == false) {
        borderRed(2);
    }
    if(check_Phone == false){
        borderRed(5);
    }
}
