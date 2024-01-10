// 1. Setup your Next.js project If you haven’t already, create a new Next.js project by running the following command in your terminal:
//npx create-next-app@latest

// Navigate into your project directory:
// cd your-project-name

// 2. Create a new page In the pages directory, create a new file for your page. For example, pages/data.js.

// 3. Import necessary hooks from React If you’re fetching data on the client side, you’ll need to import the useState and useEffect hooks from React at the top of your file.
import { useState, useEffect } from 'react';

// 4. Initialize state Inside your component, initialize state using the useState hook to store the data you’ll fetch.
const [data, setData] = useState(null);

// 5. Fetch data inside useEffect Use the useEffect hook to run the fetch request when the component mounts. Inside useEffect, declare an asynchronous function where you’ll make the fetch request, and then call that function.
useEffect(() => {
       const fetchData = async () => {
         const response = await fetch('https://api.example.com/data');
         const data = await response.json();
         setData(data);
       };
     
       fetchData();
     }, []);

// 6. Render data In your component’s return statement, render the data. Make sure to account for the fact that the data will initially be null before the fetch request completes.
return (
       <div>
         {data ? (
           <div>{JSON.stringify(data)}</div>
         ) : (
           <div>Loading...</div>
         )}
       </div>
     );

     
// 7. Error handling Don’t forget to handle possible errors in your fetch request. You can add a .catch block to your fetch request to catch any errors and store them in state, and then render the error message if there is one.
const [error, setError] = useState(null);

// Inside fetchData
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => setData(data))
  .catch((error) => setError(error));

// Inside return statement
{error && <div>Error: {error.message}</div>}

