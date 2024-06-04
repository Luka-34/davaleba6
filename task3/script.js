// შექმენი input, სადაც მომხმარებელს
// შესაძლებლობა ექნება შეიტანოს “:”- ით
// ერთმანეთისგან გამოყოფილი რიცხვები,
// average ღილაკზე დაწკაპების შემდეგ
// დაითვალე ამ რიცხვების საშუალო და
// გამოუტანე ეკრანზე
// ● მაგ: 1:2:3:4:5 ეკრანზე გამოიტანს 3-ს



// function avarge(e) {
//     const inputNumber = document.querySelector('input[name="num"').value;
//     const split = inputNumber.split(':').map(Number);
//     const num = split.reduce((a,b) => a + b, 0);
//     const avarge = num / split.length;
//     return avarge
// }
// const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading3')

// btn.addEventListener('click', () =>  {
//  const result = avarge()
//  heading.textContent = result;
// })


function avarge() {
    const inputNumber = document.querySelector('input[name="num"]').value;
    const split = inputNumber.split(':').map(Number);
    const num = split.reduce((a,b) => a + b, 0);
    const average = num / split.length;
    return average;
}

const btn = document.querySelector('.btn');
const heading = document.querySelector('.heading3');

btn.addEventListener('click', () => {
    const result = avarge();
    heading.textContent = result;
});



