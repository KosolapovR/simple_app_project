import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignUpScreen from '../screens/SignUpScreen';
import RecoveryPasswordScreen from '../screens/RecoveryPasswordScreen';
import SignInScreen from '../screens/SignInScreen';
import {View, Text} from 'react-native-ui-lib/core';

const Stack = createStackNavigator();

const HeaderLeft = () => {
  return <Text>a123</Text>;
};

const basicHeaderOptions = {
  headerStyle: {
    elevation: 0,
    shadowOffset: {height: 0, width: 0},
    backgroundColor: '#fff',
  },
  headerTitleStyle: {
    color: '#b6b6b6',
  },
  cardStyle: {backgroundColor: 'transparent'},
  title: '',
  headerLeft: () => <HeaderLeft />,
};

export const AuthStack = () => {
  return (
    <View flex>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerTitleContainerStyle: {
            borderBottomWidth: 0,
            shadowColor: 'transparent',
          },
        }}>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={() => basicHeaderOptions}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={basicHeaderOptions}
        />
        <Stack.Screen
          name="RecoveryPassword"
          component={RecoveryPasswordScreen}
          options={() => basicHeaderOptions}
        />
      </Stack.Navigator>
    </View>
  );
};
