const keys = document.querySelector('#qwerty');
const phrase = document.querySelector('.btn__reset');
const ul = document.querySelector('#phrase ul');
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
        ul.appendChild(li);
        if(letterArray[i] != ' '){
            li.className = 'letter';
        }
        else {
            li.className = 'space';
        }
    }
}
console.log(letterArray);
addPhraseToDisplay(letterArray);

//function checks all the letters in list items and if they have
//the class 'letter' then add another class 'show' to it  
function checkLetter(letterGuessed) {
    const items = document.querySelectorAll('.letter');

    for (let i = 0; i< items.length; i+= 1) {
        if (items[i].innerHTML === letterGuessed.innerHTML){
            items[i].classList.add('show');
        }
        else if (items[i].innerHTML === letterGuessed.innerHTML){
            return null;
        }
        

    }
}
function checkWin(){
    const show = document.querySelectorAll('.show');
    const letter = document.querySelectorAll('.letter');
    if(show.length === letter.length){
        startGame.classList.add('win');
    }
    else if (missed >= 5){
        startGame.classList.add('lose');     
    }
    }

//event listener on all the buttons so when anyof them clicked
// they get class of 'chosen' added to them and thier state is disabled
//and the clicked button is stored in the variable

keys.addEventListener('click', (e) => {
    const buttonClicked = e.target;
    if (buttonClicked.tagName === 'BUTTON'){
        buttonClicked.classList.add('chosen');
        buttonClicked.disabled = true;
        let letterFound = checkLetter(buttonClicked);
    }
     if(letterFound = null) {
        missed += 1;
    }
    
    if(missed >= 1 && missed <= 5){
        const tries = document.querySelectorAll('.tries')[0];
        const ol = tries.parentNode;
        ol.removeChild(tries);
    }
    checkWin();
    
   
});


