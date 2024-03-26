document.addEventListener('DOMContentLoaded', function() {
 
  var popoverlay = document.querySelector(".pop-overlay")
var popbox = document.querySelector(".pop-box")
var addpopbut = document.getElementById("addbut")


addpopbut.addEventListener("click",function(){
	popoverlay.style.display="block"
	popbox.style.display="block"
})


var cancelbut = document.getElementById("canc")
    cancelbut.addEventListener("click",function(event){
	event.preventDefault()
	popoverlay.style.display="none"
	popbox.style.display="none"
})


function myFunction() {
  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var query = document.getElementById("subject").value;


  var formData = {
    name: name,
    email: email,
    query: query
  };

  localStorage.setItem("formData", JSON.stringify(formData));
  alert("Form submitted successfully! Your data has been stored.");
  document.getElementById("myForm").reset();

  popoverlay.style.display="none"
	popbox.style.display="none"
	
}

});