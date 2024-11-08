
document.getElementById('addTaskButton').onclick = function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const taskList = document.getElementById('taskList');
    const taskCount = taskList.children.length;
    if (taskText === '') {
        alert('Введите задачу!');
        return;
    }


    const taskItem = document.createElement('li');
    taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'me-2';

    checkbox.onchange = function() {
        taskItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.onclick = function() {
        taskItem.remove();
        if (deleteButton === deleteButton){
            alert ('ok');
            return;
        }
    };

    taskItem.appendChild(checkbox);
    taskItem.appendChild(document.createTextNode(taskText));
    taskItem.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(taskItem);
    taskInput.value = '';
};




document.getElementById('sortButton').onclick = function() {
    const numbersInput = document.getElementById('numbers').value;
    const sortOrder = document.getElementById('sortOrder').value;


    const numbersArray = numbersInput.split(',').map(num => num.trim());
    const invalidInput = numbersArray.some(num => isNaN(num) || num === '');

    if (invalidInput) {
        alert('Пожалуйста, введите только числа, разделенные запятыми.');
        return;
    }


    const sortedNumbers = numbersArray.map(Number);

    if (sortOrder === 'asc') {
        sortedNumbers.sort((a, b) => a - b);
    } else {
        sortedNumbers.sort((a, b) => b - a);
    }

    document.getElementById('result').textContent = sortedNumbers.join(', ');
};
