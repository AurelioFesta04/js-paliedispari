const userWord = prompt("digita una parola e ti dirò se è palindroma");

function isPalindrome(userWord) {

    userWord = userWord.toLowerCase();

    let reverseUserWord = userWord.split("").reverse().join("");

    return userWord === reverseUserWord;
}

if (isPalindrome(userWord)) {
    console.log("La parola è palindroma!");
} else {
    console.log("La parola non è palindroma!");
}
