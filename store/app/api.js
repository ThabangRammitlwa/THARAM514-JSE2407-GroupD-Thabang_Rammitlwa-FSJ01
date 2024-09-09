export const fetchProducts = async (page = 1, limit = 20) => {
    try {
      const response = await fetch(`https://next-ecommerce-api.vercel.app/products?page=${page}&limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const fetchProduct = async (id) => {
    try {
      const response = await fetch(`https://next-ecommerce-api.vercel.app/products/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      return response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
