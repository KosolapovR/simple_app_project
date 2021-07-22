import React from 'react';
import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default function CardImage() {
  return (
    <Image
      style={styles.tinyLogo}
      source={{
        uri: 'http://localhost:8163/images/products/polo.jpg',
      }}
    />
  );
}
