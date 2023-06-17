const mySvg = document.getElementById("my-svg")
const darkMode = document.querySelector("#darkmode")
const mybtn = document.querySelector(".reachme-btn")
const myCard = document.querySelectorAll(".card")
var isClicked = false;

darkMode.addEventListener("click",() => {
    isClicked = !isClicked;

    if (isClicked) {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#E4E6Eb";
        darkMode.classList ="fa-solid fa-sun fa-lg";
        darkMode.style.color = "#fff"
        mybtn.style.border = "2px solid #fff"
        mySvg.querySelector("path").style.fill = "#36454F"
    } else {
        document.body.style.backgroundColor = ""
        document.body.style.color = "";
        darkMode.classList ="fa-solid fa-moon fa-lg"
        darkMode.style.color = "#000";
        mybtn.style.border = ""
        mySvg.querySelector("path").style.fill = ""
    }
})

myCard.forEach((card) => {
    card.style.border = "1px solid #fff";
  });

function redirectToGmail() {
    var recipient = 'vybhav37@gmail.com';
    var subject = 'Hello Vaibhav Gudali!';
    var body = 'I just came across your Portfolio! and Im looking for a ... Service from You Thank You and Hoping to hear from You Soon';

    var mailtoUrl = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    window.location.href = mailtoUrl;
  }