// getStaticProps: Use this when you can pre-render the page at build time. It’s great for pages that can be generated ahead of a user’s request. You can use it with static site generation (SSG). The data required to render the page is fetched at build time and will be reused on each request.

export async function getStaticProps(context) {
       // Fetch data at build time
       const res = await fetch('https://api.example.com/data');
       const data = await res.json();
     
       return {
         props: { data }, // will be passed to the page component as props
       }
     }

//Remember, getServerSideProps runs on every request while getStaticProps runs at build time and reuses the result for each request. 