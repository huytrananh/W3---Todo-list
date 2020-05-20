let masterTodoList = []

//add item to the list
let addTodo = () => {
    let todo = {
        contents: document.getElementById("itemInput").value, 
        isDone: false
    }
    masterTodoList.push(todo)
    showList(masterTodoList)
    document.getElementById("itemInput").value = ""
}

//update the list
let showList = (list) => {
    let message = list.map((item,index) => {
        if(item.isDone){
            return `<li><input type="checkbox" onchange = "complete(${index})">${item.contents} <button onclick = 'remove(${index})'>Remove</button></li>`.strike()
        }else{
            return `<li><input type="checkbox" onchange = "complete(${index})">${item.contents} <button onclick = 'remove(${index})'>Remove</button></li>`
        }
    }).join('')
    document.getElementById("resultArea").innerHTML = message
    console.log(masterTodoList)
}

let remove  = (index) => {
    masterTodoList.splice(index,1)
    showList(masterTodoList);
}

let complete = (index) => {
    masterTodoList[index].isDone = !masterTodoList[index].isDone
    // if(masterTodoList[index].isDone){
    //     document.getElementById("justV").innerHTML = true
    // }
    showList(masterTodoList)
}
