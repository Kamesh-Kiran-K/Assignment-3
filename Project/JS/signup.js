const signupForm = document.getElementById("myForm");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fnameValue = signupForm["fname"].value.trim();
  const lnameValue = signupForm["lname"].value.trim();
  const emailValue = signupForm["email"].value.trim();
  const passValue = signupForm["passinp"].value.trim();

  const isFormValid =
    fnameValue !== "" &&
    lnameValue !== "" &&
    validateEmail(emailValue) &&
    passValue !== "";

  if (isFormValid) {
    localStorage.setItem(
      "users",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("users") || "[]"),
        {
          fname: fnameValue,
          lname: lnameValue,
          email: emailValue,
          password: CryptoJS.SHA256(passValue).toString(),
        },
      ])
    );
    let data1 = window.localStorage.getItem('users');
    console.log(data1);
    signupForm.reset();
    alert("Account created successfully.");
    window.location.href="../HTML/login.html"
  } else {
    alert("Please enter valid data.");
  }
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}