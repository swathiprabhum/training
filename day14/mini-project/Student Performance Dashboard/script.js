// Load students from localStorage
function loadStudents() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const students = JSON.parse(localStorage.getItem('students')) || [];
            resolve(students);
        }, 1000);
    });
}

// Save students to localStorage
function saveStudents(students) {
    localStorage.setItem('students', JSON.stringify(students));
}

// Calculate total, average, and grade
function calculatePerformance(marks) {
    const total = marks.reduce((acc, mark) => acc + mark, 0);
    const average = total / marks.length;
    let grade;
    if (average >= 90) grade = 'A';
    else if (average >= 80) grade = 'B';
    else if (average >= 70) grade = 'C';
    else if (average >= 60) grade = 'D';
    else grade = 'F';
    return { total, average, grade };
}

// Fetch the student list and display in a tabular format
function fetchStudents(students) {
    const tbody = document.getElementById('student-table-body');
    if (!tbody) return;
    let rows = '';
    students.forEach((student, index) => {
        const { total, average, grade } = calculatePerformance(student.marks);
        rows += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.marks.join(', ')}</td>
                <td>${total}</td>
                <td>${average.toFixed(2)}</td>
                <td>${grade}</td>
                <td>
                    <button onclick="editStudent(${index})">Edit</button>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
    tbody.innerHTML = rows;
}

// Add student
document.getElementById('add').addEventListener('click', () => {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const marks = document.getElementById('marks').value.split(',').map(Number);
    loadStudents().then((students) => {
        students.push({ id: id, name, marks });
        saveStudents(students);
        fetchStudents(students);
    });
    
});

// Edit student
function editStudent(index) {
    loadStudents().then((students) => {
        const student = students[index];
        const newName = prompt('Enter new name:', student.name);
        const newMarks = prompt('Enter new marks:', student.marks.join(', '));
        if (newName && newMarks) {
            student.name = newName;
            student.marks = newMarks.split(',').map(Number);
            saveStudents(students);
            fetchStudents(students);
        }
    });
}

// Delete student
function deleteStudent(index) {
    loadStudents().then((students) => {
        students.splice(index, 1);
        saveStudents(students);
        fetchStudents(students);
    });
}