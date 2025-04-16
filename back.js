const classView = document.getElementById('class');
const yearView = document.getElementById('year');
const branchView = document.getElementById('branch');
const lessonView = document.getElementById('lesson');
const textView = document.getElementById('text');
const timeView = document.getElementById('time');
const weekView = document.getElementById('week');
const send = document.getElementById('send');

yearView.value = '';
classView.value = '';
branchView.value = '';
lessonView.value = '';
textView.value = '';
timeView.value = '';
weekView.value = '';

// let makma;

// const requestGet = async gUrl => {
//     const response = await fetch(gUrl, {
//         cache: 'no-cache',
//         method: 'GET',
//     });
//     if (response.status == 200) {
//         return await response.json();
//     }
//     else {
//         throw new Error('not found...');
//     }
// }

// const backUrl = 'https://hossein1499.github.io/back/json/back.json';
// // requestGet(backUrl).then(value => console.log(value)).catch(reason => console.log(reason));
// requestGet(backUrl).then(value => makma = value);

// send.addEventListener('click', async () => {
//     let data = {
//         year: yearView.value,
//         class: classView.value,
//         branch: branchView.value,
//         lesson: lessonView.value,
//         text: textView.value,
//         time: timeView.value,
//         week: parseInt(weekView.value)
//     }

//     yearView.value = '';
//     classView.value = '';
//     branchView.value = '';
//     lessonView.value = '';
//     textView.value = '';
//     timeView.value = '';
//     weekView.value = '';

//     // const server = await requestGet(backUrl);
//     // server.push(data);

//     makma.push(data);

//     console.log(data);
//     console.log(makma);
// })


const backUrl = 'https://hossein1499.github.io/back/json/back.json';

async function requestPost(gUrl, data) {
    try {
        const response = await fetch(gUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            const responseData = await response.json();
            console.log('Data sent successfully:', responseData);
            return responseData;
        }
        else {
            console.error('Error sending data', response.status);
            throw new Error('Failed to send data');
        }
    }
    catch (error) {
        console.log('Error during fetch:', error);
        throw error;
    }
}

send.addEventListener('click', async () => {
    let data = {
        year: yearView.value,
        class: classView.value,
        branch: branchView.value,
        lesson: lessonView.value,
        text: textView.value,
        time: timeView.value,
        week: parseInt(weekView.value)
    }
    console.log('Data to send:',data);
    try{
        const response = await requestPost(backUrl,data);
    }
    catch(error){
        console.log('this is error',error);
    }
})