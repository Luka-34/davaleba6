// შექმენი button, რომელზე დაწკაპების
// შემდეგაც გაიხსნება მოდალი და მოდალის
// უკან შავი/გამჭვირვალე background

const modal = document.createElement('div');
const button = document.querySelector('.btn');
const backBtn = document.createElement('button');

modal.className = 'modal';
document.body.appendChild(modal);


function Modal() {
   document.body.style.backgroundColor = 'black';
   document.body.style.display = 'flex';
   document.body.style.justifyContent = 'center';
   document.body.style.alignItems = 'center';
}

button.addEventListener('click', () => {
    Modal()
})


