function sendEmail() {

//   Email.send({
//     Host : "smtp.gmail.com",
//     Username : "kauser1987@gmail.com",
//     Password : "kfqd rhjm abzn uwjf",
//     To : 'quasimansari75@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );

    Email.send({
        Host : "smtp.gmail.com",
        Username : "kauser1987@gmail.com",
        Password : "kfqdrhjmabznuwjf",
        To : 'quasimansari75@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name : " + document.getElementById("name").value
              + "<br> Email : " + document.getElementById("email").value
              + "<br> Contact : " + document.getElementById("contact").value
              + "<br> Message : " + document.getElementById("query").value
    }).then(
      message => alert(message)
    );    
}