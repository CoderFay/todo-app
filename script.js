
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('task-title').value;
  const description = document.getElementById('task-desc').value;
  const createdDate = document.getElementById('created-date').value;
  const dueDate = document.getElementById('due-date').value;
  const status = document.getElementById('task-status').value;

  const taskItem = document.createElement('li');
  taskItem.classList.add('task');

  taskItem.innerHTML = `
    <div class="details">
      <h3>${title}</h3>
      <p>${description}</p>
      <p>Created: ${createdDate}</p>
      <p>Due: ${dueDate}</p>
      <label>
        Status: 
        <select class="status-dropdown">
          <option value="Pending" ${status === 'Pending' ? 'selected' : ''}>Pending</option>
          <option value="In Progress" ${status === 'In Progress' ? 'selected' : ''}>In Progress</option>
          <option value="Completed" ${status === 'Completed' ? 'selected' : ''}>Completed</option>
        </select>
      </label>
    </div>
    <button class="delete-task">Delete</button>
  `;

  taskItem.querySelector('.delete-task').addEventListener('click', () => {
    taskItem.remove();
  });

  taskItem.querySelector('.status-dropdown').addEventListener('change', (event) => {
    const updatedStatus = event.target.value;
    alert(`Task status updated to: ${updatedStatus}`);
  });


  taskList.appendChild(taskItem);

  taskForm.reset();
});


