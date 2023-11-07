document.addEventListener("DOMContentLoaded", function () {
  const wordList = document.getElementById("word-list");
  const wordInput = document.getElementById("word-input");
  const addWordButton = document.getElementById("add-word");
  const generatePuzzleButton = document.getElementById("generate-puzzle");
  const randomizePuzzleButton = document.getElementById("randomize-puzzle");
  const solvePuzzleButton = document.getElementById("solve-puzzle");
  const puzzleContainer = document.getElementById("puzzle");
  const wordListDisplay = document.getElementById("word-list-display");

  let words = [];
  let selectedWord = null;
  let solving = false;

  addWordButton.addEventListener("click", function () {
    const newWord = wordInput.value.trim();
    if (newWord !== "") {
      words.push(newWord);
      wordInput.value = "";
      displayWords();
    }
  });

  generatePuzzleButton.addEventListener("click", function () {
    generatePuzzle(words);
    selectedWord = null;
    solving = false;
  });

  randomizePuzzleButton.addEventListener("click", function () {
    generatePuzzle(generateRandomWords());
    selectedWord = null;
    solving = false;
  });

  solvePuzzleButton.addEventListener("click", function () {
    if (solving) {
      return;
    }
    solvePuzzle(words);
    solving = true;
  });

  puzzleContainer.addEventListener("mousedown", function (event) {
    if (event.target.tagName === "TD") {
      selectedWord = event.target.textContent;
      event.target.classList.add("selected");
    }
  });

  puzzleContainer.addEventListener("mouseover", function (event) {
    if (event.target.tagName === "TD" && selectedWord !== null) {
      const currentCell = event.target;
      const selectedCells = puzzleContainer.querySelectorAll(".selected");
      if (!selectedCells.length || selectedCells[selectedCells.length - 1] === currentCell) {
        currentCell.classList.add("selected");
        checkSelectedWord();
      }
    }
  });

  puzzleContainer.addEventListener("mouseup", function () {
    selectedWord = null;
  });

  function displayWords() {
    wordListDisplay.innerHTML = "";
    for (const word of words) {
      const li = document.createElement("li");
      li.textContent = word;
      wordListDisplay.appendChild(li);
    }
  }

  function generatePuzzle(words) {
    const gridSize = 10; // Tamaño de la sopa de letras
    const puzzle = new Array(gridSize).fill().map(() => new Array(gridSize).fill(""));

    // Insertar palabras en la sopa de letras
    for (const word of words) {
      const direction = Math.random() < 0.5 ? "horizontal" : "vertical";
      placeWordInPuzzle(puzzle, word, direction);
    }

    // Rellenar espacios vacíos con letras aleatorias
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        if (puzzle[i][j] === "") {
          puzzle[i][j] = getRandomLetter();
        }
      }
    }

    // Mostrar la sopa de letras en el HTML
    const table = document.createElement("table");
    for (const row of puzzle) {
      const tr = document.createElement("tr");
      for (const cell of row) {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    puzzleContainer.innerHTML = "";
    puzzleContainer.appendChild(table);
  }

  function placeWordInPuzzle(puzzle, word, direction) {
    const gridSize = puzzle.length;
    const wordLength = word.length;

    if (direction === "horizontal") {
      const row = Math.floor(Math.random() * gridSize);
      const col = Math.floor(Math.random() * (gridSize - wordLength + 1));
      for (let i = 0; i < wordLength; i++) {
        puzzle[row][col + i] = word[i];
      }
    } else {
      const row = Math.floor(Math.random() * (gridSize - wordLength + 1));
      const col = Math.floor(Math.random() * gridSize);
      for (let i = 0; i < wordLength; i++) {
        puzzle[row + i][col] = word[i];
      }
    }
  }

  function getRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  function generateRandomWords() {
    const randomWords = [];
    const wordCount = Math.floor(Math.random() * 5) + 5; // Entre 5 y 10 palabras aleatorias
    for (let i = 0; i < wordCount; i++) {
      const wordLength = Math.floor(Math.random() * 10) + 3; // Longitud de palabra entre 3 y 12 letras
      let randomWord = "";
      for (let j = 0; j < wordLength; j++) {
        randomWord += getRandomLetter();
      }
      randomWords.push(randomWord);
    }
    return randomWords;
  }

  function solvePuzzle(words) {
    for (const word of words) {
      const wordCells = puzzleContainer.querySelectorAll("td");
      let found = false;
      for (let i = 0; i < wordCells.length; i++) {
        if (wordCells[i].textContent === word[0]) {
          if (findWord(wordCells, word, i)) {
            found = true;
            break;
          }
        }
      }

      if (!found) {
        alert(`La palabra "${word}" no se encontró.`);
      }
    }
  }

  function findWord(cells, word, startIndex) {
    let found = false;
    const directions = [-11, -10, -9, -1, 1, 9, 10, 11];

    for (const direction of directions) {
      let currentIndex = startIndex;
      found = true;

      for (let i = 0; i < word.length; i++) {
        const currentCell = cells[currentIndex + i * direction];
        if (!currentCell || currentCell.textContent !== word[i]) {
          found = false;
          break;
        }
      }

      if (found) {
        for (let i = 0; i < word.length; i++) {
          const currentCell = cells[startIndex + i * direction];
          currentCell.classList.add("selected");
        }
        break;
      }
    }

    return found;
  }

  function checkSelectedWord() {
    const selectedCells = puzzleContainer.querySelectorAll(".selected");
    const selectedText = Array.from(selectedCells).map((cell) => cell.textContent).join("");
    if (words.includes(selectedText)) {
      alert(`¡Encontraste la palabra: "${selectedText}"!`);
    }
  }

  displayWords();
});
