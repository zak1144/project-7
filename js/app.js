const keys = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase ul');
let missed = 0;

const startGame = document.querySelector('#overlay');

startGame.addEventListener('click', (e) => {
    startGame.style.display = 'none' ;
});

let phrases = [
    "richmond",
    "hafsah",
    "ebrahim",
    "dubai",
    "disneyland"
];
//function to select a random indexitem of an array 
//and split into a sub array of a string

function getRandomPhraseArray(arr){
        let randomIndex = Math.floor(Math.random() * arr.length);
        let randomPhrase = arr[randomIndex];
        let splitPhrase = randomPhrase.split('');
        return splitPhrase;
}
let letterArray = (getRandomPhraseArray(phrases));
//console.log(letterArray);
//function to display the character string array into li

function addPhraseToDisplay(letterArray){
    
    for (let i = 0; i< letterArray.length; i += 1){
        let li = document.createElement('li');
        li.innerHTML = (letterArray)[i];       
        phrase.appendChild(li);
        if(letterArray[i] != ' '){
            li.className = 'letter';
        }

    }
}
console.log(letterArray);
addPhraseToDisplay(letterArray);