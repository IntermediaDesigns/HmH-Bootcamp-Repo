// Using GET

//Let’s say we have a project where we want to display a list of users from the JSONPlaceholder API.

//First, create a new file called users.js in the pages directory of your Next.js project. Then, add the following code:

import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

// In this code:

// We’re using the useState hook to create a state variable users to store the list of users.

// We’re using the useEffect hook to fetch the users from the API when the component mounts. The empty array [] as the second argument to useEffect ensures the effect only runs once after the initial render.

// We’re using the fetch function to make a GET request to the ‘https://jsonplaceholder.typicode.com/users’ API.

// We’re using the then method to handle the response. The response.json() call parses the response body as JSON.

// We’re using another then to update our users state with the data we received from the API.

// Finally, we’re rendering the list of users in our component. Each user is displayed with their name and email.

// Now, if you navigate to ‘/users’ in your Next.js app, you should see a list of users displayed on the page.
