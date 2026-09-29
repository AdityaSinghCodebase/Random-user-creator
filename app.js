const randomUserAPI = "https://randomuser.me/api/";

// Profile Variables
const profileImg = document.getElementById("profile-img");

const profileGender = document.getElementById("profile-gender");

const profileTitle = document.getElementById("profile-title");

const firstName = document.getElementById("profile-firstName");

const lastName = document.getElementById("profile-lastName");

const profileAge = document.getElementById("profile-age");

const profileEmail = document.getElementById("profile-email");

const profileCell = document.getElementById("profile-cell");

const profileCountry = document.getElementById("profile-location-country");

const profileCity = document.getElementById("profile-location-city");

const reloadBtn = document.getElementById("reload-user");

reloadBtn.addEventListener("click", () => {
  fetch(randomUserAPI)
    .then((res) => res.json())
    .then((data) => {
      profileImg.src = data.results[0].picture.large;
      profileGender.innerText = data.results[0].gender;
      profileTitle.innerText = data.results[0].name.title;
      firstName.innerText = data.results[0].name.first;
      lastName.innerText = data.results[0].name.last;
      profileAge.innerText = data.results[0].dob.age;
      profileEmail.innerText = data.results[0].email;
      profileCell.innerText = data.results[0].cell;
      profileCountry.innerText = data.results[0].location.country;
      profileCity.innerText = data.results[0].location.city;
    });
});
