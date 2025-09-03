import React from 'react';
import { Heart, ShoppingCart, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistClick = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleCashOnDelivery = () => {
    const message = `Hi! I'm interested in ordering ${product.name} (₹${product.price}) with Cash on Delivery. Please provide order details.`;
    const whatsappUrl = `https://wa.me/919866494466?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsAppContact = () => {
    const message = `Hi! I have a question about ${product.name}. Can you help me?`;
    const whatsappUrl = `https://wa.me/919866494466?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            {product.discount}% OFF
          </div>
        )}
        
        <button
          onClick={handleWishlistClick}
          className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${
            isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
          }`}
        >
          <Heart className="h-4 w-4" fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs bg-[#009494] text-white px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#009494]">
              ₹{product.price}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          {product.occasion && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {product.occasion}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-[#009494] text-white py-2 px-4 rounded-lg font-medium transition-colors hover:bg-[#007373] flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
          
          <div className="flex space-x-2">
            <button
              onClick={handleCashOnDelivery}
              className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg font-medium transition-colors hover:bg-orange-600 text-sm"
            >
              Cash on Delivery
            </button>
            
            <button
              onClick={handleWhatsAppContact}
              className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg font-medium transition-colors hover:bg-green-600 flex items-center justify-center space-x-1 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;