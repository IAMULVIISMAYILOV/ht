let userName = document.querySelector("#name");
let surname = document.querySelector("#surname");
let mail = document.querySelector("#email");

let content = document.querySelector(".content");
let button = document.querySelector(".btn");

let changeableName;
let changeableSurname;
let changeableMail;

// content.classList.add("reachToContent");

userName.addEventListener("change", function (e) {
  changeableName = e.target.value;
});

surname.addEventListener("change", function (e) {
  changeableSurname = e.target.value;
});

mail.addEventListener("change", function (e) {
  changeableMail = e.target.value;
});

button.addEventListener("click", function () {
  if (content ) {
  
  } else {
    alert("Please fill-up all input-lines");
  }

  content.innerHTML = `<div class="reachToContent">User Name: ${changeableName}<br> User Surname:${changeableSurname}<br> Mail: ${changeableMail}</div>`;
});
