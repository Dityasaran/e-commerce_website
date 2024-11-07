const signUpLink = document.querySelector('.signUp-link p a');
const signInLink = document.querySelector('.signInBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

function goToHome()
{
    window.location.href = "home.html";
}