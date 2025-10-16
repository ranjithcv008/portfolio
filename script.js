function sendMail() {
const templateParams = {
  from_name: document.getElementById("name").value,
  from_email: document.getElementById("email").value,
  subject: document.getElementById("subject").value,
  message: document.getElementById("message").value,
};

emailjs.send('service_hpklsyl', 'template_k1m1par', templateParams)
  .then(function(response) {
    alert("Email Sent Successfully!");
    console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
    alert("Failed to send email. Please try again.");
    console.log('FAILED...', error);
  });
}
