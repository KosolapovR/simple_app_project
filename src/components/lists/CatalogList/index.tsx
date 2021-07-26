import React from 'react';
import {IProduct} from '../../../interfaces/Product';
import {FlatList} from 'react-native';
import {ProductCardCatalog} from '../../productCards';
import {View} from 'react-native-ui-lib/core';
import {Dimensions} from 'react-native';

type PropsType = {
  products: IProduct[];
  isGridView?: boolean;
};
const windowWidth = Dimensions.get('window').width;

export const CatalogList = ({products, isGridView = false}: PropsType) => {
  return (
    <FlatList
      key={isGridView ? 'gridView' : 'rowsView'}
      data={products}
      horizontal={false}
      renderItem={({item, index}) =>
        index % 2 === 0 ? (
          <View
            marginB-16
            marginH-4
            width={isGridView ? windowWidth / 2 - 24 : 'auto'}
            paddingR-16={isGridView}>
            <ProductCardCatalog
              product={item}
              onClick={v => v}
              onLike={v => v}
              isGridView={isGridView}
            />
          </View>
        ) : (
          <View
            alignItems="flex-end"
            marginB-16
            marginH-4
            paddingL-16={isGridView}
            width={isGridView ? windowWidth / 2 - 24 : 'auto'}>
            <ProductCardCatalog
              product={item}
              onClick={v => v}
              onLike={v => v}
              isGridView={isGridView}
            />
          </View>
        )
      }
      keyExtractor={({_id}) => _id}
      numColumns={isGridView ? 2 : 1}
    />
  );
};
