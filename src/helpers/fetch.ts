import axios from 'axios';

interface FetchProps {
    baseURL?: string;
    url?: string;
    endpoint: string;
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    body?: any;
    headers?: object;
    options?: any;
}
const defaultFetchProps: FetchProps = {
    baseURL: process.env.API_URL,
    endpoint: '',
    method: 'GET',
    body: null,
    headers: {},
    options: {},
};

export default async function fetch(options: FetchProps) {
    const {
        baseURL = defaultFetchProps.baseURL,
        endpoint = defaultFetchProps.endpoint,
        method = defaultFetchProps.method?.toString()?.toUpperCase() ?? 'GET',
        body = defaultFetchProps.body,
        headers = defaultFetchProps.headers,
        options: extraOptions = defaultFetchProps.options,
    } = options;

    // Throw error if endpoint is not provided
    if (endpoint?.trim() === '') throw new Error('Endpoint is required.');

    // Throw error if method does not match
    if (!['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) throw new Error('Method is not supported.');

    try {
        const response = await axios({
            baseURL: baseURL,
            url: endpoint,
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                ...headers,
            },
            data: body ? JSON.stringify(body) : null,
            ...extraOptions,
        });

        return response.data;
    } catch (error: any) {
        throw new Error(error);
    }
}