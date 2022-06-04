
const baseUrl = 'http://localhost:3030/data'

export const getById = (gameId) => {
    return fetch(`${baseUrl}/games/${gameId}`)
        .then(res => res.json())
};