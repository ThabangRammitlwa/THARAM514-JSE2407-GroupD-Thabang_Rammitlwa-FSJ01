import Link from 'next/link';

export default async function Home() {
  const fetchProducts = async () => {
    const response = await fetch("https://next-ecommerce-api.vercel.app/products");
    return response.json();
  }

  const products = await fetchProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products && products.map((product, index) => (
          <Link key={index} href={`/product/${product.id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
              <h2 className="text-xl font-bold mb-2 text-gray-800 truncate">{product.title}</h2>
              <img src={product.thumbnail} className="h-48 object-cover" />
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{product.description}</p>
              <p className="text-lg font-bold text-blue-600">R{product.price}</p>
              <p className="text-md font-semibold">{product.category}</p>
              <p className="text-md font-semibold mb-4">Rating: {product.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};