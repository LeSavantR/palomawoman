function compared (){
  const subtitle = document.querySelector(".subtitle");
  const password = document.getElementById("password").value;
  const passwordRepeat = document.getElementById("repeatPassword").value;

  if (password == 0, passwordRepeat == 0){
    subtitle.style.color = 'red'
    subtitle.innerHTML = "There can't be empty fields";
    return false
  } else if (password != passwordRepeat) {
    subtitle.style.color = 'blue'
    subtitle.innerHTML = `The password inserted didn't match ${password}, ${passwordRepeat}`;
  }
  else {
    subtitle.innerHTML= 'All Done';
  }
};
document.querySelector('#submit').addEventListener('click', compared)