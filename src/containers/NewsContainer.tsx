import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import News from '../components/News';
import { getNewsApi } from '../modules/news';
import Category from '../components/Category';

function NewsContainers({ match }: any) {
  const { loading, data, error } = useSelector(
    (state: RootState) => state.news.news
  );

  const dispatch = useDispatch();

  const category: string = match.params.category || '';

  useEffect(() => {
    dispatch(getNewsApi(category));
  }, [category, dispatch]);

  if (!data) return null;

  return (
    <>
      <Category category={category} />
      <News data={data} loading={loading} error={error} />
    </>
  );
}

export default NewsContainers;
