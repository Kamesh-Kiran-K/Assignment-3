document.getElementById("mybutton").addEventListener("click", function() {
  window.location.href = "../HTML/home.html";
});

const hamMenu = document.getElementById("hamMenu");
  const navbar = document.querySelector(".navbar");

  hamMenu.addEventListener("click", function () {
    navbar.classList.toggle("show");
  });

document.addEventListener("DOMContentLoaded", function() { 
  
  var login = document.getElementById("login");
  var logout = document.getElementById("logout");
  var isLoggedIn = sessionStorage.getItem("isLoggedIn");

  login.addEventListener("click", function() {
    window.location.href = "../HTML/login.html";
  });

  

if (isLoggedIn) {
  var userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData && userData.email) {
    var userEmail = userData.email;
    console.log("userEmail:", userEmail); 
    var users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("users:", users); 
    var user = users.find((user) => user.email === userEmail);
    console.log("user:", user);
  if (user) {
    displayUserInitials(user.fname, user.lname);
    login.style.display = "none";
    logout.style.display = "block";
  } 
}
else {
    console.error("User not found in local storage.");
  }
}


logout.addEventListener("click", function() { 
  sessionStorage.removeItem("isLoggedIn");
  sessionStorage.removeItem("userData");  
  window.location.href = "../HTML/home.html";
  clearUserInitials();
});
 
function displayUserInitials(fname, lname) {
  console.log("First Name:", fname);
  console.log("Last Name:", lname);
  var firstNameInitial = fname.charAt(0);
  var lastNameInitial = lname.charAt(0);
  var circle = document.createElement("div");
  circle.classList.add("user-circle");
  circle.textContent = firstNameInitial + lastNameInitial;
  var userInitialsContainer = document.getElementById("userInitials");
  userInitialsContainer.innerHTML = "";
  userInitialsContainer.appendChild(circle);
  
}


function clearUserInitials() {
  var userInitialsContainer = document.getElementById("userInitials");
  userInitialsContainer.innerHTML = "";
}

});