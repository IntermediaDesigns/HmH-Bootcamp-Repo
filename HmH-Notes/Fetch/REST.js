// REST API in Next.js refers to the ability to create API routes directly within your Next.js application. These routes are treated as serverless functions, eliminating the need to set up a separate Node.js server1.

// Here’s how it works:

// Any file inside the pages/api directory is mapped to /api and will be treated as an API endpoint instead of a page2.

// These are server-side only bundles and won’t increase your client-side bundle size2.

// You can handle different HTTP methods in an API route by using req.method in your request handler2.

// API Routes provide built-in request helpers which parse the incoming request (req), such as req.cookies, req.query, and req.body2.

// Every API Route can export a config object to change the default configuration2.

// Here’s a simple example of an API route that returns a JSON response with a status code of 200:

export default function handler(req, res) {
       res.status(200).json({ message: 'Hello from Next.js!' })
     }

// In this example, the handler function is the API route, which sends a JSON response with the message ‘Hello from Next.js!’.

// Remember, the name of the file will act as the API endpoint. If you want to create nested API routes, you can create a directory structure inside pages/api.
     
// This feature provides a straightforward way to build a public API with Next.js. It’s important to note that API Routes do not specify CORS headers, meaning they are same-origin only by default. You can customize such behavior by wrapping the request handler with the CORS request helpers.


// This example will include GET, POST, PUT, and DELETE methods.

// First, create a new file in the pages/api directory. Let’s call it user.js. This file will act as your API endpoint.

// pages/api/user.js

export default async function handler(req, res) {
       const { method } = req;
     
       switch (method) {
         case 'GET':
           // Handle GET request
           res.status(200).json({ message: 'GET request received' });
           break;
         case 'POST':
           // Handle POST request
           res.status(200).json({ message: 'POST request received' });
           break;
         case 'PUT':
           // Handle PUT request
           res.status(200).json({ message: 'PUT request received' });
           break;
         case 'DELETE':
           // Handle DELETE request
           res.status(200).json({ message: 'DELETE request received' });
           break;
         default:
           res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
           res.status(405).end(`Method ${method} Not Allowed`);
       }
     }

// In this example, we’re using a switch statement to handle different HTTP methods. For each case, we send a response with a status code of 200 and a message indicating the type of request received. If the method is not one of the allowed methods (GET, POST, PUT, DELETE), we send a 405 ‘Method Not Allowed’ response.

// This is a very basic example and doesn’t do much, but it gives you an idea of how you can structure your API routes in Next.js. In a real-world application, you would replace the placeholder code in each case with logic to handle the corresponding type of request, such as fetching data from a database or updating a record.