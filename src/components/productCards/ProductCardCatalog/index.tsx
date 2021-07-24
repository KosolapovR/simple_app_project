import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native-ui-lib/core';
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
  onLike: (v: boolean) => boolean;
  onClick: (v: string) => string;
};

export const ProductCardCatalog = ({
  product: {
    _id,
    isLiked,
    category,
    rating,
    ratingVotes,
    img_src,
    currency,
    name,
    price,
  },
  onLike,
  onClick,
}: PropsType) => {
  return (
    <TouchableOpacity
      onPress={() => onClick(_id)}
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
          <Text text70 color={'#9B9B9B'}>
            {name}
          </Text>
          <View flex row>
            {new Array(rating).fill('1').map((_, i) => (
              <Icon key={i} name="star-sharp" size={16} color="#FFBA49" />
            ))}
            {new Array(5 - rating).fill('').map((_, i) => (
              <Icon key={i} name="star-outline" size={16} color="#9B9B9B" />
            ))}
            <Text marginL-4 color="#9B9B9B" style={{bottom: 2}}>
              ({ratingVotes})
            </Text>
          </View>
          <View row spread centerV>
            <Text text70>
              {price}
              {currency}
            </Text>
            <View absR>
              <Button
                onPress={() => onLike(!isLiked)}
                iconSource={() => (
                  <Icon
                    name={isLiked ? 'heart-sharp' : 'heart-outline'}
                    size={16}
                    color={isLiked ? '#DB3022' : '#9B9B9B'}
                  />
                )}
                round
                backgroundColor="transparent"
                style={{width: 40}}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
