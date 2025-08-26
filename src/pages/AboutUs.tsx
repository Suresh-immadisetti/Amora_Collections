import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Award, Users, Truck, Sparkles, Heart, Shield, Star } from 'lucide-react';

const AboutUs: React.FC = () => {
  // Google Maps embed URL for your address
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.669156676073!2d78.55811967501967!3d17.3857969835005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99dac93a5f81%3A0x5f5c5e5b5e5b5e5b!2s5-5-28-2471%20Surajnagar%20Colony%2C%20Street%20No.7%2C%20Bolligudem%2C%20Boduppal%2C%20Hyderabad%2C%20Telangana%20500092!5e0!3m2!1sen!2sin!4v1633000000000!5m2!1sen!2sin";

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#009494] to-[#007373] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Amora Collections</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted destination for authentic and beautiful sarees, lehengas, and ethnic wear.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Amora Collections began as a humble dream in the heart of Hyderabad, where our founder, Swapna, envisioned creating a space where tradition meets contemporary elegance. With over a decade of experience in the textile industry, she noticed a gap in the market for authentic, high-quality ethnic wear that was both accessible and affordable.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small boutique in 2010 has now blossomed into a beloved destination for women seeking exquisite sarees, lehengas, and ethnic ensembles. Our journey has been guided by a simple philosophy: every woman deserves to feel beautiful and confident in clothing that honors her heritage while celebrating her individuality.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've built relationships with skilled artisans across India, from the silk weavers of Kanchipuram to the embroidery experts of Lucknow. This network allows us to bring you exclusive designs that blend regional craftsmanship with contemporary aesthetics.
              </p>
              <p className="text-lg text-gray-600">
                Today, while we've expanded to serve customers across India through our online store, we remain rooted in our Hyderabad community. Our physical store continues to be a place where generations of women come to find their perfect outfit for life's most precious moments - weddings, festivals, and celebrations that become family legends.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
                <img 
                  src="https://soojidaara.in/cdn/shop/articles/Nauvari_Silk_Sarees_Maharashtrian.jpg?v=1722579243" 
                  alt="Amora Collections Store" 
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-4 text-center text-gray-500 text-sm">
                Our flagship store in Hyderabad, where tradition meets contemporary elegance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-16 bg-gradient-to-r from-[#f0f9f9] to-[#e0f2f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-8 w-8 text-[#009494] mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What We Stand For</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our core values define everything we do at Amora Collections
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#009494] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 text-center">Authenticity</h3>
              <p className="text-gray-600 text-center">
                We bring you fabrics and designs that preserve the essence of tradition while embracing contemporary elegance.
                Every piece tells a story of cultural heritage and skilled craftsmanship.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#009494] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 text-center">Quality</h3>
              <p className="text-gray-600 text-center">
                Each piece is crafted with meticulous attention to detail, ensuring comfort, durability, and timeless beauty.
                We never compromise on materials or construction.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#009494] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 text-center">Elegance</h3>
              <p className="text-gray-600 text-center">
                We design for the woman who carries culture with pride and style with confidence.
                Our collections celebrate the grace and strength of modern Indian women.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6">
              At Amora Collections, we don't just sell outfits — we help you create memories. Whether it's a festival, 
              a family celebration, or your everyday elegance, our collections are made to make you shine.
            </p>
            <p className="text-gray-800 font-medium text-lg">
              Join us in celebrating the beauty of tradition, the power of style, and the joy of being you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#009494] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                We source only the finest fabrics and work with skilled artisans to ensure 
                every piece meets our high standards. Each garment undergoes rigorous quality checks.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#009494] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We provide personalized styling advice and 
                excellent customer service throughout your shopping journey.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#009494] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and secure delivery across India with cash on delivery option 
                for your convenience. We ensure careful packaging to protect your purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Visit Our Store</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Store Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#009494] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Address</h4>
                    <p className="text-gray-600">
                      5-5-28-2471 surajnagar colony street no.7 bolligudem boduppal<br />
                      Hyderabad , Telangana 500092<br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#009494] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Phone</h4>
                    <p className="text-gray-600">+91 98664 94466</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#009494] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Email</h4>
                    <p className="text-gray-600">swapna.frontline@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-[#009494] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Store Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: 11:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Find Us on Google Maps</h3>
              <p className="text-gray-600 mb-6">
                Located in the heart of Hyderabad's textile district, we're easily accessible 
                by public transport and have parking available nearby.
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Amora Collections Location"
                  className="w-full"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    "5-5-28-2471 surajnagar colony street no.7 bolligudem boduppal Hyderabad Telangana 500092"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#009494] hover:text-[#007373] font-medium"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;