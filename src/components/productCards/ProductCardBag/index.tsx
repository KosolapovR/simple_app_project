import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Image, Text, View} from 'react-native-ui-lib/core';
import Stepper from 'react-native-ui-lib/stepper';
import Icon from 'react-native-vector-icons/Ionicons';
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
  isGridView?: boolean;
};

export const ProductCardBag = ({
  product: {img_src, name, category, color, size, count = 1, currency, price},
}: PropsType) => {
  const [itemsCount, setItemsCount] = useState(count);

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
            <Stepper
              containerStyle={{height: 30, width: 200}}
              label={itemsCount === 1 ? 'Item' : 'Items'}
              min={1}
              max={5}
              onValueChange={setItemsCount}
              initialValue={itemsCount}
            />
            <Text text70>
              {price}
              {currency}
            </Text>
          </View>
        </View>
        <View absR>
          <Button
            iconSource={() => (
              <Icon name="ellipsis-vertical" size={16} color="#9B9B9B" />
            )}
            round
            backgroundColor="transparent"
            style={{width: 40}}
          />
        </View>
      </View>
    </View>
  );
};
