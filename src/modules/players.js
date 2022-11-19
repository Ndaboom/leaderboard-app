const scores = [
  {
    name : "Sammy",
    score : 1000,
  },
  {
    name : "Marie",
    score : 2000,
  },
  {
    name : "Steven",
    score : 5000,
  },
  {
    name : "Margon",
    score : 3000,
  }
];

class Players {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  readScores () {
    const scoresContainer = document.querySelector('.scores-list');
    scores.forEach((item) => {
      const uniqueScore = document.createElement('li');
      uniqueScore.innerHTML = item.name + ': ' + item.score;
      scoresContainer.appendChild(uniqueScore);
    });
  }
}

export default Players = new Players();