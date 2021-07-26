import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import EncryptedStorage from 'react-native-encrypted-storage';
import RootStack from './src/navigators/RootStack';
import {store} from './src/store';
import {AuthContext} from './src/context/AuthContext';
import LoaderScreen from 'react-native-ui-lib/loaderScreen';
import {View} from 'react-native-ui-lib/core';

const App = () => {
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      const userToken = await EncryptedStorage.getItem('AUTH_TOKEN');

      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data: string) => {
        try {
          await EncryptedStorage.setItem('AUTH_TOKEN', data);
          dispatch({type: 'SIGN_IN', token: data});
        } catch (error) {}
      },
      signOut: async () => {
        await EncryptedStorage.removeItem('AUTH_TOKEN');
        await EncryptedStorage.removeItem('AUTH_TOKEN_BEFORE_2FA');
        dispatch({type: 'SIGN_OUT'});
      },
      signUp: async (data: string) => {
        try {
          await EncryptedStorage.setItem('AUTH_TOKEN', data);
          dispatch({type: 'SIGN_IN', token: data});
        } catch (error) {}
      },
    }),
    [],
  );

  if (state.isLoading) {
    return <LoaderScreen />;
  }

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext}>
        <View flex>
          <StatusBar
            translucent
            backgroundColor="#141416"
            barStyle="light-content"
          />
          <RootStack userToken={state.userToken} />
        </View>
      </AuthContext.Provider>
    </Provider>
  );
};

export default App;
