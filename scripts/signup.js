document.querySelector("body > img").addEventListener("click", function () {
  window.location.href = "./signin.html";
});

localStorage.setItem("logIn", JSON.stringify(false));
document.querySelector("form").addEventListener("submit", signUp);

let userData = JSON.parse(localStorage.getItem("userData")) || [];

function signUp(event) {
  event.preventDefault();
  let obj = {
    userEmail: document.querySelector("#email").value,
    userFirstName: document.querySelector("#fname").value,
    userLastName: document.querySelector("#lname").value,
    userPassword: document.querySelector("#password").value,
  };

  userData.push(obj);
  localStorage.setItem("userData", JSON.stringify(userData));
  alert("Sign up successful. Please sign in to continue");
  window.location.href = "./signin.html";
}
