
document.querySelector('contact-form').addEventListener('submit',submitForm)
function submitForm(e)
{
    e.preventDefault();
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let message = document.querySelector('.message').value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "gentech.soft.gt@gmail.com",
        Password: "llwklogpyokjhvdy",
        To: 'the20091@gmail.com',
        From: "gentech.soft.gt@gmail.com",
        Subject: "Sending Email using javascript",
        Body: `${message}`,
      })
        .then(function (message) {
          alert("Mail has been sent successfully")
        });
}