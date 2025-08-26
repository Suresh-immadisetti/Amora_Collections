import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types/Product';

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Omit<Product, 'id'>) => void;
  deleteProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Elegant Red Silk Saree',
    price: 2999,
    originalPrice: 3999,
    category: 'Sarees',
    occasion: 'Wedding',
    description: 'Beautiful red silk saree with golden border, perfect for wedding ceremonies.',
    image: 'https://clothsvilla.com/cdn/shop/products/KP-4089_3_1024x1024.jpg?v=1698159976',
    discount: 25
  },
  {
    id: '2',
    name: 'Royal Blue Lehenga',
    price: 5999,
    originalPrice: 7999,
    category: 'Lehengas',
    occasion: 'Party',
    description: 'Stunning royal blue lehenga with intricate embroidery work.',
    image: 'https://trendia.co/cdn/shop/products/DSC6605_c73de896-8f5b-435a-9b44-463a94f66098.jpg?v=1749618872',
    discount: 25
  },
  {
    id: '3',
    name: 'Casual Cotton Dress',
    price: 1499,
    category: 'Dresses',
    occasion: 'Casual',
    description: 'Comfortable cotton dress perfect for everyday wear.',
    image: 'https://peachmode.com/cdn/shop/products/brown-floral-printed-pure-cotton-dress-peachmode-1.jpg?v=1669042128'
  },
  {
    id: '4',
    name: 'Designer Silk Scarf',
    price: 899,
    originalPrice: 1199,
    category: 'Scarfs',
    occasion: 'Office',
    description: 'Premium silk scarf with beautiful patterns.',
    image: 'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/23871430/2023/7/12/6e90dfb3-fe95-4bbd-8a95-0e5418cb679b1689161901559-Silk-Land-Women-Scarves-2221689161901345-1.jpg',
    discount: 25
  },
  {
    id: '5',
    name: 'Traditional Green Saree',
    price: 2499,
    category: 'Sarees',
    occasion: 'Festival',
    description: 'Traditional green saree with golden work, ideal for festivals.',
    image: 'https://i.etsystatic.com/28434424/r/il/d6d5af/3887454967/il_570xN.3887454967_k91j.jpg'
  },
  {
    id: '6',
    name: 'Pink Party Lehenga',
    price: 4999,
    originalPrice: 6499,
    category: 'Lehengas',
    occasion: 'Party',
    description: 'Gorgeous pink lehenga perfect for party occasions.',
    image: 'https://atsevam.com/wp-content/uploads/2024/06/1010300_pink-3-Copy-600x840.jpg',
    discount: 23
  },
  {
    id: '7',
    name: 'Floral Print Maxi Dress',
    price: 1999,
    originalPrice: 2499,
    category: 'Dresses',
    occasion: 'Casual',
    description: 'Beautiful floral print maxi dress for a breezy summer day.',
    image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=500',
    discount: 20
  },
  {
    id: '8',
    name: 'Pashmina Shawl',
    price: 1299,
    originalPrice: 1599,
    category: 'Scarfs',
    occasion: 'Traditional',
    description: 'Soft pashmina shawl with intricate embroidery.',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500',
    discount: 19
  },
  {
    id: '9',
    name: 'Bridal Red Lehenga',
    price: 8999,
    originalPrice: 11999,
    category: 'Lehengas',
    occasion: 'Wedding',
    description: 'Exquisite bridal red lehenga with detailed zari work.',
    image: 'https://images.unsplash.com/photo-1585487000154-6ce0da3227f8?w=500',
    discount: 25
  },
  {
    id: '10',
    name: 'Office Formal Dress',
    price: 1799,
    category: 'Dresses',
    occasion: 'Office',
    description: 'Elegant formal dress perfect for office wear.',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500'
  },
  {
    id: '11',
    name: 'Banarasi Silk Saree',
    price: 4599,
    originalPrice: 5999,
    category: 'Sarees',
    occasion: 'Wedding',
    description: 'Authentic Banarasi silk saree with golden zari border.',
    image: 'https://images.unsplash.com/photo-1636207543865-acf3ad382295?w=500',
    discount: 23
  },
  {
    id: '12',
    name: 'Designer Georgette Saree',
    price: 2899,
    originalPrice: 3499,
    category: 'Sarees',
    occasion: 'Party',
    description: 'Designer georgette saree with sequin work.',
    image: 'https://images.unsplash.com/photo-1585059895528-2d0d0f3a4a98?w=500',
    discount: 17
  },
  {
    id: '13',
    name: 'Embroidered Lehenga Choli',
    price: 6999,
    originalPrice: 8999,
    category: 'Lehengas',
    occasion: 'Festival',
    description: 'Heavily embroidered lehenga choli for festive occasions.',
    image: 'https://images.unsplash.com/photo-1585487000124-2a648c2c7c3a?w=500',
    discount: 22
  },
  {
    id: '14',
    name: 'Summer Floral Dress',
    price: 1599,
    category: 'Dresses',
    occasion: 'Casual',
    description: 'Light and breezy floral dress perfect for summer.',
    image: 'https://images.unsplash.com/photo-1569176412694-1a4b6de16b9f?w=500'
  },
  {
    id: '15',
    name: 'Silk Embroidered Scarf',
    price: 799,
    originalPrice: 999,
    category: 'Scarfs',
    occasion: 'Office',
    description: 'Elegant silk scarf with delicate embroidery.',
    image: 'https://images.unsplash.com/photo-1618477461874-15e4b5e9df0d?w=500',
    discount: 20
  },
  {
    id: '16',
    name: 'Wedding Kanjivaram Saree',
    price: 7599,
    originalPrice: 9999,
    category: 'Sarees',
    occasion: 'Wedding',
    description: 'Traditional Kanjivaram silk saree for bridal wear.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500',
    discount: 24
  },
  {
    id: '17',
    name: 'Designer Net Saree',
    price: 3299,
    originalPrice: 4299,
    category: 'Sarees',
    occasion: 'Party',
    description: 'Designer net saree with intricate embroidery work.',
    image: 'https://images.unsplash.com/photo-1581166560316-37b6d8bbbb3c?w=500',
    discount: 23
  },
  {
    id: '18',
    name: 'Anarkali Suit',
    price: 2499,
    originalPrice: 2999,
    category: 'Dresses',
    occasion: 'Traditional',
    description: 'Elegant Anarkali suit with detailed embroidery.',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500',
    discount: 17
  },
  {
    id: '19',
    name: 'Bridal Lehenga with Dupatta',
    price: 10999,
    originalPrice: 14999,
    category: 'Lehengas',
    occasion: 'Wedding',
    description: 'Luxurious bridal lehenga with heavy embroidery and dupatta.',
    image: 'https://images.unsplash.com/photo-1585487000133-10bb5bedfe3f?w=500',
    discount: 27
  },
  {
    id: '20',
    name: 'Casual Cotton Scarf',
    price: 499,
    category: 'Scarfs',
    occasion: 'Casual',
    description: 'Lightweight cotton scarf for everyday use.',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=500'
  },
  {
    id: '21',
    name: 'Organza Party Saree',
    price: 2799,
    originalPrice: 3499,
    category: 'Sarees',
    occasion: 'Party',
    description: 'Elegant organza saree with sequin work for parties.',
    image: 'https://images.unsplash.com/photo-1581166560316-37b6d8bbbb3c?w=500',
    discount: 20
  },
  {
    id: '22',
    name: 'Cotton Printed Saree',
    price: 1499,
    category: 'Sarees',
    occasion: 'Casual',
    description: 'Comfortable cotton printed saree for daily wear.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500'
  },
  {
    id: '23',
    name: 'Designer Lehenga with Jacket',
    price: 8499,
    originalPrice: 10999,
    category: 'Lehengas',
    occasion: 'Wedding',
    description: 'Designer lehenga with matching jacket for a complete look.',
    image: 'https://images.unsplash.com/photo-1585487000124-2a648c2c7c3a?w=500',
    discount: 23
  },
  {
    id: '24',
    name: 'Evening Gown',
    price: 3999,
    originalPrice: 4999,
    category: 'Dresses',
    occasion: 'Party',
    description: 'Elegant evening gown for special occasions.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
    discount: 20
  },
  {
    id: '25',
    name: 'Kashmiri Pashmina',
    price: 2999,
    originalPrice: 3999,
    category: 'Scarfs',
    occasion: 'Traditional',
    description: 'Authentic Kashmiri pashmina with intricate embroidery.',
    image: 'https://images.unsplash.com/photo-1618477461874-15e4b5e9df0d?w=500',
    discount: 25
  },
  {
    id: '26',
    name: 'Silk Cotton Saree',
    price: 1899,
    category: 'Sarees',
    occasion: 'Office',
    description: 'Silk cotton blend saree perfect for office wear.',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500'
  },
  {
    id: '27',
    name: 'Festival Lehenga',
    price: 4499,
    originalPrice: 5499,
    category: 'Lehengas',
    occasion: 'Festival',
    description: 'Colorful festival lehenga with mirror work.',
    image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?w=500',
    discount: 18
  },
  {
    id: '28',
    name: 'Casual Summer Dress',
    price: 1299,
    category: 'Dresses',
    occasion: 'Casual',
    description: 'Comfortable summer dress for everyday wear.',
    image: 'https://images.unsplash.com/photo-1569176412694-1a4b6de16b9f?w=500'
  },
  {
    id: '29',
    name: 'Designer Dupatta',
    price: 999,
    originalPrice: 1299,
    category: 'Scarfs',
    occasion: 'Traditional',
    description: 'Designer dupatta with heavy embroidery work.',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500',
    discount: 23
  },
  {
    id: '30',
    name: 'Tussar Silk Saree',
    price: 3299,
    originalPrice: 4299,
    category: 'Sarees',
    occasion: 'Traditional',
    description: 'Pure Tussar silk saree with traditional motifs.',
    image: 'https://images.unsplash.com/photo-1603274997895-1b4093f34cfc?w=500',
    discount: 23
  },
  {
    id: '31',
    name: 'Bollywood Style Lehenga',
    price: 7999,
    originalPrice: 9999,
    category: 'Lehengas',
    occasion: 'Party',
    description: 'Bollywood style lehenga with dramatic flair.',
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500',
    discount: 20
  },
  {
    id: '32',
    name: 'Cocktail Dress',
    price: 2599,
    originalPrice: 3299,
    category: 'Dresses',
    occasion: 'Party',
    description: 'Chic cocktail dress for evening parties.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
    discount: 21
  },
  {
    id: '33',
    name: 'Silk Chiffon Scarf',
    price: 699,
    category: 'Scarfs',
    occasion: 'Office',
    description: 'Elegant silk chiffon scarf for formal occasions.',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=500'
  },
  {
    id: '34',
    name: 'Wedding Reception Saree',
    price: 5199,
    originalPrice: 6499,
    category: 'Sarees',
    occasion: 'Wedding',
    description: 'Heavy wedding reception saree with intricate work.',
    image: 'https://images.unsplash.com/photo-1581166560316-37b6d8bbbb3c?w=500',
    discount: 20
  },
  {
    id: '35',
    name: 'Designer Lehenga for Reception',
    price: 9499,
    originalPrice: 12499,
    category: 'Lehengas',
    occasion: 'Wedding',
    description: 'Designer lehenga perfect for wedding receptions.',
    image: 'https://images.unsplash.com/photo-1585487000154-6ce0da3227f8?w=500',
    discount: 24
  },
  {
    id: '36',
    name: 'Formal Office Dress',
    price: 1999,
    category: 'Dresses',
    occasion: 'Office',
    description: 'Professional office dress for formal settings.',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500'
  },
  {
    id: '37',
    name: 'Bandhani Print Saree',
    price: 2199,
    originalPrice: 2799,
    category: 'Sarees',
    occasion: 'Festival',
    description: 'Traditional Bandhani print saree for festive occasions.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500',
    discount: 21
  },
  {
    id: '38',
    name: 'Casual Lehenga for Parties',
    price: 3499,
    originalPrice: 4499,
    category: 'Lehengas',
    occasion: 'Party',
    description: 'Casual lehenga perfect for small gatherings and parties.',
    image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?w=500',
    discount: 22
  },
  {
    id: '39',
    name: 'Summer Maxi Dress',
    price: 1799,
    category: 'Dresses',
    occasion: 'Casual',
    description: 'Flowy maxi dress perfect for summer outings.',
    image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=500'
  },
  {
    id: '40',
    name: 'Designer Shawl',
    price: 1499,
    originalPrice: 1999,
    category: 'Scarfs',
    occasion: 'Traditional',
    description: 'Designer shawl with traditional embroidery patterns.',
    image: 'https://images.unsplash.com/photo-1618477461874-15e4b5e9df0d?w=500',
    discount: 25
  }
];

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(defaultProducts);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      ...product,
      id: Date.now().toString()
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: string, updatedProduct: Omit<Product, 'id'>) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === id ? { ...updatedProduct, id } : product
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      deleteProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
};