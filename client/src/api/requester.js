const baseUrl = 'http://localhost:3030'

function requester(method, endpoint, data) {
    let options = {method};

    if (method !== 'GET' && method !== 'POST') {
        options = {
            method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    }

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.accessToken) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    return fetch(`${baseUrl}${endpoint}`, options)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const get = (endpoint) => requester('GET', endpoint);
export const post = (endpoint, data) => requester('GET', endpoint, data);
export const put = (endpoint, data) => requester('GET', endpoint, data);
export const del = (endpoint) => requester('GET', endpoint);
