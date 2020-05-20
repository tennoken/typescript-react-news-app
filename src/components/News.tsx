import React from 'react';
import './news.scss';
import { NewsArray } from '../api/news';
import { AxiosError } from 'axios';
import NewsItem from './NewsItem';

type NewsProps = {
  data: NewsArray;
  loading: boolean;
  error: AxiosError | null;
};

function News({ data, loading, error }: NewsProps): any {
  return data.map((article) => (
    <NewsItem
      key={article.url}
      title={article.title}
      urlToImage={article.urlToImage}
      description={article.description}
      publishedAt={article.publishedAt}
      url={article.url}
    />
  ));
}

export default News;
