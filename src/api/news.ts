import axios from 'axios';

axios.defaults.baseURL = 'https://newsapi.org/v2';

export async function getNewsApi(category: string) {
  const receivedCategory = category === '' ? '' : `&category=${category}`;
  const response = await axios.get(
    `/top-headlines?country=kr&apiKey=c5d4a2f093234ce1ac7923d7d507de61${receivedCategory}`
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
