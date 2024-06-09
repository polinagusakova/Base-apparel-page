let email = document.getElementById("email");
let button = document.getElementById('button');
let hidden_p = document.getElementById('alert');
let hidden_img = document.getElementById('error-icon');

button.addEventListener('click', (event) => {
    if (!email.value.includes('@') || email === '') {
        event.preventDefault(); //check input before submitting
        email.style.border = '2px solid red';
        hidden_p.style.display = 'block';
        hidden_img.style.display = 'block';
        button.style.padding = '0.5rem';
    } 
})
