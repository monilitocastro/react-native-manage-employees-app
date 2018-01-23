import React from 'react';
import { View } from 'react-native';

const Card = props => {
  const { style } = props;
  return <View style={[styleLocal.CardStyle, style]}>{props.children}</View>;
};
const styleLocal = {
  CardStyle: {
    margin: 5,
    backgroundColor: '#FFFFFF'
  }
};
export { Card };
