// Главный экран (выбор сложности) 

import { difficultyLevels } from "./all-levels-of-difficulty.js"

const appElement = document.querySelector(".app");

const renderDifficultyLevels = `<div class="difficulty-selection-page">
<div class="main-item">
  <h1 class="heading">Выбери <br>
    сложность</h1>
    <div class="radio-toolbar table"> 
      <input type="radio" id="easy" name="radios">
      <label class="level" for="easy">1</label>
      
      <input type="radio" id="average" name="radios">
      <label class="level" for="average">2</label>
      
      <input type="radio" id="difficult" name="radios">
      <label class="level" for="difficult">3</label>
  </div> 
  <button class="button">Старт</button>
</div>
</div>`

appElement.innerHTML = renderDifficultyLevels;

const mainItem = document.querySelector(".main-item");

// сохранение выбранного уровня сложности в localStorage

mainItem.addEventListener("click", event => {
  if (event.target.className === "level") {
    localStorage.setItem("checked", event.target.getAttribute("for"))
  }
  if (event.target.className === "button") {
    let levelDifficulty = localStorage.getItem("checked");
    difficultyLevels(levelDifficulty)
   
  }
})
