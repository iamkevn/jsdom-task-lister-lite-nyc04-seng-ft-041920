


const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault() 
  // console.log(event.target["new-task-description"].value)
  const listTask = event.target["new-task-description"].value
  createTask(listTask)
})

function createTask(task) {
  const li = document.createElement("li");
  const btn = document.createElement("button")
  const btnAll = document.querySelectorAll('button')
 
  btnAll.forEach(function (button) {
    console.log( button.id.slice(-1))
  })
  btn.setAttribute("id", "delete-btn");
  btn.innerHTML = "Delete"
 
  const ul = document.getElementById("tasks")
  li.innerHTML = task
  li.append(btn)
  ul.append(li)
}

