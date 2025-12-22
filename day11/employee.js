let employees = [];

function addEmployee() {
    let id = document.getElementById('empId').value;
    let name = document.getElementById('empName').value;
    let dailySalary = Number(document.getElementById('empDailySalary').value);
    let workingDays = Number(document.getElementById('empWorkingDays').value);
    let status = "";

    // Input validation
    if (id === "" || name === "" || isNaN(dailySalary) || isNaN(workingDays)) {
        alert("Please fill all the fields correctly.");
        return;
    }

    if (workingDays < 1 || workingDays > 30) {
        alert("Working days must be between 1 and 30.");
        return;       
    }

    let employeeData = {
        id: id,
        name: name,
        salary: dailySalary, 
        workingDays: workingDays,
        totalSalary: calcTotalSalary(dailySalary, workingDays),
        status: getEmployeeStatus(workingDays)
    };
    
    employees.push(employeeData);
    displayEmployees();
    clearInputs();
}

function calcTotalSalary(dailySalary, workingDays) {
    return dailySalary * workingDays;
}

function getEmployeeStatus(workingDays){    
    if (workingDays < 20) {
        return "Low Attendance";
    }
    else {
        return "Present";
    }
}

function displayEmployees() {
    let output = "";
    for(let i = 0; i < employees.length; i++) {
        output += `
        <tr class="${employees[i].status === 'Low Attendance' ? 'low-attendance' : ''}">
            <td>${employees[i].id}</td>
            <td>${employees[i].name}</td>
            <td>${employees[i].workingDays}</td>
            <td>${employees[i].totalSalary}</td>
            <td>${employees[i].status}</td>
        </tr>`;
    }
    document.getElementById('result').innerHTML = output;

    // Update total count display
    updateEmployeeCount();    
}       

function clearInputs() {
    document.getElementById('empName').value = "";
    document.getElementById('empId').value = "";
    document.getElementById('empDailySalary').value = "";
    document.getElementById('empWorkingDays').value = "";
}

function updateEmployeeCount() {
    const employeesCount = document.getElementById('totalEmployees');
    if (employeesCount) employeesCount.innerText = employees.length;
}
