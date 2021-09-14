import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context/src/SafeAreaView.native';
import {View} from 'react-native-ui-lib/core';
import Icon from 'react-native-vector-icons/Ionicons';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';

import HomeScreen from '../screens/HomeScreen';
import BagScreen from '../screens/BagScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

export const MainTabs = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View flex>
        <Tab.Navigator
          initialRouteName="Dashboard"
          tabBarOptions={{
            inactiveTintColor: '#9B9B9B',
            activeTintColor: '#DB3022',
          }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({focused}) => (
                <Icon
                  size={26}
                  color={focused ? '#DB3022' : '#9B9B9B'}
                  name={'home-sharp'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              tabBarLabel: 'Categories',
              tabBarIcon: ({focused}) => (
                <Icon
                  size={26}
                  color={focused ? '#DB3022' : '#9B9B9B'}
                  name={'cart-outline'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Bag"
            component={BagScreen}
            options={{
              tabBarLabel: 'Bag',
              tabBarIcon: ({focused}) => (
                <SLIcon
                  size={26}
                  color={focused ? '#DB3022' : '#9B9B9B'}
                  name={'handbag'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
              tabBarLabel: 'Favorites',
              tabBarIcon: ({focused}) => (
                <SLIcon
                  size={26}
                  color={focused ? '#DB3022' : '#9B9B9B'}
                  name={'heart'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({focused}: {focused: boolean}) => (
                <SLIcon
                  size={26}
                  color={focused ? '#DB3022' : '#9B9B9B'}
                  name={'user'}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};
