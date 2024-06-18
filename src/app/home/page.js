import React from "react"

export default async function HomePage(){
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        { next: { revalidate: 10 } }
    )
    const users = await response.json()
    return(
        <>
            <div>Home Page</div><br/>
            <h3>USERS</h3><br/>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
        
    )
}