import React, { useState, useEffect } from 'react';

interface SearchInputWithTypewriterProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  placeholderTexts?: string[];
  speed?: number;
}

const SearchInputWithTypewriter: React.FC<SearchInputWithTypewriterProps> = ({
  value,
  onChange,
  onSubmit,
  placeholderTexts = ["Search for sarees...", "Search for lehengas...", "Search for wedding dresses...", "Search for party wear..."],
  speed = 100
}) => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = placeholderTexts[textIndex];
      
      if (!isDeleting && currentIndex < currentText.length) {
        setCurrentPlaceholder(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      } else if (isDeleting && currentIndex > 0) {
        setCurrentPlaceholder(currentText.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
      } else if (currentIndex === currentText.length) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (currentIndex === 0 && isDeleting) {
        setIsDeleting(false);
        // Move to next text
        setTextIndex((textIndex + 1) % placeholderTexts.length);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, textIndex, placeholderTexts, speed]);

  return (
    <form onSubmit={onSubmit} className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#009494] focus:border-transparent transition-colors duration-300"
        placeholder={currentPlaceholder}
      />
      <button type="submit" className="absolute right-3 top-2.5">
        <svg className="h-5 w-5 text-gray-400 hover:text-[#009494] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
};

export default SearchInputWithTypewriter;