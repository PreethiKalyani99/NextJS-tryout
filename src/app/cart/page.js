export default async function Cart(){
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        { next: { revalidate: 10 } }
    )
    const users = await response.json()
    return (
        <>
            <div>Cart page</div>
            <h3>USERS</h3><br/>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}