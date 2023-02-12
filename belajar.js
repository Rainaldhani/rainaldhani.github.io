// while (true) {
//     let number = prompt ("Guess the Number")
//         number = Number (number);
    
//     const randomNumber = Math.round(Math.random()*10)

//     if (number === randomNumber) {
//         alert ("You Win");
//         break;
//     } else {
//         console.log (`You guess ${number}, but the right number was ${randomNumber}`)
//     }
// }



// let num = 10;

// try {
//     num = num + 10
// } catch (error) {
//     console.warn("Error Cuy:", error)
// } finally {
//     console.log (`The Final Number is ${num}`)
// }



// function tambah (angka1, angka2) {
//     return angka1+angka2
// }

// let kurang = function(angka1, angka2) {
//     return angka1 - angka2
// };

// let kali = (angka1, angka2) => angka1 * angka2;

// let bagi = (angka1, angka2) => {
//     return angka1 / angka2
// }

    let button = document.querySelector (".btn2");
    button.addEventListener('click', (e) => {
        e.preventDefault()
    
    let randomNum = Math.round(Math.random()*83)
    fetch (`https://swapi.dev/api/people/${randomNum}/`)
        .then (response => response.json())
        .then (chara => {
            console.log(chara)
        })
    })

    