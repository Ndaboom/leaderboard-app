import {scoresArr, addPlayer} from './api.js';
class Players {
  constructor(name, points) {
    this.name = name;
    this.points = points;
    this.scoresContainer = document.querySelector('.scores-list');
    this.readScores();
  }

  readScores() {
    scoresArr.forEach((item) => {
      const uniqueScore = document.createElement('li');
      uniqueScore.innerHTML = item.name.concat(': ').concat(item.points);
      this.scoresContainer.appendChild(uniqueScore);
    });
  }

  addScore() {
    addPlayer(this);
  }
}

const playersInst = new Players();

export default playersInst;