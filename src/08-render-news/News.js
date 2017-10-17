import React from 'react';
import NewsItem from './NewsItem';

const News = (props) => (
  <ul>
    {props.news.map((item) => <NewsItem key={item.rank} item={item} />)}
  </ul>
);
export default News;
