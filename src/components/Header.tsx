import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, Menu, X, User, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductContext';
import SearchInputWithTypewriter from './SearchInputWithTypewriter';
import Logo from '../assets/logo.png';

interface HeaderProps {
  onFilterChange: (filteredProducts: any[], filterType?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onFilterChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isOccasionsOpen, setIsOccasionsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems, wishlistItems } = useCart();
  const { products } = useProducts();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  // Categories data
  const categories = [
    { name: "Sarees", filter: "Sarees" },
    { name: "Lehengas", filter: "Lehengas" },
    { name: "Dresses", filter: "Dresses" },
    { name: "Scarfs", filter: "Scarfs" },
    { name: "Kids Fashion", filter: "Kids" },
  ];

  // Occasions data - matching the FilterSidebar
  const occasions = [
    { name: "Wedding", filter: "Wedding" },
    { name: "Party", filter: "Party" },
    { name: "Casual", filter: "Casual" },
    { name: "Festival", filter: "Festival" },
    { name: "Office", filter: "Office" },
    { name: "Traditional", filter: "Traditional" },
  ];

  // Function to filter products based on category or occasion
  const filterProducts = (filterType: string, filterValue: string) => {
    let filtered = [...products];
    let filterLabel = '';

    if (filterType === 'category') {
      filtered = filtered.filter(product => product.category === filterValue);
      filterLabel = filterValue;
    } else if (filterType === 'occasion') {
      filtered = filtered.filter(product => product.occasion === filterValue);
      filterLabel = filterValue;
    } else if (filterType === 'search') {
      const query = filterValue.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.occasion?.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
      filterLabel = `Search: ${filterValue}`;
    }
    // If filterType is 'all', show all products (no filtering needed)

    onFilterChange(filtered, filterLabel);
    setIsMobileMenuOpen(false);
    setIsCategoriesOpen(false);
    setIsOccasionsOpen(false);
    
    // Navigate to home if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    
    // Scroll to products section
    setTimeout(() => {
      const productsSection = document.getElementById('products-section');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      filterProducts('search', searchQuery.trim());
      setSearchQuery('');
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle image error with proper fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    
    // Safely access next sibling
    const nextSibling = target.nextSibling as HTMLElement;
    if (nextSibling) {
      nextSibling.style.display = 'flex';
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-[#009494] text-white py-2 text-center text-sm">
        <p>Free Shipping on Orders Above ₹999 | COD Available</p>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center mr-6 md:mr-8 shrink-0">
            <img 
              src={Logo} 
              alt="Amora Collections" 
              className="h-16 w-auto" 
              onError={handleImageError}
            />
            <div className="w-16 h-16 bg-[#009494] rounded-full flex items-center justify-center hidden">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link 
              to="/" 
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#009494] hover:bg-[#009494]/10 transition-all duration-300 font-medium whitespace-nowrap"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#009494] hover:bg-[#009494]/10 transition-all duration-300 font-medium whitespace-nowrap"
            >
              About Us
            </Link>
            
            {/* Categories Dropdown */}
            <div className="relative group">
              <button 
                className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#009494] hover:bg-[#009494]/10 transition-all duration-300 flex items-center font-medium whitespace-nowrap"
              >
                Categories
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 group-hover:transform group-hover:translate-y-0 translate-y-2 z-50 border border-gray-100">
                <div className="py-1">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => filterProducts('category', category.filter)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#009494] hover:text-white transition-colors duration-200"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Shop by Occasion Dropdown */}
            <div className="relative group">
              <button 
                className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#009494] hover:bg-[#009494]/10 transition-all duration-300 flex items-center font-medium whitespace-nowrap"
              >
                Shop by Occasion
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 group-hover:transform group-hover:translate-y-0 translate-y-2 z-50 border border-gray-100">
                <div className="py-1">
                  {occasions.map((occasion) => (
                    <button
                      key={occasion.name}
                      onClick={() => filterProducts('occasion', occasion.filter)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#009494] hover:text-white transition-colors duration-200"
                    >
                      {occasion.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Direct link to all products */}
            <button 
              onClick={() => filterProducts('all', '')}
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#009494] hover:bg-[#009494]/10 transition-all duration-300 font-medium whitespace-nowrap"
            >
              All Products
            </button>

            {/* Contact link */}
            <Link 
              to="/contact" 
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#009494] hover:bg-[#009494]/10 transition-all duration-300 font-medium whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>

          {/* Search Bar - Moved to the right side */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4 lg:mx-6">
            <SearchInputWithTypewriter
              value={searchQuery}
              onChange={handleSearchChange}
              onSubmit={handleSearch}
              placeholderTexts={[
                "Search for sarees...",
                "Search for lehengas...",
                "Search for wedding dresses...",
                "Search for party wear...",
                "Search for kids fashion...",
                "Search for traditional wear..."
              ]}
              speed={50}
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 md:space-x-5">
            <Link to="/wishlist" className="relative group p-2 rounded-full hover:bg-[#009494]/10 transition-colors duration-300">
              <Heart className="h-6 w-6 text-gray-700 group-hover:text-[#009494] transition-colors duration-300" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative group p-2 rounded-full hover:bg-[#009494]/10 transition-colors duration-300">
              <ShoppingCart className="h-6 w-6 text-gray-700 group-hover:text-[#009494] transition-colors duration-300" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/admin/login" className="group p-2 rounded-full hover:bg-[#009494]/10 transition-colors duration-300">
              <User className="h-6 w-6 text-gray-700 group-hover:text-[#009494] transition-colors duration-300" />
            </Link>
            <button
              className="md:hidden ml-2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4 mt-2">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#009494] focus:border-transparent transition-colors duration-300"
              placeholder="Search for sarees, lehengas, wedding, party..."
            />
            <button type="submit" className="absolute right-3 top-2.5">
              <Search className="h-5 w-5 text-gray-400 hover:text-[#009494] transition-colors duration-300" />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-[#009494] hover:bg-[#009494]/10 transition-colors duration-300 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-[#009494] hover:bg-[#009494]/10 transition-colors duration-300 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            {/* Mobile Categories */}
            <div className="px-4 py-3 rounded-lg">
              <button 
                className="flex items-center justify-between w-full text-gray-700 font-medium"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                <span>Categories</span>
                <ChevronDown className={`h-4 w-4 transform transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCategoriesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => filterProducts('category', category.filter)}
                      className="block w-full text-left py-2 px-4 rounded-lg text-sm text-gray-600 hover:text-[#009494] hover:bg-[#009494]/10 transition-colors duration-300"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Occasions */}
            <div className="px-4 py-3 rounded-lg">
              <button 
                className="flex items-center justify-between w-full text-gray-700 font-medium"
                onClick={() => setIsOccasionsOpen(!isOccasionsOpen)}
              >
                <span>Shop by Occasion</span>
                <ChevronDown className={`h-4 w-4 transform transition-transform duration-300 ${isOccasionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOccasionsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {occasions.map((occasion) => (
                    <button
                      key={occasion.name}
                      onClick={() => filterProducts('occasion', occasion.filter)}
                      className="block w-full text-left py-2 px-4 rounded-lg text-sm text-gray-600 hover:text-[#009494] hover:bg-[#009494]/10 transition-colors duration-300"
                    >
                      {occasion.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Direct link to all products in mobile */}
            <button
              onClick={() => filterProducts('all', '')}
              className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:text-[#009494] hover:bg-[#009494]/10 transition-colors duration-300 font-medium"
            >
              All Products
            </button>

            {/* Contact link in mobile */}
            <Link
              to="/contact"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-[#009494] hover:bg-[#009494]/10 transition-colors duration-300 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;