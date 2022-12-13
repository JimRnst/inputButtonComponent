// import './styles/home.css'
import { loadHome } from "./functions/loadHome";
import { loadButtons } from "./pages/buttons";

document.addEventListener('DOMContentLoaded', () => {
    loadHome();
    loadButtons();
})