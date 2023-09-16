// import * as _ from 'lodash';
import { shuffle } from 'lodash';
import { cardsSuitsArr } from './arrayCards';
import { renderGameDifficulty } from '../index';
import { Timer } from 'easytimer.js';
import { renderModalPageWin, renderModalPageLost } from './modalPage';

let cardsFlipSide: string[] = [];
// function pushCardsFlipSideArr(levelGame: number) {
//     cardsFlipSide = [];
//     for (let i = 0; i < levelGame; i++) {
//         cardsFlipSide.push(
//             `<img id="cards-click" data-index="${i}" class="game-cards__flip-side" src="../static/cardShirt.png">`,
//         );
//     }
//     // return cardsFlipSide;
// }

export function getCards(levelGame: number) {
    const result: string[] = [];
    for (let i = 0; i < levelGame; i++) {
        result.push(
            `<img id="cards-click" data-index="${i}" class="game-cards__flip-side" src="../static/cardShirt.png">`,
        );
    }
    return result;
}

export function renderLevelGame(
    level: HTMLInputElement,
    appEl: HTMLDivElement,
): void {
    let levelGame: number = Number(level.value);
    let count = 0;

    const timer = new Timer();

    const cardsSuitsArraySort = shuffle(cardsSuitsArr).slice(0, levelGame / 2);

    const duplicateCardsArr: string[] =
        cardsSuitsArraySort.concat(cardsSuitsArraySort);
    const duplicateCardsArrSort: string[] = shuffle(duplicateCardsArr);

    cardsFlipSide = getCards(levelGame);

    const appHTML = `
    <div class="game-cards">
     <header class="game-cards-timer">
         <div class="game-cards-timer__module">  
            <div class="game-cards-timer__init">
                <p class="game-cards-timer__item">min</p>
                <p class="game-cards-timer__item">sec</p>
            </div>   
            
             <div class="game-cards-timer__time minutes-second"></div>
             
         </div>
         <button class="box-game__button" id="submit-button" type="submit">Начать заново</button>
     </header>
     <div class="game-cards__suits center" id="suits">${duplicateCardsArrSort.join(
         '',
     )}</div>
    </div> 
        
    `;
    appEl.innerHTML = appHTML;

    const minutesSecond = document.querySelector(
        '.minutes-second',
    ) as HTMLDivElement;
    timer.start();
    timer.addEventListener('secondsUpdated', function () {
        minutesSecond.innerHTML = timer
            .getTimeValues()
            .toString(['minutes', 'seconds']);
    });

    let clickCards: Boolean = true,
        firstIndexCard: number = 0,
        secondIndexCard: number = 0;

    function flipsCards(): void {
        const suits = document.getElementById('suits') as HTMLFormElement;
        suits.innerHTML = `${cardsFlipSide.join('')}`;

        const reverseSlideCards: NodeListOf<HTMLInputElement> =
            document.querySelectorAll('.game-cards__flip-side');

        for (const reverseSlideCard of reverseSlideCards) {
            reverseSlideCard.addEventListener('click', () => {
                let cardsIndex = Number(
                    reverseSlideCard.dataset.index as string,
                );

                if (clickCards && cardsIndex) {
                    console.log(clickCards);
                    cardsFlipSide[cardsIndex] =
                        duplicateCardsArrSort[cardsIndex];
                    firstIndexCard = cardsIndex;

                    console.log(firstIndexCard);
                    (
                        document.getElementById('suits') as HTMLFormElement
                    ).innerHTML = `${cardsFlipSide.join('')}`;

                    flipsCards();
                } else {
                    cardsFlipSide[cardsIndex] =
                        duplicateCardsArrSort[cardsIndex];

                    secondIndexCard = cardsIndex;
                    console.log(secondIndexCard);
                    (
                        document.getElementById('suits') as HTMLFormElement
                    ).innerHTML = `${cardsFlipSide.join('')}`;

                    comparingTwoCard(firstIndexCard, secondIndexCard);
                    if (count === levelGame / 2) {
                        renderWin();
                        buttonStartOver();
                    }

                    console.log(clickCards);
                }
                clickCards = !clickCards;
            });
        }
    }

    setTimeout(flipsCards, 5000);

    function comparingTwoCard(firstIndexCard: number, secondIndexCard: number) {
        if (cardsFlipSide[firstIndexCard] === cardsFlipSide[secondIndexCard]) {
            flipsCards();
            count++;
        } else {
            renderLost();
            timer.stop();
            buttonStartOver();
        }
    }

    // Функция отрисовки главной страницы "Выбор сложности"
    function buttonStartOver() {
        const boxGameButtons = document.querySelectorAll('.box-game__button');
        for (const boxGameButton of boxGameButtons) {
            boxGameButton.addEventListener('click', () => {
                renderGameDifficulty();
            });
        }
    }
    buttonStartOver();

    // Функция открытия модального окна при выиграше
    function renderWin() {
        renderModalPageWin(minutesSecond);
        let closeModal = document.getElementById(
            'close_modal',
        ) as HTMLDivElement;
        let modal = document.getElementById('modal') as HTMLDivElement;
        let body = document.getElementsByTagName('body')[0];

        // клик на открытие
        modal.classList.add('modal_vis'); // добавляем видимость окна
        modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку

        closeModal.onclick = function () {
            // клик на закрытие
            modal.classList.add('bounceOutDown'); // добавляем эффект закрытия

            // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
            modal.classList.remove('modal_vis');
            body.classList.remove('body_block'); // возвращаем прокрутку
        };
    }

    // Функция открытия модального окна при проиграше
    function renderLost() {
        renderModalPageLost(minutesSecond);
        let closeModal = document.getElementById(
            'close_modal',
        ) as HTMLDivElement;
        let modal = document.getElementById('modal_lost') as HTMLDivElement;
        let body = document.getElementsByTagName('body')[0];

        // клик на открытие
        modal.classList.add('modal_vis'); // добавляем видимость окна
        modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку

        closeModal.onclick = function () {
            // клик на закрытие
            modal.classList.add('bounceOutDown'); // добавляем эффект закрытия

            // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
            modal.classList.remove('modal_vis');
            body.classList.remove('body_block'); // возвращаем прокрутку
        };
    }
}

// module.exports = { getCards };
