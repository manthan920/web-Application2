const getStartedBtn = document.getElementById("getStartedBtn");
const loginBtn = document.getElementById("loginBtn");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

getStartedBtn.addEventListener("click", function () {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
});

loginBtn.addEventListener("click", function () {
    alert("Login feature will be available soon.");
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        `Thank you, ${name}! Your message has been submitted.`;

    contactForm.reset();
});
