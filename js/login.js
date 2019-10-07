const sSignIn = document.querySelector('#slogin');
sSignIn.addEventListener('submit', (e) => {
	e.preventDefault();
	const e_mail =sSignIn['email'].value;
	const pass=sSignIn['password'].value;
	if( !(e_mail.includes("@")) || !(e_mail.includes(".com")) )
	{
		alert("Inappropriate format of email address.");
		return;
	}
	if(e_mail=="" || pass=="")
	{
		alert("You cannot sign in unless all the fields in the form are properly filled.");
		return;
	}
	if(pass.length<6)
	{
		alert("Your password is too short.");
		sSignIn['password'].value="";
		return;
	}


	});
	const getStuInfo = (data) => {
		data.forEach(doc => {
			const StudentInfo = doc.data()
			if(`${StudentInfo.Email}` == e_mail)
			{

				localStorage.setItem('eMail', e_mail);
			}
		})//.then(() => {

		auth.signInWithEmailAndPassword(e_mail, pass).then( cred => {
			//console.log(cred);
				window.location.href='../Student/homepage.html';

		}).catch(err => {
			alert("Incorrect E-mail/Password.");
		})

		//
	console.log(e_mail, pass);

	/*setTimeout(function(){
	document.location.href="../Student/homepage.html";
},100);*/
};
