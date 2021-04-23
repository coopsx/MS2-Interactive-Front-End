function sendEmail(contactForm) {
    debugger
    emailjs
        .send("service_xqhjcdl", "sterling", {
            from_name: contactForm.name.value,
            from_email: contactForm.emailaddress.value,
            sterling: contactForm.message.value,
        })
        .then(
            function (response) {
                console.log("Submitted", response);
            },
            function (error) {
                console.log("Unsuccessful", error);
            }
        );

    return false;
}