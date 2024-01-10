// create a new file in the pages/api directory called user.js. This will be our API route:

// pages/api/user.js

export default async function handler(req, res) {
       if (req.method === 'POST') {
         // Process a POST request
         const { name, email } = req.body;
     
         // Here you would typically add some data validation and then
         // add the user to your database. For simplicity, we're just
         // returning the data back to the client.
     
         res.status(200).json({ name, email });
       } else {
         // Handle any other HTTP method
         res.setHeader('Allow', ['POST']);
         res.status(405).end(`Method ${req.method} Not Allowed`);
       }
     }

// This creates a new API route that accepts POST requests. When a POST request is made, it simply returns the data back to the client.

// Finally, let’s make a POST request to our new API route from a Next.js page. We’ll use the built-in fetch function to do this:

// pages/index.js

export default function Home() {
       const submitForm = async event => {
         event.preventDefault();
     
         const res = await fetch('/api/user', {
           body: JSON.stringify({
             name: event.target.name.value,
             email: event.target.email.value
           }),
           headers: {
             'Content-Type': 'application/json'
           },
           method: 'POST'
         });
     
         const result = await res.json();
         // result.user => 'Ada Lovelace'
       };
     
       return (
         <form onSubmit={submitForm}>
           <label htmlFor="name">Name</label>
           <input id="name" name="name" type="text" autoComplete="name" required />
     
           <label htmlFor="email">Email</label>
           <input id="email" name="email" type="email" autoComplete="email" required />
     
           <button type="submit">Register</button>
         </form>
       );
     }

// This creates a form on the home page that, when submitted, makes a POST request to our API route with the form data.

// Please note that this is a very basic example and doesn’t include any error handling or data validation, which you would want to add in a real-world application. Also, remember to install the necessary dependencies before running the application.