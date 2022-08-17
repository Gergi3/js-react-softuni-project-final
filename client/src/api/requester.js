const baseUrl = 'http://localhost:3030'

function requester(method, endpoint, data) {
    let options = {method, headers: {}};

    if (method !== 'GET' && method !== 'DELETE') {
        options = {
            method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    }

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.accessToken) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    return fetch(`${baseUrl}${endpoint}`, options)
        .then(res => res.json())
        .then(res => {
            if (res.message) {
                throw res;
            }
            return res;
        });
}

export const get = (endpoint) => requester('GET', endpoint);
export const post = (endpoint, data) => requester('POST', endpoint, data);
export const put = (endpoint, data) => requester('PUT', endpoint, data);
export const del = (endpoint) => requester('DELETE', endpoint);
