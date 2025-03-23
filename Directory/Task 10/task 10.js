let Stack = [];

function addTask() {
    let taskInput = document.getElementById("ee").value;
    if (taskInput) {
        Stack.push(taskInput);
        document.getElementById("ee").value = "";
        update();
    }
}

function undoTask() {
    if (Stack.length > 0) {
        Stack.pop();
        update();
    }
}

function update() {
    document.getElementById("ff").textContent = Stack.join(", ");
}