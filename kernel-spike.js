console.log("script loaded!");
function hello() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const errorElement = document.getElementById("error");

  let messages = [];
  if (email.value === "" || email.value == null) {
    messages.push("Username or Email required");
  }

  if (
    email.value !== "" ||
    (email.value !== null && password.value === "") ||
    password.value == null
  ) {
    messages.push("Password is required");
  }

  // if (password.value === "" || password.value == null) {
  //   messages.push("password is required");
  // }

  if (messages.length > 0) {
    alert(messages);
  }
}

document.addEventListener("submit", () => {
  hello();
  showError();
});
