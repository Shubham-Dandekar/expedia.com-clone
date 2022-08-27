let region_data = [
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Costa Rica",
  "Denmark",
  "Egypt",
  "Euro",
  "Finland",
  "France",
  "Germany",
  "Hong Kong SAR",
  "India",
  "Indonesia",
  "Ireland",
  "Italy",
  "Japan",
  "Malaysia",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Peru",
  "Philippines",
  "Saudi Arabia",
  "Singapore",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Thailand",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Vietnam",
];
let region = document.querySelector("#region");

region_data.forEach((element) => {
  let option = document.createElement("option");
  option.text = element;
  region.append(option);
});

let openpopup = document.querySelector("#display-language");
let popup = document.querySelector("#pop-up");

openpopup.addEventListener("click", function () {
  popup.setAttribute("id", "open-popup");
});

function closepopup() {
  popup.setAttribute("id", "pop-up");
}
