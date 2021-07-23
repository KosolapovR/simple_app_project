import React, {useEffect, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {IProduct} from '../../../src/interfaces/Product';

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
  const [imgPath, setImgPath] = useState('');

  useEffect(() => {
    const request = async () => {
      const response = await fetch('http://localhost:8163/product');
      const data: IProduct[] = response.json();
      setImgPath(data[0]?.img_src);
    };

    request();
  }, []);

  return (
    <Image
      style={styles.tinyLogo}
      source={{
        uri: `http://localhost:8163/images/${imgPath}`,
      }}
    />
  );
}
