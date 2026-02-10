// const obj = {
//     slip: {
//         id: 197,
//         advice: "Look people in the eye."
//     }
// };

// obj.slip.advice

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.text())
        .then(data => {
            const obj = JSON.parse(data);

            const adv = document.querySelector(".advice");
            adv.innerHTML = obj.slip.advice;
        });
}
