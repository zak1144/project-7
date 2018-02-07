
const keys = document.querySelector('#qwerty');
const ul = document.querySelector('#phrase ul');
let missed = 0;

const startGame = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const title = document.querySelector('.title');

//to start the game and hide the start screen
    startGame.addEventListener('click', (e) => {
    overlay.style.visibility = 'hidden' ;
});

let phrases = [
    "richmond",
    "hafsah",
    "ebrahim",
    "dubai",
    "disneyland",
    "tomorrow never comes",
    "live and let live",
    "live your life as you can leave a legacy",
    "every saint has a past",
    "every sinner has a future"
];
//function to select a random index item of an array 
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
    letterFound = false;
    for (let i = 0; i< items.length; i+= 1) {
        if (items[i].innerHTML === letterGuessed.innerHTML){
            items[i].classList.add('show');
            letterFound = true;
        }   
    }
    return letterFound ? letterGuessed.innerHTML : null;
}
function checkWin(){
    const show = document.querySelectorAll('.show');
    const letter = document.querySelectorAll('.letter');    
    
    if(show.length === letter.length){
        overlay.classList.add('win');
        //overlay.className === 'win';
        overlay.style.visibility = 'visible' ;
        startGame.innerHTML = 'Reset';
        title.innerHTML = 'You Win!!';
    }
    if (missed >= 5){
            overlay.classList.add('lose');
            //overlay.className === 'lose';
            overlay.style.visibility = 'visible' ;
            startGame.innerHTML = 'Reset';
            title.innerHTML = 'You loose,Try Again!!'; 
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
    
        if(letterFound === null) {
         //console.log(letterFound);
        // console.log(missed);
            missed += 1;
            if(missed >= 1 && missed <= 5){
                const tries = document.querySelectorAll('.tries')[0];
                const ol = tries.parentNode;
                ol.removeChild(tries);
                //let heartIcon = document.querySelectorAll('img');
                //heartIcon.src = '../images/lostHeart.png';
            }
        }
    }
    checkWin();

});
    // event listener if reset button is pressed
    
startGame.addEventListener('click', (e) => {
    if( e.target.textContent === 'Reset'){       
        overlay.classList.remove('win');
        overlay.classList.remove('lose');
        missed = 0;
        
        while(ul.children.length> 0){   
                ul.removeChild(ul.firstChild);
            }
        // removing the button selection on keyboard and 
        // resetting disbaled state
        const button = keys.querySelectorAll('button');
        for(let i = 0; i<button.length; i+=1){
                button[i].disabled = false;    
                button[i].classList.remove('chosen');
        }
        //resetting another phrase
        let resetArray = (getRandomPhraseArray(phrases));
        console.log(resetArray);
        addPhraseToDisplay(resetArray);

        // appending hearts images
        const scoreboard = document.querySelector('#scoreboard');
        //const tries = scoreboard.querySelectorAll('.tries');
       //if(missed <=5 ){

            for(let i = 0; i<missed; i+= 1){
                
                const heart = document.createElement('img');
                const li = document.createElement('li');
                const ol = document.querySelector('ol');
                //const tries = scoreboard.querySelectorAll('.tries')[0];
                li.classList.add('tries');
                heart.src = './images/liveHeart.png';
                heart.height = 35;
                heart.width = 30;
                li.appendChild(heart);
                ol.appendChild(li);

            }
        //}  
    }    
});

        
    