const BASE_URL = 'https://jsonplaceholder.typicode.com'

const fetchUser = (id) => {

    const config = {
        method: 'DELETE'
    }
    return fetch(`${BASE_URL}/users/${id}`, config).then(res => {
        if (!res.ok) throw new Error(res.message)
        return res.json()
    }).catch(err => console.log(err))
}