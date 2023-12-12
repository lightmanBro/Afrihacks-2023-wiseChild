console.log('connected to the teachers dashboard')

const courseName = document.querySelector('#course-name-form');
const courseForm = new FormData(document.querySelector('#course-name-form'));

courseName.addEventListener('submit', (e) => {
    e.preventDefault();

    // Use entries() method on the FormData instance (courseForm), not the event (e)
    courseForm.forEach((key,value) => {
        console.log(`${key}: ${value}`);
    });
});
