const UserPariDispari = prompt("decidi tra pari e dispari")
console.log(UserPariDispari)
const UserNumber = parseInt(prompt("decidi un numero da 1 a 5"))
console.log(UserNumber)
const ComputerNum = casualComputerNumber()

function casualComputerNumber() {

    let randomComputerNum = Math.floor(Math.random() * 5) + 1;

    return randomComputerNum;
}

console.log(ComputerNum)

const somma = solutionNumParDis(UserNumber, ComputerNum)

function solutionNumParDis(UserNumber, ComputerNum) {

    let sum = parseInt(UserNumber + ComputerNum);

    if (sum % 2) {
        console.log("la somma è un numero dispari")
    } else {
        console.log("la somma è un numero pari")
    }

    return (sum)
}

console.log(somma)