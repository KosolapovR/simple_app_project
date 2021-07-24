import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import {ProductCardCatalog} from '../../../src/components/productCards/ProductCardCatalog';
import {ProductCardBag} from '../../../src/components/productCards/ProductCardBag';
import {ProductCardOrder} from '../../../src/components/productCards';

storiesOf('Product Cards', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Bag', () => (
    <ProductCardBag
      product={text('product', {
        _id: text('id', 'id=1'),
        category: text('category', 'Pullover'),
        color: text('color', 'Creme'),
        size: text('size', 'L'),
        count: text('count', 3),
        rating: text('rating', 4),
        ratingVotes: text('ratingVotes', 5),
        price: text('price', 51),
        currency: text('currency', '$'),
        isLiked: text('isLiked', true),
        img_src: text(
          'img_src',
          'http://localhost:8163/images/products/polo.jpg',
        ),
      })}
    />
  ))
  .add('Order', () => (
    <ProductCardOrder
      product={text('product', {
        _id: text('id', 'id=1'),
        category: text('category', 'Pullover'),
        color: text('color', 'Creme'),
        size: text('size', 'L'),
        count: text('count', 3),
        rating: text('rating', 4),
        ratingVotes: text('ratingVotes', 5),
        price: text('price', 51),
        currency: text('currency', '$'),
        isLiked: text('isLiked', true),
        img_src: text(
          'img_src',
          'http://localhost:8163/images/products/polo.jpg',
        ),
      })}
    />
  ))
  .add('Catalog', () => (
    <ProductCardCatalog
      product={text('product', {
        _id: text('id', 'id=1'),
        category: text('category', 'Pullover'),
        name: text('name', 'Mango'),
        color: text('color', 'Creme'),
        size: text('size', 'L'),
        rating: text('rating', 4),
        ratingVotes: text('ratingVotes', 5),
        price: text('price', 51),
        currency: text('currency', '$'),
        isLiked: text('isLiked', true),
        img_src: text(
          'img_src',
          'http://localhost:8163/images/products/polo.jpg',
        ),
      })}
      onClick={action('onClick')}
      onLike={action('onLike')}
    />
  ));
