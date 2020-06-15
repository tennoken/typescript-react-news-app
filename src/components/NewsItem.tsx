import React from 'react';
import './newsItem.scss';

type NewsItemProps = {
  title: string;
  urlToImage: string;
  description: string;
  publishedAt: string;
  url: string;
};

function NewsItem({
  title,
  urlToImage,
  description,
  publishedAt,
  url,
}: NewsItemProps) {
  const [date, time] = publishedAt.split('T');
  const publishedTime = time.substring(0, 8);

  return (
    <div className="article">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="thumbnail" src={urlToImage} alt="thumbnail" />
      </a>
      <div className="text-block">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h2>{title}</h2>
        </a>
        <span>
          {date} {publishedTime}
        </span>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default NewsItem;
