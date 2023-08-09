document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        
        const message = `Congratulations, ${firstName} ${lastName}! You are now signed up.`;
        
        const messageElement = document.createElement("p");
        messageElement.textContent = message;
        messageElement.style.color = "#007bff";
        
        form.appendChild(messageElement);
    });
});
