// Api Call

// fetch() allows us to make network requests similar to XMLHttpRequest. The main difference is that the Fetch API uses Promises, which enables a simpler and cleaner API, avoiding callback hell and having to remember the complex API of XMLHttpRequest.

// The fetch method only has one mandatory argument, which is the URL of the resource we wish to fetch

// What are the different methods used by fetch() ?

/* Some most popular methods used by fetch to make an HTTP request to an API are :

    GET
    POST
    PUT
    DELETE */

// Async/Await




// GET

// GET requests are the most common and widely used methods in APIs and websites. The GET method is used to retreive data from the server at the specified resource. For example, say we have an API with a ‘/users’ endpoint. Making a GET request to that endpoint should return a list of all available users.

// Since a GET request is only requesting data and not modifying any resource, it is considered as a safe and idempotent method.

// GET is often the default method in HTTP clients
//set the specific API URL
//In this example, we’re using fetch to make a GET request to ‘https://api.example.com/data’. We then use the json method to parse the response as JSON.

async function getData() {
       const res = await fetch('https://api.example.com/data');
       const data = await res.json();
       return data;
     }

/* POST

The POST method sends data to the server and creates a new resource. The resource it creates is subordinate to some other parent resource. When a new resource is posted to the parent, the API service will automatically associate the new resource by assigning it an ID (new resource URI).

    In short, this method is used to create a new data entry.

In web services, POST requests are used to send data to the API sever to create or update a resource. The data sent to the server is stored in the request body of the HTTP request.

The simplest example is a contact form on a website. When we fill out the inputs in a form and hit Send, that data is put in the response body of the request and sent to the server. This may be JSON, XML, or query parameters (there’s plenty of other formats, but these are the most common).

It’s worth noting that a POST request is non-idempotent. It mutates data on the backend server (by creating or updating a resource), as opposed to a GET request which does not change any data. */

// In this example, we’re making a POST request to ‘https://api.example.com/data’. We’re passing in an object as the body of the request, which we convert to a JSON string using JSON.stringify.

async function postData(data) {
       const res = await fetch('https://api.example.com/data', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
       });
       const result = await res.json();
       return result;
     }
     

//     NOTE : we needed to pass in the request method, body, and headers. We did not pass these in earlier for the GET method because by default these fields are configured for the GET request, but we need to specify them for all other types of requests. In the body, we assign values to the resource’s properties, stringified. Note that we do not need to assign a URI — the API will do that for us. As you can see from the response, the API assigns an id to the newly created resource. 

//PUT

// The PUT method is most often used to update an existing resource. If we want to update a specific resource (which comes with a specific URI), we can call the PUT method to that resource URI with the request body containing the complete new version of the resource we are trying to update.

// Similar to POST, PUT requests are used to send data to the API to create or update a resource. The difference is that PUT requests are idempotent. That is, calling the same PUT request multiple times will always produce the same result. In contrast, calling a POST request repeatedly may have side effects of creating the same resource multiple times.

//In this example, we’re making a PUT request to ‘https://api.example.com/data/{id}’. We’re passing in an object as the body of the request, which we convert to a JSON string using JSON.stringify.
async function updateData(id, data) {
       const res = await fetch(`https://api.example.com/data/${id}`, {
         method: 'PUT',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
       });
       const result = await res.json();
       return result;
     }


// DELETE

// The DELETE method is exactly as it sounds, i.e. it delete the resource at the specified URI. This method is one of the more common in RESTful APIs so it’s good to know how it works.

// If a new user is created with a POST request to /users, and it can be retrieved with a GET request to /users/{{userid}}, then making a DELETE request to /users/{{userid}} will completely remove that user.


// In this example, we’re making a DELETE request to ‘https://api.example.com/data/{id}’. We’re not passing any data in the body of the request.
async function deleteData(id) {
       const res = await fetch(`https://api.example.com/data/${id}`, {
         method: 'DELETE'
       });
       return res.ok;
     }
     
