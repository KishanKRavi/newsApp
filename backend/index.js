const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const NewsAPI = require('newsapi');
const app = express();
dotenv.config();

app.use(cors());

const port = process.env.PORT
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

app.use(express.json());



app.get('/news', async (req, res) => {
    try {
      const category = req.query.category || 'technology';
      const response = await newsapi.v2.topHeadlines({
        category,
        language: 'en',
      });

    
    return res.json(response.articles);

    } catch (error) {
      res.send(error)
    }
   
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});