import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, LabeledPicker, CommonButton } from './common';
import * as actions from '../actions';

// TODO don't repeat yourself situation here. clean it up
class EmployeeManage extends Component {
  render() {
    const { name, phone, shift } = this.props;

    return (
      <Card>
        <CardSection top>
          <Input
            label="Name"
            placeholder="enter name"
            onChangeText={text => {
              this.props.setEmployeeInfo({ field: 'name', value: text });
            }}
            value={name}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="enter phone"
            onChangeText={text => {
              this.props.setEmployeeInfo({ field: 'phone', value: text });
            }}
            value={phone}
          />
        </CardSection>
        <CardSection>
          <LabeledPicker
            selectedValue={shift}
            onValueChange={(itemValue, itemIndex) => {
              this.props.setEmployeeInfo({ field: 'shift', value: itemValue });
            }}
            items={days}
            label={'Shift'}
          />
        </CardSection>

        <CardSection>
          <CommonButton
            onPress={() => {
              this.props.createEmployeeInfo({ name, phone, shift: shift || 'Monday' });
            }}
            title="Create"
          />
        </CardSection>

        <CardSection>
          <CommonButton
            onPress={() => {
              this.props.setEmployeeInfo({ field: 'name', value: 'August' });
            }}
            title="Text Schedule"
          />
        </CardSection>

        <CardSection>
          <CommonButton
            onPress={() => {
              this.props.setEmployeeInfo({ field: 'name', value: 'August' });
            }}
            title="Fire"
          />
        </CardSection>
      </Card>
    );
  }
}

const days = [
  { label: 'Monday', value: 'Monday' },
  { label: 'Tuesday', value: 'Tuesday' },
  { label: 'Wednesday', value: 'Wednesday' },
  { label: 'Thursday', value: 'Thursday' },
  { label: 'Friday', value: 'Friday' },
  { label: 'Saturday', value: 'Saturday' },
  { label: 'Sunday', value: 'Sunday' }
];

function mapStateToProps(state) {
  console.log('STATE: ', state);
  return {
    shift: state.employeeManageReducer.shift,
    name: state.employeeManageReducer.name,
    phone: state.employeeManageReducer.phone
  };
}

export default connect(mapStateToProps, actions)(EmployeeManage);
