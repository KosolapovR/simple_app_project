import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import {CatalogList} from '../../../src/components/lists/CatalogList';
import {boolean} from '@storybook/addon-knobs';

const product = {
  _id: '1',
  category: 'Pullover',
  name: 'Mango',
  color: 'Creme',
  size: 'L',
  count: 3,
  rating: 4,
  ratingVotes: 5,
  price: 51,
  currency: '$',
  isLiked: true,
  img_src: 'http://localhost:8163/images/products/polo.jpg',
};

const products = new Array(20).fill(product).map((p, i) => {
  return {...p, _id: i, isLiked: i % 2 === 0};
});

storiesOf('Lists', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('CatalogList', () => (
    <CatalogList products={products} isGridView={boolean('isGridView', true)} />
  ));
