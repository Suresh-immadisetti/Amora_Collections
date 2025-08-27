import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
        {/* Removed basename for custom domain */}
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
                <MainLayout onFilterChange={handleFilterChange} />
              } />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

// Main layout component
interface MainLayoutProps {
  onFilterChange: (filteredProducts: any[], filterType?: string) => void;
}

function MainLayout({ onFilterChange }: MainLayoutProps) {
  return (
    <>
      <Header onFilterChange={onFilterChange} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
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