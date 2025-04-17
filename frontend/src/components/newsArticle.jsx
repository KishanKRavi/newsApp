import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './newsCard.css';
import CategoryButtons from './categoryButtons';
const API = import.meta.env.VITE_API_URL;

function NewsArticle() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('technology'); 

  const fetchNews = async (selectedCategory) => {
    try {
      const res = await axios.get(`${API}/news?category=${selectedCategory}`);
      setNews(res.data);
    } catch (err) {
      console.error('Error fetching news:', err);
    }
  };

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  return (
    <div className="news-container">
      <h2>📰 Top News</h2>
      <CategoryButtons onCategorySelect={setCategory} />
      <div>
        {news.map((item, index) => (
          <div className='news-card' key={index}>
            {item.urlToImage && (
              <img className='news-img' src={item.urlToImage} alt="news" />
            )}
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <a href={item.url} >Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsArticle;
