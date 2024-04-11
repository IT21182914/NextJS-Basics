import React from 'react'


interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
const users: User[] = await res.json()

//caching

//   const res = await fetch('https://jsonplaceholder.typicode.com/users', 
// {cache: 'no-store'}) //this is to disable caching

//   const res = await fetch('https://jsonplaceholder.typicode.com/users',
// {next: {revalidate:10}})// revalidate every 10 seconds

  return (
    <>

  <h1>Users</h1>

  <ul>

  {users.map(user => <li key={user.id}>{user.name}</li>)}
  
  </ul>
  

    </>

 
  )
}

export default UsersPage