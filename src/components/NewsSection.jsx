// src/components/NewsSection.jsx
import { useEffect, useState } from "react";

export default function NewsSection() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=id&category=technology&pageSize=6&apiKey=a771d0678fe64c95b0a8eaddfdac0f2c"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // ini buat ngecek hasil di console
        setArticles(data.articles);
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Berita Keamanan Siber</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            {article.urlToImage && (
              <img src={article.urlToImage} alt="Thumbnail" className="w-full h-40 object-cover" />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                Baca selengkapnya →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
