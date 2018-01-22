import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { Card, CardSection, Input, CommonButton, ErrorText, Spinner } from './common';

class LoginForm extends Component {
  handleEmailInput(email) {
    this.props.setEmail(email);
  }
  handlePasswordInput(password) {
    this.props.setPassword(password);
  }
  handleLogIn() {
    const { email, password } = this.props;

    this.props.attemptLogIn(email, password);
  }
  renderErrorText() {
    return (
      <CardSection>
        <ErrorText>{this.props.error}</ErrorText>
      </CardSection>
    );
  }
  renderLogInButton() {
    const { loading } = this.props;
    if (loading) {
      return <Spinner size={'small'} />;
    }
    return <CommonButton title={'Log In'} onPress={this.handleLogIn.bind(this)} />;
  }
  render() {
    const { email, password } = this.props;
    return (
      <Card>
        <CardSection top>
          <Input
            label={'Email'}
            placeholder={'enter email'}
            onChangeText={this.handleEmailInput.bind(this)}
            value={email}
          />
        </CardSection>
        <CardSection top>
          <Input
            label={'Password'}
            placeholder={'enter password'}
            onChangeText={this.handlePasswordInput.bind(this)}
            value={password}
            secureTextEntry
          />
        </CardSection>
        {this.props.error ? this.renderErrorText.bind(this)() : <View />}
        <CardSection>{this.renderLogInButton.bind(this)()}</CardSection>
        <CardSection>
          <CommonButton
            onPress={() => {
              this.props.setEmployeeInfo({ field: 'name', value: 'August' });
            }}
            title="Test"
          />
        </CardSection>
      </Card>
    );
  }
}
//{ onPress, title }
function mapStateToProps(state) {
  return {
    email: state.authReducer.email,
    password: state.authReducer.password,
    error: state.authReducer.error,
    loading: state.authReducer.loading
  };
}

export default connect(mapStateToProps, actions)(LoginForm);
