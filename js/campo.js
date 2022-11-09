// ricordarmi che "this" richiama l'elemento HTML che ha scatenato l'evento

// aggiungo una "const" per richiamare il button
const playButtonEl = document.getElementById("btn-play");

// aggiungo un eventlistener per "click" al bottone
playButtonEl.addEventListener("click", function() {
    const options = document.getElementById("difficulty");
    let grid = parseInt(options.value);
// aggiugo una let che mi moltiplica il valore di "grid" per se stesso 
// così da ottenere il numero completo delle grid che mi servono
    let totGrid = grid * grid;

    const gridContainerEl = document.querySelector(".grid-container");
    // reset dell'html
    gridContainerEl.innerHTML = "";

    // creo il classico ciclo for dove all'interno creo un elemento "div"
    // al quale aggiungo le grid-cell singole alle quali modifico la widht/flex basis
    // poi inserisco un innerHTML con ${i} così da numerare le grid
    // se tutto funziona correttamente utilizzo "append"
    for (let i = 1; i <= totGrid; i++) {
        const newCell = document.createElement("div");
        newCell.classList.add("grid-cell");
        newCell.style.flexBasis = 100 / grid + "%";
        newCell.innerHTML = `${i}`;
        gridContainerEl.append(newCell);

    // aggiungo un'altro eventlistener questa volta alle newCell 
    // inserite nel ciclo for precedente con "create element"
    // e gli aggiungo sempre tramite una function "click"
    // la class list toggle con un colore diverso che si "accende" al clik
        newCell.addEventListener("click", function() {
            this.classList.toggle("bg-success");
        })
    }
})