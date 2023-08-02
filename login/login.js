// let inp = document.querySelectorAll("input")
let userNamelogin = document.getElementById("userName");
let email = document.getElementById("email");
let job = document.getElementById("job");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let label = document.querySelector("label");


submit.onclick = (e)=> {
  if (userNamelogin.value !== "" && email.value !== "" && job.value !== "" && password.value !== "") {
  window.localStorage.setItem("user name", userNamelogin.value)
  window.localStorage.setItem("Email", email.value)
  window.localStorage.setItem("job", job.value)
  window.localStorage.setItem("password", password.value)
}else{
      e.preventDefault()
  }
  
}
// password.oninput = () => {
//   if (password.length === 8) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

