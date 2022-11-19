const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const GAME_ID = 'Qj7gUFGoKecQX4gnF3ek';
const SCORE_URL = `${BASE_URL}/games/${GAME_ID}/scores/`;
const scoresArr = [];

const fetchScores = async () => {
  const response = await fetch(SCORE_URL);
  const scores = await response.json();
  scores.result.sort((a, b) => b.score - a.score);
  scoresArr = scores.result;
};

const addPlayer = (player) => {
  fetch(SCORE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: player.name,
      score: player.points,
    }),
  })
    .then((response) => {
      scoresArr = response.json();
      return scoresArr;
    })
    .then(() => {
      // console.log('Success:');
    })
    .catch(() => {
      // console.error('Error:');
    });
};

export {scoresArr, addPlayer };