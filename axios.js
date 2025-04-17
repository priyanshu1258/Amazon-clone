import axios from 'axios'; // Import axios for making HTTP requests

const instance = axios.create({
    baseURL:'http://127.0.0.1:5001/challenge-91b9f/us-central1/api'

}); // Create an axios instance with a base URL

    export default instance; // Export the axios instance for use in other files