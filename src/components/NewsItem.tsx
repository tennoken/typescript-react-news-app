import React from 'react';
import './newsItem.scss';

type NewsItemProps = {
  title: string;
  urlToImage: string;
  description: string;
  publishedAt: Date;
  url: string;
};

function NewsItem({
  title,
  urlToImage,
  description,
  publishedAt,
  url,
}: NewsItemProps) {
  return (
    <div className="article">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="thumbnail" src={urlToImage} alt="thumbnail" />
      </a>
      <div className="text-block">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h2>{title}</h2>
        </a>
        <span>{publishedAt}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default NewsItem;
