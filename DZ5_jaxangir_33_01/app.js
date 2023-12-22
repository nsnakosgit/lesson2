const input = document.querySelector('input');
const one = document.querySelector('.one');

input.addEventListener('input', () => {
 const inputValue = input.value;
 one.textContent = `${inputValue.length}/100`;
  
 if (inputValue.length > 100) {
    input.style.borderColor = 'red';
 } else if( inputValue < 100) {
    input.style.borderColor = 'bluu';
 } else{
    return "bluu"
 }
 
});
