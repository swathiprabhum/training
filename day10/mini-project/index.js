let students = []

function addStudent() {
    let name = document.getElementById('name').value;
    let m1 = parseFloat(document.getElementById('m1').value);
    let m2 = parseFloat(document.getElementById('m2').value);
    let m3 = parseFloat(document.getElementById('m3').value);

    if (name === "" || m1 === "" || m2 === "" || m3 === "" ){
        alert("Please fill all the fields.");
        return;
    }

    let total = m1 + m2 + m3;
    let average = total / 3;
    let grade = calculateGrade(average);

    let studentsData = {
        name: name,
        marks: [m1, m2, m3],
        total: total,
        average: average.toFixed(2),
        grade: grade
    };
    students.push(studentsData);
    displayStudents();
    clearInputs();
}

function calculateGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 75 && score < 90) {
        return 'B';
    } else if (score >= 60 && score < 75) {
        return 'C';
    } else if (score >= 50 && score < 60) {
        return 'D';
    } else if (score >= 0 && score < 50) {
        return 'F';
    }
}

function displayStudents() {
    let output = "";
    for(let i = 0; i < students.length; i++) {
        output += `
        <tr>
            <td>${students[i].name}</td>
            <td>${students[i].marks[0]}</td>
            <td>${students[i].marks[1]}</td>
            <td>${students[i].marks[2]}</td>
            <td>${students[i].total}</td>
            <td>${students[i].average}</td>
            <td>${students[i].grade}</td>
        </tr>`;
    }
    document.getElementById('result').innerHTML = output;
}

function clearInputs() {
    document.getElementById('name').value = "";
    document.getElementById('m1').value = "";
    document.getElementById('m2').value = "";
    document.getElementById('m3').value = "";
}