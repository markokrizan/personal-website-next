import { request } from './HttpService';

export const fetchPosts = async () => {
    return await request({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        method: 'GET'
    });
}