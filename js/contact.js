const contact =  document.querySelector('#contactForm');
contact.addEventListener('submit', (e) => {
	e.preventDefault();
	//user information
		const name=contact['contact-name'].value;
	 	const e_mail=contact['contact-email'].value;
		const subj=contact['contact-subject'].value;
		const msg=contact['message'].value;

	//	console.log("email,pass")

		if(e_mail=="")
		{
			alert("Incomplete form. Please fill up the required fields");
			return;

		}
		if( !(e_mail.includes("@")) || !(e_mail.includes(".com")) )
		{
			alert("Inappropriate email format .");
			return;
		}

    const getMsg = (data) => {
  		data.forEach(doc => {
  			const Messages = doc.data()
  			if(`${Messages.Email}` == e_mail)
  			{

          db.collection('Messages').add({

            Email: e_mail,
            Userame : name,
            Subject: subj,
            Message:msg
          }).then(() => {
            //alert("Redirecting to the SignIn page");
            contactForm.reset();
            window.location.href = "#";
          })
        }).catch(err =>{
          alert("This email address ( " + e_mail +" ) is already being used.");
        })
  			}
  		})//.then(() => {


  };

})
