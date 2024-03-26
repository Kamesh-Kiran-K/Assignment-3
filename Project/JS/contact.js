document.getElementById("mybutton").addEventListener("click", function() {
  window.location.href = "../HTML/home.html";
});



function myFunction() {
  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var domain = document.querySelector("select").value;
  var query = document.getElementById("subject").value;


  var formData = {
    name: name,
    email: email,
    domain: domain,
    query: query
  };

  localStorage.setItem("formData", JSON.stringify(formData));
  alert("Form submitted successfully! Your data has been stored.");
  document.getElementById("myForm").reset();
}