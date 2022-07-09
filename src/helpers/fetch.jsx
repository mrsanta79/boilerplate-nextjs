import axios from 'axios';

export default async function (endpoint = null, method = 'GET', data = null) {
    const supportedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
    const baseURL = process.env.NEXT_PUBLIC_API_URL;

    // Convert method text to uppercase
    method = method.toUpperCase();

    // Check if method is supported
    if(!supportedMethods.includes(method)) throw new Error(`Request method not supported. Supported methods are ${supportedMethods.join(', ')}.`);
    if(baseURL === '' || typeof baseURL === 'undefined') throw new Error(`Base URL is not defined. Please set a base url in the .env file with the key 'NEXT_PUBLIC_API_URL'.`);

    return await axios({
        url: `${baseURL}${endpoint}`,
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        data: data,
    })
    .then(response => response.data);
}