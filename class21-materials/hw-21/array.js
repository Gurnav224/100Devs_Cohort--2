
let todoList = [];

function remember(task){
todoList.push(task)
}

remember("groceries")

console.log(todoList)


function getTask(task){
    return todoList.shift()
}

console.log(getTask())

function rememberUrgently(task) {
    todoList.unshift(task);
  }


  console.log(todoList)