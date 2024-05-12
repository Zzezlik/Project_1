const BASE_URL = 'https://jsonplaceholder.typicode.com'

const createUser = {
    name: 'User1',
    id: 1
}

const fetchPost = i => {

    const config = {
        method: 'post',
        body: JSON.stringify(i),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${BASE_URL}/users`, config).then(res => {
        if (!res.ok) throw new Error(res.message)
        return res.json()
    }).catch(err => console.log(err))
}

fetchPost(createUser).then(res => console.dir(res))