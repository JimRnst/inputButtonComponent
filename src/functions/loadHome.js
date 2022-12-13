import { loadButtons } from "../pages/buttons";
import { loadInputs } from "../pages/inputs";

const loadHome = (() => {

    const container = document.querySelector('#container');
    
    const _createMenu = (() =>{
        const createDiv = document.createElement('div');
        createDiv.setAttribute('id', 'menu')
        createDiv.innerHTML = `
            <div id="logo"></div>
            <div id="menu-links">
                <a href="#" id="buttons">Buttons</a>
                <a href="#" id="inputs">Inputs</a>
            </div>
        `;
        container.prepend(createDiv);

    })();

    const _createMain = (() =>{
        const createDiv = document.createElement('div');
        createDiv.setAttribute('id', 'main')
        container.appendChild(createDiv);

    })();

    const _aMenu = (() => {
        const inputs = document.querySelector('#inputs');
        const buttons = document.querySelector('#buttons');

        inputs.addEventListener('click', () => {
            loadInputs();
        });

        buttons.addEventListener('click', () => {
            loadButtons();
        });


    })();
})

export {loadHome}