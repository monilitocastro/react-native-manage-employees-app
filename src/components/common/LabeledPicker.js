import React, { Component } from 'react';
import { Picker, View, Text } from 'react-native';

class LabeledPicker extends Component {
  renderItems(items) {
    return items.map((item, i) => <Picker.Item key={i} label={item.label} value={item.value} />);
  }
  render() {
    const { selectedValue, onValueChange, items, label } = this.props;
    return (
      <View style={style.rowStyle}>
        <Text style={style.TextStyle}>{label}</Text>
        <Picker
          style={style.PickerStyle}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
        >
          {this.renderItems.bind(this)(items)}
        </Picker>
      </View>
    );
  }
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

export { LabeledPicker };
