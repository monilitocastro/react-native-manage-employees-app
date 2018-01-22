import React from 'react';
import { Picker, View, Text } from 'react-native';

export function ShiftPicker(props) {
  const { selectedValue, onValueChange, items, label } = props;
  return (
    <View style={style.rowStyle}>
      <Text style={style.TextStyle}>{label}</Text>
      <Picker style={style.PickerStyle} selectedValue={selectedValue} onValueChange={onValueChange}>
        {renderItems(items)}
      </Picker>
    </View>
  );
}

const style = {
  rowStyle: {
    flexDirection: 'row'
  },
  TextStyle: {
    flex: 1,
    margin: 5,
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    color: '#000000'
  },
  PickerStyle: {
    flex: 2,
    height: 40,
    backgroundColor: '#F8F8F8'
  }
};

const renderItems = items =>
  items.map(item => <Picker.Item label={item.label} value={item.value} />);
