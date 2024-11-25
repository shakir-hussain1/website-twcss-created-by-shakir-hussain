import React from 'react';

const Laptops = () => {
  const laptopData = [
    { id: 2, name: 'Apple', price: 12000, description: 'Best', image: '/apple.jpeg' },
    { id: 1, name: 'HP', price: 10000, description: 'Best', image: '/hp.webp' },
    { id: 4, name: 'Lenovo', price: 9000, description: 'Best', image: '/lenovo.jpeg' },
    { id: 3, name: 'Dell', price: 8000, description: 'Best', image: '/dell.jpeg' },
    { id: 5, name: 'ASUS', price: 7000, description: 'Best', image: '/asus.jpg' },
    { id: 6, name: 'Acer', price: 6000, description: 'Best', image: '/acer.jpg' },
  ];

  return (
    <div className="laptops grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
      {laptopData.map(laptop => (
        <div key={laptop.id} className="laptop-card bg-red-300 p-5 rounded-md shadow-md text-center">
          <img src={laptop.image} alt={laptop.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110" />
          <h3 className="mt-4 text-2xl font-bold">{laptop.name}</h3>
          <p className="text-black">{laptop.description}</p>
          <div className="price text-black-800 text-xl font-semibold mt-2">${laptop.price}</div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-black rounded-md">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Laptops;