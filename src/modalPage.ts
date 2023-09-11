const popup = document.querySelector('.popup') as HTMLFormElement;

export function renderModalPageWin(minutesSecond: HTMLDivElement): void {
    const modalHtmlWin = `
    <div class="modal-box-win modal" id="modal">
    <div class="modal-box">
         <div class="win-lost-img">
         <img src="../static/celebration.png" alt="" class="img">
         </div>
        <div class="box-text-result">
            <p class="text-result">Вы выиграли!</p>
        </div>
        <div class="menu-timer">
            <p class="timer-text">Затраченное время:</p>
            <p class="timer-text-time">${minutesSecond.textContent}</p>
        </div>
            <button class="close_modal box-game__button" id="close_modal">Играть снова</button>
    </div>
</div>`;

    popup.innerHTML = modalHtmlWin;
}

export function renderModalPageLost(minutesSecond: HTMLDivElement): void {
    const modalHtmlLost = `</div> 
    <div class="modal-box-win modal" id="modal_lost">
        <div class="modal-box">
             <div class="win-lost-img">
             <img src="../static/celebration.png" alt="" class="img">
             </div>
            <div class="box-text-result">
                <p class="text-result">Вы проиграли!</p>
            </div>
            <div class="menu-timer">
                <p class="timer-text">Затраченное время:</p>
                <p class="timer-text-time">${minutesSecond.textContent}</p>
            </div>
                <button class="close_modal box-game__button" id="close_modal">Играть снова</button>
        </div>
    </div>`;

    popup.innerHTML = modalHtmlLost;
}
