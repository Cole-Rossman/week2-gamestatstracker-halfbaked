import { renderStat, renderGame } from './utils.js';

const form = document.getElementById('add-stat');
const statsList = document.getElementById('stats-list');
const gameList = document.getElementById('game-list');

const remove = document.getElementById('remove');
const save = document.getElementById('save-game');

let stats = [];
let games = [];

// IMPURE RENDER FUNCTIONS
// YOUR CODE MUST CALL THESE FUNCTIONS
function renderGames() {
    gameList.textContent = '';
    for (let game of games) {
        const li = renderGame(game);
        gameList.append(li);
    }
}

function renderStats() {
    statsList.textContent = '';
    for (let item of stats) {
        const li = renderStat(item);
        statsList.appendChild(li);
    }
}

function resetStats() {
    stats = [];
    statsList.textContent = '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Step 1 - add code to track each submission to the stats
    const formData = new FormData(form);
    // Create an object to "model" you statistic like the following:
    // { player: 'Bob', points: 2 }
    // Hint -- create the object from the form, push it onto the stats array, then call renderStats
    const playerStats = {
        player: formData.get('player'),
        points: Number(formData.get('points'))

    };

    stats.push(playerStats);

    renderStats();
});

remove.addEventListener('click', () => {
    // Step 2 -- add code to allow users to remove the most recent stat
    stats.pop();
    // Hint -- how do you remove an element from an array?
    // Hint -- how can we rerender the stats using a function above?
    renderStats();
});

save.addEventListener('click', () => {
    // Step 3 - add code to allow users to save the state
    let totalPoints = 0;
    // Loop through the list of stats and add up the total points scored
    for (let stat of stats) {
        // console.log(stat);

        totalPoints += stat.points;
        
    }
    // console.log(totalPoints);
    const game = {
        number: games.length + 1,
        
        totalPoints: totalPoints
    };

    console.log(game);
    // Create a new object with the game number and the total points
    // { number: games.length + 1, totalPoints: totalPoints }

    // Push the new object onto the games array then call renderGames
    // reset the stats with resetStats
});
