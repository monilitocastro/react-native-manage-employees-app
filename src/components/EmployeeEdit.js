import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, CommonButton, DialogBox } from './common';
import {
  setEmployeeInfo,
  fetchOneEmployee,
  editEmployeeInfo,
  textEmployee,
  fireEmployee
} from '../actions';
import EmployeeForm from './EmployeeForm';

// TODO don't repeat yourself situation here. clean it up
class EmployeeCreate extends Component {
  state = { modalVisible: false };
  componentWillMount() {
    const { uid } = this.props;

    this.props.fetchOneEmployee(uid);
  }
  setEmployeeInfo(props) {
    this.props.setEmployeeInfo(props);
  }
  toggleModal() {
    const { modalVisible } = this.state;
    this.setState({ modalVisible: !modalVisible });
  }

  render() {
    const { name, phone, shift, uid } = this.props;
    // TODO Text Schedule
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
              this.props.textEmployee({ phone, shift });
            }}
            title="Text Schedule"
          />
        </CardSection>

        <CardSection>
          <CommonButton
            onPress={() => {
              this.toggleModal.bind(this)();
            }}
            title="Fire"
          />
        </CardSection>
        <DialogBox
          message={'Are you sure?'}
          affirmative={() => {
            this.props.fireEmployee(uid);
          }}
          cancel={this.toggleModal.bind(this)}
          affirmativeTitle={'Confirm'}
          modalVisible={this.state.modalVisible}
        />
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

export default connect(mapStateToProps, {
  setEmployeeInfo,
  fetchOneEmployee,
  editEmployeeInfo,
  textEmployee,
  fireEmployee
})(EmployeeCreate);
