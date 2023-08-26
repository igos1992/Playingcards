import { renderDifficultyLevels } from './index.js';

export function renderEasyLevel(app) {
    const easyHtml = `
    <div class="add-games">
            <div class="header-box">
            <div class="timer-box">
                <div class="timer-min">
                    <div class="minutes">min</div>
                    <div class="digital-minutes">00</div>
                </div>
                <div class="timer-sec">
                    <div class="seconds">sec</div>
                    <div class="digital-seconds">.00</div>
                </div>
            </div>

            <button class="button button-start-the-game-again">
                Начать заново
            </button>
        </div>
    <div class="level">
        <div class="level-value level-easy">
            <div class="level-card level-card-shirt"></div>
            <div class="level-card level-card-shirt"></div>
            <div class="level-card level-card-shirt"></div>
            <div class="level-card level-card-shirt"></div>
            <div class="level-card level-card-shirt"></div>
            <div class="level-card level-card-shirt"></div>
        </div>
    </div>
    </div>
    `;
    app.innerHTML = easyHtml;
    const buttonStartTheGameAgain = document.querySelector(
        '.button-start-the-game-again',
    );
    const headerBox = document.querySelector('header-box');

    buttonStartTheGameAgain.addEventListener('click', () => {
        renderDifficultyLevels();
        headerBox.innerHTML = '';
    });
}
