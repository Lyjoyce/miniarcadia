document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactInfo').value;

        // const formData = new FormData(contactForm);
        const formData = {
            name: name,
            email: email,
            message: message,
        };

        const apiEndpoint = "https://localhost:3000/api/contact";

        fetch(apiEndpoint, {
            method: "POST",
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                responseMessage.innerHTML = `<p>${data.message}</p>`;
                responseMessage.classList.add("success", "show"); // Add 'show' class to make the message visible

                setTimeout(() => {
                    contactForm.reset();
                    responseMessage.innerHTML = "";
                    responseMessage.classList.remove("success", "show");
                }, 2000);
            })
            .catch(error => {
                console.error("Error:", error);
                responseMessage.innerHTML = `<p>Error submitting the form. Please try again later.</p>`;
                responseMessage.classList.add("error", "show"); // Add 'show' class to make the message visible

                setTimeout(() => {
                    responseMessage.innerHTML = "";
                    responseMessage.classList.remove("error", "show");
                }, 3000);
            });
    });
});

/*
<body>
    <header>
        <h1>Contact Form</h1>
    </header>

    <div id="responseMessage"></div> <!-- Display API response message -->

    <form id="contactForm">
        <input name="name" type="text" id="name" class="feedback-input" placeholder="Name" required />
        <input name="email" type="email" id="contactemail" class="feedback-input" placeholder="Email" required />
        <textarea name="message" id="contacinfo" class="feedback-input" placeholder="Comment" required></textarea>
        <input type="submit" value="SUBMIT" />
    </form>

    <!-- Additional details or footer -->
    <footer>
        <p>&copy; 2024 Manthan Ankolekar | Contact Form.</p>
    </footer>

    <!-- JavaScript file -->
    <script src="script.js"></script>
</body>

</html>
*/