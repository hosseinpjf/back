const monthView = document.getElementById('month');
const typeView = document.getElementById('type');
const titleView = document.getElementById('title');
const textView = document.getElementById('text');
const send = document.getElementById('send');

monthView.value = '';
typeView.value = '';
titleView.value = '';
textView.value = '';

let makma;

const backUrl = 'https://hossein1499.github.io/back/json/back-calendar.json';

const requestGet = async gUrl => {
    const response = await fetch(gUrl);
    if (response.status === 200) {
        return await response.json();
    }
    else {
        throw new Error('not found...');
    }
}

requestGet(backUrl).then(value => makma = value);

send.addEventListener('click', () => {
    let data = {
        month: parseInt(monthView.value),
        type: parseInt(typeView.value),
        title: titleView.value,
        text: textView.value
    }
    console.log(data);

    monthView.value = '';
    typeView.value = '';
    titleView.value = '';
    textView.value = '';

    makma.push(data);
    console.log(makma);
})