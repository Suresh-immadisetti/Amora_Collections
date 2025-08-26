import React, { useEffect, useRef } from 'react';

const TermsConditions: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Terms & Conditions</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Agreement to Terms</h2>
              <p className="text-gray-600">
                By accessing and using Amora Collections website, you accept and agree to be bound 
                by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Orders and Payment</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>All orders are subject to product availability</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Payment must be made at the time of delivery for COD orders</li>
                <li>Prices are subject to change without notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping and Delivery</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Free shipping on orders above ₹999</li>
                <li>Delivery times are estimates and may vary</li>
                <li>We are not liable for delays caused by circumstances beyond our control</li>
                <li>Cash on Delivery available across India</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Returns and Exchanges</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Returns accepted within 7 days of delivery</li>
                <li>Items must be in original condition with tags attached</li>
                <li>Custom-made items are not returnable</li>
                <li>Return shipping costs may apply</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Information</h2>
              <p className="text-gray-600 mb-4">
                We strive to provide accurate product information, but we do not warrant that 
                product descriptions are accurate, complete, or error-free.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Colors may vary slightly due to monitor settings</li>
                <li>Fabric patterns may vary from the images shown</li>
                <li>Size measurements are approximate</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
              <p className="text-gray-600">
                All content on this website, including images, text, and design, is the property 
                of Amora Collections and protected by intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600">
                Amora Collections shall not be liable for any direct, indirect, incidental, 
                or consequential damages arising from the use of our products or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms & Conditions, please contact us:
              </p>
              <ul className="list-none text-gray-600 mt-4 space-y-2">
                <li>Email: info@amoracollections.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>Address: 123 Fashion Street, Textile Market, Mumbai, Maharashtra 400001</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
