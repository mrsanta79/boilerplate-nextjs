'use strict';
import axios from 'axios';

interface FetchProps {
    baseUrl?: string,
    endpoint: string,
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    body?: any,
    headers?: object,
    options?: any,
}
const defaultFetchProps: FetchProps = {
    baseUrl: process.env.API_URL,
    endpoint: '',
    method: 'GET',
    body: null,
    headers: {},
    options: {},
};

export default async function(options: FetchProps) {
    const {
        baseUrl = defaultFetchProps.baseUrl,
        endpoint = defaultFetchProps.endpoint,
        method = defaultFetchProps.method?.toUpperCase(),
        body = defaultFetchProps.body,
        headers = defaultFetchProps.headers,
        options: extraOptions = defaultFetchProps.options,
    } = options;

    // Throw error if endpoint is not provided
    if (!endpoint) throw new Error('Endpoint is required');

    // Throw error if method does not match
    if (!['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) throw new Error('Method is not valid');

    const url: string = `${baseUrl}${endpoint?.startsWith('/') ? endpoint : `/${endpoint}`}`;

    try {
        const response = await axios({
            method: method,
            url: url,
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