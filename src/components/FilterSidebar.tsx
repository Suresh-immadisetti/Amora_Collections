import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Product } from '../types/Product';

interface FilterSidebarProps {
  products: Product[];
  onFilterChange: (filteredProducts: Product[]) => void;
  selectedCategory: string | null; // Added
  onCategoryChange: Dispatch<SetStateAction<string | null>>; // Added
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  products,
  onFilterChange,
  selectedCategory,
  onCategoryChange
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [expandedSections, setExpandedSections] = useState<string[]>(['categories', 'occasions', 'price']);

  // Updated categories to include Kids Fashion
  const categories = ['Sarees', 'Lehengas', 'Dresses', 'Scarfs', 'Kids Fashion'];
  const occasions = ['Wedding', 'Party', 'Casual', 'Festival', 'Office', 'Traditional'];

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
    onCategoryChange(category); // Update selectedCategory in HomePage
  };

  const handleOccasionChange = (occasion: string) => {
    setSelectedOccasions(prev => 
      prev.includes(occasion) 
        ? prev.filter(o => o !== occasion)
        : [...prev, occasion]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedOccasions([]);
    setPriceRange([0, 10000]);
    onCategoryChange(null); // Reset selectedCategory
  };

  useEffect(() => {
    let filtered = products;

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
      );
    }

    // Filter by occasions
    if (selectedOccasions.length > 0) {
      filtered = filtered.filter(product => 
        product.occasion && selectedOccasions.includes(product.occasion)
      );
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    onFilterChange(filtered);
  }, [selectedCategories, selectedOccasions, priceRange, products, onFilterChange]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-[#009494] text-sm hover:underline"
        >
          Clear All
        </button>
      </div>

      {/* Categories Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('categories')}
          className="flex justify-between items-center w-full mb-3"
        >
          <h4 className="text-md font-medium text-gray-700">Categories</h4>
          {expandedSections.includes('categories') ? 
            <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
          }
        </button>
        
        {expandedSections.includes('categories') && (
          <div className="space-y-2" style={{ animation: 'slideDown 0.3s ease-out' }}>
            {categories.map(category => (
              <label key={category} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="rounded text-[#009494] focus:ring-[#009494]"
                />
                <span className="text-gray-600">{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Shop by Occasion Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('occasions')}
          className="flex justify-between items-center w-full mb-3"
        >
          <h4 className="text-md font-medium text-gray-700">Shop by Occasion</h4>
          {expandedSections.includes('occasions') ? 
            <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
          }
        </button>
        
        {expandedSections.includes('occasions') && (
          <div className="space-y-2" style={{ animation: 'slideDown 0.3s ease-out' }}>
            {occasions.map(occasion => (
              <label key={occasion} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedOccasions.includes(occasion)}
                  onChange={() => handleOccasionChange(occasion)}
                  className="rounded text-[#009494] focus:ring-[#009494]"
                />
                <span className="text-gray-600">{occasion}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('price')}
          className="flex justify-between items-center w-full mb-3"
        >
          <h4 className="text-md font-medium text-gray-700">Price Range</h4>
          {expandedSections.includes('price') ? 
            <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
          }
        </button>
        
        {expandedSections.includes('price') && (
          <div className="space-y-4" style={{ animation: 'slideDown 0.3s ease-out' }}>
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
            <input
              type="range"
              min="0"
              max="10000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #009494 0%, #009494 ${(priceRange[1] / 10000) * 100}%, #e5e7eb ${(priceRange[1] / 10000) * 100}%, #e5e7eb 100%)`
              }}
            />
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                className="w-1/2 px-2 py-1 border border-gray-300 rounded text-sm"
              />
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
                className="w-1/2 px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #009494;
            cursor: pointer;
          }
          
          input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #009494;
            cursor: pointer;
            border: none;
          }
        `}
      </style>
    </div>
  );
};

export default FilterSidebar;
