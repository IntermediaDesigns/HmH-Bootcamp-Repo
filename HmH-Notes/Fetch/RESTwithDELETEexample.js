// Using DELETE

// create a new file under the pages/api directory. Let’s call it user.js. This file will represent your /api/user endpoint.

// Here’s how you can handle a DELETE request in that file:
export default function handler(req, res) {
       if (req.method === 'DELETE') {
         // Add your delete logic here
         // For example, let's delete a user from a hypothetical database
         const userId = req.body.userId;
         const deletedUser = database.deleteUser(userId); // Hypothetical function
     
         if (deletedUser) {
           res.status(200).json({ message: 'User deleted successfully' });
         } else {
           res.status(404).json({ message: 'User not found' });
         }
       } else {
         res.status(405).json({ message: 'Method not allowed' }); // Return this if the method is not DELETE
       }
     }

// In this example, we’re checking if the incoming request is a DELETE request. If it is, we proceed with our delete logic. In this case, we’re deleting a user from a hypothetical database. If the user is successfully deleted, we return a 200 status code with a success message. If the user is not found, we return a 404 status code with an error message. If the incoming request is not a DELETE request, we return a 405 status code indicating that the method is not allowed.

// Please replace the hypothetical function database.deleteUser(userId) with your actual logic for deleting a user.

// Remember, this is a simple example and real-world applications may require more complex logic and error handling. Also, don’t forget to validate and sanitize your inputs in a real-world scenario.