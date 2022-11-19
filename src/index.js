import Players from './modules/players.js';
import './style.css';

const addScore = document.querySelector('.submit-btn');
const playerName = document.getElementById('player-name');
const playerPoint = document.getElementById('player-points');

addScore.addEventListener("click", () => {
  if(playerPoint.value != '' && playerName.value != '') {
    Players.addScore(playerName.value, playerPoint.value);
    Players.readScores();
  }
});

Players.readScores();