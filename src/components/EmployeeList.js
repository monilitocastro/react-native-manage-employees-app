import React, { Component } from 'react';
import { Text, TouchableOpacity, View, ListView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Map from 'lodash.map';
import { Card, CardSection } from './common';
import { fetchEmployees } from '../actions';

class EmployeeList extends Component {
  state = { employees: [] };
  static renderRightButton(/*props*/) {
    return (
      <View style={style.LinkViewStyle}>
        <TouchableOpacity
          onPress={() => {
            Actions.employeeCreate();
          }}
        >
          <Text style={style.LinkStyle}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }

  componentWillMount() {
    this.props.fetchEmployees();

    const ds = new ListView.DataSource({ rowHasChanged: (a, b) => a !== b });
    this.employees = ds.cloneWithRows(this.state.employees);
  }
  componentWillReceiveProps(nextProps) {
    const { employees } = nextProps;
    this.setState({ employees });

    const ds = new ListView.DataSource({ rowHasChanged: (a, b) => a !== b });
    this.employees = ds.cloneWithRows(employees);
  }
  renderRow(employee) {
    const { name, uid } = employee;
    return (
      <CardSection>
        <TouchableOpacity
          onPress={() => {
            Actions.employeeEdit({ uid });
          }}
        >
          <Text style={style.nameStyle}>{name}</Text>
        </TouchableOpacity>
      </CardSection>
    );
  }
  render() {
    return (
      <Card>
        <ScrollView>
          <ListView dataSource={this.employees} renderRow={this.renderRow.bind(this)} />
        </ScrollView>
      </Card>
    );
  }
}

const style = {
  LinkStyle: {
    color: 'blue',
    fontSize: 24
  },
  LinkViewStyle: {
    marginRight: 5
  },
  nameStyle: {
    fontSize: 16
  }
};
function mapStateToProps(state) {
  const employees = Map(state.employeeReducer.employees, (item, uid) => ({ ...item, uid }));
  return { employees };
}
export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);
