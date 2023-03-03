let form = document.querySelector('form');
form.addEventListener('submit',function(e){
	e.preventDefault();
	
	let name = document.querySelector('#name').value;
	let username = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
	let phone = parseInt(document.querySelector('#phone').value);
	let Password = document.querySelector('#Password').value;
	let cpassword = document.querySelector('#cpassword').value;
	let s1 = document.querySelector('#s1');
	let s2 = document.querySelector('#s2');
	let s3 = document.querySelector('#s3');
	let s4 = document.querySelector('#s4');
	let s5 = document.querySelector('#s5');
	let s6 = document.querySelector('#s6');
	let result = document.querySelector('#result');
	if((phone===" ")||(phone<0)||(isNaN(phone))){
		s4.innerHTML="Enter the valid number";
		s4.style.color="red";
	}
	else if(Password!==cpassword){
		s6.innerHTML="Password dosn't match";
		s6.style.color="red";
	}
});