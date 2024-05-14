import React from 'react';
import {StyleSheet} from 'react-native';

const inputNumber = () => {
    const [number, setNumber] = React.useState('');
    const changeNumber = () => setNumber
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
  },

  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray',
  },
  
  logo: {
    height: 128,
    width: 128,
  }
});

export default inputNumber;
