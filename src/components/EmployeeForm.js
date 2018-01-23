import React from 'react';
import { View } from 'react-native';
import { CardSection, Input, LabeledPicker } from './common';

const EmployeeForm = props => {
  const { name, phone, shift, setEmployeeInfo } = props;
  return (
    <View>
      <CardSection top>
        <Input
          label="Name"
          placeholder="enter name"
          onChangeText={text => {
            setEmployeeInfo({ field: 'name', value: text });
          }}
          value={name}
        />
      </CardSection>
      <CardSection>
        <Input
          label="Phone"
          placeholder="enter phone"
          onChangeText={text => {
            setEmployeeInfo({ field: 'phone', value: text });
          }}
          value={phone}
        />
      </CardSection>
      <CardSection>
        <LabeledPicker
          selectedValue={shift}
          onValueChange={(itemValue, itemIndex) => {
            setEmployeeInfo({ field: 'shift', value: itemValue });
          }}
          items={days}
          label={'Shift'}
        />
      </CardSection>
    </View>
  );
};

const days = [
  { label: 'Monday', value: 'Monday' },
  { label: 'Tuesday', value: 'Tuesday' },
  { label: 'Wednesday', value: 'Wednesday' },
  { label: 'Thursday', value: 'Thursday' },
  { label: 'Friday', value: 'Friday' },
  { label: 'Saturday', value: 'Saturday' },
  { label: 'Sunday', value: 'Sunday' }
];

export default EmployeeForm;
