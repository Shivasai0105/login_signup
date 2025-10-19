var d = document;
var cross = d.getElementById("cross");
var advice = d.getElementById("advice");
advice.style.opacity = "1";
function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else 
    var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}


if (readCookie("done") == "yes") {
  advice.style.display = "none";
}

var loginBlock = d.getElementById("loginBlock");
var loginContent = d.getElementById("loginContent");
var bar = d.getElementById("bar");
var signupBlock = d.getElementById("signupBlock");
var signupContent = d.getElementById("signupContent");
var title = d.getElementById("title");
var text = d.getElementById("text");
var leftSide = d.getElementById("leftSide");
var rightSide = d.getElementById("rightSide");
var toggle = d.getElementById("toggle");
var loginText = d.getElementById("loginText");
var signupText = d.getElementById("signupText");
toggle.addEventListener("click", function(event) {
  event.stopPropagation();
  if(loginBlock.style.marginLeft == "-600px") {
    loginBlock.style.marginLeft = "0px";
    bar.style.marginLeft = "calc(100% - 200px)";
    signupBlock.style.left = "100%";
    loginContent.style.marginLeft = "0px";
    rightSide.style.right = "0px";
    leftSide.style.left = "-300px";
    /*signupText.style.transform = "translate(-50%, -50%)";
    loginText.style.transform = "translate(-50%, -50%)";*/
    signupText.style.top = "50%";
    loginText.style.top = "-100%";
  }
  else {
    loginBlock.style.marginLeft = "-600px";
    bar.style.marginLeft = "0px";
    signupBlock.style.left = "200px";
    loginContent.style.marginLeft = "1000px";
    rightSide.style.right = "-300px";
    leftSide.style.left = "0px";
    /*signupText.style.transform = "translate(-50%, calc(-50% + 50px))";
    loginText.style.transform = "translate(-50%, calc(-50% + 50px))";*/
    signupText.style.top = "200%";
    loginText.style.top = "50%";
  }
  if (signupContent.style.marginLeft == "0px") {
    signupContent.style.marginLeft = "-800px";
  }
  else {
    signupContent.style.marginLeft = "0px";
  }
});
window.addEventListener("click", 
function() {
  if (readCookie("done") != "yes") {
      createCookie("done", "yes");
}
  advice.style.opacity = "0";
  setTimeout(function() {
    advice.style.visibility = "hidden";
  }, 1500)
});

// Signup and Login Logic
const signupForm = d.getElementById('signupForm');
const loginForm = d.getElementById('loginForm');
const signupButton = signupForm.querySelector('input[type="button"]');
const loginButton = loginForm.querySelector('input[type="button"]');

signupButton.addEventListener('click', function() {
    const name = signupForm.querySelector('#name').value;
    const username = signupForm.querySelector('#username').value;
    const email = signupForm.querySelector('#email').value;
    const password = signupForm.querySelector('#password').value;

    if (!name || !username || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(user => user.username === username)) {
        alert('Username already exists.');
        return;
    }

    const newUser = { name, username, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign up successful! You can now log in.');
    signupForm.reset();
});

loginButton.addEventListener('click', function() {
    const username = loginForm.querySelector('#username').value;
    const password = loginForm.querySelector('#password').value;

    if (!username || !password) {
        alert('Please enter username and password.');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Store user data in session storage
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        // Redirect to dashboard on successful login
        window.location.href = 'dashboard.html';
        loginForm.reset();
    } else {
        alert('Invalid username or password.');
    }
});

// Forgot Password Logic
const forgotPasswordLink = d.getElementById('forgotPassword');
forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault();
    const username = prompt('Please enter your username or email to retrieve your password:');
    if (!username) {
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username || user.email === username);

    if (user) {
        alert(`Your password is: ${user.password}`);
    } else {
        alert('No account found with that username or email.');
    }
});

// Show/Hide Password Logic
const passwordToggles = d.querySelectorAll('.show-password');
passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const passwordInput = this.previousElementSibling;
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        } else {
            passwordInput.type = 'password';
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        }
    });
});
