import React from 'react';
import './category.scss';
import { NavLink } from 'react-router-dom';

const categories = [
  { name: '', text: '전체보기' },
  { name: 'business', text: '비즈니스' },
  { name: 'entertainment', text: '엔터테인먼트' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' },
];

type CategoryProps = {
  category: string;
};

function Category({ category }: CategoryProps) {
  return (
    <nav>
      <ul>
        {categories.map((item) => (
          <NavLink
            key={item.name}
            exact={item.name === ''}
            to={item.name === '' ? '/' : `/${item.name}`}
          >
            {item.text}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default Category;
