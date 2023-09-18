// 2
const container = document.querySelector('.container');
// 3
reset();
init();

// FUNCTIONS

function init() {
  for (let i = 1; i <= 100; i++) {
    const square = createSquare(i);
    
    // 5
    square.addEventListener('click', function() {
      // 6
      this.classList.toggle('clicked');
      console.log(this.squareID);
    });

    // 7
    container.appendChild(square);
  }
}

// 4
function createSquare(i) {
  // 1. La funzione crea l'elemento
  // 2. Gli aggiungo la classe square
  // 3. Restituisco l'elemento creato
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  newSquare.squareID = i;
  return newSquare;
}

function reset() {
  container.innerHTML = '';
}