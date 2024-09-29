import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [searchParams, setSearchParams] = useState({});
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (params) => {
        setLoading(true);
        setError('');
        try {
            const data = await fetchUserData(params);
            setUsers(data);
        } catch (err) {
            setError('Error fetching data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Search onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                    <div key={user.id} className="p-4 bg-white rounded-lg shadow-md">
                        <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                        <h2 className="text-xl font-semibold">{user.login}</h2>
                        <p>{user.location}</p>
                        <p>Repositories: {user.public_repos}</p>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            View Profile
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
