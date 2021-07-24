import React from 'react';
import {StyleSheet} from 'react-native';
import {Image, Text, View} from 'react-native-ui-lib/core';
import {IProduct} from '../../../interfaces/Product';

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,

    borderRadius: 10,
  },
});

type PropsType = {
  product: IProduct;
};

export const ProductCardOrder = ({
  product: {img_src, name, category, color, size, count, currency, price},
}: PropsType) => {
  return (
    <View
      flexS
      flex
      row
      centerV
      style={styles.container}
      backgroundColor="#fff">
      <Image
        height={110}
        width={110}
        borderBottomLeftRadius={10}
        borderTopLeftRadius={10}
        fadeDuration={1000}
        source={{
          uri: img_src,
        }}
      />
      <View flex height="100%" padding-8 backgroundColor="transparent">
        <View flex>
          <Text text70 style={{fontWeight: 'bold'}}>
            {category}
          </Text>
          {name && (
            <Text text80 style={{fontWeight: 'bold'}}>
              {name}
            </Text>
          )}
          <View flex row>
            <Text text80 color={'#9B9B9B'} marginR-4>
              Color:
            </Text>
            <Text text80>{color}</Text>
            <Text text80 color={'#9B9B9B'} marginL-12 marginR-4>
              Size:
            </Text>
            <Text text80>{size}</Text>
          </View>
          <View flex row spread centerV>
            <Text text70>{`Units: ${count}`}</Text>
            <Text text70>
              {price}
              {currency}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
