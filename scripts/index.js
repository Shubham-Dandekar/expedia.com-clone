let submit = document.querySelector("#submit");

submit.addEventListener("click", function () {
  let search = document.querySelector("#search").value;
  if (search == "") {
    alert("Please Enter a City Name");
    return;
  }
  event.preventDefault();
  let searchArr = [];

  searchArr.push(search);
  localStorage.setItem("search", JSON.stringify(searchArr));

  window.location.href = "./hotels.html";
});
