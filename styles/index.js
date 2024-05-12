const wordCountButton = document.getElementById('wordcount-btn');
wordCountButton.addEventListener('click', () => {
    console.log('Button clicked');
    const textbox = document.querySelector('.form-control');
    const text = textbox.value;
    const td = document.getElementById('wordcount')
    if(text) {
        axios.post('/text/analyze/getwordcount', {text: text })
            .then((response) => {
            td.innerText = response.data.wordCount;
        })
    }
    else {
        alert('Please enter some text')
        td.innerText = '';
    }
});

const charCountButton = document.getElementById('charcount-btn');
charCountButton.addEventListener('click', () => {
    console.log('Button clicked');
    const textbox = document.querySelector('.form-control');
    const text = textbox.value;
    const td = document.getElementById('charcount')
    if(text) {
        axios.post('/text/analyze/getcharactercount', {text: text })
            .then((response) => {
            td.innerText = response.data.charCount;
        })
    }
    else {
        alert('Please enter some text')
        td.innerText = '';
    }
});

const sentenceCountButton = document.getElementById('sentencecount-btn');
sentenceCountButton.addEventListener('click', () => {
    console.log('Button clicked');
    const textbox = document.querySelector('.form-control');
    const text = textbox.value;
    const td = document.getElementById('sentencecount')
    if(text) {
        axios.post('/text/analyze/getsentencecount', {text: text })
            .then((response) => {
            td.innerText = response.data.sentenceCount;
        })
    }
    else {
        alert('Please enter some text')
        td.innerText = '';
    }
});

const paragraphCount = document.getElementById('paragraphcount-btn');
paragraphCount.addEventListener('click', () => {
    console.log('Button clicked');
    const textbox = document.querySelector('.form-control');
    const text = textbox.value;
    const td = document.getElementById('paragraphcount')
    if(text) {
        axios.post('/text/analyze/getparagraphcount', {text: text })
            .then((response) => {
            td.innerText = response.data.paragraphCount;
        })
    }
    else {
        alert('Please enter some text')
        td.innerText = '';
    }
});

const longestWord = document.getElementById('longestword-btn');
longestWord.addEventListener('click', () => {
    console.log('Button clicked');
    const textbox = document.querySelector('.form-control');
    const text = textbox.value;
    const td = document.getElementById('longestword')
    if(text) {
        axios.post('/text/analyze/getlongestword', {text: text })
            .then((response) => {
            td.innerText = response.data.longestWord;
        })
    }
    else {
        alert('Please enter some text')
        td.innerText = '';
    }
});