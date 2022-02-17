function compared (){
  const password = document.getElementById("#password").attributes;
  const passwordRepeat = document.getElementById("#repeatPassword").attributes;

  if (password == passwordRepeat) {
    console.log(`The password inserted is ${password}, ${passwordRepeat}`);
  } else {
    console.log(`Didn't match ${password} and ${passwordRepeat}`);
  }
};

const submit = document
  .querySelector("#submit")
  .addEventListener("click", compared);
