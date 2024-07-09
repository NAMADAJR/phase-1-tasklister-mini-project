document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");


  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get the input value from the form
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value.trim();

    // Check if the input is not empty
    if (taskDescription) {
      // Create a new <li> element
      const newTask = document.createElement("li");
      newTask.textContent = taskDescription;

      // Append the new <li> element to the task list
      taskList.appendChild(newTask);

      // Clear the input field after adding the task
      taskInput.value = "";
    }
  });
});
