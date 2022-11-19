/* eslint-disable arrow-body-style */
const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const GAME_ID = 'Qj7gUFGoKecQX4gnF3ek';
const URL = `${BASE_URL}/games/${GAME_ID}/scores/`;

const fetchScores = async () => {
  const response = await fetch(URL);
  const scores = await response.json();
  return scores.result;
};

fetchScores();

const addPlayer = (name, points) => {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: name,
      score: points,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then(() => {
      // console.log('Success:');
    })
    .catch(() => {
      // console.error('Error:');
    });
};

export { addPlayer, fetchScores };