import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {View, Colors, Button} from 'react-native-ui-lib/core';
import Icon from 'react-native-vector-icons/Ionicons';

import SignUpScreen from '../screens/SignUpScreen';
import RecoveryPasswordScreen from '../screens/RecoveryPasswordScreen';
import SignInScreen from '../screens/SignInScreen';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  RecoveryPassword: undefined;
};

type AuthStackNavigationProp = StackNavigationProp<AuthStackParamList>;

type PropsType = {
  navigation: AuthStackNavigationProp;
};

const Stack = createStackNavigator<AuthStackParamList>();

const HeaderLeft = ({navigation}: {navigation: AuthStackNavigationProp}) => {
  return (
    <View flex paddingL-4>
      <Button
        round
        backgroundColor="transparent"
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon size={32} name="chevron-back" color={Colors.black} />
      </Button>
    </View>
  );
};

const getBasicHeaderOptions = (navigation: AuthStackNavigationProp) => ({
  headerStyle: {
    elevation: 0,
    shadowOffset: {height: 0, width: 0},
    backgroundColor: Colors.background,
  },
  cardStyle: {backgroundColor: Colors.background},
  title: '',
  headerLeft: () => <HeaderLeft navigation={navigation} />,
});

export const AuthStack = ({navigation}: PropsType) => {
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
          options={() => getBasicHeaderOptions(navigation)}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={() => getBasicHeaderOptions(navigation)}
        />
        <Stack.Screen
          name="RecoveryPassword"
          component={RecoveryPasswordScreen}
          options={() => getBasicHeaderOptions(navigation)}
        />
      </Stack.Navigator>
    </View>
  );
};
