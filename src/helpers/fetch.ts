'use strict';

interface FetchProps {
    baseUrl?: string,
    endpoint: string,
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    body?: any,
    headers?: object,
}
const defaultFetchProps: FetchProps = {
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    endpoint: '',
    method: 'GET',
    body: null,
    headers: {},
};

export default async function(options: FetchProps) {
    const {
        baseUrl = defaultFetchProps.baseUrl,
        endpoint = defaultFetchProps.endpoint,
        method = defaultFetchProps.method?.toUpperCase(),
        body = defaultFetchProps.body,
        headers = defaultFetchProps.headers,
    } = options;

    // Throw error if endpoint is not provided
    if (!endpoint) throw new Error('Endpoint is required');

    // Throw error if method does not match
    if (!['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) throw new Error('Method is not valid');

    let predefinedHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    };

    const url: string = `${baseUrl}${endpoint?.startsWith('/') ? endpoint : `/${endpoint}`}`;
    const response = await fetch(url, {
        method: method,
        headers: {
            ...predefinedHeaders,
            ...headers,
        },
        body: body ? JSON.stringify(body) : null,
    });

    if(!response.ok) throw new Error(await response.text());

    return await response.json();
}