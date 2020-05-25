import axios from 'axios';

export async function getNewsApi(category: string) {
  const response = await axios.get(
    `/top-headlines?country=kr&apiKey=c5d4a2f093234ce1ac7923d7d507de61&category=${category}`
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
