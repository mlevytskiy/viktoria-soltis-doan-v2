const nameEl = document.getElementById('user_name');
const emailEl = document.getElementById('user_email');
const commentEl = document.getElementById('user_message');

const formBtnEl = document.getElementsByClassName('js-form')[0];

// console.dir(nameEl);
// console.log(emailEl);
// console.log(commentEl);
// console.log(formBtnEl);

formBtnEl.addEventListener('submit', onFormBtnSubmit);

function onFormBtnSubmit(e) {
  e.preventDefault();
  console.log('HeLLoW click');

  // тіло листа на пошту
  let ebody = `
     <b>Somebody was on your site and leave a comment </b> 😉
      <br>
      <br>
      <b>Name: </b>${nameEl.value}
      <br>
      <b>Email: </b>${emailEl.value}
      <br>
      <b>Comment: </b>${commentEl.value}
      <br>
    `;

  Email.send({
    SecureToken: 'c13a1f3b-32ac-4c8f-9f5d-2568db68dd9e',
    To: 'Viktoriabookart@gmail.com',
    From: 'Viktoriabookart@gmail.com',
    Subject: 'site "Viktoria Soltis-Doan" => from ' + emailEl.value,
    Body: ebody,
  }).then(message => alert(message));

  // очистка форми
  nameEl.value = '';
  emailEl.value = '';
  commentEl.value = '';
}

// Альтернативний код

// formBtnEl.addEventListener('submit', e => {
//   e.preventDefault();
//   console.log('HeLLoW click');

//   let ebody = `
//    <b>Somebody was on your site
//     <br>
//     <br>
//     <b>Name: </b>${nameEl.value}
//     <br>
//     <b>Email: </b>${emailEl.value}
//     <br>
//     <b>Comment: </b>${commentEl.value}
//     <br>
//   `;
//   Email.send({
//     SecureToken: '5d022fc2-bc33-4252-bae5-97f2ad695e11',
//     To: 'mmmdems.omp@gmail.com',
//     From: 'mmmdems.omp@gmail.com',
//     Subject: 'Soltys. TEST - ' + emailEl.value,
//     Body: ebody,
//   }).then(message => alert(message));

//     nameEl.value = '';
//     emailEl.value = '';
//     commentEl.value = '';
// });
