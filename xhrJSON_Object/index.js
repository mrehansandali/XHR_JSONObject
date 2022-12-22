const userBtn = document.getElementById("user").addEventListener("click", loadUser)
const usersBtn = document.getElementById("users").addEventListener("click", loadUsers)

const userP = document.getElementById("userP")
const usersP = document.getElementById("usersP")

function loadUser() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "user.json", true)

  xhr.onload = function () {
    const user = JSON.parse(this.responseText)
    output = `
        <ul class="list-group list-group-flush">
          <li class="list-group-item">first name : ${user.first_name} ${user.last_name}</li>
          <li class="list-group-item">image : <img src= "${user.avatar}"></li>
        </ul>
      `
    userP.innerHTML = output
  }
  xhr.send()
}





function loadUsers() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "users.json", true)

  xhr.onload = function () {
    const users = JSON.parse(this.responseText)

    let output = ""
    users.forEach(user => {
      output += `
      <ul class="list-group list-group-flush">
      <li class="list-group-item">Name : ${user.first_name} ${user.last_name}</li>
      <li class="list-group-item">image : <img src= "${user.avatar}"></li>
      </ul>
      `
    });


    usersP.innerHTML = output
  }

  xhr.send()
}

