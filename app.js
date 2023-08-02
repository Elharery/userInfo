let userName = document.getElementById("userName");
let login = document.getElementById("log");
let userJob = document.getElementById("userJob");
let logOut = document.getElementById("logOut");
let fullName = document.querySelector(".full-name");
let emailInf = document.querySelector(".email");
let jobInf = document.querySelector(".job");
let before = document.querySelector(".before");
let beforeOne = document.querySelector(".beforeOne");
let beforeTwo = document.querySelector(".beforeTwo");

logOut.onclick = () => {
  window.localStorage.clear();
  userName.innerHTML = "";
  userJob.innerHTML = "";
  before.style.display = "none";
  beforeOne.style.display = "none";
  beforeTwo.style.display = "none";
  login.style.display = "block";
  logOut.style.display = "none";
};
if (window.localStorage.getItem("user name")) {
  userName.innerHTML = `Hello👋: ${window.localStorage.getItem("user name")}`;
  userJob.innerHTML = `${window.localStorage.getItem("job")}`;
  fullName.innerHTML = `${window.localStorage.getItem("user name")}`;
  emailInf.innerHTML = `${window.localStorage.getItem("Email")}`;
  jobInf.innerHTML = `${window.localStorage.getItem("job")}`;
  login.style.display = "none";
  before.style.display = "block";
  beforeOne.style.display = "block";
  beforeTwo.style.display = "block";
  // emailInf.style.display = "block"
  // jobInf.style.display = "block"
  logOut.style.display = "block";
} else {
  login.style.display = "block";
  logOut.style.display = "none";
}
