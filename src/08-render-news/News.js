import React from 'react';
import NewsItem from './NewsItem';

const News = (props) => props.news.map((item) => <NewsItem key={item.rank} item={item} />);
export default News;
