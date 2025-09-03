// App.tsx
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Contact from './pages/Contact';

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    const adminStatus = localStorage.getItem('adminLoggedIn');
    setIsAdminLoggedIn(adminStatus === 'true');
  }, []);

  const handleFilterChange = (filteredProducts: any[], filterType?: string) => {
    setFilteredProducts(filteredProducts);
  };

  return (
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className="min-h-screen bg-white">
              <Routes>
                <Route path="/admin/login" element={<AdminLogin setIsLoggedIn={setIsAdminLoggedIn} />} />
                <Route 
                  path="/admin/dashboard" 
                  element={
                    isAdminLoggedIn ? 
                    <AdminDashboard setIsLoggedIn={setIsAdminLoggedIn} /> : 
                    <Navigate to="/admin/login" />
                  } 
                />
                <Route path="/*" element={
                  <MainLayout 
                    onFilterChange={handleFilterChange} 
                    filteredProducts={filteredProducts}
                  />
                } />
              </Routes>
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  );
}

// Main layout component with proper typing
interface MainLayoutProps {
  onFilterChange: (filteredProducts: any[], filterType?: string) => void;
  filteredProducts: any[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ onFilterChange, filteredProducts }) => {
  return (
    <>
      <Header onFilterChange={onFilterChange} />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                filteredProducts={filteredProducts} 
                onFilterChange={onFilterChange} 
              />
            } 
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/contact" element={<Contact />} />
          {/* Redirect unknown paths to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;