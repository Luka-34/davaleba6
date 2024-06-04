// ● შექმენი input და button
// ● input-ში მომხმარებელი ჩაწერს ფერს და
// button ღილაკზე დაწკაპების შემდეგ body-ს
// background შეიცვლება ჩაწერილ ფერად
// ● (ფერები რომლის ჩაწერაც შეუძლია: red,
// blue, green, black, white)
// ● თუ სხვა ფერი ჩაწერა, გამოუტანე
// შეტყობინება alert-ის საშუალებით

function giveColor() {
   const bakcColor = document.querySelector('input[name="color"]');
   const Value = bakcColor.value;
   const Colors = ['red', 'blue', 'green', 'black', 'white'];

   if (Colors.includes(Value)) {
      document.body.style.backgroundColor = Value;
   } else {
      alert('incorrect color');
   }
}
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
   e.preventDefault()
   giveColor()
})

