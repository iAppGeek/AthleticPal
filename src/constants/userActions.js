export const ADD_USER = 'ADD_TODO';

export function addUser(payload) {
    return { type: ADD_USER, payload };
}