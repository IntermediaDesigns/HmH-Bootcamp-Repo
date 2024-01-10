// getServerSideProps: Use this when you need to fetch data at request time, not at build time. This is useful for data that changes frequently, is user-specific, or is sensitive and not to be cached by a CDN. It will be called by the server on every request.

export async function getServerSideProps(context) {
       // Fetch data at request time
       const res = await fetch('https://api.example.com/data');
       const data = await res.json();
     
       return {
         props: { data }, // will be passed to the page component as props
       }
     }

//Remember, getServerSideProps runs on every request while getStaticProps runs at build time and reuses the result for each request. 