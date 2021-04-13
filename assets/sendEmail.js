function sendEmail(contactForm) {
    emailjs.send("gmail", "sterling", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "sterling": contactForm.submit.values
        })
        .then(
            function (response) {
                console.log("Submitted", response);
            },
            function (error) {
                console.log("Unsuccessful", error);

            });
};