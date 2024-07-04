const userScoreSpan = document.getElementById('user-score');
const compScoreSpan = document.getElementById('comp-score');
const resultP = document.querySelector('.result > p');
const choices = document.querySelectorAll('.choice');
let userScore = 0;
let compScore = 0;

choices.forEach(choice => choice.addEventListener('click', game));

function game(e) {
    const userChoice = e.target.parentNode.id;
    const compChoice = getCompChoice();
    const winner = determineWinner(userChoice, compChoice);
    updateScores(winner);
    showResult(winner, userChoice, compChoice);
}

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function determineWinner(user, comp) {
    if (user === comp) return 'draw';
    if ((user === 'r' && comp === 's') || (user === 'p' && comp === 'r') || (user === 's' && comp === 'p')) return 'user';
    return 'comp';
}

function updateScores(winner) {
    if (winner === 'user') userScore++;
    if (winner === 'comp') compScore++;
    userScoreSpan.textContent = userScore;
    compScoreSpan.textContent = compScore;
}

function showResult(winner, userChoice, compChoice) {
    if (winner === 'user') resultP.textContent = `You win! ${convertToWord(userChoice)} beats ${convertToWord(compChoice)}.`;
    if (winner === 'comp') resultP.textContent = `You lose! ${convertToWord(compChoice)} beats ${convertToWord(userChoice)}.`;
    if (winner === 'draw') resultP.textContent = `It's a draw! You both chose ${convertToWord(userChoice)}.`;
}

function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    if (letter === 's') return 'Scissors';
}
