import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, LabeledPicker, CommonButton } from './common';
import { setEmployeeInfo } from '../actions';
import EmployeeForm from './EmployeeForm';

// TODO don't repeat yourself situation here. clean it up
class EmployeeCreate extends Component {
  render() {
    const { name, phone, shift } = this.props;

    return (
      <Card>
        <EmployeeForm name={name} phone={phone} shift={shift} setEmployeeInfo={setEmployeeInfo} />

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

function mapStateToProps(state) {
  console.log('STATE: ', state);
  return {
    shift: state.employeeManageReducer.shift,
    name: state.employeeManageReducer.name,
    phone: state.employeeManageReducer.phone
  };
}

export default connect(mapStateToProps, { setEmployeeInfo })(EmployeeCreate);
