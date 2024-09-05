export default async function Home() {
  const fetchProducts = async () => {
  const response = await fetch("https://next-ecommerce-api.vercel.app/products")
 return response.json()
  }

const products = await fetchProducts()
  return (
    <>
    <h1>Products</h1>
   <div className="flex flex-row">
      {products && products.map((item, index) => (
        <li key={index}>
          <h2 className="title">{item.title} </h2>
          <img src={item.thumbnail} />
          <p>{item.description}</p>
          <p>R{item.price}</p>
        </li>
        
        
      ))}
   </div>
   </>
    )};
   
