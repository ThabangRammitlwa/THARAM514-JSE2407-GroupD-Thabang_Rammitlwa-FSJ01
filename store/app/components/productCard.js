import Link from 'next/link';


export default async function productCard({products}) {


  return (
    <div className="container mx-auto px-4 py-8 bg-amber-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products && products.map((product, index) => (
          <Link key={index} href={`/product/${product.id}`}>
            <div className="overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
              <h2 className="relative w-full flex-none mb-2 text-2xl font-semibold text-amber-800">{product.title}</h2>
              <img src={product.thumbnail} className="h-48 object-cover" />
              <p className=" text-lg text-amber-600">R{product.price}</p>
              <p className="inline-block bg-amber-100 rounded-full px-3 py-1 text-sm font-semibold text-amber-00 mr-2 mb-2">{product.category}</p>
              <p className="text-sm text-gray-600 mb-2">Rating: {product.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};