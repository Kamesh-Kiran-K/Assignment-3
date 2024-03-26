var aircontainer = document.querySelector(".aircontainer")



const loginForm = document.getElementById("myform");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = loginForm.mailinp.value.trim();
  const passValue = loginForm.passinp.value.trim();

  const isFormValid = validateEmail(emailValue);
  if (isFormValid) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === emailValue && user.password === CryptoJS.SHA256(passValue).toString()
    );

    if (user) {
     
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("userData", JSON.stringify(user));
      alert("Login successful!"); 
      window.location.href="../HTML/home.html"
    } else {
      alert("Invalid email or password.");
    }
  } else {
    alert("Please enter valid data.");
  }
});


function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}