const list = document.querySelectorAll('.review li');
const containerReview = document.querySelector('.container-review');
const containerThankyou = document.querySelector('.container-thankyou');
const result = document.querySelector('.result-review');
const alert = document.querySelector('.alert');

function handleList(e) {
    list.forEach((li) => {
        li.classList.remove('active');
    });
    let element = e.target;
    element.classList.add('active');
    let currentListValue = element.innerHTML;
    result.innerHTML = `<p>You selected ${currentListValue} out of 5</p>`;
}

list.forEach((li) => {
    li.addEventListener('click', handleList);
});

const button = document.querySelector('.button');

function submit() {
    list.forEach((li) => {
        if(li.classList.contains('active')) {
            containerReview.style.display = 'none';
            containerThankyou.style.display = 'block';
        } else {
            alert.classList.add('active');
            alert.innerHTML = '<p>Please choose a number</p>';
        }
    })
}

button.addEventListener('click', submit);