import React from 'react';
import './newsCard.css';


const categories = [
    'technology',
    'business',
    'sports',
    'entertainment',
    'health',
    'science',
    'politics',
    'general'
  ];
  

function CategoryButtons({ onCategorySelect }) {
  return (
    <div className="category-container">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategorySelect(cat)}
          className="category-button"
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;
