function showMessage() {
    const message = document.getElementById("message");

    message.innerHTML =
        "ABC Technologies provides enterprise software development, cloud infrastructure, DevOps automation, Docker containerization, Kubernetes deployment, and continuous monitoring services.";

    message.style.backgroundColor = "#eef5fc";
    message.style.color = "#003366";
    message.style.padding = "15px";
    message.style.borderLeft = "5px solid #0055a5";
    message.style.borderRadius = "6px";
    message.style.marginTop = "18px";
    message.style.fontWeight = "bold";
}

function submitContactForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const userMessage = document.getElementById("userMessage").value.trim();
    const formStatus = document.getElementById("formStatus");

    if (name === "" || email === "" || subject === "" || userMessage === "") {
        formStatus.innerHTML = "Please fill all fields before submitting the form.";
        formStatus.style.color = "#b00020";
        formStatus.style.fontWeight = "bold";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        formStatus.innerHTML = "Please enter a valid email address.";
        formStatus.style.color = "#b00020";
        formStatus.style.fontWeight = "bold";
        return;
    }

    formStatus.innerHTML =
        "Thank you, " + name + ". Your message has been received by ABC Technologies.";
    formStatus.style.color = "#006400";
    formStatus.style.fontWeight = "bold";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("userMessage").value = "";
}