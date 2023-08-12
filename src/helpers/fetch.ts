'use strict';

import axios from 'axios';

interface FetchProps {
    baseUrl?: string,
    endpoint: string,
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    data?: any,
    containsFiles: boolean,
    headers?: object,
}
const defaultFetchProps: FetchProps = {
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    endpoint: '',
    method: 'GET',
    data: null,
    containsFiles: false,
    headers: {},
};

export default async function (options: FetchProps) {
    const {
        baseUrl = defaultFetchProps.baseUrl,
        endpoint = defaultFetchProps.endpoint,
        method = defaultFetchProps.method?.toUpperCase(),
        data = defaultFetchProps.data,
        containsFiles = defaultFetchProps.containsFiles || false,
        headers = defaultFetchProps.headers,
    } = options;

    // Throw error if endpoint is not provided
    if (!endpoint) throw new Error('API endpoint is required');

    // Throw error if method does not match
    if (!['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) throw new Error('Method is not valid');

    let predefinedHeaders = {
        'Content-Type': containsFiles ? 'multipart/form-data' : 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': window?.location?.origin || '*',
    };

    return await axios({
        url: `${baseUrl}${endpoint}`,
        method: method,
        headers: {
            ...predefinedHeaders,
            ...headers,
        },
        data: data,
    })
    .then(response => response.data);
}