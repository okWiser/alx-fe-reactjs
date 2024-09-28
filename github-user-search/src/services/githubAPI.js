import axios from 'axios';

const getUserData = async (username) => {
  const apiKey = process.env.REACT_APP_GITHUB_API_KEY;
  const config = apiKey ? { headers: { Authorization: `token ${apiKey}` } } : {};

  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export { getUserData };
