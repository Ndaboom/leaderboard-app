/* eslint-disable no-unused-expressions */
import displayScores from './modules/players.js';
import { addPlayer } from './modules/api.js';
import './style.css';

const addScore = document.querySelector('.submit-btn');
const playerName = document.getElementById('player-name');
const playerPoint = document.getElementById('player-points');
const refreshBtn = document.getElementById('refresh-btn');

addScore.addEventListener('click', () => {
  if (playerPoint.value !== '' && playerName.value !== '') {
    addPlayer(playerName.value, playerPoint.value);
    playerPoint.value === '';
    playerName.value === '';
  }
});

refreshBtn.addEventListener('click', () => {
  displayScores();
});

displayScores();