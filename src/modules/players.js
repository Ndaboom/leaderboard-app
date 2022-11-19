const scores = [
  {
    name: 'Sammy',
    score: 1000,
  },
  {
    name: 'Marie',
    score: 2000,
  },
  {
    name: 'Steven',
    score: 5000,
  },
  {
    name: 'Margon',
    score: 3000,
  },
];

class Players {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    this.scoresContainer = document.querySelector('.scores-list');
  }

  readScores() {
    scores.forEach((item) => {
      const uniqueScore = document.createElement('li');
      uniqueScore.innerHTML = item.name.concat(': ').concat(item.score);
      this.scoresContainer.appendChild(uniqueScore);
    });
  }
}

const playersInst = new Players();

export default playersInst;