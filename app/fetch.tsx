import { useEffect, useState } from 'react';
import AxiosInstance from './axios/axios'; // Adjust the import path as necessary

const Home = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        AxiosInstance.get('/posts')
            .then(response => {
                setData(response.data);
                console.log('Data:', response.data);
            })
            .catch(error => {
                setError(error.message);
                console.error('Error fetching data:', error);
            });
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>Data from API</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default Home;