function playGame(userChoice) {
    // Array of possible choices for the computer
    const choices = ['rock', 'paper', 'scissors'];

    // Randomly choose for the computer
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Display the user's and computer's choices
    document.getElementById('user-choice').textContent = `Your Choice: ${userChoice}`;
    document.getElementById('computer-choice').textContent = `Computer's Choice: ${computerChoice}`;

    // Determine the result
    let result = '';

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        result = 'You win!';
    } else {
        result = 'Computer wins!';
    }

    // Display the result
    document.getElementById('result').textContent = `Result: ${result}`;
}
