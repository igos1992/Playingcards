// Логика отрисовки экранов с разными уровнями сложности

const appElement = document.querySelector(".app");


export const difficultyLevels = (levelDifficulty) => {
    if (levelDifficulty === "easy") {
        const firstLevel = `<div class="difficulty-selection-page">
        <div class="main-item">
          <h1 class="heading">Здесь будет отрисовка страницы с лёгким уровнем</h1>
          </div>
        </div>`
        appElement.innerHTML = firstLevel;
    } 
    if (levelDifficulty === "average") {
        const firstLevel = `<div class="difficulty-selection-page">
        <div class="main-item">
          <h1 class="heading">Здесь будет отрисовка страницы со средним уровнем</h1>
          </div>
        </div>`
        appElement.innerHTML = firstLevel;
    } 
    if (levelDifficulty === "difficult") {
        const firstLevel = `<div class="difficulty-selection-page">
        <div class="main-item">
          <h1 class="heading">Здесь будет отрисовка страницы с тяжелым уровнем</h1>
          </div>
        </div>`
        appElement.innerHTML = firstLevel;
    } 

}