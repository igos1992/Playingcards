export function getCards(levelGame: number) {
    const result: string[] = [];
    for (let i = 0; i < levelGame; i++) {
        result.push(
            `<img id="cards-click" data-index="${i}" class="game-cards__flip-side" src="../static/cardShirt.png">`,
        );
    }
    return result;
}