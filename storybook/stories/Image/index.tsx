import React, {useEffect, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import LoaderScreen from 'react-native-ui-lib/loaderScreen';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 100,
    height: 250,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default function CardImage() {
  const [imgPath, setImgPath] = useState('');

  useEffect(() => {
    console.log('before useeffect');

    async function request() {
      console.log('inside request');

      setImgPath('products/polo.jpg');
      console.log('before fetch');

      const response = await fetch('http://localhost:8163/product');

      const body = await response.json();

      console.log('body', body);
    }
    request();
  }, []);
  console.log('data');

  if (!imgPath) return <LoaderScreen />;
  console.log(`http://localhost:8163/images/${imgPath}`);
  return (
    <Image
      style={styles.tinyLogo}
      source={{
        uri: `http://localhost:8163/images/products/polo.jpg`,
      }}
    />
  );
}
