import { shuffle } from 'lodash';
import { cardsSuitsArr } from './arrayCards.js';
import { renderGameDifficulty } from '../index.js';

export function renderLevelGame(level, appEl) {
    let levelGame = level.value;
    const cardsFlipSide = [];

    const cardsSuitsArraySort = shuffle(cardsSuitsArr).slice(0, levelGame / 2);

    const duplicateCardsArr = cardsSuitsArraySort.concat(cardsSuitsArraySort);
    const duplicateCardsArrSort = shuffle(duplicateCardsArr);

    function getCardsFlipSideArr() {
        for (let i = 0; i < levelGame; i++) {
            cardsFlipSide.push(
                `<img id="cards-click" data-index="${i}" class="game-cards__flip-side" src="../static/cardShirt.png">`,
            );
        }
        return cardsFlipSide;
    }

    getCardsFlipSideArr(levelGame);

    const appHTML = `   
    <div class="game-cards">
     <header class="game-cards-timer">
         <div class="game-cards-timer__module">  
            <div class="game-cards-timer__init">
                <p class="game-cards-timer__item">min</p>
                <p class="game-cards-timer__item">sec</p>
            </div>   
             <p class="game-cards-timer__time">00.00</p>         
         </div>
         <button class="box-game__button" id="submit-button" type="submit">Начать заново</button>
     </header>
     <div class="game-cards__suits center" id="suits">${duplicateCardsArrSort.join(
         '',
     )}</div>
    </div> `;
    appEl.innerHTML = appHTML;

    let clickCards = true,
        firstIndexCard = null,
        secondIndexCard = null;

    function flipsCards() {
        document.getElementById('suits').innerHTML = `${cardsFlipSide.join(
            '',
        )}`;

        const reverseSlideCards = document.querySelectorAll(
            '.game-cards__flip-side',
        );

        for (const reverseSlideCard of reverseSlideCards) {
            reverseSlideCard.addEventListener('click', () => {
                let cardsIndex = reverseSlideCard.dataset.index;

                if (clickCards) {
                    console.log(clickCards);
                    cardsFlipSide[cardsIndex] =
                        duplicateCardsArrSort[cardsIndex];
                    firstIndexCard = cardsIndex;

                    console.log(firstIndexCard);
                    document.getElementById(
                        'suits',
                    ).innerHTML = `${cardsFlipSide.join('')}`;

                    flipsCards();
                } else {
                    cardsFlipSide[cardsIndex] =
                        duplicateCardsArrSort[cardsIndex];

                    secondIndexCard = cardsIndex;
                    console.log(secondIndexCard);
                    document.getElementById(
                        'suits',
                    ).innerHTML = `${cardsFlipSide.join('')}`;

                    comparingTwoCard(
                        firstIndexCard,
                        secondIndexCard,
                        flipsCards,
                    );

                    console.log(clickCards);
                }
                clickCards = !clickCards;
            });
        }
    }

    setTimeout(flipsCards, 5000);

    function comparingTwoCard(firstIndexCard, secondIndexCard) {
        if (cardsFlipSide[firstIndexCard] === cardsFlipSide[secondIndexCard]) {
            flipsCards();
            alert('Вы угадали');
        } else {
            alert('Не угадали');
            // renderGameDifficulty(renderLevelGame);
        }
    }

    function buttonStartOver() {
        const boxGameButton = document.querySelector('.box-game__button');
        boxGameButton.addEventListener('click', () => {
            renderGameDifficulty();
        });
    }
    buttonStartOver();
}
