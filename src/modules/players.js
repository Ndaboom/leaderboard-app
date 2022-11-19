import { fetchScores } from './api.js';

const scoresContainer = document.querySelector('.scores-list');

const displayScores = async () => {
  const scoresList = await fetchScores();
  scoresContainer.innerHTML = '';
  scoresList.forEach((item) => {
    const uniqueScore = document.createElement('li');
    uniqueScore.innerHTML = item.user.concat(': ').concat(item.score);
    scoresContainer.appendChild(uniqueScore);
  });
};

export default displayScores;