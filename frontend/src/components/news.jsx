import NewsArticle from "./newsArticle";

export default function News() {
    return (
        <div className="news">
        <h1>News Highlights of the day </h1>
        <p>News below are displayed by fetching data from newsapi.org</p>
        <NewsArticle/>
        </div>
    )
}