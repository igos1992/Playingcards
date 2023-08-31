// eslint-disable-next-line no-unused-vars
function flipsCards(
    suitsHTML,
    cardsFlipSide,
    reverseSlideCards,
    duplicateCardsArrSort,
) {
    setTimeout(() => {
        suitsHTML.innerHTML = `${cardsFlipSide.join('')}`;

        for (const reverseSlideCard of reverseSlideCards) {
            reverseSlideCard.addEventListener('click', () => {
                let cardsIndex = reverseSlideCard.dataset.index;

                console.log(cardsIndex);

                cardsFlipSide[cardsIndex] = duplicateCardsArrSort[cardsIndex];

                let firstCart = duplicateCardsArrSort[cardsIndex];
                console.log(firstCart);

                suitsHTML.innerHTML = `${cardsFlipSide.join('')}`;
            });
        }
        flipsCards(suitsHTML, cardsFlipSide, reverseSlideCards);
    }, 5000);
}
