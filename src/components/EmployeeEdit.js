import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, CommonButton } from './common';
import { setEmployeeInfo, fetchOneEmployee, editEmployeeInfo } from '../actions';
import EmployeeForm from './EmployeeForm';

// TODO don't repeat yourself situation here. clean it up
class EmployeeCreate extends Component {
  componentWillMount() {
    const { uid } = this.props;
    this.props.fetchOneEmployee(uid);
  }
  setEmployeeInfo(props) {
    this.props.setEmployeeInfo(props);
  }
  render() {
    const { name, phone, shift, uid } = this.props;

    return (
      <Card>
        <EmployeeForm
          name={name}
          phone={phone}
          shift={shift}
          setEmployeeInfo={this.setEmployeeInfo.bind(this)}
        />

        <CardSection>
          <CommonButton
            onPress={() => {
              this.props.editEmployeeInfo({ name, phone, shift: shift || 'Monday', uid });
            }}
            title="Save"
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
  //   console.log('STATE: ', state);
  return {
    shift: state.employeeManageReducer.shift,
    name: state.employeeManageReducer.name,
    phone: state.employeeManageReducer.phone
  };
}

export default connect(mapStateToProps, { setEmployeeInfo, fetchOneEmployee, editEmployeeInfo })(
  EmployeeCreate
);
