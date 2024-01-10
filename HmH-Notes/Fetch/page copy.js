// Server Component
   
async function fetchData() {
       let data = await fetch("https://jsonplaceholder.typicode.com/posts");
       data = await data.json();
       return data;
}
              
 const Data = async () => {
       let products = await fetchData()


      return(
              <div>
                     {products?.map((p) => (
                            <p key={p.id}>{p.title}</p>
                     ))}
              </div>
      ); 
};

export default Data;