import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

class EmployeeList extends Component {
  render() {
    return (
      <Card>
        <CardSection top>
          <Text>Employee</Text>
        </CardSection>
        <TouchableOpacity
          onPress={() => {
            Actions.employeeManage();
          }}
        >
          <CardSection>
            <Text>Employee</Text>
          </CardSection>
        </TouchableOpacity>
        <CardSection>
          <Text>Employee</Text>
        </CardSection>
        <CardSection>
          <Text>Employee</Text>
        </CardSection>
        <CardSection>
          <Text>Employee</Text>
        </CardSection>
        <CardSection>
          <Text>Employee</Text>
        </CardSection>
        <CardSection>
          <Text>Employee</Text>
        </CardSection>
        <CardSection>
          <Text>Employee</Text>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeList;
