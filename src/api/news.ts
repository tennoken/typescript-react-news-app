import axios from 'axios';

export async function getNewsApi(category: string) {
  try {
    const receivedCategory = category ? `&category=${category}` : '';
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr&apiKey=c5d4a2f093234ce1ac7923d7d507de61${receivedCategory}`
    );
    return response.data.articles;
  } catch (error) {
    console.log(error);
  }
}

export type NewsData = {
  source: Source;
  author: null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type Source = {
  id: null;
  name: string;
};

export type NewsArray = NewsData[];
