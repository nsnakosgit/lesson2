

document.addEventListener("DOMContentLoaded", function() {
    const lottoreys = document.createElement('div');
    lottoreys.classList.add('lottoreys');

    for (let i = 0; i < 6; i++) {
        const number = document.createElement('div');
        number.classList.add('lottery-number');
        lottoreys.appendChild(number);
    }

    document.body.appendChild(lottoreys);
});



document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btbns").addEventListener("click", function () {
        let numbers = [];

        while (numbers.length < 6) {
            let number = Math.floor(Math.random() * 99) + 1;
            number = number.toString().padStart(2, '0');
            if (!numbers.includes(number)) {
                numbers.push(number);
            }
        }

        numbers.forEach(function (number, index) {
            document.querySelectorAll(".lottery-number")[index].textContent = number;
        });
    });
});