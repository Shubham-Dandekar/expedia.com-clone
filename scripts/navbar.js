document.querySelector("#logo").addEventListener("click", function () {
  window.location.href = "./";
});

let login = JSON.parse(localStorage.getItem("logIn"));
let username = JSON.parse(localStorage.getItem("username"));

if (login) {
  let user = document.querySelector("#signin a");
  user.innerText = username;
} else {
  document.querySelector("#log-out").style.display = "none";
}

document.querySelector("#log-out").addEventListener("click", function () {
  localStorage.setItem("logIn", JSON.stringify(false));
  window.location.href = "./";
});
