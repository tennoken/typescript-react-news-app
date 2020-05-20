import * as newsApi from '../api/news';
import { AxiosError } from 'axios';

export const GET_NEWS = 'news/GET_NEWS' as const;
export const GET_NEWS_SUCCESS = 'news/GET_NEWS_SUCCESS' as const;
export const GET_NEWS_ERROR = 'news/GET_NEWS_ERROR' as const;

export const getNews = () => ({
  type: GET_NEWS,
});

export const getNewsSuccess = (news: newsApi.NewsArray) => ({
  type: GET_NEWS_SUCCESS,
  payload: news,
});

export const getNewsError = (error: AxiosError) => ({
  type: GET_NEWS_ERROR,
  payload: error,
});

type NewsAction =
  | ReturnType<typeof getNews>
  | ReturnType<typeof getNewsSuccess>
  | ReturnType<typeof getNewsError>;

export type NewsState = {
  news: {
    loading: boolean;
    data: newsApi.NewsArray | null;
    error: AxiosError | null;
  };
};

const initialState: NewsState = {
  news: {
    loading: false,
    data: null,
    error: null,
  },
};

export const getNewsApi = (category: string = '') => async (dispatch: any) => {
  dispatch(getNews);
  try {
    const news = await newsApi.getNewsApi(category);
    dispatch(getNewsSuccess(news));
  } catch (e) {
    dispatch(getNewsSuccess(e));
  }
};

function news(state: NewsState = initialState, action: NewsAction) {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        news: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case GET_NEWS_ERROR:
      return {
        ...state,
        news: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };

    default:
      return state;
  }
}

export default news;
