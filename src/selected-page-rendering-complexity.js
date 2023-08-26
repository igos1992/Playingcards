import { renderEasyLevel } from './easyLevel.js';
import { renderAverageLevel } from './averageLevel.js';
import { renderDifficultLevel } from './difficultLevel.js';

const app = document.querySelector('.app');
const game = document.querySelector('.game');
const gameField = game.content.querySelector('.game-field');
console.log(gameField);

export function selectedPageRenderingComplexity(levelDifficulty) {
    switch (levelDifficulty) {
        case 'easy':
            renderEasyLevel(app);
            break;
        case 'average':
            renderAverageLevel(app);
            break;
        case 'difficult':
            renderDifficultLevel(app);
            break;
        default:
            break;
    }
}
