// Using PUT

//here’s an example of how you can use the PUT method in a REST API using Next.js. This example assumes that you have a Next.js project set up and you’re working within an API route file (e.g., pages/api/user.js).

export default async function handler(req, res) {
       if (req.method === 'PUT') {
         // Get data from your request
         const { id, name, email } = req.body
     
         // Simulate updating user in the database
         const updatedUser = {
           id,
           name,
           email,
         }
     
         // Respond with a success status and the updated user
         res.status(200).json(updatedUser)
       } else {
         // Handle any other HTTP method
         res.setHeader('Allow', ['PUT'])
         res.status(405).end(`Method ${req.method} Not Allowed`)
       }
     }

// And here’s how you can call this API from your Next.js pages or components using the fetch function:

fetch('/api/user', {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         id: '1',
         name: 'New Name',
         email: 'new.email@example.com',
       }),
     })
     .then((response) => response.json())
     .then((data) => console.log(data))
     .catch((error) => console.error('Error:', error))

// This will send a PUT request to your API route with the new user data, and then log the response.

// Please note that this is a basic example and might need to be adjusted based on your project’s requirements.