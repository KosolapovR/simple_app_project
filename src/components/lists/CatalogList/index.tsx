import React from 'react';
import {IProduct} from '../../../interfaces/Product';
import {FlatList} from 'react-native';
import {ProductCardCatalog} from '../../productCards';
import {View} from 'react-native-ui-lib/core';

type PropsType = {
  products: IProduct[];
};

export const CatalogList = ({products}: PropsType) => {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <View marginB-16 marginH-4>
          <ProductCardCatalog product={item} onClick={v => v} onLike={v => v} />
        </View>
      )}
      keyExtractor={({_id}) => _id}>
      {products}
    </FlatList>
  );
};
