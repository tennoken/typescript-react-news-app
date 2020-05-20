import axios from 'axios';

export async function getNewsApi(category: string) {
  const response = await axios.get(
    `http://newsapi.org/v2/top-headlines?country=kr&apiKey=8f232a11f5844304a3bd11baac26a757&category=${category}`
  );
  return response.data.articles;
}

export type NewsData = {
  source: Source;
  author: null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
};

type Source = {
  id: null;
  name: string;
};

export type NewsArray = NewsData[];
