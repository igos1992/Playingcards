import { renderLevelGame } from './src/renderLevelGame';
import './src/style.css';

export function renderGameDifficulty() {
    const appElement = document.querySelector('.app') as HTMLDivElement;

    const difficultyLevels = `
    <div class="top center">
    <form id="form-level" class="box-game" method="POST" action="#">
        <h1 class="box-game__title">Выбери<br>сложность</h1>

        <div class="box-difficulty-level">

            <input class="box-difficulty-level__radio" type="radio" id="radio1" name="radios" value="6">
            <label class="box-difficulty-level__label" for="radio1">1</label>

            <input class="box-difficulty-level__radio" type="radio" id="radio2" name="radios" value="12">
            <label class="box-difficulty-level__label" for="radio2">2</label>

            <input class="box-difficulty-level__radio" type="radio" id="radio3" name="radios" value="18">
            <label class="box-difficulty-level__label" for="radio3">3</label>

        </div>
        <button class="box-game__button" id="submit-button" type="submit">Старт</button>
    </form>
    </div>`;

    appElement.innerHTML = difficultyLevels;

    (document.getElementById('form-level') as HTMLFormElement).addEventListener(
        'submit',
        (e) => {
            e.preventDefault();

            let levels: NodeListOf<HTMLInputElement> =
                document.querySelectorAll('.box-difficulty-level__radio');
            for (const level of levels) {
                if (level.checked) {
                    console.log(level.value);

                    renderLevelGame(level, appElement);
                }
            }
        },
    );
}
renderGameDifficulty();
