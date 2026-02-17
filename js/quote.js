// Initialize EmailJS
emailjs.init("8lTPt-_wecODGHByA");

// Get service from URL
const params = new URLSearchParams(window.location.search);
const serviceName = params.get("service");

if(serviceName){
    document.getElementById("service").value = serviceName;
    document.getElementById("serviceText").innerText =
        "Request a quote for " + serviceName + " by filling out the form below.";
}

// Form Submit
document.getElementById("quoteForm").addEventListener("submit", function(e){
    e.preventDefault();

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        service: document.getElementById("service").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value
    };

    emailjs.send("service_0djbpgo","template_ot9w9c7", templateParams)
    .then(function(){
        document.getElementById("successMessage").innerText =
            "Quote request sent successfully!";
        document.getElementById("quoteForm").reset();
    });
});
