const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const description = document.getElementById('description');
const contactForm = document.getElementById('contactForm');


const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const validateInput = (element, value, limit) => {
    if(value.length <= limit) {
        element.nextElementSibling.style.display = 'block';
    } else {
        element.nextElementSibling.style.display = 'none';
    }
};


const validateEmail = (element, value) => {
    if(!isValidEmail(value)) {
        element.nextElementSibling.style.display = 'block';
    } else {
        element.nextElementSibling.style.display = 'none';
    }
};




nameInput.addEventListener('input', (e) => {
    const { name, value } = e.target;

    // console.log(name);
    // console.log(value);

    validateInput(nameInput, value, 5);

  
});


email.addEventListener('input', (e) => {
    const { name, value } = e.target;

    // console.log(name);
    // console.log(value);

    validateEmail(email, value);
});

subject.addEventListener('input', (e) => {
    const { name, value } = e.target;

    // console.log(name);
    // console.log(value);

    validateInput(subject, value, 15);

  
});


description.addEventListener('input', (e) => {
    const { name, value } = e.target;

    // console.log(name);
    // console.log(value);

    validateInput(description, value, 25);
});




contactForm.addEventListener('submit', (e)=> {
    e.preventDefault();


    validateInput(nameInput, nameInput.value, 5);
    validateInput(subject, subject.value, 15);
    validateInput(description, description.value, 25);
    validateEmail(email, email.value);
});



