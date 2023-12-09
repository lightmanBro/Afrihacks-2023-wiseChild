

const signUpContainer = document.querySelector('.register'),
loginContainer = document.querySelector('.login'),
loginToggle = document.querySelector('.login-toggle'),
signUpToggle = document.querySelector('.register-toggle');



signUpContainer.style.display = 'none';
loginToggle.addEventListener('click',()=>{
    loginContainer.style.display = 'block';
    signUpContainer.style.display = 'none';
})

signUpToggle.addEventListener('click',()=>{
    signUpContainer.style.display = 'block',
    loginContainer.style.display = 'none';
})