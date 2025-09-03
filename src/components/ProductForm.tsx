// components/ProductForm.tsx
import React, { useState } from 'react';
import { Product } from '../types/Product';
import { Upload, X } from 'lucide-react';

interface ProductFormProps {
  product?: Product;
  onSubmit: (product: Omit<Product, 'id'>) => void;
  onCancel: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    price: product?.price || 0,
    originalPrice: product?.originalPrice || 0,
    category: product?.category || '',
    occasion: product?.occasion || '',
    description: product?.description || '',
    image: product?.image || '',
    discount: product?.discount || 0,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(product?.image || '');
  const [useUrl, setUseUrl] = useState(!!product?.image);

  const categories = ['Sarees', 'Lehengas', 'Dresses', 'Scarfs'];
  const occasions = ['Wedding', 'Party', 'Casual', 'Festival', 'Office', 'Traditional'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('Price') || name === 'discount' ? Number(value) : value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setUseUrl(false);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, image: e.target.value }));
    setImagePreview(e.target.value);
    setUseUrl(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate discount if original price is provided
    let discount = formData.discount;
    if (formData.originalPrice && formData.originalPrice > formData.price) {
      discount = Math.round(((formData.originalPrice - formData.price) / formData.originalPrice) * 100);
    }

    const productData = {
      ...formData,
      discount,
      image: useUrl ? formData.image : imagePreview
    };

    onSubmit(productData);
  };

  const calculateDiscount = () => {
    if (formData.originalPrice && formData.originalPrice > formData.price) {
      return Math.round(((formData.originalPrice - formData.price) / formData.originalPrice) * 100);
    }
    return 0;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            {product ? 'Edit Product' : 'Add New Product'}
          </h2>
          <button onClick={onCancel} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009494]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009494]"
                required
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                min="0"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009494]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Original Price (₹)</label>
              <input
                type="number"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleInputChange}
                min="0"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009494]"
              />
              {formData.originalPrice > formData.price && (
                <p className="text-sm text-green-600 mt-1">
                  Discount: {calculateDiscount()}%
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Occasion</label>
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009494]"
              required
            >
              <option value="">Select Occasion</option>
              {occasions.map(occ => (
                <option key={occ} value={occ}>{occ}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009494]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
            
            <div className="flex gap-4 mb-4">
              <button
                type="button"
                onClick={() => setUseUrl(false)}
                className={`px-4 py-2 rounded-md ${
                  !useUrl ? 'bg-[#009494] text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                Upload Image
              </button>
              <button
                type="button"
                onClick={() => setUseUrl(true)}
                className={`px-4 py-2 rounded-md ${
                  useUrl ? 'bg-[#009494] text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                Use URL
              </button>
            </div>

            {useUrl ? (
              <div>
                <input
                  type="url"
                  value={formData.image}
                  onChange={handleUrlChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009494]"
                  required={useUrl}
                />
                <p className="text-sm text-gray-500 mt-1">Enter Google Drive shareable link or any image URL</p>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Click to upload an image or drag and drop
                  </p>
                </label>
                {imageFile && (
                  <p className="text-sm text-gray-500 mt-2">{imageFile.name}</p>
                )}
              </div>
            )}

            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-md border"
                />
              </div>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#009494] text-white rounded-md hover:bg-[#007373]"
            >
              {product ? 'Update Product' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;