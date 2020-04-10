import Fetch from 'isomorphic-unfetch';

export const request = async ({ url, method, data, headers }) => {
    const res = await fetch(url, { method, headers, body : JSON.stringify(data), headers});
    return await res.json();
};