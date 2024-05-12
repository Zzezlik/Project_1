const BASE_URL = "https://jsonplaceholder.typicode.com";

const config = {
    method: 'GET',
}

const fetchUsers = i => fetch(`${BASE_URL}/users`, config ).then(res => {
    if(!res.ok) throw new Error(res.message)
    return res.json();
}).catch(err => console.log(err))

fetchUsers().then(users => {
    console.table(users)
})

