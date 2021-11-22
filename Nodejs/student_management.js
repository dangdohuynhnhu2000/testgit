let storage = require('node-persist');

storage.initSync({
    dir: "students"
});

function getAllStudents() {
    const students = storage.getItemSync('students');
    if (typeof students == 'undefined') {
        return [];
    }
    return students;
}

function getStudent(id) {
    let students = getAllStudents();

    for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            return students[i];
        }
    }
    return null;
}

function addStudent(id, fullname) {
    let students = getAllStudents();
    students.push({
        id: id,
        fullname: fullname
    });
    storage.setItemSync('students', students);
}

function removeStudent(id) {
    let students = getAllStudents();
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            students.splice(i, 1);
        }
    }
    storage.setItemSync('students', students);
}

function editStudent(id, newname) {
    let students = getAllStudents();
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            students[i].fullname = newname;
        }
    }
    storage.setItemSync('students', students);
}

function showStudents() {
    let students = getAllStudents();
    students.forEach((index,element) => {
        console.log(index + 'Student:' + ' ' + element.id + ' ' + element.fullname);
    });
}

// addStudent('18120219', 'Dang Do Huynh Nhu');
// addStudent('18120200', 'Duong Boi Long');
// addStudent('18120292', 'Nguyen Duong Binl');
// addStudent('18120204', 'Nguyen Minh Luan');
removeStudent('18120219');
showStudents();