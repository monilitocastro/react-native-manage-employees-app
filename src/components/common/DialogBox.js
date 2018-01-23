import React from 'react';
import { Modal, Text } from 'react-native';
import { Card } from './Card';
import { CardSection } from './CardSection';
import { CommonButton } from './CommonButton';

const DialogBox = props => {
  const { message, affirmative, cancel, affirmativeTitle, modalVisible } = props;
  return (
    <Modal
      visible={modalVisible}
      animationType={'slide'}
      onRequestClose={cancel}
      style={style.modalStyle}
      transparent
      style={style.modalStyle}
    >
      <Card style={style.backgroundStyle}>
        <Card style={style.dialogBoxStyle}>
          <CardSection top>
            <Text style={style.TextStyle}>{message}</Text>
          </CardSection>
          <CardSection>
            <CommonButton
              onPress={() => {
                affirmative();
              }}
              title={affirmativeTitle}
            />
          </CardSection>
          <CardSection>
            <CommonButton
              onPress={() => {
                cancel();
              }}
              title={'Cancel'}
            />
          </CardSection>
        </Card>
      </Card>
    </Modal>
  );
};
const style = {
  CardStyle: {
    margin: 5,
    backgroundColor: '#FFFFFF'
  },
  modalStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextStyle: {
    textAlign: 'center',
    fontSize: 24
  },
  backgroundStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  dialogBoxStyle: {
    width: 300,
    height: 200
  }
};

export { DialogBox };
