import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import News from '../components/News';
import { getNewsApi } from '../modules/news';

function NewsContainers() {
  const { loading, data, error } = useSelector(
    (state: RootState) => state.news.news
  );
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    dispatch(getNewsApi(category));
  }, [category, dispatch]);

  if (!data) return null;

  return <News data={data} loading={loading} error={error} />;
}

export default NewsContainers;
