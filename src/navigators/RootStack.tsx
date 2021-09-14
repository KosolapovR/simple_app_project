import React from 'react';
import {MainTabs} from './MainTabs';
import {AuthStack} from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
type RootStackParamList = {
  Main: undefined;
  Auth: undefined;
};
const NativeStack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const userToken = useSelector((state: RootState) => state.user.entity.token);
  console.log('userToken', userToken);
  return (
    <NavigationContainer>
      <NativeStack.Navigator screenOptions={{headerShown: false}}>
        {userToken ? (
          <NativeStack.Screen name="Main" component={MainTabs} />
        ) : (
          <NativeStack.Screen name="Auth" component={AuthStack} />
        )}
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
