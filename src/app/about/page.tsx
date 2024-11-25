import React from 'react';

const About = () => {
  return (
    <section className="about h-screen flex items-center justify-start bg-cover bg-center text-black px-10" style={{ backgroundImage: "url('/aboutbg.avif')" }}>
      <div className="bg-red-500 bg-opacity-60 p-8 rounded-md max-w-lg">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">About Us</h2>
        <h3 className="text-3xl font-bold mb-4" data-aos="fade-up">Techmaa Laptop store</h3>
        <p>At our Techmaa Laptop store, we offer a wide selection of laptops to suit every need, from high-performance models for work and gaming to sleek ultrabooks for portability. Featuring top brands like Apple, Dell, HP, and Lenovo, our collection combines cutting-edge technology with exceptional quality. Our expert team is here to help you find the perfect laptop, whether for business, entertainment, or everyday use. Explore our range and experience top-tier service at our Techmaa Laptop store.</p>
      </div>
    </section>
  );
};

export default About;