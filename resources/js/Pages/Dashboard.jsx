import React, { useState } from "react";
import tailwindcss from "tailwindcss";
import { render } from "@testing-library/react";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://example.com/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div class="bg-gray-100">
      <header>
        <div class="max-w-screen-xl mx-auto flex justify-between items-center">
          <a href="/" class="text-xl font-semibold text-gray-800">Etsy</a>
          <div class="flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              class="w-2/3 rounded-md border-gray-300 py-2 px-4 focus:outline-none"
            />
            <button class="ml-4 text-white bg-gray-600 rounded-md py-2 px-4">Search</button>
          </div>
        </div>
      </header>
      <main>
        <section class="max-w-screen-xl mx-auto">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Featured Collections</h2>
          <ul class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {products.map((product) => (
              <li key={product.id}>
                <img src={product.image} class="w-full max-h-200 object-cover" />
                <h3 class="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p class="text-base text-gray-600">{product.description}</p>
                <button class="w-full bg-gray-600 text-white py-2 px-4 rounded-md">Shop Now</button>
              </li>
            ))}
          </ul>
        </section>
        <section class="max-w-screen-xl mx-auto">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">New Arrivals</h2>
          <ul class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {products.map((product) => (
              <li key={product.id}>
                <img src={product.image} class="w-full max-h-200 object-cover" />
                <h3 class="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p class="text-base text-gray-600">{product.description}</p>
                <button class="w-full bg-gray-600 text-white py-2 px-4 rounded-md">Shop Now</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

const testData = [
  {
    "id": 1,
    "name": "Handmade Vase",
    "description": "This handmade vase is made from ceramic and is perfect for displaying flowers.",
    "image": "https://example.com/images/vases/handmade-vase.jpg",
    "price": 20
  },
  {
    "id": 2,
    "name": "Wooden Serving Tray",
    "description": "This wooden serving tray is perfect for serving food at parties or gatherings.",
    "image": "https://example.com/images/serving-trays/wooden-serving-tray.jpg",
    "price": 30
  },
  {
    "id": 3,
    "name": "Beaded Necklace",
    "description": "This beaded necklace is handmade and"
  }
];
