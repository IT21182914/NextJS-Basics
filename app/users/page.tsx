import React from 'react'


interface User {
  id: number;
  name: string;
  email: string;
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

  <table className='table table-boardered'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>

    <tbody>

  {users.map(user => <tr key={user.id}>
    <td>{user.name}</td>
    <td>{user.email}</td>
    </tr>)}


    </tbody>

  
  </table>
  

    </>

 
  )
}

export default UsersPage