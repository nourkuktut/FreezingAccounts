const modal = document.getElementById("modal");
const openModalBtn1 = document.getElementById("openModalBtn1");
const openModalBtn2 = document.getElementById("openModalBtn2");
const closeModalBtn = document.getElementById("closeModalBtn");

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});
AOS.init({
  duration: 500,
  offset: 100,
});

openModalBtn1.onclick = function () {
  modal.style.display = "flex";
};

openModalBtn2.onclick = function () {
  modal.style.display = "flex";
};

closeModalBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const form = document.getElementById("activationForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  alert("تم إرسال بيانات التفعيل بنجاح!");
  modal.style.display = "none";
});

function openEmailForm() {
  event.preventDefault();
  document.getElementById("emailForm").style.display = "block";
}

function closeEmailForm() {
  event.preventDefault();
  document.getElementById("emailForm").style.display = "none";
}
