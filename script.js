function createVeme() {
	const username = document.getElementById("username");
	const password = document.getElementById("password");
	const passwordError = document.getElementById("password-error");

	if (password.value.length < 5 || !/[!@#$%^&*(),.?":{}|<>]/.test(password.value)) {
		passwordError.innerText = "Password should be at least 5 characters long and contain a special character.";
		password.style.borderColor = "red";
	} else {
		passwordError.innerText = "";
		password.style.borderColor = "";

		alert("Your VEME account has been created!");
	}
}

document.getElementById("password").addEventListener("input", () => {
	const passwordError = document.getElementById("password-error");
	passwordError.innerText = "";
	document.getElementById("password").style.borderColor = "";
});

function ChangeImage(){

}