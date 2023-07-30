const url = 'https://api.thecatapi.com/v1/';
const option = {
    headers: {
        'x-api-key': 'live_EE5U1dvdCILjpuzYwtBoA2og3YzMObJ6nzJJlb1YgGCX5CuXUNrcJ2YxdS9r1CFu',
    }
}

function fetchBreeds() {
    return fetch(`${url}breeds`).then(response => {
        return response.json()
    })
}

function fetchCatByBreed(breedId) {
  return fetch(`${url}images/search?breed_ids=${breedId}&api_key=`, option)
    .then(response => response.json())
}

export { fetchBreeds, fetchCatByBreed };
