const BASE_URL = 'https://jsonplaceholder.typicode.com'

const fetchUser = (userId, infoUpdate) => {

    const config = {
        method: 'PATCH',
        body: JSON.stringify(infoUpdate),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${BASE_URL}/users/${userId}`, config).then(res => {
        if (!res.ok) throw new Error(res.message)
        return res.json()
    }).catch(err => console.log(err))
}

fetchUser(2, {
    email: 'mail111'
}).then(data => {
    console.dir(data)
})