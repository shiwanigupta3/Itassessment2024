document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Here, you would typically send this data to a server using AJAX or fetch

    document.getElementById("contactForm").reset();
    document.getElementById("confirmation").innerText = "Thank you for your message, " + name + "! We will get back to you soon.";
    document.getElementById("confirmation").style.display = "block";
});
