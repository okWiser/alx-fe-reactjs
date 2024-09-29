import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async ({ username, location, minRepos }) => {
    let query = '';
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos} `;

    try {
        const response = await axios.get(`${BASE_URL}?q=${query.trim()}`);
        return response.data.items;
    } catch (error) {
        throw new Error('Error fetching data');
    }
};
