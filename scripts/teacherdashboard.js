console.log('connected to the teachers dashboard');
const btn = document.querySelector('.btn');
const courseForm = document.querySelector('form'); // Assuming 'form' is the ID or tag name of your form

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const formData = new FormData(courseForm);

    // Use entries() method on the FormData instance (formData)
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    fetch('http://localhost:2500/user/course', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
});


fetch('http://localhost:2500/user/course', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())
    .then(data => listCourses(data))
    .catch(err => console.error(err));

function listCourses(courses){
   courses.map(course=>{
        courseHtml = `<div class="course">
        <input type="text" id="course_id" value="${course._id}" hidden>
        <div class="container text-medium text-center p-1 m-auto name  text-grey col rounded border border-dark">${course.name}</div>
    </div>`
    return courseHtml;
    // console.log(courseHtml)
    }).forEach(course=>{
        document.querySelector('.courses-display').insertAdjacentHTML('afterbegin',course);
    })
}

const courses = document.querySelectorAll('.course')
console.log(courses);
courses.forEach(course=>{
    course.addEventListener('click',(e)=>{
        e.stopPropagation();
        const courseId = e.target.parentElement.querySelector('input').value
        openCourseDetailsPage(courseId);
    })
})

function openCourseDetailsPage(id) {
    // Construct the URL with the course ID
    const url = `http://localhost:2500/user/course/${id}`;

    // Navigate to the new page
    window.location.href = url;
}
// function getCourseDetails(id){
//     fetch(`http://localhost:2500/user/course/${id}`)
//     .then(res => res.text())
//     .then(data => )
//     .catch(err => console.error(err));

// }