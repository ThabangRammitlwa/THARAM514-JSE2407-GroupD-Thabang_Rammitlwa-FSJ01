
"use client"

import { fetchProductById } from '../../api';
import { useState } from 'react';
import Link from 'next/link';

export default async function ProductPage({ params }) {
  const { id } = params;
  let product;
  let error;

  try {
    product = await fetchProductById(id);
  } catch (err) {
    error = err.message;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">Error: {error}</div>;
  }

  return <ProductDetail product={product} />;
}

function ProductDetail({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-12">
      <Link
        href="/"
        className="text-amber-600 hover:text-amber-800 mb-8 inline-block transition-colors duration-300"
      >
        ← Back to Products
      </Link>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative">
            <img
              src={product.images[currentImageIndex]}
              className="h-full w-full object-cover"
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
                >
                  &lt;
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
                >
                  &gt;
                </button>
              </>
            )}
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold mb-4 text-amber-800">
              {product.title}
            </h1>
            <p className="text-2xl font-semibold text-amber-600 mb-4">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <p className="text-sm text-gray-600 mb-2">
              Category: {product.category}
            </p>
            <div className="mb-4">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-amber-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Rating: {product.rating} / 5
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Stock: {product.stock}
              {product.stock > 0 ? (
                <span className="text-green-600 ml-2">(In Stock)</span>
              ) : (
                <span className="text-red-600 ml-2">(Out of Stock)</span>
              )}
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
