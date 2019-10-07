const tSignIn = document.querySelector('#tlogin');
tSignIn.addEventListener('submit', (e) => {
	e.preventDefault();
	const e_mail =tSignIn['email'].value;
	const pass=tSignIn['password'].value;
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
	const getTeachInfo = (data) => {
		data.forEach(doc => {
			const TeacherInfo = doc.data()
			if(`${TeacherInfo.Email}` == e_mail)
			{

				localStorage.setItem('eMail', e_mail);
			}
		})//.then(() => {

		auth.signInWithEmailAndPassword(e_mail, pass).then( cred => {
		//	console.log(cred);
				window.location.href='../Teacher/homepage.html';

		}).catch(err => {
			alert("Incorrect E-mail/Password.");
		})

		//
	console.log(e_mail, pass);
/*	setTimeout(function(){
	document.location.href="../Teacher/homepage.html";
},100);*/
};
