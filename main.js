document.querySelector('#push').onclick = function(){
    var taskInput = document.querySelector('#newtask input');
    var taskText = taskInput.value.trim();

    if (taskText.length == 0){
        alert('Пожалуйста введите задачу');
    } else {
        var tasksContainer = document.querySelector('#tasks');

        var taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        
        var taskNameSpan = document.createElement('span');
        taskNameSpan.textContent = taskText;

        var deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        var deleteIcon = document.createElement('i');
        deleteIcon.className = 'far fa-trash-alt';
        deleteButton.appendChild(deleteIcon);

        taskDiv.appendChild(taskNameSpan);
        taskDiv.appendChild(deleteButton);

        tasksContainer.appendChild(taskDiv);

        deleteButton.onclick = function(){
            this.parentNode.remove();
        }

        taskDiv.onclick = function(){
            this.classList.toggle('completed');
        }
    }

    taskInput.value = "";
}
