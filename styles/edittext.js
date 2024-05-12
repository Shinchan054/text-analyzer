document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted');
    const id = document.querySelector('#form-div').getAttribute('data-value')
    const text = document.querySelector('.form-control').value
    if(text) {
        axios.post('/edittext', {text: text, id: id })
            .then((response) => {
            document.querySelector('.form-control').value = '';
            alert('Text saved successfully')
            window.location.href = '/texts';
        })
    }
    else {
        alert('Please enter some text')
    }
});