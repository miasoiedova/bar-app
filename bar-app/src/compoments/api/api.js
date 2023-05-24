const API_KEY = '879a4ee2fdmshbc8a973489ccb99p1dcfd9jsn044331766b8a';
const BASE_URL = 'https://the-cocktail-db.p.rapidapi.com';

export async function getData() {
    const url = `${BASE_URL}/?rapidapi-key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}
