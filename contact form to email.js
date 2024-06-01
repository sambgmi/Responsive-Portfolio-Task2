function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
var subj= document.getElementById('subject').value;
	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email+
    "<br/> Subject"+subject;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sampathbonumaddi123@gmail.com",
    Password : "ED529DF75C16810091BCF0E84083A98E3A20",
    To : "sampathbgmi@gmail.com",
    From : "sampathbonumaddi123@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Successful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}