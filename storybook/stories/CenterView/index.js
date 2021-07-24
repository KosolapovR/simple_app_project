import React from 'react';
import PropTypes from 'prop-types';
import style from './style';
import {View} from 'react-native-ui-lib/core';

export default function CenterView({children}) {
  return (
    <View
      useSafeArea
      style={style.main}
      paddingH-16
      paddingV-20
      backgroundColor="#FFF"
      flex>
      {children}
    </View>
  );
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
