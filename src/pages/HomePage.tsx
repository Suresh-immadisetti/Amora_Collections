import React, { useState, useEffect, useRef } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import HeroSection from '../components/HeroSection';
import { Filter } from 'lucide-react';

const HomePage: React.FC = () => {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const productsSectionRef = useRef<HTMLDivElement>(null);

  // Category data with images
  const categories = [
    {
      name: 'Sarees',
      image: 'https://t4.ftcdn.net/jpg/06/53/22/59/360_F_653225962_K90KnjANu6tBzZpV0sIkezcIELnn4dMQ.jpg',
      description: 'Elegant traditional wear'
    },
    {
      name: 'Lehengas',
      image: 'https://anayadesignerstudio.com/cdn/shop/files/Party-Wear-Lehenga-Choli-With-Price.webp?v=1714632560',
      description: 'Beautiful bridal collections'
    },
    {
      name: 'Dresses',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      description: 'Modern ethnic fashion'
    },
    {
      name: 'Scarfs',
      image: 'https://assets.ajio.com/medias/sys_master/root/20230112/jJvp/63bfad45f997dd708e00ed0e/-473Wx593H-441758640-black-MODEL.jpg',
      description: 'Stylish accessories'
    },
    {
      name: 'Kids Fashion',
      image: 'https://www.patpat.com/blog/wp-content/uploads/2025/03/4x3_%E4%BD%9C%E5%93%81-40.png',
      description: 'Cute outfits for kids'
    }
  ];

  // Handle category click from top section
  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setFilteredProducts(
      products.filter(p => p.category.toLowerCase() === categoryName.toLowerCase())
    );

    // Scroll to products section
    setTimeout(() => {
      if (productsSectionRef.current) {
        productsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Update filteredProducts if selectedCategory is cleared
  useEffect(() => {
    if (!selectedCategory) {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {categories.map(category => (
              <div 
                key={category.name} 
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 group-hover:shadow-xl ${
                  selectedCategory === category.name ? 'ring-2 ring-[#009494]' : ''
                }`}>
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#009494] transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products-section" ref={productsSectionRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {selectedCategory ? `${selectedCategory} Collection` : 'Our Collection'}
            </h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center space-x-2 bg-[#009494] text-white px-4 py-2 rounded-lg hover:bg-[#007373] transition-colors duration-300"
            >
              <Filter className="h-4 w-4" />
              <span>{showFilters ? 'Close' : 'Filters'}</span>
            </button>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <div className={`${showFilters ? 'block fixed inset-0 z-50 bg-white p-4 overflow-auto' : 'hidden'} md:block md:static md:w-1/4`}>
              {showFilters && (
                <button
                  onClick={() => setShowFilters(false)}
                  className="md:hidden mb-4 text-gray-500 hover:text-gray-700"
                >
                  ✕ Close
                </button>
              )}
              <FilterSidebar 
                products={products} 
                onFilterChange={setFilteredProducts} 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            {/* Products Grid */}
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found matching your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
