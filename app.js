// Employee List
const employees = [];

// Get DOM elements
const employeeForm = document.getElementById("employeeForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const positionInput = document.getElementById("position");
const currentEmployeesList = document.getElementById("currentEmployees");
const clearAllButton = document.getElementById("clearAll");

// Add Employee
function addEmployee(event) {
  event.preventDefault();

  // Get input values
  const name = nameInput.value;
  const email = emailInput.value;
  const position = positionInput.value;

  // Create new employee object
  const employee = { name, email, position };

  // Add employee to the list
  employees.push(employee);

  // Clear input fields
  nameInput.value = "";
  emailInput.value = "";
  positionInput.value = "";

  // Update the current employees list
  updateEmployeesList();
}

// Update Employees List
function updateEmployeesList() {
  // Clear the current employees list
  currentEmployeesList.innerHTML = "";

  // Add each employee to the list
  employees.forEach((employee, index) => {
    const li = document.createElement("li");
    li.textContent = `${employee.name} (${employee.email}) - ${employee.position}`;

    // Add delete button/icon
    const deleteButton = document.createElement("span");
    deleteButton.textContent = "x";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => deleteEmployee(index));

    li.appendChild(deleteButton);
    currentEmployeesList.appendChild(li);
  });
}

// Delete Employee
function deleteEmployee(index) {
  employees.splice(index, 1);
  updateEmployeesList();
}

// Clear All Fields
function clearAllFields() {
  nameInput.value = "";
  emailInput.value = "";
  positionInput.value = "";
}

// Event Listeners
employeeForm.addEventListener("submit", addEmployee);
clearAllButton.addEventListener("click", clearAllFields);
