import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 2;

let year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();

loadMoreBtn.onclick = () => {
    let rows = [...document.querySelectorAll('#projects .row')];
    for (var i = currentItem; i < currentItem + 2 && i < rows.length; i++) {
        rows[i].style.display = 'flex';
    }
    currentItem += 2;

    if(currentItem >= rows.length) {
        loadMoreBtn.style.display = 'none';
    }
}
