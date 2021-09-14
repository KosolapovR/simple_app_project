import React from 'react';
import AuthForm from '../components/forms/AuthForm';
import {View, Text, Typography} from 'react-native-ui-lib/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../navigators/AuthStack';
import {postSignIn} from '../features/user';
import {CredentialsType} from '../types/common';
import {useAppDispatch} from '../store';

type SignInScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'SignIn'
>;

type PropsType = {
  navigation: SignInScreenNavigationProp;
};

function SignInScreen({navigation}: PropsType) {
  const dispatch = useAppDispatch();

  const handleSubmit = (credentials: CredentialsType) => {
    dispatch(postSignIn(credentials));
    console.log('credentials', credentials);
  };
  const handleRecoveryPassword = () => {
    navigation.push('RecoveryPassword');
  };

  return (
    <View flex marginH-20>
      <Text style={Typography.headline} marginB-20>
        Login
      </Text>
      <AuthForm
        isFetching={false}
        onRecoveryPassword={handleRecoveryPassword}
        onSubmit={handleSubmit}
      />
    </View>
  );
}

export default SignInScreen;
