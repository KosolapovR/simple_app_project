import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native-ui-lib/core';
import {Button} from 'react-native';
import {useAppDispatch} from '../store';
import {selectUser, signOut} from '../features/user';
import {useSelector} from 'react-redux';

function ProfileScreen() {
  const [avatar, setAvatar] = useState();
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const requestAvatar = async () => {
      const response = await fetch(
        `http://localhost:8163/user/avatar/${user.avatar}`,
      );
      console.log('response ', response);

      const data = await response.json();
      console.log('avatar URI = ', data);
      setAvatar(data.base64data);
    };

    requestAvatar();
  }, [user.avatar]);

  return (
    <View>
      {avatar && (
        <Image
          style={{
            width: 200,
            height: 200,
            resizeMode: 'cover',
          }}
          source={{
            uri: 'data:image/png;base64,' + avatar,
          }}
        />
      )}

      <Text>ProfileScreen</Text>
      <Button title={'exit'} onPress={() => dispatch(signOut())} />
    </View>
  );
}

export default ProfileScreen;
