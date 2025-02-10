const studentsJson = `{
    "students": [
        {"id": 1, "studentName": "Lera", "studentAge": "16", "studentPhoto": "./images/photo1.jpg", "studentHobby": "collecting", "studentAssociation": "atiny"},
        {"id": 2, "studentName": "Yarik", "studentAge": "15", "studentPhoto": "./images/photo2.jpg", "studentHobby": "---", "studentAssociation": "---"},
        {"id": 3, "studentName": "Anastasia", "studentAge": "15", "studentPhoto": "./images/photo3.jpg", "studentHobby": "Tennis", "studentAssociation": "Sport"},
        {"id": 4, "studentName": "Sasha", "studentAge": "18", "studentPhoto": "./images/photo4.jpg", "studentHobby": "Work", "studentAssociation": "work"},
        {"id": 5, "studentName": "Egor", "studentAge": "16", "studentPhoto": "./images/photo5.jpg", "studentHobby": "Programmer", "studentAssociation": "Study"},
        {"id": 6, "studentName": "Andriy", "studentAge": "15", "studentPhoto": "./images/photo6.jpg", "studentHobby": "---", "studentAssociation": "---"},
        {"id": 7, "studentName": "Yaroslav", "studentAge": "14", "studentPhoto": "./images/photo7.jpg", "studentHobby": "Games", "studentAssociation": "Mem"}
    ]
}`;

const students = JSON.parse(studentsJson).students;

document.getElementById('showStudentsBtn').addEventListener('click', () => {
    const studentsContainer = document.getElementById('studentsContainer');
    studentsContainer.innerHTML = '';

    students.forEach(student => {
        const studentElement = document.createElement('div');
        studentElement.className = 'student';

        studentElement.innerHTML = `
            <img src="${student.studentPhoto}" alt="${student.studentName}">
            <div class="student-info">
                <p>Ім'я: ${student.studentName}</p>
                <p>Вік: ${student.studentAge}</p>
                <p>Хобі: ${student.studentHobby}</p>
                <p>Асоціація: ${student.studentAssociation}</p>
            </div>
        `;

        studentsContainer.appendChild(studentElement);
    });
});


document.addEventListener('DOMContentLoaded', () => {
   
    const modal = document.getElementById('addStudentModal');
    const addStudentBtn = document.getElementById('addStudentBtn');
    const closeBtn = document.querySelector('.close');
    const addStudentForm = document.getElementById('addStudentForm');
    const studentsContainer = document.getElementById('studentsContainer');

    addStudentBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    addStudentForm.addEventListener('submit', event => {
        event.preventDefault();
        
        // Отримання значень з форми
        const studentName = document.getElementById('studentName').value;
        const studentAge = document.getElementById('studentAge').value;
        const studentPhoto = document.getElementById('studentPhoto').value;
        const studentHobby = document.getElementById('studentHobby').value;
        const studentAssociation = document.getElementById('studentAssociation').value;

        // Створення нового студента
        const newStudent = {
            id: Date.now(), // Використання timestamp як унікального ID
            studentName,
            studentAge,
            studentPhoto,
            studentHobby,
            studentAssociation
        };

        // Додавання нового студента до списку студентів
        students.push(newStudent);

        // Оновлення відображення студентів
        const studentElement = document.createElement('div');
        studentElement.className = 'student';
        studentElement.innerHTML = `
            <img src="${newStudent.studentPhoto}" alt="${newStudent.studentName}">
            <div class="student-info">
                <p>Ім'я: ${newStudent.studentName}</p>
                <p>Вік: ${newStudent.studentAge}</p>
                <p>Хобі: ${newStudent.studentHobby}</p>
                <p>Асоціація: ${newStudent.studentAssociation}</p>
            </div>
        `;
        studentsContainer.appendChild(studentElement);

        // Закриття модального вікна
        modal.style.display = 'none';

        // Очищення форми
        addStudentForm.reset();
    });
});