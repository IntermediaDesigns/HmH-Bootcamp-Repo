// Import fetch In Next.js, you can use the built-in fetch function which is a global function in JavaScript for making HTTP requests. There’s no need to import it.

// No import needed

// Use fetch in getServerSideProps or getStaticProps You can use fetch in getServerSideProps or getStaticProps to fetch data at build time or on each request.

export default async function getServerSideProps(context) {
       const res = await fetch(`https://api.example.com/data`);
       const data = await res.json();
     
       if (!data) {
         return {
           notFound: true,
         }
       }
     
       return {
         props: { data }, // will be passed to the page component as props
       }
     }

// Remember to handle errors and possibly the loading state when using fetch.